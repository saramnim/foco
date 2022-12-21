import axios from 'axios';
import { useEffect, useState } from 'react';

import Header from '../Header/Header';
import ReviewForm from '../PostForm/PostForm';
import AddImg from '../PostForm/func/AddImg';
import PostFormModal from '../PostFormMoal/PostFormModal';
// import Img from '../PostForm/func/Img';

import {
  ReviewButton,
  ReviewContainer,
  ReviewList,
  Title,
  ReviewManagement,
  ReviewPage,
} from './style';

const Post = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [reviews, setReviews] = useState<never[]>([]);

  useEffect(() => {
    const getReviews = async () => {
      const res = await axios.get('http://localhost:3000/Data/post.json');
      setReviews(res.data.data);
    };
    getReviews();
  }, []);

  const handleAddReview: any = () => {
    setModalOpen(true);
  };

  // const onSubmit: any = () => {
  //   alert('submit??');
  // };

  const onClose: any = (e: any) => {
    // e.preventDefault();
    setModalOpen(false);
  };

  return (
    <ReviewPage>
      {modalOpen && <PostFormModal onClose={onClose} />}
      {/* onSubmit={onSubmit} */}
      <Header />
      <ReviewContainer>
        <Title>review management</Title>
        <ReviewManagement>
          <ReviewButton onClick={handleAddReview}>+ review</ReviewButton>
          <ReviewList>
            {reviews.map(({ id, store, image }) => (
              <div key={id} className="review">
                <img src={image} alt="plz" />
                <div>{store}</div>
              </div>
            ))}
          </ReviewList>
        </ReviewManagement>
      </ReviewContainer>
    </ReviewPage>
  );
};

export default Post;
