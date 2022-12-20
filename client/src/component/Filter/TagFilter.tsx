import React, { useCallback, useState } from 'react';
import { KeywardWrapper, KeywardTitle, KeywardInput, Button } from './TagStyle';

const SearchBar = () => {
  const [hashtag, setHashtag] = useState<string | ''>('');
  const [hashArr, setHashArr] = useState<string[] | []>([]);
  // const onChangeKeyward = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setKeyward(e.target.value);
  // };
  // const onkeyup = useCallback(
  //   (e) => {
  //     if (process.browser) {
  //       /* 요소 불러오기, 만들기*/
  //       const $HashWrapOuter = document.querySelector('.HashWrapOuter');
  //       const $HashWrapInner = document.createElement('div');
  //       $HashWrapInner.className = 'HashWrapInner';

  //       /* 태그를 클릭 이벤트 관련 로직 */
  //       $HashWrapInner.addEventListener('click', () => {
  //         $HashWrapOuter?.removeChild($HashWrapInner);
  //         console.log($HashWrapInner.innerHTML);
  //         setHashArr(hashArr.filter((hashtag) => hashtag));
  //       });

  //       /* enter 키 코드 :13 */
  //       if (e.keyCode === 13 && e.target.value.trim() !== '') {
  //         console.log('Enter Key 입력됨!', e.target.value);
  //         $HashWrapInner.innerHTML = '#' + e.target.value;
  //         $HashWrapOuter?.appendChild($HashWrapInner);
  //         setHashArr((hashArr) => [...hashArr, hashtag]);
  //         setHashtag('');
  //       }
  //     }
  //   },
  //   [hashtag, hashArr]
  // );
  return (
    <KeywardWrapper>
      <KeywardTitle>mood</KeywardTitle>
      <KeywardInput
        type="text"
        // onChange={onChangeKeyward}
        // onKeyUp={onkeyup}
        placeholder="해시태그 입력"
      />
      {/* <Button type="button" className="search">
        <span>검색</span>
      </Button> */}
    </KeywardWrapper>
  );
};

export default SearchBar;
