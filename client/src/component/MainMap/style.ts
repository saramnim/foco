import styled from 'styled-components';

export const MapWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: 120px;
  background-color: #222;
  & .map {
    width: 100vw;
    height: 80vh;
  }
`;

export const SVG = styled.svg`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70vh;
`;
