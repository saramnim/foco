import React, { useState } from 'react';
import { FilterWrapper, FilterTitle, DropdownBar } from './CoutryDropdownStyle';

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
      <DropdownBar placeholder="where?" value={value} />
    </FilterWrapper>
  );
};

export default Dropdown;
