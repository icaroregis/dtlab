import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Image,
} from 'react-native';
import {
  MaterialCommunityIcons,
  FontAwesome,
  FontAwesome5,
  Entypo,
} from '@expo/vector-icons';
import { cores } from '../../style-global';
import style from './style';
import Header from '../../components/Header';
import { useNavigation } from '@react-navigation/native';
import { Col, Grid } from 'react-native-easy-grid';
import { useFetch } from '../../components/hooks/useFetch';
import { Context } from '../../services/context';
import InfoBall from '../../components/InfoBall';
import { versionCollector } from '../../components/data/versionCollectors';
import { Picker } from '@react-native-picker/picker';

export default function Overview() {
  const { idClient, setIdCollector, setNicknameCollector } =
    useContext(Context);
  const [idUnit, setIdUnit] = useState(null);
  const [idSector, setIdSector] = useState(null);
  const units = useFetch('/units?all=true');
  const sectors = useFetch('/sectors?all=true');
  const listRooms = useFetch('/rooms?all=true');
  const listCollectors = useFetch(`/clientes/${idClient}/monitoramento`, 30000);
  const navigation = useNavigation();

  function handleSubmit(collectors) {
    setIdCollector(collectors.id);
    setNicknameCollector(collectors.nickname);
    navigation.navigate('CollectorGraphics');
  }

  return (
    <SafeAreaView style={style.container}>
      {!listCollectors.data ? (
        <ActivityIndicator size="large" color="#8e1c1c" style={style.loader} />
      ) : (
        <>
          <StatusBar style={style.containerFather} />
          <Header style={style.containerFather} />
          <ScrollView style={style.containerFather}>
            <View style={style.body}>
              <View style={style.containerBody}>
                {/* {icone} */}

                <View style={style.containerBodyIcon}>
                  <Text style={style.containerSubHeader}>
                    INDICADORES DE DESEMPENHO
                  </Text>
                  <Text style={style.containerText}>Visão Geral</Text>
                </View>

                {/* {icone} */}
                {/* <TouchableOpacity style={style.divInput}>
              <Text style={style.text}>Filtro</Text>
              <MaterialCommunityIcons
                name="filter-menu"
                size={24}
                color="black"
              />
            </TouchableOpacity> */}
                <View style={style.containerDivSelect}>
                  <View style={style.divSelect}>
                    <Picker
                      style={style.inputSelect}
                      selectedValue={idUnit}
                      onValueChange={(itemValue) => setIdUnit(itemValue)}
                    >
                      <Picker.Item label="Unidade" value="" disabled={true} />
                      {units.data?.models.map((map) => {
                        return (
                          <Picker.Item
                            key={map.id}
                            label={map.name}
                            value={map.id}
                          />
                        );
                      })}
                    </Picker>
                  </View>

                  <View style={style.divSelect}>
                    <Picker
                      style={style.inputSelect}
                      selectedValue={idSector}
                      onValueChange={(itemValue, itemIndex) =>
                        setIdSector(itemValue)
                      }
                    >
                      <Picker.Item label="Setor" value="" />
                      {sectors.data?.models
                        .filter((fill) => fill.id_unit == idUnit)
                        .map((map) => {
                          return (
                            <Picker.Item label={map.name} value={map.id} />
                          );
                        })}
                    </Picker>
                  </View>
                </View>
                {listRooms.data?.models
                  .filter((fill) =>
                    !idUnit
                      ? !idUnit
                      : idSector
                      ? fill.sector.id == idSector
                      : fill.sector.unit.id == idUnit,
                  )
                  .map((room) => {
                    if (
                      listCollectors.data?.client[0].tbox &&
                      listCollectors.data?.client[0].tbox.itens.filter(
                        (filtro) => filtro.room.id == room.id,
                      ).length > 0
                    ) {
                      return (
                        <View style={style.containerCollector} key={room.id}>
                          <View style={style.containerCollectorHeader}>
                            <Image
                              style={{ width: 20, height: 20 }}
                              source={require('../../assets/Location.png')}
                            />
                            <Text style={style.containerCollectorText}>
                              {`${room.sector.unit.name}    >    ${room.sector.name}    >    ${room.name}`}
                            </Text>
                          </View>
                          <View style={style.devices}>
                            {listCollectors.data?.client[0].tbox.itens
                              .filter((filter) => filter.room.id === room.id)
                              .map((collectors) => {
                                return (
                                  <TouchableOpacity
                                    onPress={() => handleSubmit(collectors)}
                                    style={style.spacingBetweenDivs}
                                    key={collectors.id}
                                  >
                                    <Text style={style.textDiv}>
                                      <View
                                        style={
                                          collectors.monitor_environment ==
                                          false
                                            ? style.containerCollectorBody
                                            : style.containerCollectorBodyTwo
                                        }
                                        key={collectors.id}
                                      >
                                        <View style={style.containerCell}>
                                          <View
                                            style={style.descricaoCollector}
                                          >
                                            <MaterialCommunityIcons
                                              style={style.iconCell}
                                              name="cellphone-android"
                                              size={20}
                                              color={cores.preto}
                                            />

                                            <Text
                                              style={style.containerCellText}
                                            >
                                              {collectors.nickname}
                                            </Text>
                                          </View>
                                          {/*inserir logica da bolinha de status*/}
                                          <View style={style.containerBadge}>
                                            <InfoBall
                                              message={collectors.message}
                                              signal={
                                                collectors.message_type ==
                                                'SUCCESS'
                                                  ? '1'
                                                  : collectors.message_type ==
                                                    'WARNING'
                                                  ? '2'
                                                  : collectors.message_type ==
                                                    'DANGER'
                                                  ? '3'
                                                  : '4'
                                              }
                                            />
                                          </View>
                                        </View>
                                        {collectors.monitor_environment ==
                                        true ? (
                                          <Text style={style.textAmbient}>
                                            Coletor de Ambiente
                                          </Text>
                                        ) : (
                                          <Text style={style.textEquipment}>
                                            Coletor de Equipamento
                                          </Text>
                                        )}
                                        {/* <Grid
                                          style={style.generalTemperatureScreen}
                                        >
                                          {collectors.sensors.map((map) => (
                                            <Col
                                              style={style.temperatureScreenOne}
                                              key={map.id}
                                            >
                                              <View
                                                style={
                                                  style.containerTemperatureTwo
                                                }
                                              >
                                                {map.name_measure ==
                                                'Temperatura' ? (
                                                  <FontAwesome5
                                                    name="temperature-low"
                                                    size={24}
                                                    color={cores.azul}
                                                  />
                                                ) : (
                                                  <Entypo
                                                    name="drop"
                                                    size={24}
                                                    color={cores.azul}
                                                  />
                                                )}
                                                <Text
                                                  style={style.temeratureBlock}
                                                >
                                                  {map.lastReading == null
                                                    ? 0.0
                                                    : map.lastReading}{' '}
                                                  {map.name_unitOfMeasure}
                                                </Text>
                                              </View>
                                              <View
                                                style={style.temperaturasTwo}
                                              >
                                                <View style={style.minMax}>
                                                  <Text
                                                    style={
                                                      style.temperaturaItem
                                                    }
                                                  >
                                                    Mín.:
                                                  </Text>
                                                  <Text>{map.min}</Text>
                                                </View>
                                                <View style={style.minMax}>
                                                  <Text
                                                    style={
                                                      style.temperaturaItem
                                                    }
                                                  >
                                                    Máx.:
                                                  </Text>
                                                  <Text>{map.max}</Text>
                                                </View>
                                              </View>
                                            </Col>
                                          ))}
                                        </Grid> */}
                                        <View style={style.coletor}>
                                          <Text style={style.CollectorsTexts}>
                                            Coletor.:
                                          </Text>
                                          <Text
                                            style={style.CollectorsTextsStrings}
                                          >
                                            {collectors.serial} |
                                          </Text>
                                          <Text style={style.CollectorsTexts}>
                                            {' '}
                                            TAG.:{' '}
                                          </Text>
                                          <Text
                                            style={style.CollectorsTextsStrings}
                                          >
                                            {collectors.version.length == 0
                                              ? 'Sem tag!'
                                              : versionCollector
                                                  .filter(
                                                    (fill) =>
                                                      fill.value ==
                                                      collectors.version
                                                        .version,
                                                  )
                                                  .map((version) => {
                                                    return version.label;
                                                  })}
                                          </Text>
                                        </View>
                                        <View
                                          style={style.containerMasterStatus}
                                        >
                                          <Text style={style.status}>
                                            Últ.: leitura:
                                          </Text>
                                          <Text>
                                            {/* {
                                              collectors.sensors[0]
                                                .lastReading_at
                                            } */}
                                          </Text>
                                        </View>
                                      </View>
                                    </Text>
                                  </TouchableOpacity>
                                );
                              })}
                          </View>
                        </View>
                      );
                    }
                  })}
              </View>
            </View>
          </ScrollView>
        </>
      )}
    </SafeAreaView>
  );
}
