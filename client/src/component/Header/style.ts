import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  padding: 30px 50px;
  color: #fff;

  & svg {
    font-size: 23px;
    padding: 10px;
    cursor: pointer;
  }
`;

export const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Title = styled.span`
  font-size: 40px;
  font-family: 'Rubik Spray Paint', cursive;
  cursor: pointer;
`;
export const Icons = styled.div`
  display: flex;
`;

export const UnderWrapper = styled.div`
  align-self: flex-end;
`;
