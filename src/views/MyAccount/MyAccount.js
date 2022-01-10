import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Pressable,
  Image,
  ActivityIndicator,
} from 'react-native';
import style from './style';
import Header from '../../components/Header';
import { Card } from 'native-base';
import { cores } from '../../style-global';
import {
  FontAwesome,
  Entypo,
  MaterialCommunityIcons,
  Ionicons,
} from '@expo/vector-icons';
import { useFetch } from '../../components/hooks/useFetch';
import { useNavigation } from '@react-navigation/native';

export default function MyAccount() {
  const userInformationList = useFetch('/client');
  const navigation = useNavigation();

  return (
    <SafeAreaView style={style.container}>
      {!userInformationList.data ? (
        <ActivityIndicator size="large" color="#8e1c1c" style={style.loader} />
      ) : (
        <>
          <StatusBar />
          <Header />
          <Card style={style.card} transparent>
            {/* {icone} */}
            <View style={style.containerBodyIcon}>
              <MaterialCommunityIcons
                name="account-details"
                size={29}
                color={cores.preto}
              />
              <Text style={style.containerText}>Minha Conta</Text>
            </View>
            <Text style={style.containerSubHeader}>
              Gestão de dados cadastrais
            </Text>
            {/* {icone} */}
            <View style={style.spacing} />
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={style.containerIconeUser}>
                <TouchableOpacity style={style.containerTextIcone}>
                  {!userInformationList.data?.model.logo ? (
                    <Image
                      source={require('../../assets/user-icon.png')}
                      alt="Logo DTLAB"
                    />
                  ) : (
                    <Image
                      style={style.avatar}
                      source={{
                        uri: userInformationList.data?.model.logo,
                      }}
                      alt="Logo DTLAB"
                    />
                  )}
                </TouchableOpacity>
                <Text style={style.titleIcon}>
                  {userInformationList.data?.model.corporate_name}
                </Text>
                <View style={style.informations}>
                  <View style={style.telephone}>
                    <Ionicons
                      name="business"
                      size={24}
                      color={cores.preto}
                      style={style.telephoneIcon}
                    />
                    <Text style={style.textTelephone}>
                      {userInformationList.data?.model.document}
                    </Text>
                  </View>

                  <View style={style.telephone}>
                    <FontAwesome
                      name="phone"
                      size={24}
                      color={cores.preto}
                      style={style.telephoneIcon}
                    />
                    <Text style={style.textTelephone}>
                      {userInformationList.data?.model.phone1}
                    </Text>
                  </View>

                  <View style={style.telephone}>
                    <Entypo
                      name="address"
                      size={24}
                      color={cores.preto}
                      style={style.telephoneIcon}
                    />
                    <Text style={style.textTelephone}>
                      {userInformationList.data?.model.address}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={style.containerButtons}>
                <Pressable
                  style={style.buttonMyAccount}
                  onPress={() => navigation.navigate('NewPassword')}
                >
                  <Text style={style.buttonStyle}>Alterar senha</Text>
                </Pressable>
              </View>
            </ScrollView>
          </Card>
        </>
      )}
    </SafeAreaView>
  );
}
