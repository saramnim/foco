import { Key, useCallback, useEffect, useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { ItemBox, Item, Likes, LikesCount, ItemWrapper } from './ScrapStyle';
import Detailmodal from './../Detailmodal/Detailmodal';
import axios from 'axios';

const ItemComp = () => {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const [img, setImg] = useState<any[]>([]);
  const handleClick = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

  const getData = () => {
    return axios({
      method: 'get',
      url: 'http://localhost:3000/Data/post.json',
    }).then((res) => {
      setImg(res.data.data.image);
    });
  };

  return (
    <ItemWrapper>
      <ItemBox>
        {isOpenModal && <Detailmodal></Detailmodal>}
        <Item
          src={
            'https://cdn.discordapp.com/attachments/1050007695899496478/1052472544067846255/9982993D5AFA860034.png'
          }
          onClick={handleClick}
        />
        <Likes>
          <AiFillHeart />
          <LikesCount>205</LikesCount>
        </Likes>
      </ItemBox>
    </ItemWrapper>
  );
};

export default ItemComp;
