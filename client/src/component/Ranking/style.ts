import styled from 'styled-components';

export const RankingWrapper = styled.div`
  width: 30vw;
  height: 80vh;
  background-color: #fff;
  margin: 0 60px;
  padding: 30px;
  box-sizing: border-box;
  border-radius: 10px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #ccc;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.span`
  font-size: 40px;
  font-family: 'Rubik Spray Paint', cursive;
`;

export const Button = styled.button`
  border: none;
  font-size: 30px;
  background-color: transparent;
`;
export const Main = styled.div``;

export const ContentBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 25px 0;
  padding: 25px 20px;
  box-sizing: border-box;
  background-color: #f5f5f5;
  border-radius: 10px;

  & img {
    width: 60%;
    border-radius: 10px;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Number = styled.div`
  font-size: 25px;
  font-weight: bold;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  & span {
    align-self: flex-end;
    font-weight: 700;
    font-size: 18px;
  }
`;

export const Like = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  & svg {
    color: red;
    margin-right: 5px;
  }
  & span {
    color: #939393;
  }
`;
