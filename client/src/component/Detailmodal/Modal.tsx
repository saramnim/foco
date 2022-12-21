import {
  ModalBackground,
  ModalWrapper,
  TitleWrapper,
  Box,
  CloseIcon,
} from './style';
import axios from 'axios';
import React, { ReactElement, useEffect, useState } from 'react';
import useOpenModal from './useOpenModal';
import { Icontent } from './Icontent';
import IconComp from './IconComp';
import TitleComp from './TitleComp';
import ContentComp from './ContentComp';
import ItemComp from './ItemComp';
import { IoClose } from 'react-icons/io5';
interface props {
  open: boolean;
  close: (v: boolean) => void;
}
const Detailmodal = (props: props) => {
  const { open, close } = props;
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
