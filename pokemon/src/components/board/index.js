import React, { Component } from 'react';
import { ButtonContainer, CardContainer, Container } from './styles';
import Card from '../card';
import loader from '../../assets/images/charizard-loader.gif';
import { Img, Button } from '../../styles/global';


class Board extends Component {
    render() {
        const { list, isLoading, pokemon, loadList, toggleModal } = this.props;

        const fillPokemon = pokemon =>
            (<Card key={pokemon.id} id={pokemon.id} name={pokemon.name} toggleModal={toggleModal} />);

        const renderList = list => !isLoading && list && list.map(fillPokemon);

        const renderPokemon = pokemon =>
            !isLoading && pokemon && pokemon.id &&
            <Card key={pokemon.id} id={pokemon.id} name={pokemon.name} toggleModal={toggleModal} />;

        const changePage = async forward => await loadList(forward);

        const renderButtonPaginate = pokemon => {
            if (isLoading || (pokemon && pokemon.id))
                return;

            return (
                <ButtonContainer>
                    <Button onClick={() => changePage(false)}>{'<'} Anterior</Button>
                    <Button onClick={() => changePage(true)}>Próxima {'>'}</Button>
                </ButtonContainer>
            );
        }

        return (
            <Container>
                <CardContainer>
                    {isLoading && (<Img src={loader} alt={'Loading'} size='large' />)}
                    {pokemon && pokemon.id ? renderPokemon(pokemon) : renderList(list)}
                </CardContainer>
                {renderButtonPaginate(pokemon)}
            </Container>
        );
    }
}

export default Board;