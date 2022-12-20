import { HeaderWrapper, Title, Icons } from './style';
import { HiUser } from 'react-icons/hi2';
import { MdOutlineLanguage } from 'react-icons/md';
import { ImSpoonKnife } from 'react-icons/im';

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Title>FoCo</Title>
      <Icons>
        <MdOutlineLanguage />
        <HiUser />
        <ImSpoonKnife />
      </Icons>
    </HeaderWrapper>
  );
};

export default Header;
