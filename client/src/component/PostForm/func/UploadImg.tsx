import {
  ImgUploadBox,
  ImgHeader,
  AddImg,
  ImgButtonHeader,
  ImgButton,
  ImgInfo,
  ImgLabel,
  ImgInput,
  ImgButtonBox,
} from '../styles';

const UploadImg: React.FC = () => {
  return (
    <ImgUploadBox>
      <ImgHeader>
        <div>
          <ImgButton>Add images</ImgButton>
          <ImgButton>Remove all images</ImgButton>
        </div>
      </ImgHeader>

      {/* <AddImg>
        <ImgButtonHeader>
          <ImgButton>Add images</ImgButton>
          <ImgButton>Remove all images</ImgButton>
        </ImgButtonHeader>
      </AddImg>
      <ImgInfo>
        <ImgLabel>
          <span>menu</span>
          <ImgInput placeholder="steak"></ImgInput>
        </ImgLabel>
        <ImgLabel>
          <span>price</span>
          <ImgInput placeholder="23.8"></ImgInput>
        </ImgLabel>
      </ImgInfo>
      <ImgButtonBox>
        <button>Upload</button>
      </ImgButtonBox> */}
    </ImgUploadBox>
  );
};

export default UploadImg;
