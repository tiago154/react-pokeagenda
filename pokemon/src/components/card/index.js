import React, { Component } from 'react';
import { Container } from './styles';
import { Img, Label } from '../../styles/global'
import defaultImage from '../../assets/images/default-pokemon.png';
import { getAnyUrl } from '../../services/pokemon-api';
import { orderBy } from '../../helpers/pokemon';

const urlSmallPokemon = process.env.REACT_APP_POKEMON_IMAGE_SMALL;

const errorMainImageDefault = e => {
    e.target.onerror = null;
    e.target.src = `${defaultImage}`;
}

class Card extends Component {
    render() {
        const { pokemon, toggleModal, updatePokemonModal, updateLoading } = this.props;

        const mapAbilities = ability => {
            return {
                text: ability.effect_entries.find(e => e.language.name === 'en'),
                name: ability.name
            }
        }

        const getInitialData = async pokemon => {
            if (pokemon.url)
                return await getAnyUrl(pokemon.url);
            return pokemon;
        }

        const getDetails = async pokemon => {
            const abilities = pokemon.abilities.filter(a => !a.is_hidden);

            const [species, abilitiesDetail] = await Promise.all([
                getAnyUrl(pokemon.species.url),
                Promise.all(abilities.map(a => getAnyUrl(a.ability.url)))
            ]);


            const description = species.flavor_text_entries
                .find(t => t.language.name === 'en' && t.version.name === 'omega-ruby')
                .flavor_text;

            const category = species.genera
                .find(g => g.language.name === 'en')
                .genus.replace(' Pokémon', '');
 
            const evolutions = await getAnyUrl(species.evolution_chain.url);

            const ability = abilitiesDetail.sort(orderBy('name')).map(mapAbilities);

            return [description, evolutions, ability, category];
        }

        const loadSpecificPokemon = async (pokemon) => {
            updateLoading(true);

            const data = await getInitialData(pokemon);
            const [description, evolutions, abilities, category] = await getDetails(data);
            
            await updatePokemonModal(data, evolutions, description, abilities, category);

            updateLoading(false);

            toggleModal(true);
        }

        const smallPicture = `${urlSmallPokemon}${pokemon.id.toString().padStart(3, '0')}.png`

        return (
            <Container onClick={() => loadSpecificPokemon(pokemon)}>
                <Img src={smallPicture} onError={errorMainImageDefault} />
                <Label>{pokemon.name}</Label>
                <Label>#{pokemon.id.toString().padStart(3, '0')}</Label>
            </Container>
        );
    }
}

export default Card;