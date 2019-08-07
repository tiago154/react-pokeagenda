import React from 'react'
import { Container, Teste } from './styles';

export default ({ showModal }) => {
    return (
        <Container showModalInformation={showModal}>
            <Teste />
        </Container >
    )
}
