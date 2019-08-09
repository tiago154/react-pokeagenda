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
    justify-content: flex-end;
    width: 80%;
    height: 95%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
    background: #b8b4d4;
    border: 10px solid #0b0d5fdb;
    border-radius: 10px;
    opacity: 0.94;

    img {
        margin-right: 7px;
    }
`;
