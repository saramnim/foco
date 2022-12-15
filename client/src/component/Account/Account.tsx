import Menu from './Menu';
import Profile from './Profile';
import Security from './Security';
import Deactivate from './Deactivate';
import { AccountContainer, ContentsBox, Title } from './account-style';

const Account = () => {
  return (
    <AccountContainer>
      <Title>My Account</Title>
      <ContentsBox>
        <Menu />
        {/* <Profile /> */}
        {/* <Security /> */}
        <Deactivate />
      </ContentsBox>
    </AccountContainer>
  );
};

export default Account;
