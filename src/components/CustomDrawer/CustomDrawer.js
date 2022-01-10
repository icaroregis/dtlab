import React, { useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  Pressable,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { DrawerItemList } from '@react-navigation/drawer';
import style from './style';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { cores } from '../../style-global';
import { useNavigation } from '@react-navigation/native';
import { useFetch } from '../hooks/useFetch';
import { Picker } from '@react-native-picker/picker';
import { Col, Grid } from 'react-native-easy-grid';
// import { useFonts } from '@expo-google-fonts/poppins';

export default function CustomDrawer(props) {
  // let [loaded] = useFonts({
  //   Poppins: require('../../assets/fonts/Poppins-Regular.ttf'),
  // });

  // if (!loaded) {
  //   return null;
  // }

  const [typeOfSystem, setTypeOfSystem] = useState('');
  const navigation = useNavigation();
  const client = useFetch('/client');

  function navigationPage(event) {
    setTypeOfSystem(event);
    if (typeOfSystem === 1) {
      navigation.navigate('OverviewMaster');
    } else {
      navigation.navigate('Overview');
    }
  }

  const image = require('../../assets/plano-de-fundo.webp');
  return (
    <ImageBackground source={image} style={style.image}>
      <TouchableOpacity style={style.containerAvatar}>
        {!client.data?.model.logo ? (
          <FontAwesome name="user-circle" size={55} color={cores.branco} />
        ) : (
          <Image
            style={style.avatar}
            source={{
              uri: client.data?.model.logo,
            }}
          />
        )}
      </TouchableOpacity>

      <View style={style.containerDataUser}>
        <Text style={style.nome}>{client.data?.model.user.name}</Text>
        <Text style={style.email}>{client.data?.model.user.email}</Text>
      </View>

      <View style={style.containerPicker}>
        <View style={style.subContainerPicker}>
          <Picker
            selectedValue={typeOfSystem}
            onValueChange={(itemValue) => navigationPage(itemValue)}
            style={style.stylePickers}
          >
            <Picker.Item label="Escolher sistema..." value="" disabled={true} />
            {client.data?.model.licences.map((license) => {
              return (
                <Picker.Item
                  key={license.value}
                  value={license.value}
                  label={license.label}
                />
              );
            })}
          </Picker>
        </View>
      </View>

      <DrawerItemList {...props} style={style.listPages} />

      <Grid style={style.containerHeader}>
        <Col size={1} style={style.columOne}>
          <Image
            style={{ width: 20, height: 20 }}
            source={require('../../assets/logout.png')}
          />
        </Col>
        <Col size={1} style={style.columThwo}>
          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? 'rgb(0, 0, 0, 0.5)' : null,
              },
              style.logout,
            ]}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={style.iconText}>SAIR</Text>
          </Pressable>
        </Col>
        <Col size={1} style={style.colomThree}></Col>
      </Grid>
    </ImageBackground>
  );
}
