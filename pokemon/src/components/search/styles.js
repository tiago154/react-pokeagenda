import styled from 'styled-components';

export const Search = styled.div`
    label {
        margin-bottom: 0.5rem;
    }

    input {
        border-radius: 500rem;
        border: 2px solid #3537b3;
        height: 1.3rem;
        text-align: center;
    }

    input:focus {
        outline: none;
    }

    button::before {
        content: '🔍';
    }

    button {
        margin-left: 0.2rem;
        padding-right: 0.5rem;
        border-radius: 500rem;
    }
`;