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

export const ModalBody = styled.form`
  width: 960px;
  height: 1200px;
  background: no-repeat
    url('https://cdn.discordapp.com/attachments/1025667513629016165/1052643859542315018/image.png');
  background-size: contain;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const TitleInput = styled.input`
  width: 500px;
  height: 60px;
  font-size: 40px;
  padding: 5px;
`;

export const Line = styled.hr`
  width: 60%;
  border: 0;
  border-top: 3px dotted black;
`;

export const ImgsBox = styled.div`
  display: flex;
  border: 1px solid black;
  padding: 10px;
  width: 90%;
  height: 260px;
`;

export const InfosBox = styled.div`
  height: 150px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoName = styled.span`
  font-size: 25px;
  text-align: center;
  margin-bottom: 15px;
`;

export const InfoInput = styled.input`
  font-size: 16px;
  padding: 5px;
`;

export const CommentBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px 0;
`;

export const CommentName = styled.span`
  font-size: 25px;
  text-align: center;
  margin-bottom: 15px;
`;

export const CommentText = styled.div`
  background-color: teal;
  width: 550px;
  display: flex;
  justify-content: center;
  align-items: center;

  & textarea {
    width: 100%;
    padding: 7px;
  }
`;

export const LocationBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
`;

export const LocationName = styled.span`
  font-size: 25px;
  margin-bottom: 15px;
`;

export const LocationSearch = styled.div`
  display: flex;
  flex-direction: column;

  & input:first-child {
    margin-bottom: 10px;
  }
`;

export const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const FormButton = styled.button`
  border: none;
  font-size: 36px;
  background-color: #f0e9d2;
  padding: 8px 80px;
  border-radius: 30px;

  &:nth-of-type(1) {
    margin-right: 100px;
  }

  &:hover {
    background-color: #e6ddc4;
    cursor: pointer;
  }
`;

// -------------------------- AddImg --------------------------

// -------------------------- UploadImg --------------------------

export const ImgUploadBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-right: 10px;
  width: 220px;
`;

export const ImgHeader = styled.div``;

export const AddImg = styled.div`
  width: 100%;
  height
`;

export const ImgButtonHeader = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 140px;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  margin-bottom: 10px;

  svg {
    font-size: 50px;
    margin-bottom: 10px;
  }
`;
// background-color: rgba(0, 0, 0, 0);

export const ImgButton = styled.button``;

export const ImgInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 6px;

  & input {
    margin-left: 10px;
    width: 140px;
  }

  & label:last-of-type {
    margin-top: 7px;

    & input {
      margin-left: 15px;
    }
  }
`;

export const ImgLabel = styled.label`
  display: flex;

  & span {
  }
`;

export const ImgInput = styled.input``;

export const ImgButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  & button {
    padding: 4px 8px;

    &:nth-child(2) {
      margin-left: 10px;
    }
  }
`;

// -------------------------- UploadedImg --------------------------

export const Img = styled.img`
  height: 140px;
`;
