import styled from 'styled-components';

export const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const ModalBody = styled.div`
  width: 50vw;
  height: 70vh;
  border-radius: 30px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 0 26px;
`;

export const Likes = styled.div``;

export const Close = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  border: none;
  background-color: white;
  cursor: pointer;
`;
export const Main = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px 70px;
`;
export const Intro = styled.div`
  width: 100%;
  height: 20%;
  border-left: solid 4px black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 30px;
  margin-bottom: 20px;

  & input {
    margin-bottom: 14px;

    &.store {
      font-size: 5vh;
    }
  }

  & svg {
    width: 1.8vh;
    height: 1.8vh;
  }
`;

export const Title = styled.div`
  width: 100%;

  & input {
    width: 100%;
  }
`;

export const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 22vh;
  border: 1px solid black;
  margin-bottom: 15px;
  display: flex;

  //   div {
  //     border: 1px solid black;
  //     width: 14vw;
  //     height: 100%;
  //     margin-right: 15px;
  //   }
`;

//  260vw //

export const ImageButton = styled.div`
  padding: 10px;
`;

export const ImageList = styled.div`
  display: flex;
  width: 100%;
  overflow: auto;

  & .react-horizontal-scrolling-menu--wrapper {
    width: 100%;

    & ::-webkit-scrollbar {
      height: 14px;
    }

    & ::-webkit-scrollbar-track {
      background-color: white;
      border-radius: 10px;
    }

    & ::-webkit-scrollbar-thumb {
      background-color: #eaeaea;
      border-radius: 10px;
      background-clip: padding-box;
      border: 2px solid transparent;
    }

    & .react-horizontal-scrolling-menu--arrow-right button,
    .react-horizontal-scrolling-menu--arrow-left button {
      z-index: 99;
      border: none;
      background-color: white;
      box-shadow: 0px 0px 25px 30px white;
    }
  }
`;

export const ImageItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 15px;
`;

export const Image = styled.div`
  border: 1px solid gray;
  width: 220px;
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  //   background-color: pink;

  & img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
`;

export const ImageItemButton = styled.div`
  display: flex;
  justify-content: center;
`;

export const ImageInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & input:first-child {
    margin-bottom: 5px;
  }
`;

export const Tag = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: center;
  align-items: center;

  & input:first-child {
    margin-right: 20px;
  }

  & input {
    font-size: 1.3vh;
  }
`;

export const Review = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & textarea {
    width: 100%;
    height: 50%;
    padding: 7px;
    font-size: 1.5vh;
  }
`;
export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & button {
    font-size: 18px;
    border: none;
    border-radius: 12px;
    padding: 8px 20px;

    &:hover {
      cursor: pointer;
      background-color: #e6ddc4;
    }
  }
`;

export const Address = styled.div`
  font-size: 1.6vh;
`;
export const Rate = styled.div``;
export const Input = styled.input``;
