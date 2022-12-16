import {
  MainContainer,
  DeactivateBox,
  InfoItem,
  Label,
  Input,
  FixedValue,
  Button,
} from './account-style';

const Deactivate = () => {
  return (
    <MainContainer>
      <DeactivateBox>
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
      </DeactivateBox>
      <Button>Delete my account</Button>
    </MainContainer>
  );
};

export default Deactivate;
