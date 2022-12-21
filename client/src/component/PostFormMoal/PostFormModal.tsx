import {
  Modal,
  ModalBody,
  Header,
  Likes,
  Close,
  Main,
  Intro,
  ImageBox,
  Tag,
  Review,
  Button,
  Title,
  Address,
  Rate,
  Input,
} from './style';
import StarRating from './func/StarRating';
import { IoIosClose } from 'react-icons/io';

import { useState, useEffect } from 'react';
import AddImages from './func/AddImages';

const PostFormModal: any = (props: any) => {
  const [stars, setStars] = useState<number>();

  useEffect(() => {}, []);

  return (
    <Modal>
      <ModalBody>
        <Header>
          <Likes>컴포넌트 삽입</Likes>
          <Close onClick={props.onClose}>
            <IoIosClose />
          </Close>
        </Header>
        <Main>
          <Intro>
            <Title>
              <input
                className="store"
                placeholder="wirte store name..."
              ></input>
            </Title>
            <Address>
              <Input placeholder="write address..."></Input>
              <Input placeholder="city"></Input>
            </Address>
            <Rate>
              <StarRating name="rate" setStars={setStars}></StarRating>
            </Rate>
          </Intro>
          <ImageBox>
            <AddImages></AddImages>
          </ImageBox>
          <Tag>
            <input name="mood" type="text" placeholder="#special" />
            <input name="food" type="text" placeholder="#pasta" />
          </Tag>
          <Review>
            <textarea
              maxLength={500}
              rows={4}
              placeholder={
                'I’m pleasure to recommend this restaurant to you:) It’s very delicious! What a Nice Day!'
              }
            />
            <span>500자</span>
          </Review>
          <Button>
            <button>submit</button>
          </Button>
        </Main>
      </ModalBody>
    </Modal>
  );
};

export default PostFormModal;
