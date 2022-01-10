import React, { useState } from 'react';
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
import { useNavigation } from '@react-navigation/native';
import { cores } from '../../../style-global';
import api from '../../../services/api';
import LogotipoBig from '../../../components/Logotipo/LogotipoBig/LogotipoBig';

export default function RecoverPassword() {
  const [getDataEmail, setgetDataEmail] = useState();
  const navigation = useNavigation();
  const image = require('../../../assets/plano-de-fundo.webp');

  function getPassword() {
    if (!getDataEmail) {
      alert('Por favor, preencha o campo e-mail!');
    } else {
      let formData = {
        email: getDataEmail,
      };
      api
        .post('esqueci-minha-senha', formData)
        .then((r) => alert(r.data.message), setgetDataEmail(''))
        .catch((err) => alert(err.response.data.message));
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
            <Text style={style.titulo}>Esqueceu sua senha?</Text>
            <Text style={style.subTitulo}>
              Digite seu e-mail para trocar sua senha:
            </Text>
            <TextInput
              style={style.input}
              value={getDataEmail}
              placeholder="digite seu E-mail"
              placeholderTextColor={cores.preto}
              onChangeText={(text) => setgetDataEmail(text)}
            />
            <View style={style.buttonContainer}>
              <TouchableOpacity style={style.buttonLogin} onPress={getPassword}>
                <Text style={style.buttonText}>Enviar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={style.buttonLogin}
                onPress={() => navigation.navigate('Login')}
              >
                <Text style={style.buttonText}>Voltar</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </>
  );
}
