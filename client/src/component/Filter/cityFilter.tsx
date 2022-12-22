import React, { useState } from 'react';
import { FilterWrapper, FilterTitle, FilterInput, InputBox } from './cityStyle';

const cityFilter = (props: any) => {
  return (
    <FilterWrapper>
      <FilterTitle>city</FilterTitle>
      <InputBox>
        <FilterInput placeholder="where?"></FilterInput>
      </InputBox>
    </FilterWrapper>
  );
};

export default cityFilter;
