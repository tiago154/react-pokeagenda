import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    border: 4px outset #3537b3c2;
    background-color: #7783ad;
    margin: 0 19px 10px 30px;
    height: 160px;
    width: 120px;
    color: #ffcc03;
    text-shadow: 0px 2px rgb(53, 55, 179);
    cursor: pointer;

    :hover {
        background-color: red;
    }
`;