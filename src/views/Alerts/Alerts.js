import React, { useState, useContext } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  Text,
  ActivityIndicator,
  Image,
} from 'react-native';
import style from './style';
import Header from '../../components/Header';
import { Card } from 'native-base';
import { DataTable } from 'react-native-paper';
import ButtonTable from '../../components/ButtonTable';
import { useFetch } from '../../components/hooks/useFetch';
import moment from 'moment';
import InfoBall from '../../components/InfoBall';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { Context } from '../../services/context';

export default function Alerts() {
  const {
    stateUnits,
    stateSectors,
    stateRooms,
    stateSerial,
    stateTypeAlerts,
    stateInitialDate,
    stateFinalDate,
  } = useContext(Context);
  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(15);
  const pageExact = parseInt(page) + 1;
  const [idUnit, setIdUnit] = useState('');
  const navigation = useNavigation();

  const listAlerts = useFetch(
    '/readings/warnings?all=false&per_page=' +
      itemsPerPage +
      '&page=' +
      pageExact +
      '&id_unit=' +
      stateUnits +
      '&id_sector=' +
      stateSectors +
      '&id_room=' +
      stateRooms +
      '&type=' +
      stateTypeAlerts +
      '&epoch_in=' +
      stateInitialDate +
      '&epoch_out=' +
      stateFinalDate +
      '&serial=' +
      stateSerial,
  );

  const dataHeader = [
    { id: 1, coluna: 'Status' },
    { id: 5, coluna: 'Data' },
    { id: 2, coluna: 'Serial' },
  ];
  return (
    <SafeAreaView style={style.containerMaster}>
      {!listAlerts.data ? (
        <ActivityIndicator size="large" color="#8e1c1c" style={style.loader} />
      ) : (
        <>
          <StatusBar />
          <Header />
          <Card style={style.card} transparent>
            {/* {icone} */}
            <View style={style.containerBodyIcon}>
              <Text style={style.containerSubHeader}>
                VISÃO DE ALERTAS GRAVES E MODERADOS
              </Text>
              <Text style={style.containerText}>Alertas</Text>
            </View>
            {/* {icone} */}

            <View style={style.containerDivSelect}>
              <TouchableOpacity
                style={style.divSelect}
                onPress={() => navigation.navigate('AlertFilters')}
              >
                <Image
                  style={{ width: 14, height: 14 }}
                  source={require('../../assets/Filter-2.png')}
                />
                <Text style={style.textFilter}>Filtros</Text>
                <Image
                  style={{ width: 10, height: 10 }}
                  source={require('../../assets/Forward.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={style.viewContainerScrollMaster}>
              <ScrollView
                showsVerticalScrollIndicator={false}
                style={style.scroll}
              >
                <View style={style.container}>
                  {listAlerts.data?.model.data.length == 0 ? (
                    <Text style={style.resultNull}>
                      Nenhum resultado encontrado
                    </Text>
                  ) : (
                    <DataTable style={style.containerDataTable}>
                      <DataTable.Header>
                        {dataHeader.map((title) => {
                          return (
                            <DataTable.Title key={title.id} style={style.cell}>
                              {title.coluna}
                            </DataTable.Title>
                          );
                        })}
                        <>
                          <DataTable.Title style={style.cell}></DataTable.Title>
                        </>
                      </DataTable.Header>

                      {listAlerts.data?.model.data.map((map, key) => {
                        return (
                          <DataTable.Row style={style.row} key={key}>
                            <DataTable.Cell style={style.cell}>
                              <InfoBall
                                message={map.obs}
                                secondBall={2}
                                signal={
                                  map.type == 'SUCCESS'
                                    ? '1'
                                    : map.type == 'WARNING'
                                    ? '2'
                                    : map.type == 'DANGER'
                                    ? '3'
                                    : '4'
                                }
                              />
                            </DataTable.Cell>
                            <DataTable.Cell style={style.cell}>
                              {moment(map.epoch).format('DD/MM/YYYY')}
                            </DataTable.Cell>
                            <DataTable.Cell style={style.cell}>
                              {map.espid}
                            </DataTable.Cell>
                            <DataTable.Cell style={style.cell}>
                              <ButtonTable id={map._id} />
                            </DataTable.Cell>
                          </DataTable.Row>
                        );
                      })}

                      <DataTable.Pagination
                        page={page}
                        numberOfPages={listAlerts.data?.model.total}
                        onPageChange={(page) => setPage(page)}
                        label={
                          pageExact + ' de ' + listAlerts.data?.model.total
                        }
                        itemsPerPage={itemsPerPage}
                        setItemsPerPage={setItemsPerPage}
                        showFastPagination
                        optionsLabel={'Rows per page'}
                      />
                    </DataTable>
                  )}
                </View>
              </ScrollView>
            </View>
          </Card>
        </>
      )}
    </SafeAreaView>
  );
}
