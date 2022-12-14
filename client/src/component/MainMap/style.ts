import styled from 'styled-components';

export const WorldMapWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #222;
  box-sizing: border-box;
`;

export const WorldMap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 60vw;
  height: 70vh;
  margin: 0 50px;
`;

export const SVG = styled.svg`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70vh;
`;

export const Path = styled.path`
  fill: #555;
  cursor: pointer;
  &:hover {
    fill: skyblue;
  }
`;
