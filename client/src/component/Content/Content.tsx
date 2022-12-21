import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import {
  ContentsWrapper,
  City,
  HoverBottom,
  ContentWrapper,
  HoverContent,
  Icons,
  LikeWrapper,
  TotalLike,
} from './style';
import ImgShawdow from './imgshawdow.png';
import Detailmodal from './../Detailmodal/Detailmodal';

import { HiHeart } from 'react-icons/hi';
import { ImSpoonKnife } from 'react-icons/im';
import { MdLocationOn } from 'react-icons/md';

interface Icontent {
  country: string;
  like: number;
  city: string;
  storeName: string;
  img: string;
  foodType: string[];
  mood: string[];
}

interface Iprops {
  country: string | undefined;
}

const Content = (props: Iprops) => {
  const [data, setData] = useState<Icontent[]>([]);
  const [OpenModal, setOpenModal] = useState<boolean>(false);
  const { country } = props;

  const getPostData = () => {
    return axios({
      method: 'get',
      // 임시 mock data 연결
      url: 'http://localhost:3000/Data/post.json',
    }).then((res) => {
      setData(res.data.data);
    });
  };
  useEffect(() => {
    const fetchData = async () => {
      await getPostData();
    };
    fetchData();
  }, []);

  const handleClick = useCallback(() => {
    setOpenModal(!OpenModal);
  }, [OpenModal]);

  return (
    <ContentsWrapper>
      {OpenModal && <Detailmodal />}
      {data
        .filter((content: Icontent) => {
          return content.country === country;
        })
        .map((content: Icontent, index: number) => {
          return (
            <ContentWrapper key={index}>
              <HoverContent onClick={handleClick}>
                <img src={ImgShawdow} />
                <HoverBottom>
                  <City>
                    <MdLocationOn />
                    {content.city}
                  </City>
                  <Icons>
                    <HiHeart />
                    <ImSpoonKnife />
                  </Icons>
                </HoverBottom>
              </HoverContent>
              <img src={content.img} alt={content.storeName}></img>
              <LikeWrapper>
                <HiHeart />
                <TotalLike>{content.like}</TotalLike>
              </LikeWrapper>
            </ContentWrapper>
          );
        })}
    </ContentsWrapper>
  );
};

export default Content;
