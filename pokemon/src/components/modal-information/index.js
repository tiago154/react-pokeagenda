import React from 'react'
import { Container, ContainerInformation } from './styles';
import { Row, Col } from 'react-flexbox-grid';
import { Img } from '../../styles/global';

const urlPokemonImage = process.env.REACT_APP_POKEMON_IMAGE;

export default ({ showModal, toggleModal, pokemon, updateSpecificPokemon }) => {
    // onClick={() => toggleModal()
    const closePicture = 'https://cdn3.iconfinder.com/data/icons/interface/100/close_button_2-512.png';

    let mainPicture = '';

    if (pokemon.id) {
        mainPicture = `${urlPokemonImage}${pokemon.id.toString().padStart(3, '0')}.png`;
    }

    const closeModal = async () => {
        await updateSpecificPokemon({});
        toggleModal();
    };

    return (
        <>
            <Container showModalInformation={showModal}>
                <ContainerInformation>
                    <Row end='xs'>
                        <Img size='small' src={closePicture} onClick={() => closeModal()} />
                    </Row>
                    <Row>
                        <Col xs={6}>
                            <Img size='large' src={mainPicture} />
                        </Col>
                        <Col xs={6}>
                        </Col>
                    </Row>
                </ContainerInformation>
            </Container >
        </>
    )
}
