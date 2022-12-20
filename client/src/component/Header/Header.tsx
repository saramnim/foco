import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiUser } from 'react-icons/hi2';
import { MdOutlineLanguage } from 'react-icons/md';
import { ImSpoonKnife } from 'react-icons/im';
import { FaPen, FaCog, FaSignInAlt } from 'react-icons/fa';
import { HeaderWrapper, Title, Icons, UserBox, UserMenu, Menu } from './style';

const LoginUserComponent = () => {
  return (
    <UserMenu>
      <Link to={'/review'}>
        <Menu>
          <FaPen />
          <span>My Review</span>
        </Menu>
      </Link>
      <Link to={'/account/profile'}>
        <Menu>
          <FaCog />
          <span>Account</span>
        </Menu>
      </Link>
      <Link to={'/login'}>
        <Menu>
          <FaSignInAlt />
          <span>Log out</span>
        </Menu>
      </Link>
    </UserMenu>
  );
};

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <HeaderWrapper>
      <Link to={'/'}>
        <Title>FoCo</Title>
      </Link>
      <Icons>
        <Link to={'/'}>
          <MdOutlineLanguage />
        </Link>
        <UserBox
          onMouseOver={() => setShow(true)}
          onMouseOut={() => setShow(false)}
        >
          <HiUser />
          {show ? <LoginUserComponent /> : null}
        </UserBox>
        <Link to={'/scrap'}>
          <ImSpoonKnife />
        </Link>
      </Icons>
    </HeaderWrapper>
  );
};

export default Header;
