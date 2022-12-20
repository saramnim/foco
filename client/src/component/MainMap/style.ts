import styled from 'styled-components';

export const MapWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding-bottom: 100px;
  background-color: #fff;
  & .map {
    width: 60vw;
    height: 70vh;
  }
`;

export const TopWrapper = styled.div``;

export const BottomWrapper = styled.div`
  display: flex;
`;

export const SVG = styled.svg`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70vh;
`;
