import { Img, Content, TextBox, TextTitle, Text } from './Modalstyle';
import { AiFillStar } from 'react-icons/ai';
import Score from './Score';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Icontent } from './Icontent';

const ContentWrapper = () => {
  const [image, setimage] = useState<any[]>([]);
  const getData = () => {
    return axios({
      method: 'get',
      url: 'http://localhost:3000/Data/detailPost.json',
    }).then((res) => {
      setimage(res.data.data);
      // const itemList = res.data;
      console.log(image);
    });
  };
  useEffect(() => {
    const fetchData = async () => {
      await getData();
    };
    fetchData();
  }, []);

  return (
    <div>
      {image.map((detail: Icontent, index: number) => {
        return (
          <Content key={index}>
            <TextBox>
              <TextTitle>
                food<Text>{detail.food}</Text>
              </TextTitle>
              <TextTitle>
                mood<Text>{detail.mood}</Text>
              </TextTitle>
              <Score />
            </TextBox>
            <Img src={require('./DashLine.png')}></Img>
            <TextBox>
              <TextTitle>
                Comment
                <Text>{detail.review}</Text>
              </TextTitle>
            </TextBox>
            <Img src={require('./DashLine.png')}></Img>
            <TextTitle>
              Detailed Location<Text>{detail.address}</Text>
            </TextTitle>
          </Content>
        );
      })}
    </div>
  );
};

export default ContentWrapper;
