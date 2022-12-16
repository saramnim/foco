import {
  MainContainer,
  SecurityBox,
  InfoItem,
  Label,
  Input,
  FixedValue,
  Button,
} from './account-style';

const Security = () => {
  return (
    <MainContainer>
      <SecurityBox>
        <InfoItem>
          <Label htmlFor="nickname">
            <p>Email</p>
            <FixedValue>kailey224@gmail.com</FixedValue>
          </Label>
        </InfoItem>
        <InfoItem>
          <Label htmlFor="password">
            <p>Password</p>
            <Input type="password" />
          </Label>
        </InfoItem>
        <InfoItem>
          <Label htmlFor="confirm-password">
            <p>Confirm Password</p>
            <Input type="password" />
          </Label>
        </InfoItem>
      </SecurityBox>
      <Button>Save Changes</Button>
    </MainContainer>
  );
};

export default Security;
