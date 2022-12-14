import React, { useState, useEffect } from 'react';
import {
  RankingWrapper,
  Header,
  Title,
  Button,
  Main,
  Number,
  ContentBox,
  ContentWrapper,
  Left,
  Like,
} from './style';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { HiHeart } from 'react-icons/hi';
import axios from 'axios';

const Ranking = (props: any) => {
  const { country, closeModal, showWholeMap } = props;

  const [data, setData] = useState<any[]>([]);

  const getPostData = () => {
    return axios({
      method: 'get',
      url: 'http://localhost:3001/Data/post.json',
    }).then((res) => {
      setData(res.data.data);
      console.log(res.data.data[0].image);
    });
  };
  useEffect(() => {
    const fetchData = async () => {
      await getPostData();
    };
    fetchData();
  }, []);

  return (
    <RankingWrapper>
      <Header>
        <Title>{country}</Title>
        <Button
          className="closeBtn"
          onClick={() => {
            closeModal();
            showWholeMap();
          }}
        >
          <IoCloseCircleOutline />
        </Button>
      </Header>
      {data.map((content: any, index: number) => {
        return (
          <Main>
            {content.country === country ? (
              <ContentBox>
                <Left>
                  <div>
                    <Number>{index + 1}</Number>
                    <Like>
                      <HiHeart />
                      <span>{content.like}</span>
                    </Like>
                  </div>
                  <span>{content.store}</span>
                </Left>
                <img src={content.image}></img>
              </ContentBox>
            ) : (
              <></>
            )}
          </Main>
        );
      })}
    </RankingWrapper>
  );
};

export default Ranking;
