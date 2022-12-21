import {
  ImageButton,
  ImageList,
  ImageItem,
  Image,
  ImageItemButton,
  ImageInfo,
} from '../style';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { LeftArrow, RightArrow } from './ScrollFunc/Arrows';

import { useState, useEffect } from 'react';

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

  useEffect(() => {}, [selectedImages]);

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

  type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

  const onWheel = (
    apiObj: scrollVisibilityApiType,
    ev: React.WheelEvent
  ): void => {
    const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

    if (isThouchpad) {
      ev.stopPropagation();
      return;
    }

    if (ev.deltaY < 0) {
      apiObj.scrollNext();
    } else if (ev.deltaY > 0) {
      apiObj.scrollPrev();
    }
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
      <ImageList>
        <ScrollMenu
          onWheel={onWheel}
          LeftArrow={LeftArrow}
          RightArrow={RightArrow}
        >
          {renderImages(selectedImages)}
        </ScrollMenu>
      </ImageList>
    </div>
  );
};

export default AddImages;
