import { Img, Content, TextBox, TextTitle, Text } from './Modalstyle';
import { AiFillStar } from 'react-icons/ai';
import Score from './Score';
const ContentWrapper = () => {
  return (
    <Content>
      <TextBox>
        <TextTitle>
          food<Text>#steak, #pasta</Text>
        </TextTitle>
        <TextTitle>
          mood<Text>#data, #romantic</Text>
        </TextTitle>
        <Score />
      </TextBox>
      <Img src={require('./DashLine.png')}></Img>
      <TextBox>
        <TextTitle>
          Comment
          <Text>
            It's very delicious.
            <br />
            If you don't have anything, just don't do that!
            <br />
            If you don't have anything, just don't do that!
            <br />
            If you don't have anything, just don't do that!
            <br />
            If you don't have anything, just don't do that!
            <br />
            If you don't have anything, just don't do that!
            <br />
            If you don't have anything, just don't do that!
            <br />
            If you don't have anything, just don't do that!
            <br />
            If you don't have anything, just don't do that!
          </Text>
        </TextTitle>
      </TextBox>
      <Img src={require('./DashLine.png')}></Img>
      <TextTitle>
        Detailed Location<Text>In your Heart</Text>
      </TextTitle>
    </Content>
  );
};

export default ContentWrapper;
