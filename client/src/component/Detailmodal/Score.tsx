import { AiFillStar } from 'react-icons/ai';
import { TextTitle, Text } from './Modalstyle';

const Score = () => {
  return (
    <TextTitle>
      score
      <Text>
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar /> (4.0)
      </Text>
    </TextTitle>
  );
};

export default Score;
