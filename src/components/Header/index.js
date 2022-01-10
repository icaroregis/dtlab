import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import style from './style';
import { useNavigation } from '@react-navigation/native';
import LogoTipoLittle from '../Logotipo/LogotipoLittle/LogotipoLittle';
import { Col, Grid } from 'react-native-easy-grid';

export default function Header() {
  const navigation = useNavigation();

  return (
    <View style={style.image}>
      <Grid style={style.containerHeader}>
        <Col style={style.columnOne} size={1}>
          <TouchableOpacity
            style={style.subHeader}
            onPress={() => navigation.openDrawer()}
          >
            <Text style={style.textStyle}>
              <Image
                style={style.newHamburguer}
                source={require('../../assets/newhamburguer.png')}
              />
            </Text>
          </TouchableOpacity>
        </Col>
        <Col style={style.columnTwo} size={2}>
          <TouchableOpacity onPress={() => navigation.navigate('Overview')}>
            <LogoTipoLittle
              source={require('../../assets/logo-dtlab.png')}
              alt="Logo DTLAB"
              style={style.iconBackground}
            />
          </TouchableOpacity>
        </Col>
        <Col style={style.columnThree} size={1}>
          <TouchableOpacity
            style={style.subHeader}
            onPress={() => navigation.navigate('MyAccount')}
          >
            <Text style={style.textStyle}>
              <Image
                style={style.newHamburguer}
                source={require('../../assets/myaccount.png')}
              />
            </Text>
          </TouchableOpacity>
        </Col>
      </Grid>
    </View>
  );
}
