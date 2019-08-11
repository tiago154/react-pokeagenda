import React from 'react'
import { Container, Description, ContainerStats, ContainerAbilities } from './styles';
import Stats from '../stats';
import Ability from '../ability';

export default ({ pokemon }) => {
    const { data, description, category, abilities } = pokemon;

    const mapAbilities = ability =>
        (<Ability title={ability.name}>{ability.text.short_effect}</Ability>)

    return (
        <Container>
            <h2>Descrição :</h2>
            <Description>{description}</Description>
            <ContainerAbilities>
                <h2>Habilidades :</h2>
                {abilities.length && abilities.map(mapAbilities)}
            </ContainerAbilities>
            <ContainerStats>
                <Stats value={data.weight} type='kg'>Peso</Stats>
                <Stats value={data.height} type='m'>Altura</Stats>
                <Stats value={category}>Categoria</Stats>
            </ContainerStats>
        </Container>
    )
}