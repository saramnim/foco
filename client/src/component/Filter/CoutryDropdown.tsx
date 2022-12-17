import React, { useState } from 'react';
import {
  FilterWrapper,
  FilterTitle,
  InputBox,
  DropdownBar,
} from './CoutryDropdownStyle';

// type DropdownProps = {
//   country: string;
// };

const Dropdown = () => {
  const [value, setValue] = useState('');
  const handleChangeValue = (value: string) => {
    setValue(value);
  };
  return (
    <FilterWrapper>
      <FilterTitle>country</FilterTitle>
      <InputBox>
        <DropdownBar placeholder="where?" value={value} />
      </InputBox>
    </FilterWrapper>
  );
};

export default Dropdown;
