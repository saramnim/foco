import styled from 'styled-components';

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  + div {
    margin-top: 22px;
  }
`;
export const FilterTitle = styled.div`
  font-family: 'Kaushan Script', cursive;
  font-weight: 550;
  font-size: 16px;
  line-height: 18.4px;
`;
export const InputBox = styled.div`
  & div {
    cursor: pointer;
  }
`;
export const DropdownBar = styled.select`
  text-align: center;
  margin-top: 10px;
  font-family: 'Inter';
  font-size: 17px;
  line-height: 17px;
  border-radius: 0.5rem;
  border: #d9d9d9 solid 1px;
  // background: #d9d9d9;
  width: 224px;
  height: 32px;
`;
