import React from 'react'
import { Container } from './styles';

export default ({ children, value, type }) => {
    const validateValue = (type, value) =>
        type ?
            (<span>{(value / 10).toLocaleString('pt-br')} {type}</span>) :
            (<span>{value}</span>);

    return (
        <Container>
            <h3>{children}</h3>
            {validateValue(type, value)}
        </Container>
    )
}