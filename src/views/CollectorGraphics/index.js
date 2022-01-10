import React, { useState, useContext } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import style from './style';
import { Card } from 'native-base';
import { cores } from '../../style-global';
import { FontAwesome } from '@expo/vector-icons';
import { useFetch } from '../../components/hooks/useFetch';
import { Context } from '../../services/context';
import { LineChart, Grid, YAxis, XAxis } from 'react-native-svg-charts';
import { Circle, G, Line, Rect, Text as Txt } from 'react-native-svg';
import Tooltip from './Tooltip';
import moment from 'moment';
import * as scale from 'd3-scale';
import { format } from 'date-fns';
import { Col, Grid as Gd } from 'react-native-easy-grid';
import InfoBall from '../../components/InfoBall';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import axios from 'axios';
import { urlBase } from '../../services/api';
import SecondHeader from '../../components/Header/secondHeader';

export default function CollectorGraphics() {
  const [year, setYear] = useState(null);
  const [month, setMonth] = useState(null);
  const { idCollector, nicknameCollector, group, token } = useContext(Context);
  const [loader, setLoader] = useState(true);
  const [state, setState] = useState({
    tooltipX: null,
    tooltipY: null,
    tooltipIndex: null,
    id: null,
  });

  const urlSensor = '/clientes/monitoramento/' + idCollector + '?limiter=10';

  const listSensor = useFetch(urlSensor, 30000);
  if (!listSensor.data) return <Text></Text>;

  const config = {
    headers: { Authorization: `Bearer ${token}` },
    responseType: 'blob',
  };

  function downloadPDF() {
    setLoader(false);
    let date = new Date();
    let mes = !month ? date.getMonth() + 1 : month;
    let ano = !year ? date.getFullYear() : year;
    axios
      .get(
        urlBase +
          group +
          '/monitoramento/exportar/' +
          mes +
          '/' +
          ano +
          '/' +
          idCollector,
        config,
      )
      .then((response) => {
        const fr = new FileReader();
        fr.onload = async () => {
          const fileUri = `${FileSystem.documentDirectory}/relatorio-${mes}-${ano}-${idCollector}.pdf`;
          await FileSystem.writeAsStringAsync(
            fileUri,
            fr.result.split(',')[1],
            { encoding: FileSystem.EncodingType.Base64 },
          );
          Sharing.shareAsync(fileUri);
        };
        fr.readAsDataURL(response.data);
        setLoader(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const HorizontalLine = ({ y, max }) => (
    <Line
      key={'zero-axis'}
      x1={'0%'}
      x2={'100%'}
      y1={y(max)}
      y2={y(max)}
      stroke={'rgb(169, 30, 30)'}
      strokeWidth={2}
    />
  );

  const HorizontalLineTwo = ({ y, min }) => (
    <Line
      key={'zero-axis'}
      x1={'0%'}
      x2={'100%'}
      y1={y(min)}
      y2={y(min)}
      stroke={'rgb(169, 30, 30)'}
      strokeWidth={2}
    />
  );

  const ChartPoints = ({ list, x, y, color, id }) =>
    list.map((item, index) => (
      <Circle
        key={index}
        cx={x(moment(item.timestamp, 'HH:mm'))}
        cy={y(item.value)}
        r={6}
        stroke={color}
        fill="white"
        onPress={() =>
          setState({
            ...state,
            id: id,
            tooltipX: moment(item.timestamp, 'HH:mm'),
            tooltipY: item.value,
            tooltipIndex: index,
          })
        }
      />
    ));

  return (
    <SafeAreaView style={style.container}>
      {!listSensor.data || !loader ? (
        <ActivityIndicator size="large" color="#8e1c1c" style={style.loader} />
      ) : (
        <>
          <StatusBar />
          <SecondHeader page="Overview" />
          <Card style={style.card} transparent>
            {/* {icone} */}
            <View style={style.containerBodyIcon}>
              <FontAwesome name="tachometer" size={24} color={cores.preto} />
              <Text style={style.containerText}>Visão Geral</Text>
            </View>
            <Text style={style.containerSubHeader}>Detalhes do Coletor</Text>
            {/* {icone} */}
            <View style={style.spacing} />

            <ScrollView style={style.containerScroll}>
              <View style={style.body}>
                <View style={style.headerNameCollector}>
                  <Text style={style.textCollector}>
                    Informações do coletor:
                  </Text>
                  <View style={style.DivNameCollector}>
                    <Text style={style.typeCollector}>{nicknameCollector}</Text>
                  </View>
                </View>
                {/*PICKERS*/}
                {listSensor.data?.sensor.map((map) => {
                  return (
                    <View style={style.containerCollector} key={map.id}>
                      <View style={style.titleCollectors}>
                        <Text style={style.temperatureText}>
                          Dados de {map.profiles.unitOfMeasure.measure.name}:{' '}
                        </Text>
                        <TouchableOpacity
                          style={style.reportButton}
                          onPress={() => downloadPDF()}
                        >
                          <Text style={style.reportButtonText}>Relatório</Text>
                        </TouchableOpacity>
                      </View>

                      <View style={style.informationContainer}>
                        <Gd style={style.containerCols}>
                          <Col>
                            <View>
                              <Text style={style.subtitleCollector}>
                                Status:
                              </Text>
                              <Text style={style.subtitleCollector}>
                                Mínimo:{' '}
                                <Text style={style.subtitleBoldNone}>
                                  {map.min +
                                    ' ' +
                                    map.profiles.unitOfMeasure.name}
                                </Text>
                              </Text>
                              <Text style={style.subtitleCollector}>
                                Última Leitura:
                              </Text>
                              <Text style={style.subtitleCollector}>
                                Última Temperatura:
                              </Text>
                            </View>
                          </Col>
                          <Col>
                            <View>
                              <Text style={style.dataCols}>
                                <InfoBall
                                  message={map.message}
                                  signal={
                                    map.message_type == 'SUCCESS'
                                      ? '1'
                                      : map.message_type == 'WARNING'
                                      ? '2'
                                      : map.message_type == 'DANGER'
                                      ? '3'
                                      : '4'
                                  }
                                  secondBall="1"
                                />
                              </Text>
                              <Text style={style.dataCols}>
                                <Text style={style.subtitleCollector}>
                                  Máximo:
                                </Text>{' '}
                                {map.max +
                                  ' ' +
                                  map.profiles.unitOfMeasure.name}
                              </Text>
                              <Text style={style.dataCols}>{map.last_at}</Text>
                              <Text style={style.dataCols}>
                                {map.lastReading +
                                  ' ' +
                                  map.profiles.unitOfMeasure.name}{' '}
                              </Text>
                            </View>
                          </Col>
                        </Gd>
                      </View>
                      <View
                        style={{
                          height: 300,
                          padding: 10,
                          flexDirection: 'row',
                        }}
                      >
                        <YAxis
                          data={map.log}
                          svg={{ fontSize: 10, fill: 'grey' }}
                          yAccessor={({ item }) => item.value}
                          numberOfTicks={10}
                          style={{ marginBottom: 30 }}
                          contentInset={{ top: 10, bottom: 10 }}
                          formatLabel={(value) => parseFloat(value).toFixed(2)}
                          max={map.max}
                          min={map.min}
                        />
                        <View style={{ flex: 1, marginLeft: 10 }}>
                          <LineChart
                            yAccessor={({ item }) => item.value}
                            xAccessor={({ item }) =>
                              moment(item.timestamp, 'HH:mm')
                            }
                            style={{ flex: 1 }}
                            data={map.log}
                            contentInset={{
                              left: 10,
                              top: 10,
                              bottom: 10,
                              right: 10,
                            }}
                            svg={{ stroke: 'rgb(134, 65, 244)' }}
                            yMax={parseFloat(map.max).toFixed(2)}
                            yMin={parseFloat(map.min).toFixed(2)}
                          >
                            <Grid
                              svg={{ stroke: 'rgba(151, 151, 151, 0.09)' }}
                              belowChart={false}
                            />
                            <HorizontalLine
                              max={parseFloat(map.max).toFixed(2)}
                            />
                            <HorizontalLineTwo
                              min={parseFloat(map.min).toFixed(2)}
                            />

                            <ChartPoints
                              color="#003F5A"
                              list={map.log}
                              id={map.id}
                            />
                            {!state.tooltipX &&
                            !state.tooltipY &&
                            !state.tooltipIndex ? (
                              ''
                            ) : state.id !== map.id ? (
                              ''
                            ) : (
                              <Tooltip
                                tooltipX={moment(state.tooltipX, 'HH:mm')}
                                tooltipY={state.tooltipY}
                                measure={map.profiles.unitOfMeasure.name}
                                color="#003F5A"
                                index={state.tooltipIndex}
                                dataLength={map.log.length}
                                id={map.id}
                              />
                            )}
                          </LineChart>

                          <XAxis
                            data={map.log}
                            svg={{ fontSize: 9, fill: 'grey' }}
                            xAccessor={({ item }) =>
                              moment(item.timestamp, 'HH:mm')
                            }
                            scale={scale.scaleTime}
                            numberOfTicks={10}
                            style={{ marginHorizontal: -15, height: 20 }}
                            contentInset={{ left: 15, right: 25 }}
                            formatLabel={(value) => format(value, 'HH:mm')}
                          />
                        </View>
                      </View>
                    </View>
                  );
                })}
              </View>
            </ScrollView>
          </Card>
        </>
      )}
    </SafeAreaView>
  );
}
