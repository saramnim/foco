import {
  ImageButton,
  ImageList,
  ImageItem,
  Image,
  ImageItemButton,
  ImageInfo,
} from '../style';
import { useState } from 'react';

const AddImages: any = () => {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  const handleImgChange = (e: any) => {
    if (e.target.files) {
      const fileArray: string[] = Array.from(e.target.files).map((file: any) =>
        URL.createObjectURL(file)
      );

      const newArr = [...fileArray];

      setSelectedImages((prevImages) => prevImages.concat(newArr));
      // Array.from(e.target.files).map((file: any) => URL.revokeObjectURL(file));
    }
  };

  const handleRemoveImage: any = (idx: number) => {
    setSelectedImages([
      ...selectedImages.slice(0, idx),
      ...selectedImages.slice(idx + 1, selectedImages.length),
    ]);
  };

  const handleRemoveAllImages = () => {
    setSelectedImages([]);
  };

  const renderImages = (source: any) => {
    return source.map((src: any, idx: number) => {
      return (
        <ImageItem className="imgItem" key={src}>
          <Image>
            <img src={src} alt="이미지 로드 실패" />
          </Image>
          <ImageItemButton>
            <button onClick={() => handleRemoveImage(idx)}>remove</button>
          </ImageItemButton>
          <ImageInfo>
            <input placeholder="ex) steak" />
            <input placeholder="ex) 15,000" />
          </ImageInfo>
        </ImageItem>
      );
    });
  };
  return (
    <div>
      <ImageButton>
        <input
          onChange={handleImgChange}
          id="imgInput"
          type="file"
          accept="image/*"
          multiple
        />
        <button onClick={handleRemoveAllImages}>전체 삭제</button>
      </ImageButton>
      <ImageList>{renderImages(selectedImages)}</ImageList>
    </div>
  );
};

export default AddImages;
