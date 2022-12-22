import React, { useState } from 'react';
import { KeywardWrapper, KeywardTitle, KeywardInput, Button } from './TagStyle';

const SearchBar = () => {
  const [keyward, setKeyward] = useState('');
  const onChangeKeyward = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyward(e.target.value);
  };
  return (
    <KeywardWrapper>
      <KeywardTitle>mood</KeywardTitle>
      <KeywardInput type="text" onChange={onChangeKeyward} />
      {/* <Button type="button" className="search">
        <span>검색</span>
      </Button> */}
    </KeywardWrapper>
  );
};

export default SearchBar;
