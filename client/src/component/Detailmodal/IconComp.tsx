import { IconsWrapper, Icons, CloseIcon, Icon } from './style';

import axios from 'axios';
import { useState, useEffect, ReactElement } from 'react';
import { Icontent } from './Icontent';
import { AiFillHeart } from 'react-icons/ai';
import { FaUtensilSpoon } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

const IconComp = () => {
  const [val, setVal] = useState<any[]>([]);
  const [count, setCount] = useState(0);
  const [heart, setHeart] = useState<string>('curr');
  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);
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
  const clickHeart = () => {
    setHeart('curr');
    onIncrease();
    // axios
    //   .put('http://localhost:3000/Data/detailPost.json', {
    //     like: count,
    //   })
    //   .then(() => {
    //     alert('좋아요 누름');
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  return (
    <div>
      {val.map((detail: Icontent) => {
        return (
          <IconsWrapper>
            <Icons>
              <Icon>
                <AiFillHeart
                  className={`heart ${heart === 'curr' ? 'active' : ''}`}
                  onClick={() => setHeart('curr')}
                />
                &nbsp;
                {detail.like}
              </Icon>
              <Icon>
                <FaUtensilSpoon className="spoon" onClick={onIncrease} />
              </Icon>
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
