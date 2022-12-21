import { IconsWrapper, Icons, CloseIcon } from './style';

import axios from 'axios';
import { useState, useEffect } from 'react';
import { Icontent } from './Icontent';
import { AiFillHeart } from 'react-icons/ai';
import { FaUtensilSpoon } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
const IconComp = () => {
  const [val, setVal] = useState<any[]>([]);

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
    <div>
      {val.map((detail: Icontent, index: number) => {
        return (
          <IconsWrapper>
            <Icons>
              <AiFillHeart className="heart" />
              &nbsp;
              {detail.like}
            </Icons>
            <Icons>
              <FaUtensilSpoon className="spoon" />
              &nbsp;
              {detail.scrap}
            </Icons>
            <CloseIcon>
              <IoClose />
            </CloseIcon>
          </IconsWrapper>
        );
      })}
    </div>
  );
};
export default IconComp;
