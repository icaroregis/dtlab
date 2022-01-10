import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  ImageBackground,
  View,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import LogotipoBig from '../../../components/Logotipo/LogotipoBig/LogotipoBig';
import style from './style';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import { cores } from '../../../style-global';
import { uf } from '../../../components/data/uf';
import { urlBase } from '../../../services/api';
import axios from 'axios';

export default function RegistrationForm() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState([]);
  const [chosenCity, setChosenCity] = useState([]);
  const navigation = useNavigation();
  const image = require('../../../assets/plano-de-fundo.webp');

  async function getCities(e) {
    setState(e);
    let dataCity = {
      uf: e,
    };
    await axios
      .post(urlBase + 'lista-cidade', dataCity)
      .then((r) => {
        setCity(r.data.city);
      })
      .catch((err) => alert(err.response.data.message));
  }

  async function sendDataDatabase() {
    if (!nome && !email && !telefone && !chosenCity) {
      alert('Por favor, preencha todos os campos');
    } else {
      await api
        .post('solicitar-cadastro', {
          name: nome,
          email: email,
          phone: telefone,
          id_city: chosenCity,
        })
        .then(() => {
          setNome('');
          setEmail('');
          setTelefone('');
          setChosenCity('');
          alert(
            'Usuário cadastrado com sucesso. Em breve entraremos em contato',
          );
        })
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
            <Text style={style.titulo}>Solicitar cadastro</Text>
            <Text style={style.subTitulo}>
              Preencha os campos abaixo que em breve entraremos em contato:
            </Text>
            <TextInput
              style={style.input}
              value={nome}
              onChangeText={(text) => setNome(text)}
              placeholder="Nome completo"
              autoCapitalize="none"
              autoCorrect={false}
              placeholderTextColor={cores.preto}
            />
            <TextInput
              style={style.input}
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="Informe seu e-mail"
              autoCapitalize="none"
              autoCorrect={false}
              placeholderTextColor={cores.preto}
            />
            <TextInput
              style={style.input}
              value={telefone}
              onChangeText={(text) => setTelefone(text)}
              placeholder="Informe seu telefone"
              autoCapitalize="none"
              autoCorrect={false}
              placeholderTextColor={cores.preto}
            />

            <View style={style.divSelect}>
              <Picker
                style={style.inputSelect}
                selectedValue={state}
                onValueChange={getCities}
              >
                <Picker.Item value="all" label="Selecione um estado" />
                {uf.map((estado, key) => {
                  return (
                    <Picker.Item
                      value={estado.value}
                      label={estado.name}
                      key={key}
                    />
                  );
                })}
              </Picker>
            </View>

            <View style={style.divSelect}>
              <Picker
                style={style.inputSelect}
                selectedValue={chosenCity}
                onValueChange={(e) => setChosenCity(e)}
              >
                <Picker.Item value="all" label="Selecione uma cidade" />
                {city
                  ? city.map((cidade, key) => {
                      return (
                        <Picker.Item
                          value={cidade.id}
                          label={cidade.name}
                          key={key}
                        />
                      );
                    })
                  : ''}
              </Picker>
            </View>

            <View style={style.buttonContainer}>
              <TouchableOpacity
                style={style.buttonLogin}
                onPress={sendDataDatabase}
              >
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
