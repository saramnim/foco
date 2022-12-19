import { Link } from 'react-router-dom';
import { HiUserCircle, HiShieldCheck, HiCog6Tooth } from 'react-icons/hi2';
import {
  MenuContainer,
  ItemBox,
  Username,
  Item,
  Icon,
  MenuBtn,
} from './account-style';

const Menu = () => {
  return (
    <MenuContainer>
      <ItemBox>
        <Username>Kaile</Username>
        <Item>
          <Icon>
            <HiUserCircle />
          </Icon>
          <MenuBtn>
            <Link to={'/account/profile'}>Profile</Link>
          </MenuBtn>
        </Item>
        <Item>
          <Icon>
            <HiShieldCheck />
          </Icon>
          <MenuBtn>
            <Link to={'/account/security'}>Security</Link>
          </MenuBtn>
        </Item>
        <Item>
          <Icon>
            <HiCog6Tooth />
          </Icon>
          <MenuBtn>
            <Link to={'/account/deactivate'}>Deactivate</Link>
          </MenuBtn>
        </Item>
      </ItemBox>
    </MenuContainer>
  );
};

export default Menu;
