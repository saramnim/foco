import React, { useState, useEffect } from 'react';
import {
  ContentsWrapper,
  CountryWrapper,
  Title,
  City,
  HoverBottom,
  Content,
  HoverContent,
  Icons,
  LikeWrapper,
  TotalLike,
} from './style';
import ImgShawdow from './imgshawdow.png';
import MultiSelectBox from '../MultiSelectBox/MultiSelectBox';
import { useParams } from 'react-router';
import { HiHeart } from 'react-icons/hi';
import { ImSpoonKnife } from 'react-icons/im';
import { MdLocationOn } from 'react-icons/md';
import axios from 'axios';

interface Icontent {
  country: string;
  like: number;
  city: string;
  storeName: string;
  img: string;
  foodType: string[];
  mood: string[];
}

const Country = () => {
  const [data, setData] = useState<Icontent[]>([]);
  const params = useParams();
  const country = params.country;

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

  return (
    <CountryWrapper>
      <Title>{country}</Title>
      <MultiSelectBox />
      <ContentsWrapper>
        {data
          .filter((content: Icontent) => {
            return content.country === country;
          })
          .map((content: Icontent, index: number) => {
            return (
              <Content key={index}>
                <HoverContent>
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
              </Content>
            );
          })}
      </ContentsWrapper>
    </CountryWrapper>
  );
};

export default Country;
