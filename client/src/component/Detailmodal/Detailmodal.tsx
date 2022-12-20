import React, { useEffect, useState } from 'react';
import {
  ModalBackground,
  ModalBg,
  CloseWrapper,
  TitleWrapper,
  ModalTitle,
  IconsWrapper,
  IconHeart,
  IconScrap,
  PostMan,
  Img,
  Scroll,
} from './Modalstyle';
import ItemSet from './ModalItem';
import ContentWrapper from './Content';
import { IoClose } from 'react-icons/io5';
import axios from 'axios';
import { Icontent } from './Icontent';
import { AiFillHeart } from 'react-icons/ai';
import { FaUtensilSpoon } from 'react-icons/fa';

const Detailmodal = () => {
  const [val, setVal] = useState<any[]>([]);
  const getData = () => {
    return axios({
      method: 'get',
      url: 'http://localhost:3000/Data/detailPost.json',
    }).then((res) => {
      setVal(res.data.data);
      // const itemList = res.data;
      console.log(val);
    });
  };
  useEffect(() => {
    const fetchData = async () => {
      await getData();
    };
    fetchData();
  }, []);
  return (
    <ModalBackground>
      {val.map((detail: Icontent, index: number) => {
        return (
          <ModalBg key={index}>
            <CloseWrapper>
              <IoClose />
            </CloseWrapper>
            <TitleWrapper>
              <ModalTitle>{detail.storeName}</ModalTitle>
              <IconsWrapper>
                <IconHeart>
                  <AiFillHeart />
                </IconHeart>
                {detail.like}
                <IconScrap>
                  <FaUtensilSpoon />
                </IconScrap>
                {detail.scrap}
                <PostMan>by. {detail.user}</PostMan>
              </IconsWrapper>
            </TitleWrapper>

            <Img src={require('./DashLine.png')}></Img>
            <ItemSet />
            <Scroll />
            <ContentWrapper />
          </ModalBg>
        );
      })}
    </ModalBackground>
  );
};

export default Detailmodal;
