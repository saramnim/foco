import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
  RankingWrapper,
  Header,
  Title,
  Button,
  MoreButton,
  Main,
  Number,
  ContentBox,
  Left,
  Like,
  StoreName,
  TotalLike,
} from './style';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { HiHeart } from 'react-icons/hi';
import Detailmodal from './../Detailmodal/Detailmodal';

interface Iprops {
  country: string;
  closeModal: () => void;
  showWholeMap: () => void;
}

interface Icontent {
  country: string;
  like: number;
  storeName: string;
  img: string;
}

const Ranking = (props: Iprops) => {
  const { country, closeModal, showWholeMap } = props;
  const [data, setData] = useState<any[]>([]);
  const [OpenModal, setOpenModal] = useState<boolean>(false);

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
    <RankingWrapper>
      {OpenModal && <Detailmodal />}
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
      <Link to={`/list/${country}`}>
        <MoreButton>more</MoreButton>
      </Link>
      {data
        .filter((content: Icontent) => {
          return content.country === country;
        })
        .map((content: Icontent, index: number) => {
          return (
            <Main key={index} onClick={handleClick}>
              <ContentBox>
                <Left>
                  <div>
                    <Number>{index + 1}</Number>
                    <Like>
                      <HiHeart />
                      <TotalLike>{content.like}</TotalLike>
                    </Like>
                  </div>
                  <StoreName>{content.storeName}</StoreName>
                </Left>
                <img src={content.img} alt={content.storeName}></img>
              </ContentBox>
            </Main>
          );
        })}
    </RankingWrapper>
  );
};

export default Ranking;
