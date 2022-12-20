import { useCallback, useEffect, useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { ItemBox, Item, Likes, LikesCount, ItemWrapper } from './ScrapStyle';
import Detailmodal from './../Detailmodal/Detailmodal';
import axios from 'axios';

interface Icontent {
  country: string;
  like: number;
  store: string;
  img: string;
}

const ItemComp = () => {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const [image, setimage] = useState<any[]>([]);

  const handleClick = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

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
  return (
    <ItemWrapper>
      {image.map((detail: Icontent, index: number) => {
        return (
          <ItemBox key={index}>
            {isOpenModal && <Detailmodal></Detailmodal>}
            <Item src={detail.img} onClick={handleClick} />
            <Likes>
              <AiFillHeart />
              <LikesCount>205</LikesCount>
            </Likes>
          </ItemBox>
        );
      })}
    </ItemWrapper>
  );
};

export default ItemComp;
