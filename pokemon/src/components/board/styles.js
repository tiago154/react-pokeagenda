import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`

export const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;

    button {
        width: 200px;
        height: 30px;
        margin: 0 40px;
    }
`;