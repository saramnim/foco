import styled from 'styled-components';

export const CountryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 98vw;
  padding: 0 50px;
  padding-top: 120px;
  overflow-x: hidden;
`;

export const Title = styled.div`
  padding-bottom: 70px;
  font-size: 40px;
  font-family: 'Rubik Spray Paint', cursive;
  text-align: center;
  color: #fff;
  text-shadow: -3.5px 0px black, 0px 3.5px black, 3.5px 0px black,
    0px -3.5px black;
`;

export const SelectBoxWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 1000px;
  margin-bottom: 70px;
  & .autocomplete-dropdown-container {
    position: absolute;
    z-index: 3;
    width: 322px;
    margin-top: 5px;
    border-radius: 7px;
    color: #000;
  }
  & .suggestion-item {
    padding: 15px;
  }
  & .location-search-input {
    width: 300px;
    border: 1px solid #d8d8d8;
    border-radius: 7px;
  }
  & .selectBox {
    width: 300px;
  }
`;

export const ContentsWrapper = styled.span`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: 90vh;
  @media screen and (max-width: 1310px) {
    height: 150vh;
  }
  @media screen and (max-width: 910px) {
    height: 230vh;
  }
`;

export const Content = styled.span`
  position: relative;
  display: flex;
  justify-content: center;
  width: 400px;
  max-height: 320px;
  border-radius: 10px;
  cursor: pointer;
  img {
    position: absolute;
    width: 350px;
    height: 250px;
    border-radius: 10px;
  }
  &:hover div {
    display: flex;
  }
`;
export const HoverContent = styled.div`
  position: absolute;
  display: none;
  width: 350px;
  height: 250px;
  z-index: 1;
`;

export const HoverBottom = styled.div`
  position: absolute;
  top: 210px;
  z-index: 2;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px 20px 15px;
`;
export const City = styled.span`
  color: #fff;
  font-size: 18px;
  font-weight: 400;
  & svg {
    margin-right: 5px;
  }
`;

export const Icons = styled.div`
  & svg {
    margin-left: 10px;
    font-size: 20px;
    color: gray;
    cursor: pointer;

    :nth-child(1) {
      &:hover {
        color: #f13b3b;
      }
    }
    :nth-child(2) {
      &:hover {
        color: #ffb800;
      }
    }
  }
`;

export const LikeWrapper = styled.div`
  position: absolute;
  top: 80%;
  right: 30px;
  & svg {
    color: #f13b3b;
  }
`;
export const TotalLike = styled.span`
  color: #000;
  margin-left: 5px;
`;
