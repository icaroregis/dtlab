import React, { useState, useContext } from 'react';
import LogoTipoLittle from '../Logotipo/LogotipoLittle/LogotipoLittle';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import style from './style';
import { Card } from 'native-base';
import { cores } from '../../style-global';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { urlBase } from '../../services/api';
import axios from 'axios';
import { Context } from '../../../src/services/context';
import SecondHeader from '../Header/secondHeader';

export default function NewPassword() {
  const navigation = useNavigation();
  const image = require('../../assets/plano-de-fundo.webp');
  const { idClient, group, token } = useContext(Context);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordTwo, setNewPasswordTwo] = useState('');

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  async function getPassword() {
    if (newPassword !== newPasswordTwo) {
      alert('A senhas apresentam divergências');
    }
    if (!newPassword && !newPasswordTwo) {
      alert('Os campos nova senha e confirme sua nova senha são obrigatórios');
    } else {
      await axios
        .put(
          urlBase + group + '/user',
          {
            password_old: oldPassword,
            password: newPassword,
            password_confirmation: newPasswordTwo,
          },
          config,
        )
        .then(() => {
          setNewPassword('');
          setNewPasswordTwo('');
          setOldPassword('');
          alert('Senha alterada com sucesso!');
        })
        .catch((err) => {
          alert(err.response);
        });
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={style.container}>
        <StatusBar />
        <SecondHeader page="MyAccount" />
        <Card style={style.card} transparent>
          <View style={style.containerBodyIcon}>
            <MaterialCommunityIcons
              name="onepassword"
              size={28}
              color={cores.preto}
            />
            <Text style={style.containerText}>Trocar senha</Text>
          </View>
          <Text style={style.containerSubHeader}>Gestão de senha</Text>

          <View style={style.spacing} />

          <Text>Digite sua antiga senha</Text>
          <TextInput
            style={style.inputPassword}
            value={oldPassword}
            onChangeText={(value) => setOldPassword(value)}
            autoCapitalize="none"
            autoCorrect={false}
            KeyboardType="password"
            secureTextEntry={true}
          />

          <Text>Digite sua nova senha</Text>
          <TextInput
            style={style.inputPassword}
            value={newPassword}
            onChangeText={(value) => setNewPassword(value)}
            autoCapitalize="none"
            autoCorrect={false}
            KeyboardType="password"
            secureTextEntry={true}
          />

          <Text>Confirme sua nova senha</Text>
          <TextInput
            style={style.inputPassword}
            value={newPasswordTwo}
            onChangeText={(value) => setNewPasswordTwo(value)}
            autoCapitalize="none"
            autoCorrect={false}
            KeyboardType="password"
            secureTextEntry={true}
          />

          <View style={style.containerButtons}>
            <Pressable style={style.buttonMyAccount} onPress={getPassword}>
              <Text style={style.buttonStyle}>Salvar Alterações</Text>
            </Pressable>
          </View>
        </Card>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
