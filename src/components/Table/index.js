import React, { useState } from 'react';
import { DataTable } from 'react-native-paper';
import { View } from 'react-native';
import ButtonTable from '../ButtonTable';
import style from './style';
import { useFetch } from '../hooks/useFetch';
import moment from 'moment';
import InfoBall from '../InfoBall';
import { Picker } from '@react-native-picker/picker';

export default function Table() {
  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(15);
  const pageExact = parseInt(page) + 1;
  const [idUnit, setIdUnit] = useState('');

  const listAlerts = useFetch(
    '/readings/warnings?all=false&per_page=' +
      itemsPerPage +
      '&page=' +
      pageExact,
  );

  const units = useFetch('/units?all=true');
  const sectors = useFetch('/sectors?all=true');
  const listRooms = useFetch('/rooms?all=true');
  const dataHeader = [
    { id: 1, coluna: 'Status' },
    { id: 5, coluna: 'Data e Hora' },
    { id: 2, coluna: 'Serial' },
  ];

  return (
    <>
      <View style={style.containerDivSelect}>
        <View style={style.divSelect}>
          <Picker
            style={style.inputSelect}
            selectedValue={idUnit}
            onValueChange={(itemValue, itemIndex) => setIdUnit(itemValue)}
          >
            <Picker.Item label="Unidade" value="" enabled={false} />
            {units.data?.models.map((map) => {
              return (
                <Picker.Item key={map.id} label={map.name} value={map.id} />
              );
            })}
          </Picker>
        </View>
      </View>
      <View style={style.container}>
        <DataTable>
          <DataTable.Header>
            {dataHeader.map((title) => {
              return (
                <>
                  <DataTable.Title key={title.id} style={style.cell}>
                    {title.coluna}
                  </DataTable.Title>
                </>
              );
            })}
            <>
              <DataTable.Title style={style.cell}>#</DataTable.Title>
            </>
          </DataTable.Header>
          {listAlerts.data?.model.data.map((map) => {
            return (
              <>
                <DataTable.Row key={map._id}>
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
              </>
            );
          })}

          <DataTable.Pagination
            page={page}
            numberOfPages={listAlerts.data?.model.total}
            onPageChange={(page) => setPage(page)}
            label={pageExact + ' de ' + listAlerts.data?.model.total}
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
