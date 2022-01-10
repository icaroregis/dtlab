import React, { useEffect, useState, useContext } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import style from './style';
import Header from '../../components/Header';
import { Card } from 'native-base';
import { cores } from '../../style-global';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { FAB } from 'react-native-paper';
import { DataTable } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { urlBase } from '../../services/api';
import { Context } from '../../../src/services/context';
import { useFetch } from '../../components/hooks/useFetch';
import axios from 'axios';
import moment from 'moment';

export default function ActionPlan() {
  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(15);
  const navigation = useNavigation();
  const { group, token } = useContext(Context);
  const optionsPerPage = [2, 3, 4];
  const pageExact = parseInt(page) + 1;

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const listActionPlan = useFetch(
    '/contract-item-actions?all=false&per_page=' +
      itemsPerPage +
      '&page=' +
      pageExact +
      '&search=',
  );

  const dataHeader = [
    { id: 1, coluna: 'Data' },
    { id: 2, coluna: 'Equipamento' },
    { id: 3, coluna: 'Ações' },
  ];

  function submitFab() {
    navigation.navigate('AddActionPlan', {
      pageExact: pageExact,
      perPage: itemsPerPage,
    });
  }

  async function deleteItem(id) {
    await axios
      .delete(urlBase + group + `/contract-item-actions/${id}`, config)
      .then(() => {
        alert('Plano de ação deletado com sucesso');
        listActionPlan.mutate();
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  }
  useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <SafeAreaView style={style.container}>
      <StatusBar />
      <Header />

      <Card style={style.card} transparent>
        {/* {icone} */}
        <View style={style.containerBodyIcon}>
          <MaterialCommunityIcons
            name="file-powerpoint"
            size={24}
            color={cores.preto}
          />
          <Text style={style.containerText}>Plano de Ação</Text>
        </View>
        <Text style={style.containerSubHeader}>Gestão de Plano de Ação</Text>
        {/* {icone} */}
        <View style={style.spacing} />

        <ScrollView
          style={style.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={style.container}>
            {listActionPlan.data?.models.data == 0 ? (
              <Text style={style.resultNull}>
                Nenhum plano de ação encontrado
              </Text>
            ) : (
              <DataTable>
                <DataTable.Header>
                  {dataHeader.map((title, key) => {
                    return (
                      <>
                        <DataTable.Title key={key} style={style.cell}>
                          {title.coluna}
                        </DataTable.Title>
                      </>
                    );
                  })}
                </DataTable.Header>
                {listActionPlan.data?.models.data.map((map, key) => {
                  return (
                    <>
                      <DataTable.Row key={key}>
                        <DataTable.Cell style={style.cell}>
                          {moment(map.started_at).format('DD/MM/YYYY')}
                        </DataTable.Cell>
                        <DataTable.Cell style={style.cell}>
                          {map.contract_item.nickname}
                        </DataTable.Cell>
                        <DataTable.Cell style={style.cell}>
                          <View style={style.containerButtons}>
                            <TouchableOpacity
                              onPress={() =>
                                navigation.navigate('ButtonTableActionPlan', {
                                  id: map.id,
                                  pageExct: pageExact,
                                  perPage: itemsPerPage,
                                })
                              }
                            >
                              <View style={style.editButton}>
                                <MaterialIcons
                                  name="edit"
                                  size={24}
                                  color="black"
                                />
                              </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                              onPress={() => deleteItem(map.id)}
                            >
                              <View style={style.deleteButton}>
                                <MaterialCommunityIcons
                                  name="delete"
                                  size={24}
                                  color="black"
                                />
                              </View>
                            </TouchableOpacity>
                          </View>
                        </DataTable.Cell>
                      </DataTable.Row>
                    </>
                  );
                })}

                <DataTable.Pagination
                  page={page}
                  numberOfPages={listActionPlan.data?.models.total}
                  onPageChange={(page) => setPage(page)}
                  label={pageExact + ' de ' + listActionPlan.data?.models.total}
                  optionsPerPage={optionsPerPage}
                  itemsPerPage={itemsPerPage}
                  setItemsPerPage={setItemsPerPage}
                  showFastPagination
                  optionsLabel={'Rows per page'}
                />
              </DataTable>
            )}
          </View>
        </ScrollView>
      </Card>
      <FAB
        style={style.fab}
        icon="plus"
        onPress={submitFab}
        color={cores.branco}
      />
    </SafeAreaView>
  );
}
