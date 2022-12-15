import styled from 'styled-components';

export const ModalBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ModalBg = styled.div`
  background: no-repeat
    url('https://cdn.discordapp.com/attachments/1025667513629016165/1052643859542315018/image.png');
  back-ground-size: contain;
  font-family: 'Kaushan Script', cursive;
  position: absolute;

  width: auto;
  height: 100%;
  margin: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const ModalTitle = styled.div`
  font-weight: 700;
  font-size: 40px;
  text-align: center;
  color: #000000;
  margin-bottom: 20px;
`;
export const Img = styled.img`
  align-items: center;
  width: 50%;
  margin-bottom: 5px;
`;
export const Box = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem;
`;
export const ItemBox = styled.div`
  text-align: center;
`;
export const Item = styled.img`
  width: 80%;
  border-radius: 5px;

  :hover {
    width: 29.4vw;
    transform: scale(1.5);
    transition: transform 0.5s;
  }
`;
export const ItemText = styled.li`
  width: 100%;
  height: 2.5vh;
  padding: 7px;

  list-style-type: none;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;
export const TextBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 1rem;
  width: 100%;
  // height: 100%;
  font-size: 20px;
`;
export const TextTitle = styled.ul`
  margin-bottom: 0.5rem;
  text-align: center;
  font-weight: 400;
  font-size: 20px;
`;
export const Text = styled.li`
  margin-top: 1rem;
  font-size: 16px;
  list-style-type: none;
`;
export const Scroll = styled.div`
  width: 80%;
  height: 8px;
  margin: 0.5rem;
  background: #d9d9d9;
  border-radius: 11px;
`;

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
