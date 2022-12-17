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
  FilterTitle,
  FilterInput,
  ItemWrapper,
  ItemBox,
  Item,
  ItemStar,
  Scroll,
  Likes,
} from './ScrapStyle';
import { AiFillStar, AiFillHeart } from 'react-icons/ai';
import Dropdown from '../Filter/CoutryDropdown';
// import cityFilter from '../Filter/cityFilter';
// import TagFilter from '../Filter/TagFilter';

const Scrap = () => {
  const [value, setValue] = useState('');

  const handleChangeValue = (value: string) => {
    setValue(value);
  };
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
          {/* Detail
            <FilterInput
              placeholder="where?"
              value={value}
              // onChange={(string) => onchange()}
            /> */}
          <Dropdown></Dropdown>
          <Dropdown></Dropdown>
          <Dropdown></Dropdown>
          <Dropdown></Dropdown>
          {/* <cityFilter></cityFilter> */}
          {/* <TagFilter
            food={''}
            mood={''}
            onchange={function (food: string, mood: string): void {
              throw new Error('Function not implemented.');
            }}
          ></TagFilter>
          <TagFilter
            food={''}
            mood={''}
            onchange={function (food: string, mood: string): void {
              throw new Error('Function not implemented.');
            }}
          ></TagFilter> */}
        </Filter>
        <ItemWrapper>
          <ItemBox>
            <Item src={require('./img1.png')} onClick={handleClick} />
            <Likes>
              <AiFillHeart />
            </Likes>
          </ItemBox>
          <ItemBox>
            <Item src={require('./img1.png')} onClick={handleClick} />
            <Likes>
              <AiFillHeart />
            </Likes>
          </ItemBox>
          <ItemBox>
            <Item src={require('./img3.png')} onClick={handleClick} />
            <Likes>
              <AiFillHeart />
            </Likes>
          </ItemBox>

          <ItemBox>
            <Item src={require('./img3.png')} onClick={handleClick} />
            <Likes>
              <AiFillHeart />
            </Likes>
          </ItemBox>
          <ItemBox>
            <Item src={require('./img1.png')} onClick={handleClick} />
            <Likes>
              <AiFillHeart />
            </Likes>
          </ItemBox>
          <ItemBox>
            <Item src={require('./img1.png')} onClick={handleClick} />
            <Likes>
              <AiFillHeart />
            </Likes>
          </ItemBox>
        </ItemWrapper>
        {/* <Scroll id="scrollBar" /> */}
      </Content>
    </ScrapPage>
  );
};

export default Scrap;
//
// TitleWrapper 구역.div
//   (
//     Title.span(Mine),
//   Icons.div(AiFillStar, AiFillStar),
//   country.div(In Korea)
//   )
// 본문 구역.div
// 왼쪽: 필터구역.div
//   (
//     detail.div(detail.input),
//   food.div(food.input)
//   price.div(price.input)
//   )
// 오른쪽: 상세페이지 구역.div
//   (
//     item.div(스크랩한 음식 대표 사진만 뜨도록),
//     scroll.div(스크롤~!)
//   )

//   모달페이지에 좋아요/스크랩버튼이 필요할
