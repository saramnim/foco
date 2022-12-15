import React from 'react';
import * as style from './Modalstyle';
// import { AiOutlineDash } from 'react-icons/ai';

const Detailmodal = () => {
  const handleClick = () => {
    // 해당 이미지 상세페이지 url 받아서 open!
  };
  return (
    <style.ModalBg>
      <style.Img src={require('./receiptTitle.png')}></style.Img>
      <style.Box>
        <style.ItemBox>
          <style.Item src={require('./img2.png')} />
          <style.ItemText>한우 꽃등심 스테이크</style.ItemText>
        </style.ItemBox>
        <style.ItemBox>
          <style.Item src={require('./img2.png')} />
          <style.ItemText>한우 꽃등심 스테이크</style.ItemText>
        </style.ItemBox>
        <style.ItemBox>
          <style.Item src={require('./img2.png')} />
          <style.ItemText>한우 꽃등심 스테이크</style.ItemText>
        </style.ItemBox>
      </style.Box>
      <style.Scroll />
      <style.Content>
        <style.TextBox>
          <style.Text>where: 혜지네 밥집</style.Text>
          <style.Text>who: 맛잘알 혜찌</style.Text>
          <style.Text>mood: #data, #romantic</style.Text>
          <style.Text>score: 별별별별별 (4.0)</style.Text>
        </style.TextBox>
        <style.Img src={require('./DashLine.png')}></style.Img>
        <style.ContentBox>
          <style.ContentText>Comment</style.ContentText>
          <style.ContentText>comment</style.ContentText>
        </style.ContentBox>
        <style.Img src={require('./DashLine.png')}></style.Img>
        <style.TextBox>Detailed Location</style.TextBox>
      </style.Content>
    </style.ModalBg>
  );
};

export default Detailmodal;
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
