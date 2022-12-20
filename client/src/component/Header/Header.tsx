import { HeaderWrapper, Title, Icons } from './style';
import { HiUser } from 'react-icons/hi2';
import { MdOutlineLanguage } from 'react-icons/md';
import { ImSpoonKnife } from 'react-icons/im';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <Title>FoCo</Title>
      </Link>
      <Icons>
        <MdOutlineLanguage />
        <HiUser />
        <ImSpoonKnife />
      </Icons>
    </HeaderWrapper>
  );
};

export default Header;
