import React, { useState } from 'react';
import {
  ScrapPage,
  TitleWrapper,
  Title,
  UnderStar,
  UpperStar,
  Country,
  Content,
  Filter,
  Scroll,
} from './ScrapStyle';
import { AiFillStar, AiFillHeart } from 'react-icons/ai';
import Dropdown from '../Filter/CoutryDropdown';
import cityFilter from '../Filter/cityFilter';
import TagFilter from '../Filter/TagFilter';
import ItemComp from './Item';

const Scrap = () => {
  const handleClick = () => {
    // 해당 이미지 상세페이지 url 받아서 open!
  };
  return (
    <ScrapPage>
      <TitleWrapper>
        <Title>Mine</Title>
        <UnderStar>
          <AiFillStar />
        </UnderStar>
        <UpperStar>
          <AiFillStar />
        </UpperStar>
        <Country>in Korea</Country>
      </TitleWrapper>
      <Content>
        <Filter>
          <Dropdown></Dropdown>
          <Dropdown></Dropdown>
          {/* <cityFilter></cityFilter> */}
          <TagFilter></TagFilter>
          <TagFilter></TagFilter>
        </Filter>
        <ItemComp />
        {/* <Scroll id="scrollBar" /> */}
      </Content>
    </ScrapPage>
  );
};

export default Scrap;
