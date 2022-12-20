import React, { useEffect, useState } from 'react';
import {
  ScrapPage,
  TitleWrapper,
  Title,
  UnderStar,
  UpperStar,
  Country,
  Content,
  Filter,
  Scroll,
} from './ScrapStyle';
import { AiFillStar, AiFillHeart } from 'react-icons/ai';
import Dropdown from '../Filter/CoutryDropdown';
import cityFilter from '../Filter/cityFilter';
import TagFilter from '../Filter/TagFilter';
import ItemComp from './Item';
import { Icontent } from '../Detailmodal/Icontent';
import axios from 'axios';

const Scrap = () => {
  const [image, setimage] = useState<any[]>([]);
  const getData = () => {
    return axios({
      method: 'get',
      url: 'http://localhost:3000/Data/post.json',
    }).then((res) => {
      setimage(res.data.data);
      // const itemList = res.data;
      console.log(image);
    });
  };
  useEffect(() => {
    const fetchData = async () => {
      await getData();
    };
    fetchData();
  }, []);
  const handleClick = () => {
    // 해당 이미지 상세페이지 url 받아서 open!
  };
  return (
    <ScrapPage>
      {image.map((detail: Icontent, index: number) => {
        return (
          <div>
            <TitleWrapper key={index}>
              <Title>Mine</Title>
              <UnderStar>
                <AiFillStar />
              </UnderStar>
              <UpperStar>
                <AiFillStar />
              </UpperStar>
              <Country>{detail.country}</Country>
            </TitleWrapper>
            <Content>
              <Filter>
                <Dropdown></Dropdown>
                <Dropdown></Dropdown>
                {/* <cityFilter></cityFilter> */}
                <TagFilter></TagFilter>
                <TagFilter></TagFilter>
              </Filter>
              <ItemComp />
              {/* <Scroll id="scrollBar" /> */}
            </Content>
          </div>
        );
      })}
    </ScrapPage>
  );
};

export default Scrap;
