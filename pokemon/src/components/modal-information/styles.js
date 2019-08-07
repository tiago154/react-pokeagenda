import styled from 'styled-components';

const showModal = yes => {
    if (yes) {
        return `
            position: fixed;
            top: 0;
            left: 0;
            width:100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.6);
        `;
    }

    return `
        width: 0;
        height: 0;
        opacity: 0;
        display: none;
    `;
};

export const Container = styled.div`
    ${({ showModalInformation }) => showModal(showModalInformation)}
`;

export const Teste = styled.div`
    position: relative;
    top: 0;
    left: 0;
    width: 90%;
    height: 90%;
    background: red;
`;
