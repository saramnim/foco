import styled from 'styled-components';

export const ModalBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const CloseWrapper = styled.div`
  // font-size: 12px;
  // color: black;
`;
export const ModalBg = styled.div`
  background: no-repeat
    url('https://cdn.discordapp.com/attachments/1025667513629016165/1052643859542315018/image.png');
  back-ground-size: contain;
  font-family: 'Kaushan Script', cursive;
  position: fixed;

  width: auto;
  height: 100%;
  margin: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  // margin-bottom: 700px;
  padding-top: 7vh;
  height: 90vh;
  width: 650px;
`;
export const ModalTitle = styled.div`
  // position: absolute;
  font-weight: 700;
  font-size: 40px;
  text-align: center;
  // color: #000000;
`;
export const IconsWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  margin-top: 6vh;
  margin-left: 1%;
  font-size: 16px;
`;

export const IconHeart = styled.div`
  padding-left: 2vh;
  color: red;
`;
export const IconScrap = styled.div`
  padding-left: 2vh;
  color: gold;
`;
export const PostMan = styled.div`
  position: absolute;
  width: 100%;
  margin-left: 600px;
  font-size: 16px;
`;
export const Img = styled.img`
  // align-items: center;
  width: 15vw;
  // margin-top: auto;
`;
export const Box = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem;
`;
export const ItemBox = styled.div`
  text-align: center;
`;
export const Item = styled.img`
  width: 12vw;
  border-radius: 5px;
  padding: 0.2vw;
  // :hover {
  //   width: 15vw;
  //   transform: scale(1.5);
  //   transition: transform 0.5s;
  // }
`;
export const ItemText = styled.li`
  width: 100%;
  height: 2.5vh;
  padding: 7px;

  list-style-type: none;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;
export const TextBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 1rem;
  width: 100%;
  // height: 100%;
  font-size: 20px;
`;
export const TextTitle = styled.span`
  margin-bottom: 0.5rem;
  text-align: center;
  font-weight: 400;
  font-size: 20px;
  line-height: 100%;
`;
export const Text = styled.div`
  margin-top: 1rem;
  font-size: 16px;
  list-style-type: none;
  + li {
    padding: 0.5rem;
  }
`;
export const Scroll = styled.div`
  width: 80%;
  height: 8px;
  margin: 0.5rem;
  background: #d9d9d9;
  border-radius: 11px;
`;
