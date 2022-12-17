import styled from 'styled-components';

// 폰트 추가
export const ScrapPage = styled.div`
  padding: 5rem 5%;
  // margin: auto;
`;
// 상단타이틀 구역
export const TitleWrapper = styled.div`
  display: flex;
  margin: 1rem 5rem;
`;
export const Title = styled.span`
  font-family: 'Kaushan Script', cursive;
  font-weight: 500;
  font-size: 64px;
  line-height: 93px;
  color: #000000;
  cursor: pointer;
`;
export const UnderStar = styled.div`
  width: 30px;
  height: 30px;
  font-size: 30px;
  color: #ffe600;
  margin-top: auto;
`;
export const UpperStar = styled.div`
  width: 30px;
  height: 30px;
  font-size: 20px;
  margin-top: 50px;
  color: #ffe600;
`;
export const Country = styled.div`
  font-family: 'Kaushan Script', cursive;
  font-weight: 550;
  font-size: 30px;
  color: #000000;
  padding-top: 3rem;
`;
// 중앙 본문 구역
export const Content = styled.div`
  display: flex;
`;
// 좌측 필터구역
export const Filter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 8%;
`;
export const FilterTitle = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem;
  font-family: 'Kaushan Script', cursive;
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
  color: #000000;
`;
// food, price 만들기
// 우측 상세페이지 구역
export const ItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
export const ItemBox = styled.div`
  display: grid;
  // display: flex;
  // flex-wrap: wrap;
  grid-template-rows: repeat(auto-fill, auto-fill, auto-fill);
  // grid-template-columns: 300px 300px 300px;
  // margin: 1rem;
  // margin-left: 78px;
  margin-right: 20px;
  justify-items: end;
`;
export const Item = styled.img`
  width: 100%;
  // height: 100%;
  object-fit: contain;
  border-radius: 10px;
  // margin-right: 200px;
  // padding-right: 5%;
`;
export const ItemStar = styled.div`
  display: flex;
  margin: 12px;
  width: 30px;
  height: 30px;
`;
// 스크롤 구역
export const Scroll = styled.div`
  width: 8px;
  height: 220px;
  background: #d9d9d9;
  border-radius: 11px;
  .scrollBar::-webkit-scrollbar {
    width: 10px;
  }
  .scrollBar::-webkit-scrollbar-thumb {
    background-color: #2f3542;
    border-radius: 10px;
  }
  .scrollBar::-webkit-scrollbar-track {
    background-color: grey;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }
`;
export const Likes = styled.div`
  width: 100px;
  height: 1px;
  font-size: 20px;
  // margin-top: 50px;

  color: #f13b3b;
`;
//
// TitleWrapper 구역.div
//   (
//     Title.span(Mine),
//   Icons.div(AiFillStar, AiFillStar),
//   country.div(In Korea)
//   )
// Content 구역.div
// 왼쪽: 필터구역.div
//   (
//     detail.div(detail.input),
//   food.div(food.input)
//   price.div(price.input)
//   )
// 오른쪽: 상세페이지 구역.div
//   (
//     item.div(스크랩한 음식 대표 사진만 뜨도록),
//     ItemStar.div(스크랩 표시)
//     scroll.div(스크롤~!)
//   )

//   모달페이지에 좋아요/스크랩버튼이 필요할듯
// 모달 페이지 컴포넌트화 => 찜목록, 상세페이지, 작성한 글 내역 등에서 모두 연결될 수 있도록 해야할듯;;
