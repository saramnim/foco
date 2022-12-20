import { ImgUploadBox, ImgInfo, ImgLabel, ImgInput } from '../styles';

const ImgContent: React.FC = () => {
  return (
    <ImgUploadBox>
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
    </ImgUploadBox>
  );
};

export default ImgContent;
