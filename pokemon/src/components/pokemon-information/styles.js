import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: #f3f0ee;
  flex-direction: column;
  border-radius: 5px;
  padding: 10px;
  height: 270px;

  h2 {
    font-size: 16px;
    color: #025aff;
  }

  @media screen and (max-width: 576px) {
    height: 370px;
  }
`;

export const ContainerStats = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #3537ac;
`;

export const ContainerAbilities = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 2;
  color: #3537ac;

  h2 {
    margin-bottom: 1px;
  }
`;

export const Description = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 13px;
  text-align: justify;
  color: #3537ac;

  @media screen and (max-width: 576px) {
      font-size: 12px;
  }
`;
