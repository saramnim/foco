import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  padding: 30px 50px;
  color: #000000;
  z-index: 100;
  & > a {
    all: unset;
  }
`;
export const Title = styled.span`
  font-size: 40px;
  font-family: 'Rubik Spray Paint', cursive;
  cursor: pointer;
`;
export const Icons = styled.div`
  display: flex;
  & svg {
    font-size: 23px;
    padding: 10px;
    cursor: pointer;
  }
  & > a:hover {
    color: #fe9c56;
  }
  & > a {
    all: unset;
  }
`;

export const UserBox = styled.div`
  position: relative;
  &>svg: hover {
    color: #fe9c56;
  }
`;

export const UserMenu = styled.div`
  position: absolute;
  right: 0;
  padding: 10px;
  width: 150px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 6px 6px 20px 0px #dfdfdf;
  & > a {
    all: unset;
  }
  & > a:hover {
    color: #fe9c56;
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content; space-around;
  align-items: center;
  cursor: pointer;
  & svg {
    font-size: 18px;
  }
  & span {
    font-size: 16px;
  }
`;
