import axios from 'axios';
import { useEffect, useState } from 'react';
import { Box, ItemBox, Item, ItemText } from './Modalstyle';
import { Icontent } from './Icontent';

const ItemSet = () => {
  const [image, setimage] = useState<any[]>([]);

  const getData = () => {
    return axios({
      method: 'get',
      url: 'http://localhost:3000/Data/postList.json',
    }).then((res) => {
      setimage(res.data);
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
    <Box>
      {image.map((detail: Icontent, index: number) => {
        return (
          <ItemBox key={index}>
            <Item src={detail.src} />
            <ItemText>{detail.name}</ItemText>
            <ItemText>{detail.id}</ItemText>
          </ItemBox>
        );
      })}
    </Box>
  );
};
export default ItemSet;
