import {
  Modal,
  ModalBody,
  Title,
  TitleInput,
  Line,
  AddImg,
  InfosBox,
  InfoBox,
  InfoName,
  InfoInput,
  CommentBox,
  CommentName,
  CommentInput,
  LocationBox,
  LocationName,
  LocationSearch,
  ButtonBox,
  FormButton,
} from './styles';
import { TfiCheck, TfiClose } from 'react-icons/tfi';

import LocationSearchInput from './func/LocationSearchInput';
import StarRating from './func/StarRating';

import './style.css';

const PostForm: React.FC = () => {
  const handleSubmit: any = (e: any) => {};

  const handleClose: any = () => {};

  return (
    <Modal>
      <ModalBody>
        <Title>
          <TitleInput placeholder="restaurant name"></TitleInput>
        </Title>
        <Line />
        <AddImg>이미지 들어올 영역</AddImg>
        <InfosBox>
          <InfoBox>
            <InfoName>Food</InfoName>
            <InfoInput placeholder="pizza"></InfoInput>
          </InfoBox>
          <InfoBox>
            <InfoName>Mood</InfoName>
            <InfoInput placeholder="special"></InfoInput>
          </InfoBox>
          <InfoBox>
            <InfoName>Score</InfoName>
            <StarRating />
          </InfoBox>
        </InfosBox>
        <Line />
        <CommentBox>
          <CommentName>Comment</CommentName>
          <CommentInput rows={8} placeholder={'Out of this world!!'} />
        </CommentBox>
        <Line />
        <LocationBox>
          <LocationName>Location</LocationName>
          <LocationSearch>
            <LocationSearchInput />
          </LocationSearch>
        </LocationBox>
        <ButtonBox>
          <FormButton onClick={handleSubmit}>
            <TfiCheck />
          </FormButton>
          <FormButton onClick={handleClose}>
            <TfiClose />
          </FormButton>
        </ButtonBox>
      </ModalBody>
    </Modal>
  );
};

export default PostForm;
