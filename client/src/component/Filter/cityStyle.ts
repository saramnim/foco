import styled from 'styled-components';

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const FilterTitle = styled.div`
  font-family: 'Kaushan Script', cursive;
`;
export const InputBox = styled.div`
  & div {
    cursor: pointer;
  }
`;
export const FilterInput = styled.input`
  text-align: center;
  margin: 0 0.5rem;
  font-family: 'Inter';
  font-size: 14px;
  // line-height: 17px;
  border-radius: 0.5rem;
  border: none;
  background: #d9d9d9;
`;
