import React from 'react';
import { SafeAreaView, StatusBar, View, Text, ScrollView } from 'react-native';
import style from './style';
import Header from '../../components/Header';
import { Card } from 'native-base';
import { cores } from '../../style-global';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useFetch } from '../../components/hooks/useFetch';

export default function Notifications() {
  const listAlerts = useFetch('/clientes/notificacoes');
  return (
    <SafeAreaView style={style.container}>
      <StatusBar />
      <Header />
      <Card style={style.card} transparent>
        {/* {icone} */}
        <View style={style.containerBodyIcon}>
          <AntDesign name="notification" size={24} color={cores.preto} />
          <Text style={style.containerText}>Notificações</Text>
        </View>
        <Text style={style.containerSubHeader}>Gestão de Notificações</Text>
        {/* {icone} */}
        <View style={style.spacing} />
        <ScrollView showsVerticalScrollIndicator={false}>
          {listAlerts.data?.alerts.map((post) => {
            return (
              <View style={style.containerMasterItem} key={post.id}>
                <View style={style.icone}>
                  <Ionicons
                    name="notifications-outline"
                    size={27}
                    color={cores.vinho}
                  />
                </View>
                <Text style={style.comments}>{post.obs}</Text>
              </View>
            );
          })}
        </ScrollView>
      </Card>
    </SafeAreaView>
  );
}
