import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: row;
    background-color: #f3f0ee;
    border-radius: 5px;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100%;
    height: 38%;

    @media screen and (min-width: 1600px) {
        height: 48%;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
        height: 65%;
    }

    @media screen and (min-width: 992px) and (max-width: 1200px) {
        min-height: 170px;
    }

    @media screen and (min-width: 1201px) and (max-height: 700px){
        margin-top: 10px;
        height: 240px;
    } */
`;
