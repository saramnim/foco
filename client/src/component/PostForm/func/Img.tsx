import React from 'react';
import ImageUploading, { ImageListType } from 'react-images-uploading';

function Img() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 5;

  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList as never[]);
  };

  return (
    <div className="App">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <div className="img-btn-box">
              <button
                style={isDragging ? { color: 'red' } : undefined}
                onClick={onImageUpload}
                {...dragProps}
              >
                Click or Drop here
              </button>
              <button onClick={onImageRemoveAll}>Remove all images</button>
            </div>
            <div className="imgList">
              {imageList.map((image, index) => (
                <div key={index} className="image-item">
                  <div className="img-box">
                    <img src={image.dataURL} alt="이미지 실패..." />
                  </div>
                  <div className="image-item__btn-wrapper">
                    <button onClick={() => onImageUpdate(index)}>Update</button>
                    <button onClick={() => onImageRemove(index)}>Remove</button>
                  </div>
                  <div className="img-input">
                    <label htmlFor="">
                      <input type="text" placeholder="menu" />
                    </label>
                    <label htmlFor="">
                      <input type="text" placeholder="price" />
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </ImageUploading>
    </div>
  );
}

export default Img;
