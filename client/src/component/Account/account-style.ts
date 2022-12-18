import styled from 'styled-components';

//Common Style
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 10;
  padding: 150px 50px;
  height: 100%;
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InfoItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;

export const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;

  & > p {
    margin-right: 60px;
    width: 150px;
    font-weight: 600;
    font-size: 18px;
  }
`;

export const InputBox = styled.div`
  text-align: left;
`;

export const Input = styled.input`
  padding: 4px 8px;
  width: 360px;
  height: 35px;

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #b3b3b3;
    font-size: 14px;
  }
`;

export const Errormsg = styled.div`
  height: 20px;
  margin-top: 10px;

  & > p {
    font-size: 13px;
    font-weight: 600;
    color: #f05757;
  }
`;

export const Seclect = styled.select`
  padding: 4px 8px;
  width: 378px;
  height: 45px;
`;

export const FixedValue = styled.p`
  padding: 4px 8px;
  width: 360px;
  height: 35px;
  text-align: left;
`;

export const Button = styled.button`
  all: unset;
  width: 200px;
  height: 50px;
  border-radius: 30px;
  text-align: center;
  font-weight: bold;
  color: #ffffff;
  background-color: #212121;
  cursor: pointer;

  &:hover {
    background-color: #fe9c56;
    color: #000000;
  }
`;

export const AccountContainer = styled.div`
  position: absolute;
  top: 20%;
  left: 10%;
  transform: translate(-10%, -10%);
  width: 100vw;
`;

export const ContentsBox = styled(Box)`
  height: 100vh;
`;

export const Title = styled.h2`
  margin: 10px 0 40px 0;
  text-align: center;
  font-family: 'Rubik Spray Paint', cursive;
  font-size: 50px;
  font-weight: 100;
`;

//Menu Style
export const MenuContainer = styled.div`
  flex-grow: 1;
  padding: 60px 50px;
  height: 100%;
  border-top-right-radius: 20px;
  box-shadow: 0px 16px 30px 10px #dfdfdf;
`;

export const ItemBox = styled(Box)`
  flex-direction: column;
  align-items: flex-start;
`;

export const Username = styled.div`
  margin-bottom: 80px;
  font-family: 'Rubik Spray Paint', cursive;
  font-size: 30px;
  font-weight: 100;
`;

export const Item = styled(Box)`
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;

  &: hover {
    color: #fe9c56;
  }
`;

export const Icon = styled.div`
  margin-right: 10px;
`;

export const MenuBtn = styled.button`
  all: unset;

  & > * {
    all: unset;
  }
`;

//Profile Style
export const ProfileBox = styled(Box)`
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
`;

//Security Style
export const SecurityBox = styled(Box)`
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
`;

//Deactivate
export const DeactivateBox = styled(Box)`
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 40px;
`;
