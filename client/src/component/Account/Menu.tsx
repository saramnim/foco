import { HiUserCircle, HiShieldCheck, HiCog6Tooth } from 'react-icons/hi2';
import { MenuContainer, ItemBox, Username, Item, Icon } from './account-style';

const Menu = () => {
  return (
    <MenuContainer>
      <ItemBox>
        <Username>Kailey</Username>
        <Item>
          <Icon>
            <HiUserCircle />
          </Icon>
          Profile
        </Item>
        <Item>
          <Icon>
            <HiShieldCheck />
          </Icon>
          Security
        </Item>
        <Item>
          <Icon>
            <HiCog6Tooth />
          </Icon>
          Deactivate
        </Item>
      </ItemBox>
    </MenuContainer>
  );
};

export default Menu;
