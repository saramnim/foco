import React from 'react';
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
  ItemBox,
  Item,
  ItemStar,
  Scroll,
} from './ScrapStyle';
import { AiFillStar } from 'react-icons/ai';

// 사진 api 추가해야됨~ 근디 css 왜 이따구~

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
          <FilterTitle>
            Detail
            <FilterInput />
          </FilterTitle>
          <FilterTitle>
            Food
            <FilterInput />
          </FilterTitle>
          <FilterTitle>
            Price
            <FilterInput />
          </FilterTitle>
        </Filter>
        <ItemBox>
          <Item src={require('./img1.png')} onClick={handleClick} />
          <Item src={require('./img3.png')} onClick={handleClick} />
          <Item src={require('./img3.png')} onClick={handleClick} />
          <Item src={require('./img1.png')} onClick={handleClick} />
          <Item src={require('./img1.png')} onClick={handleClick} />
        </ItemBox>
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
