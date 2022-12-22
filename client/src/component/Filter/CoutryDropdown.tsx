import React, { useState, useEffect, useRef } from 'react';
import {
  FilterWrapper,
  FilterTitle,
  InputBox,
  DropdownBar,
} from './CoutryDropdownStyle';
import axios from 'axios';
import data from '../../../public/Data/post.json';

const Dropdown = (props: any) => {
  return (
    <FilterWrapper>
      <FilterTitle>country</FilterTitle>
      <InputBox>
        <DropdownBar placeholder="where?"></DropdownBar>
      </InputBox>
    </FilterWrapper>
  );
};

export default Dropdown;
