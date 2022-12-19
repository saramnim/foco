import React, { useState } from 'react';
import {
  ModalBackground,
  ModalBg,
  ModalTitle,
  Img,
  Scroll,
} from './Modalstyle';
import ItemSet from './ModalItem';
import ContentWrapper from './Content';

import { IoClose } from 'react-icons/io5';
// import { AiOutlineDash } from 'react-icons/ai';

const Detailmodal = () => {
  const handleClick = () => {
    // 해당 이미지 상세페이지 url 받아서 open!
  };
  return (
    <ModalBackground>
      <IoClose />
      <ModalBg>
        <ModalTitle>혜지네 밥집</ModalTitle>
        <Img src={require('./DashLine.png')}></Img>
        <ItemSet />
        <Scroll />
        <ContentWrapper />
      </ModalBg>
    </ModalBackground>
  );
};

export default Detailmodal;
