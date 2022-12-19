import styled from 'styled-components';
export const ScrapPage = styled.div`
  padding: 5rem 5%;
  // margin: auto;
`;
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
export const Content = styled.div`
  display: flex;
`;
export const Filter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 8%;
`;
export const ItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
export const ItemBox = styled.div`
  display: grid;
  grid-template-rows: repeat(auto-fill, auto-fill, auto-fill);
  margin: 15px;
  justify-items: end;
`;
export const Item = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fills;
  border-radius: 100px;
  margin-bottom: 10px;
`;
export const ItemStar = styled.div`
  display: flex;
  margin: 12px;
  width: 30px;
  height: 30px;
`;
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
  height: 20px;
  font-size: 100%;
  color: #f13b3b;
`;
export const LikesCount = styled.span`
  font-weight: 400;
  color: #575757;
`;
