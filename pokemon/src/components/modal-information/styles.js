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
    width: 80%;
    height: 95%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
    background: #b8b4d4;
    border: 10px solid #0b0d5fdb;
    border-radius: 10px;
    opacity: 0.94;
`;

export const ContainerCloseBar = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;

    img {
        margin-right: 7px;
        cursor: pointer;
    }
`;

export const ContainerTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;
    font-weight: bold;
    font-size: 30px;
    margin-bottom: 10px;
    background-color: #f3f0ee;
    border-radius: 5px;
`;

export const ContainerImagePokemon = styled.div`
    display: flex;
    justify-content: center;
    background-color: #f3f0ee;
    border-radius: 5px;
`;
