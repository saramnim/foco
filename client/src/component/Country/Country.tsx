import React, { useState } from 'react';
import { useParams } from 'react-router';
import { CountryWrapper, Title } from './style';
import MultiSelectBox from '../MultiSelectBox/MultiSelectBox';
import Content from '../Content/Content';

const Country = () => {
  // TODO : type error 해결해야함
  // const [country, setCountry] = useState<any>('');
  const params = useParams();
  const country = params.country;
  // console.log(typeof countryName) //string
  //setCountry(countryName);

  return (
    <CountryWrapper>
      <Title>{country}</Title>
      <MultiSelectBox />
      <Content country={country}></Content>
    </CountryWrapper>
  );
};

export default Country;
