import styled from 'styled-components';

const isShowModal = yes => {
    if (yes) {
        return `
            position: fixed;
            display: flex;
            top: 0;
            left: 0;
            width:100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.54);
            z-index: 1;
        `;
    }

    return `
        display: none;
    `;
};

export const Container = styled.div`
    ${({ showModalInformation }) => isShowModal(showModalInformation)}
`;

export const ContainerInformation = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 95%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
    background: #b8b4d4;
    border: 10px solid #0b0d5fdb;
    border-radius: 10px;
    opacity: 0.94;
    overflow: auto;
`;

export const ContainerTitle = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;           
    justify-content: center;
    color: #3537b3;
    font-weight: bold;
    font-size: 30px;
    margin-bottom: 20px;

    img {
        width: 60px;
        height: 60px;
        margin-right: 10px;
        cursor: pointer;
        z-index: 1;
        align-self: center;
        position: absolute;
        right: -20px;
    }

    img:hover {
        transform: scale(1.1);
    }

    @media screen and (max-width: 576px) {
        h1 {
            font-size: 19px;
        }

        img {
            margin-top: 2px;
            width: 35px;
            height: 35px;
        }
    }

    @media screen and (min-width:577px) and (max-width:992px) {
        margin-bottom: 5px;

        h1 {
            font-size: 40px;
        }

        img {
            width: 50px;
            height: 50px;
        }
    }
`;

export const ContainerImagePokemon = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    background-color: #f3f0ee;
    border-radius: 5px;
    height: 280px;

    img {
        width: 240px;
    }

    @media screen and (max-width: 767px) {
        margin-bottom: 10px;
    }

    @media screen and (min-width: 768px) {
        height: 270px;

        img {
            width: 230px;
        }
    }
`;
