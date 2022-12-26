import {
  ModalBackground,
  ModalWrapper,
  TitleWrapper,
  Box,
  TitleBox,
  TitleBlock,
  Info,
  StoreName,
  Title,
  IconsWrapper,
  Icons,
  ImgBox,
  Content,
  TagBox,
  TextBox,
  Profile,
  StoreInfo,
  CloseIcon,
} from './style';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { FaUtensilSpoon } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import ScrollHorizontal from 'react-scroll-horizontal';
import { Icontent } from '../Icontent';

interface Iprops {
  postNum: number;
  closeModal: () => void;
}

const Modal = (props: Iprops) => {
  const [data, setData] = useState<Icontent>();
  const [count, setCount] = useState(0);
  const [heart, setHeart] = useState<string>('pink');
  const [spoon, setSpoon] = useState<string>('gray');
  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);
  console.log(props.postNum);

  const getData = () => {
    return axios({
      method: 'get',
      url: `/post/${props.postNum}`,
    }).then((res) => {
      console.log(res);
      setData(res.data);
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      await getData();
    };
    fetchData();
  }, []);

  const clickHeart = () => {
    if (heart === 'pink') {
      setHeart('red');
      onIncrease();
    } else {
      setHeart('pink');
      onDecrease();
    }
  };
  const clickSpoon = () => {
    if (spoon === 'gray') {
      setSpoon('gray');
    } else {
      setSpoon('lightgray');
    }
  };

  return (
    <ModalBackground>
      <ModalWrapper>
        <TitleWrapper>
          <IconsWrapper>
            <Icons>
              <AiFillHeart
                className="logo"
                color={heart}
                onClick={clickHeart}
              />
              <FaUtensilSpoon
                className="logo"
                color={spoon}
                onClick={clickSpoon}
              />
            </Icons>
            <CloseIcon>
              <IoClose onClick={props.closeModal} />
            </CloseIcon>
          </IconsWrapper>
          <TitleBox>
            <StoreInfo>
              <TitleBlock>l</TitleBlock>
              <Title>
                <StoreName>{data?.storeName}</StoreName>
                <Info>{data?.address}</Info>
                <Info>{data?.grade}</Info>
              </Title>
              <Profile src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
            </StoreInfo>
          </TitleBox>
        </TitleWrapper>
        <Box>
          <ImgBox>
            <ScrollHorizontal>
              {data?.img.map((img: string) => {
                return <img src={img} alt={data.storeName}></img>;
              })}
            </ScrollHorizontal>
          </ImgBox>
          <Content>
            <TagBox>
              {data?.mood.map((mood: string) => {
                return <span>#{mood} </span>;
              })}
              {data?.foodType.map((foodType: string) => {
                return <span>#{foodType} </span>;
              })}
            </TagBox>
            <TextBox>{data?.review}</TextBox>
          </Content>
        </Box>
      </ModalWrapper>
    </ModalBackground>
  );
};

export default Modal;
