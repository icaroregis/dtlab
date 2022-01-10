import React from 'react';
import { View, Text } from 'react-native';
import style from './style';
import { Ionicons } from '@expo/vector-icons';
import { cores } from '../../style-global';

export default function HeaderChild() {
  return (
    <>
      <View style={style.containerBodyIcon}>
        <Ionicons name="notifications-outline" color={cores.preto} size={30} />
        <Text style={style.containerText}>Alertas</Text>
      </View>

      <Text style={style.containerSubHeader}>Gestão de Lembretes</Text>
    </>
  );
}
