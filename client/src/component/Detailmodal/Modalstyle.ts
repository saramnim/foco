import styled from 'styled-components';

export const ModalBg = styled.div`
  background: url('receipt.png');
  background: #e5e5e5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;
export const Img = styled.img`
  width: 29.4vw;
`;
export const Box = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem;
`;
export const ItemBox = styled.div`
  displays: flex;
  flex-direction: column;
`;
export const Item = styled.img`
  width: 17.5vw;
  margin-right: 0.8rem;
  vertical-align: middle;
`;
export const ItemText = styled.li`
  text-align: center;
  font-size: 12px;
  width: 17.5vw;
  height: 2.5vh;
  list-style-type: none;
  background: rgba(255, 216, 216, 0.51);
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;
export const TextBox = styled.ul`
  display: flex;
  justify-content: center;
  font-size: 20px;
  margin: 1rem;
`;
export const Text = styled.li`
  font-size: 15px;
  margin: 0.5rem;
`;
export const ContentBox = styled.ul`
  margin: 0.5rem;
`;
export const ContentText = styled.li`
  margin: 0.5rem;
`;
export const Scroll = styled.div`
  width: 220px;
  height: 8px;
  margin: 0.5rem;
  background: #d9d9d9;
  border-radius: 11px;
`;

// export const Title = styled.div`
//   font-size: 60px;
// `;
// export const Dash = styled.div``;

// ModalBg 구역.div
//   (
//     Title.span(Receipt),
//   Icons.div(AiOutlineDash),
//   )
// 본문 구역.div
// 1 단락: 이미지구역.div
//   (
//     이미지.img
//     스크롤.div
//   )
// 2 단락: 상세 정보 구역.div
//   (
//     ul(
//         li(where, 상호명)
//         li(who, 작성자)
//         li(mood, 분위기)
//         li(score, 별점)
//     )
//     Icons.div(AiOutlineDash),
//     Comment.div
//     Icons.div(AiOutlineDash),
//     상세 주소.div
//   )

//   모달페이지에 좋아요/스크랩버튼이 필요할듯
