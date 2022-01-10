import React, { useState, useContext } from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  ImageBackground,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import style from './style';
import Checkbox from 'expo-checkbox';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { cores } from '../../../style-global';
import axios from 'axios';
import { urlBase } from '../../../services/api';
import LogotipoBig from '../../../components/Logotipo/LogotipoBig/LogotipoBig';
import { Context } from '../../../services/context';

export default function Login() {
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [hidePass, setHidePass] = useState(true);
  const [isChecked, setChecked] = useState(false);
  const navigation = useNavigation();
  const image = require('../../../assets/plano-de-fundo.webp');
  const { setToken, setGroup, setIdClient, token } = useContext(Context);

  async function accessAuthorization() {
    if (!inputEmail && !inputPassword) {
      alert('Os campos email e senha são obrigatórios');
    } else {
      await axios
        .post(urlBase + 'entrar', {
          email: inputEmail,
          password: inputPassword,
        })
        .then((r) => {
          setToken(r.data.token);
          setGroup(r.data.group);
          setIdClient(r.data.id);
          let firstLicense = r.data.client.licences[0].active;
          let secondLicense = r.data.client.licences[1].active;
          if (
            (firstLicense == 1 && secondLicense == 1) ||
            (firstLicense == 1 && secondLicense == 0) ||
            r.data.group == 'admin'
          ) {
            navigation.navigate('OverviewMaster');
          } else {
            navigation.navigate('Overview');
          }
          setInputEmail('');
          setInputPassword('');
        })
        .catch((err) => {
          if (!err.response) {
            alert('Oops, sistema fora do ar, tente novamente mais tarde.');
          } else {
            alert(err.response.data.message);
          }
        });
    }
  }

  return (
    <>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <ImageBackground source={image} style={style.image}>
          <SafeAreaView style={style.container}>
            <StatusBar />
            <LogotipoBig
              source={require('../../../assets/logo-dtlab.png')}
              alt="Logo DTLAB"
            />
            <Text style={style.titulo}>Acesso ao Painel</Text>
            <TextInput
              style={style.input}
              value={inputEmail}
              onChangeText={(text) => setInputEmail(text)}
              placeholder="Entre com seu e-mail"
              autoCapitalize="none"
              autoCorrect={false}
              placeholderTextColor={cores.preto}
            />
            <View style={style.inputAreaEye}>
              <TextInput
                style={style.inputPassword}
                value={inputPassword}
                onChangeText={(text) => setInputPassword(text)}
                placeholder="Insira sua senha"
                autoCapitalize="none"
                autoCorrect={false}
                placeholderTextColor={cores.preto}
                secureTextEntry={hidePass}
              />
              <TouchableOpacity
                style={style.iconEye}
                onPress={() => setHidePass(!hidePass)}
              >
                {hidePass ? (
                  <Ionicons name="eye-off" color={cores.cinza} size={20} />
                ) : (
                  <Ionicons name="eye" color={cores.cinza} size={20} />
                )}
              </TouchableOpacity>
            </View>

            <View style={style.containerMasterCheckBox}>
              <Checkbox
                style={style.containerCheckBox}
                value={isChecked}
                onValueChange={setChecked}
              />
              <Text style={style.textCheckBox}>Lembrar acesso</Text>
            </View>
            <TouchableOpacity
              style={style.textSenha}
              onPress={() => navigation.navigate('RecoverPassword')}
            >
              <Text style={style.textSenha}>Esqueceu sua senha?</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={style.buttonLogin}
              onPress={accessAuthorization}
            >
              <Text style={style.buttonText}>Acessar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={style.textCadastro}
              onPress={() => navigation.navigate('RegistrationForm')}
            >
              <Text style={style.textTitulo}>Solicite um cadastro</Text>
            </TouchableOpacity>
          </SafeAreaView>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </>
  );
}
