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
        height: 48%
    };

    @media screen and (min-width: 768px) and (min-height: 1024px) {
        height: 65%
    };

    @media screen and (min-width: 1600px) and (min-height: 900px) {
        height: 56%
    };
`;
