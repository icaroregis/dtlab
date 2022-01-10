import React, { useState } from 'react';
import { TouchableOpacity, Modal, View, Text, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { cores } from '../../style-global';
import { useFetch } from '../hooks/useFetch';
import style from './style';
import moment from 'moment';

export default function ButtonTable({ id }) {
  const [visible, setVisible] = useState(false);
  const listAlerts = useFetch(`/readings/warnings/${id}`);

  function closeModal() {
    setVisible(false);
  }

  function openModal() {
    setVisible(true);
  }

  return (
    <>
      <TouchableOpacity onPress={openModal}>
        <Image
          style={{ width: 20, height: 20 }}
          source={require('../../assets/Eye.png')}
        />
      </TouchableOpacity>
      <Modal
        visible={visible}
        onDismiss={() => setVisible(true)}
        onRequestClose={() => setVisible(false)}
        animationType="slide"
        transparent={true}
      >
        <View style={style.containerModalMaster}>
          <View style={style.containerModal}>
            <View style={style.cotainerContent}>
              <View style={style.subContainer}>
                <TouchableOpacity
                  onPress={closeModal}
                  style={style.containerClose}
                >
                  <AntDesign name="close" size={14} color={cores.preto} />
                </TouchableOpacity>
              </View>

              <View style={style.containerTitleText}>
                <Text style={style.title}>Detalhes</Text>
              </View>

              <View style={style.serial}>
                <Text style={style.titleSerial}>Código de leitura: </Text>
              </View>
              <View style={style.numberSerial}>
                <Text style={style.subTitleSerial}>
                  {listAlerts.data?.model._id}
                </Text>
              </View>

              <View style={style.serial}>
                <Text style={style.titleSerial}>Serial: </Text>
                <Text style={style.subTitleSerial}>
                  {listAlerts.data?.model.espid}
                </Text>
              </View>

              <View style={style.serial}>
                <Text style={style.titleSerial}>Temperatura: </Text>
                <Text style={style.subTitleSerial}>
                  {listAlerts.data?.model.value}°
                </Text>
              </View>
              <View style={style.serial}>
                <Text style={style.titleSerial}>Umidade: </Text>
                <Text style={style.subTitleSerial}>
                  {listAlerts.data?.model.value}°
                </Text>
              </View>
              <View style={style.serial}>
                <Text style={style.titleSerial}>Data: </Text>
                <Text style={style.subTitleSerial}>
                  {moment(listAlerts.data?.model.epoch).format(
                    'DD/MM/YY HH:mm',
                  )}
                </Text>
              </View>
              <View style={style.serial}>
                <Text style={style.titleSerial}>Observação: </Text>
                <Text style={style.subTitleSerial}>
                  {listAlerts.data?.model.obs}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}
