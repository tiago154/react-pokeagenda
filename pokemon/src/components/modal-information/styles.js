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

    @media screen and (max-width: 768px) {
        overflow-x: 1;
    }
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

    @media screen and (max-width: 768px) {
        overflow: auto;
    }
`;

export const ContainerCloseBar = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: -50px;

    img {
        margin-right: 7px;
        cursor: pointer;
        z-index: 1;
    }

    img:hover {
        transform: scale(1.4);
    }

    @media screen and (max-width: 768px) {
        margin-bottom: -30px;

        img {
            max-width: 30px;
        }
    }
`;

export const ContainerTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #3537b3;
    font-weight: bold;
    font-size: 30px;
    margin-bottom: 10px;
    border-radius: 5px;

    @media screen and (max-width: 768px) {
        margin-bottom: 5px;

        h1 {
            font-size: 30px;
        }
    }
`;

export const ContainerImagePokemon = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: #f3f0ee;
    border-radius: 5px;

    @media screen and (max-width: 768px) {
        margin-bottom: 10px;

        img {
            width: 100%;
            max-width: 150px; 
            height: 150px;
        }
    }
`;
