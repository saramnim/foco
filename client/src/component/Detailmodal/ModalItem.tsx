import { Box, ItemBox, Item, ItemText } from './Modalstyle';

const ItemSet = () => {
  return (
    <Box>
      <ItemBox>
        <Item src={require('./img2.png')} />
        <ItemText>한우 꽃등심 스테이크</ItemText>
        <ItemText>$23.80</ItemText>
      </ItemBox>
      <ItemBox>
        <Item src={require('./img2.png')} />
        <ItemText>한우 꽃등심 스테이크</ItemText>
        <ItemText>$23.80</ItemText>
      </ItemBox>
      <ItemBox>
        <Item src={require('./img2.png')} />
        <ItemText>한우 꽃등심 스테이크</ItemText>
        <ItemText>$23.80</ItemText>
      </ItemBox>
    </Box>
  );
};
export default ItemSet;
