import { useState, useEffect } from 'react';
import axios from 'axios';
import { Cookies } from 'react-cookie';
import { Link, useParams } from 'react-router-dom';
import { HiUserCircle, HiShieldCheck, HiCog6Tooth } from 'react-icons/hi2';
import {
  MenuContainer,
  ItemBox,
  UserBox,
  Username,
  ImgBox,
  Img,
  Item,
  Icon,
  MenuBtn,
} from './account-style';

interface inputData {
  name: string;
  img: string;
}

const Menu = () => {
  const [info, setInfo] = useState<inputData>({
    name: '',
    img: '',
  });
  const cookies = new Cookies();
  const userNum = sessionStorage.getItem('userNum');

  const getUserData = async () => {
    const { params }: any = useParams;

    axios
      .get(`/user/profile/${userNum}`, { params })
      .then((res) => {
        const data = res.data.user;
        setInfo({
          name: data.name,
          img: data.name,
        });

        console.log(res.data.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      await getUserData();
    };
    fetchData();
  }, []);

  return (
    <MenuContainer>
      <UserBox>
        <ImgBox>
          <Img src={info.img} />
        </ImgBox>
        <Username>{info.name}</Username>
      </UserBox>
      <ItemBox>
        <Item>
          <Icon>
            <HiUserCircle />
          </Icon>
          <MenuBtn>
            <Link to={`/user/profile/${userNum}`}>Profile</Link>
          </MenuBtn>
        </Item>
        <Item>
          <Icon>
            <HiShieldCheck />
          </Icon>
          <MenuBtn>
            <Link to={`/user/security/${userNum}`}>Security</Link>
          </MenuBtn>
        </Item>
        <Item>
          <Icon>
            <HiCog6Tooth />
          </Icon>
          <MenuBtn>
            <Link to={`/user/deactivate/${userNum}`}>Deactivate</Link>
          </MenuBtn>
        </Item>
      </ItemBox>
    </MenuContainer>
  );
};

export default Menu;
