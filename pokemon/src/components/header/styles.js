import styled from 'styled-components';

export const Title = styled.header`
    text-align: center;
    text-shadow: 0px 5px rgb(53, 55, 179);
    font-family: Pokemon;
    color: #ffcc03;
    width: 100%;
    font-size: 1.1rem;

    @media screen and (max-width: 600px) {
        h1 {
            font-size: 1.5rem;
        }
    }
`;