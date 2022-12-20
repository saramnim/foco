import {
  ImgUploadBox,
  AddImg,
  Img,
  ImgInfo,
  ImgLabel,
  ImgButtonBox,
} from '../styles';

const UploadedImg: React.FC = () => {
  return (
    <ImgUploadBox>
      <AddImg>
        <Img src="./Data/img/food.png"></Img>
      </AddImg>
      <ImgInfo>
        <ImgLabel>
          <span>menu</span>
          <span>steak</span>
        </ImgLabel>
        <ImgLabel>
          <span>price</span>
          <span>23.8</span>
        </ImgLabel>
      </ImgInfo>
      <ImgButtonBox>
        <button>Edit</button>
        <button>Delete</button>
      </ImgButtonBox>
    </ImgUploadBox>
  );
};

export default UploadedImg;
