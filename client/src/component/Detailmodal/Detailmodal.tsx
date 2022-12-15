import React from 'react';
import {
  ModalBackground,
  ModalBg,
  ModalTitle,
  Img,
  Box,
  ItemBox,
  Item,
  ItemText,
  Content,
  TextBox,
  TextTitle,
  Text,
  Scroll,
} from './Modalstyle';
import { AiFillStar } from 'react-icons/ai';
// import { AiOutlineDash } from 'react-icons/ai';

const Detailmodal = () => {
  const handleClick = () => {
    // 해당 이미지 상세페이지 url 받아서 open!
  };
  return (
    <ModalBackground>
      <ModalBg>
        <ModalTitle>혜지네 밥집</ModalTitle>
        <Img src={require('./DashLine.png')}></Img>
        <Box>
          <ItemBox>
            <Item src={require('./img2.png')} />
            <ItemText>한우 꽃등심 스테이크</ItemText>
            <ItemText>$23.80</ItemText>
          </ItemBox>
          <ItemBox>
            <Item src={require('./img2.png')} />
            <ItemText>한우 꽃등심 스테이크</ItemText>
            <ItemText>$23.80</ItemText>
          </ItemBox>
          <ItemBox>
            <Item src={require('./img2.png')} />
            <ItemText>한우 꽃등심 스테이크</ItemText>
            <ItemText>$23.80</ItemText>
          </ItemBox>
        </Box>
        <Scroll />
        <Content>
          <TextBox>
            <TextTitle>
              mood<Text>#data, #romantic</Text>
            </TextTitle>
            <TextTitle>
              score
              <Text>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar /> (4.0)
              </Text>
            </TextTitle>
          </TextBox>
          <Img src={require('./DashLine.png')}></Img>
          <TextBox>
            <TextTitle>
              Comment
              <Text>
                It's very delicious.
                <br />
                If you don't have anything, just don't do that!
              </Text>
            </TextTitle>
          </TextBox>
          <Img src={require('./DashLine.png')}></Img>
          <TextTitle>
            Detailed Location<Text>In your Heart</Text>
          </TextTitle>
        </Content>
      </ModalBg>
    </ModalBackground>
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
