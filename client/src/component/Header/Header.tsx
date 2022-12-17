import { useState, useEffect } from 'react';
import { HeaderWrapper, TopWrapper, UnderWrapper, Title, Icons } from './style';
import { HiUser } from 'react-icons/hi2';
import { MdOutlineLanguage } from 'react-icons/md';
import { ImSpoonKnife } from 'react-icons/im';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import axios from 'axios';
// import DropDown from './../DropDown/DropDown';

const Header = () => {
  const [dropDownOpen, setDropDownOpen] = useState<boolean>(false);

  const openDropDown = () => {
    setDropDownOpen(true);
  };

  const closeDropDown = () => {
    setDropDownOpen(false);
  };

  return (
    <HeaderWrapper>
      <TopWrapper>
        <Title>FoCo</Title>
        <Icons>
          <MdOutlineLanguage />
          <HiUser />
          <ImSpoonKnife />
        </Icons>
      </TopWrapper>
      <UnderWrapper>
        {/* {!dropDownOpen ? (
          <IoIosArrowDown onClick={openDropDown} />
        ) : (
          <IoIosArrowUp onClick={closeDropDown} />
        )}
        {dropDownOpen && <DropDown />} */}
      </UnderWrapper>
    </HeaderWrapper>
  );
};

export default Header;
