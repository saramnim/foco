import {
  MainContainer,
  ProfileBox,
  InfoItem,
  Label,
  Input,
  Seclect,
  FixedValue,
  Button,
} from './account-style';

const Profile = () => {
  return (
    <MainContainer>
      <ProfileBox>
        <InfoItem>
          <Label htmlFor="nickname">
            <p>Nickname</p>
            <FixedValue>kailey@gmail.com</FixedValue>
          </Label>
        </InfoItem>
        <InfoItem>
          <Label htmlFor="nickname">
            <p>Email</p>
            <Input type="text" placeholder="Kailey@gmail.com" />
          </Label>
        </InfoItem>
        <InfoItem>
          <Label htmlFor="country">
            <p>Country</p>
            <Seclect name="country">
              <option value="Koea">Koea</option>
              <option value="China">China</option>
              <option value="Japan">Japan</option>
            </Seclect>
          </Label>
        </InfoItem>
        <InfoItem>
          <Label htmlFor="city">
            <p>City</p>
            <Seclect name="city">
              <option value="Seoul">Seoul</option>
              <option value="Busan">Busan</option>
              <option value="Jeju">Jeju</option>
            </Seclect>
          </Label>
        </InfoItem>
      </ProfileBox>
      <Button>Save Changes</Button>
    </MainContainer>
  );
};

export default Profile;
