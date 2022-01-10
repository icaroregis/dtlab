import React, { useState, useEffect, useContext } from 'react';
import { DataTable } from 'react-native-paper';
import { View } from 'react-native';
import style from './style';
import { useFetch } from '../hooks/useFetch';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { urlBase } from '../../services/api';
import { Context } from '../../../src/services/context';
import axios from 'axios';
import moment from 'moment';

export default function TableActionPlan() {
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
  async function deleteItem(id) {
    await axios
      .delete(urlBase + group + `/contract-item-actions/${id}`, config)
      .then(() => {
        alert('Plano de ação deletado com sucesso');
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  }
  console.log(itemsPerPage);
  useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <>
      <View style={style.container}>
        <DataTable>
          <DataTable.Header>
            {dataHeader.map((title, key) => {
              return (
                <>
                  <DataTable.Title key={key.id} style={style.cell}>
                    {title.coluna}
                  </DataTable.Title>
                </>
              );
            })}
          </DataTable.Header>
          {listActionPlan.data?.models.data.map((map, key) => {
            return (
              <>
                <DataTable.Row key={key._id}>
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
                          <MaterialIcons name="edit" size={24} color="black" />
                        </View>
                      </TouchableOpacity>

                      <TouchableOpacity onPress={() => deleteItem(map.id)}>
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
      </View>
    </>
  );
}
