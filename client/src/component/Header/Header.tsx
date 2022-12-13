import { HeaderWrapper, Title, Icons } from './style';
import { HiUser } from 'react-icons/hi2';
import { FaSistrix } from 'react-icons/fa';
import { MdOutlineLanguage } from 'react-icons/md';

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Title>FoCo</Title>
      <Icons>
        <MdOutlineLanguage />
        <FaSistrix />
        <HiUser />
      </Icons>
    </HeaderWrapper>
  );
};

export default Header;
