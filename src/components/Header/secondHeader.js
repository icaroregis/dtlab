import React from 'react';
import { ImageBackground, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import style from './style';
import { cores } from '../../style-global';
import { useNavigation } from '@react-navigation/native';
import LogoTipoLittle from '../Logotipo/LogotipoLittle/LogotipoLittle';
import { Col, Grid } from 'react-native-easy-grid';

export default function Header({ page }) {
  const image = require('../../assets/plano-de-fundo.webp');
  const navigation = useNavigation();

  return (
    <ImageBackground source={image} style={style.image}>
      <Grid style={style.containerHeader}>
        <Col size={1}>
          <TouchableOpacity
            style={style.subHeader}
            onPress={() => navigation.navigate(page)}
          >
            <Ionicons name="arrow-back" size={40} color={cores.cinza} />
          </TouchableOpacity>
        </Col>
        <Col style={style.columnTwo} size={1}>
          <TouchableOpacity onPress={() => navigation.navigate('Overview')}>
            <LogoTipoLittle
              source={require('../../assets/logo-dtlab.png')}
              alt="Logo DTLAB"
              style={style.iconBackground}
            />
          </TouchableOpacity>
        </Col>
        <Col size={1}></Col>
      </Grid>
    </ImageBackground>
  );
}
