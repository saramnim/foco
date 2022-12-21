import { ModalBackground, ModalWrapper, TitleWrapper, Box } from './style';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useOpenModal from './useOpenModal';
import { Icontent } from './Icontent';
import IconComp from './IconComp';
import TitleComp from './TitleComp';
import ContentComp from './ContentComp';
import ItemComp from './ItemComp';

const Detailmodal = () => {
  const closeModal = useOpenModal();
  const [val, setVal] = useState<any[]>([]);
  // const outside = useRef<boolean>(true);
  const getData = () => {
    return axios({
      method: 'get',
      url: 'http://localhost:3000/Data/detailPost.json',
    }).then((res) => {
      setVal(res.data.data);
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
    <ModalBackground>
      {val.map((index: number) => {
        return (
          <ModalWrapper key={index}>
            <TitleWrapper>
              <IconComp />
              <TitleComp />
            </TitleWrapper>
            <Box>
              <ItemComp />
              <ContentComp />
            </Box>
          </ModalWrapper>
        );
      })}
    </ModalBackground>
  );
};

export default Detailmodal;
