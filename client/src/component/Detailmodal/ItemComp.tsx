import axios from 'axios';
import { useState, useEffect } from 'react';
import { GoTriangleLeft, GoTriangleRight } from 'react-icons/go';
import { Icontent } from './Icontent';
import { ImgArrow, ImgPage, Item, ItemBox } from './style';

const ItemComp = () => {
  const [val, setVal] = useState<any[]>([]);
  const getData = () => {
    return axios({
      method: 'get',
      url: 'http://localhost:3000/Data/postList.json',
    }).then((res) => {
      setVal(res.data);
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
    <ImgPage>
      <ImgArrow>
        <GoTriangleLeft />
      </ImgArrow>
      <ItemBox>
        {val.map((detail: Icontent, index: number) => {
          return <Item key={index} src={detail.src} />;
        })}
      </ItemBox>
      <ImgArrow>
        <GoTriangleRight />
      </ImgArrow>
    </ImgPage>
  );
};

export default ItemComp;
