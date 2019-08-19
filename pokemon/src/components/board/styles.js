import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 806px;
    top: auto;
    justify-content: space-between;
`

export const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;

    img {
        width: 250px;
        height: 250px;
    }
`;

export const ButtonContainer = styled.div`
    margin-top: 20px;
    margin-bottom: 30px;

    button {
        width: 200px;
        height: 30px;
        margin: 0 40px;
    }
`;