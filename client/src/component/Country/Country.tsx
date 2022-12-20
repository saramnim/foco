import React, { useState, useEffect } from 'react';
import {
  ContentsWrapper,
  CountryWrapper,
  Title,
  SelectBoxWrapper,
  City,
  HoverBottom,
  Content,
  HoverContent,
  Icons,
  LikeWrapper,
  TotalLike,
} from './style';
import ImgShawdow from './imgshawdow.png';
import { useParams } from 'react-router';
import { HiHeart } from 'react-icons/hi';
import { ImSpoonKnife } from 'react-icons/im';
import Select from 'react-select';
import Autocomplete from '../PostForm/func/LocationSearchInput';
import axios from 'axios';

interface Icontent {
  country: string;
  like: number;
  city: string;
  storeName: string;
  img: string;
}

const Country = () => {
  const [data, setData] = useState<any[]>([]);
  const [value, setValue] = useState<string>('');
  const params = useParams();
  const country = params.country;
  console.log(country);
  const getPostData = () => {
    return axios({
      method: 'get',
      // 임시 mock data 연결
      url: 'http://localhost:3001/Data/post.json',
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

  const foodOptions = [
    { value: 'Korean', label: 'Korean' },
    { value: 'Japanese', label: 'Japanese' },
    { value: 'Western', label: 'Western' },
    { value: 'Chinese', label: 'Chinese' },
  ];

  const moodOptions = [
    { value: 'romantic', label: 'romantic' },
    { value: 'comfort', label: 'comfort' },
    { value: 'healing', label: 'healing' },
    { value: 'party', label: 'party' },
  ];

  return (
    <CountryWrapper>
      <Title>{country}</Title>
      <SelectBoxWrapper>
        <Autocomplete />
        <Select isMulti={true} options={foodOptions} className="selectBox" />
        <Select isMulti={true} options={moodOptions} className="selectBox" />
      </SelectBoxWrapper>
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
                    <City>{content.city}</City>
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
