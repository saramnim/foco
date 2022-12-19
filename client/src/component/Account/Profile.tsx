import React, { useState } from 'react';
import { validateNickname } from '../util/usefulFunctions';
import Menu from './Menu';
import {
  AccountContainer,
  ContentsBox,
  Title,
  MainContainer,
  ProfileBox,
  InfoItem,
  Label,
  InputBox,
  Input,
  Errormsg,
  Seclect,
  FixedValue,
  Button,
} from './account-style';

interface inputData {
  nickname: string;
  country: string;
}

const Profile = () => {
  const [info, setInfo] = useState<inputData>({
    nickname: '',
    country: '',
  });
  const [error, setError] = useState<string>('');

  const handleChange = (e: any) => {
    if (e.target.name === 'nickname') {
      if (!validateNickname(e.target.value)) {
        setError('English only');
      } else {
        setError('');
        setInfo((prev) => ({ ...prev, nickname: e.target.value }));
      }
    } else if (e.target.name === 'country') {
      setInfo((prev) => ({ ...prev, country: e.target.value }));
    }
  };

  const handleSubmit = () => {
    if (error === '') {
      alert('정보 변경 성공');
      console.log(info);
    } else {
      alert('내용확인!');
    }
  };

  return (
    <AccountContainer>
      <Title>My Account</Title>
      <ContentsBox>
        <Menu />
        <MainContainer>
          <ProfileBox>
            <InfoItem>
              <Label htmlFor="nickname">
                <p>Nickname</p>
                <InputBox>
                  <Input
                    type="text"
                    name="nickname"
                    placeholder="Kailey"
                    onChange={handleChange}
                  />
                  <Errormsg>
                    <p>{error}</p>
                  </Errormsg>
                </InputBox>
              </Label>
            </InfoItem>
            <InfoItem>
              <Label htmlFor="email">
                <p>Email</p>
                <FixedValue>kailey224@gmail.com</FixedValue>
              </Label>
            </InfoItem>
            <InfoItem>
              <Label htmlFor="country">
                <p>Country</p>
                <Seclect name="country" onChange={handleChange}>
                  <option value="Koea">Koea</option>
                  <option value="China">China</option>
                  <option value="Japan">Japan</option>
                </Seclect>
              </Label>
            </InfoItem>
          </ProfileBox>
          <Button type="submit" onClick={handleSubmit}>
            Save Changes
          </Button>
        </MainContainer>
      </ContentsBox>
    </AccountContainer>
  );
};

export default Profile;
