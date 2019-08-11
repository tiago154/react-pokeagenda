import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: #f3f0ee;
  flex-direction: column;
  justify-content: space-between;
  min-height: 436px;
  border-radius: 5px;
  padding: 10px;
  font-size: x-large;

  h2 {
    font-size: xx-large;
    margin-bottom: 10px;
  }
`;

export const ContainerStats = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContainerAbilities = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Description = styled.p`
  margin-bottom: 10px;
  text-align: justify;
`;
