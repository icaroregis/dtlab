import React from 'react';
import { Image } from 'react-native';
import styleOne from './styleOne';

export default function LogotipoBig(props) {
  return (
    <Image style={styleOne.imagem} source={props.source} alt={props.alt} />
  );
}
