import React from 'react';
import { Col, Row } from 'react-flexbox-grid';
import { Img } from '../../styles/global';
import { Container, ContainerInformation } from './styles';

const urlPokemonImage = process.env.REACT_APP_POKEMON_IMAGE;

export default ({ showModal, toggleModal, pokemon, updatePokemonModal }) => {
    const closePicture = 'https://cdn3.iconfinder.com/data/icons/interface/100/close_button_2-512.png';
    console.log(pokemon);
    let mainPicture = '';

    if (showModal && pokemon.data && pokemon.data.id)
        mainPicture = `${urlPokemonImage}${pokemon.data.id.toString().padStart(3, '0')}.png`;

    const closeModal = async () => {
        await updatePokemonModal({});
        toggleModal(false);
    };

    return (
        <Container showModalInformation={showModal}>
            <ContainerInformation>
                <Row end='xs'>
                    <Img size='small' src={closePicture} onClick={() => closeModal()} />
                </Row>
                <Row>
                    <Col xs={6}>
                        <Img size='large' src={mainPicture} />
                    </Col>
                    <Col xs={6} >

                    </Col>
                </Row>
                <Row>

                </Row>
            </ContainerInformation>
        </Container >
    )
}
