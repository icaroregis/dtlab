import React from 'react';
import { Image } from 'react-native';
import styleTwo from './styleTwo';

export default function LogotipoLittle(props) {
  return (
    <Image style={styleTwo.imagem} source={props.source} alt={props.alt} />
  );
}
