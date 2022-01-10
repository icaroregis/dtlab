import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import style from '../../components/CustomDrawer/style';

export default function OverviewMaster() {
  const navigation = useNavigation();
  return (
    <>
      <Text>Pagina de Dashboards de Gestão</Text>
      <TouchableOpacity
        style={style.teste}
        onPress={() => navigation.navigate('Overview')}
      >
        <Text>Voltar para home</Text>
      </TouchableOpacity>
    </>
  );
}
