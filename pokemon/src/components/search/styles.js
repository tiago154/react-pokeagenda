import styled from 'styled-components';

export const Search = styled.div`
    label {
        margin-bottom: 0.5rem;
    }

    input {
        border-radius: 2px 0 0 2px;
        border: 1px solid #3537b3;
        height: 1.5rem;
        width: 20rem;
        text-align: center;
    }

    @media screen and (max-width: 600px) {
        input {
            width: 14rem;
        }
    }

    input:focus {
        outline: none;
    }

    button::before {
        content: '🔍';
    }

    button {
        border-radius: 0 2px 2px 0;
        border: 1px solid #3537b3;
        width: 4rem;   
    }
`;