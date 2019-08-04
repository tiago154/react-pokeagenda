import styled from 'styled-components';
import smartPhone from '../../assets/images/pokeball.png';

const cursor = () => {
    return `
        cursor: url(${smartPhone}), pointer;
    `;
}

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    border: 4px outset #3537b3c2;
    background-color: #7783ad;
    margin: 0 10px 10px 30px;
    height: 160px;
    width: 120px;
    color: #ffcc03;
    ${() => cursor()}

    @keyframes swingCard {
        50%   { transform-origin: bottom }
        100%  { transform-origin: top }
    }

    :hover {
        background-color: red;
        transform: scale(1.1); 
        animation-name: swingCard;
        animation-duration: 0.2s;
    }
`;