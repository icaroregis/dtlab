import React, { useState, useContext } from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TextInput,
  Pressable,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { cores } from '../../../style-global';
import { Card } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import style from './style';
import { urlBase } from '../../../services/api';
import { Context } from '../../../services/context';
import axios from 'axios';
import { useFetch } from '../../hooks/useFetch';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import { mutate as mutateGlobal } from 'swr';
import moment from 'moment';
import SecondHeader from '../../Header/secondHeader';

export default function AddActionPlan({ route }) {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [data, setData] = useState({
    description: '',
    solution: '',
    id_contract_item: '',
    started_at: '',
  });
  const [show, setShow] = useState(false);
  const { group, token } = useContext(Context);
  const navigation = useNavigation();
  const { pageExact, perPage } = route.params;

  const listEquip = useFetch('/contract-items?all=true');

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  async function handleFinish() {
    await axios
      .post(urlBase + group + `/contract-item-actions`, data, config)
      .then((r) => {
        setData({
          description: '',
          solution: '',
          id_contract_item: '',
          started_at: '',
        });
        alert(r.data.message);
        mutateGlobal(
          '/contract-item-actions?all=false&per_page=' +
            perPage +
            '&page=' +
            pageExact +
            '&search=',
        );
        navigation.navigate('ActionPlan');
      })
      .catch((err) => {
        alert(err.response.message);
      });
  }

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    let oficialDate = format(selectedDate, 'yyyy-MM-dd');
    setData({ ...data, started_at: oficialDate });
    setShow(false);
  };

  return (
    <SafeAreaView style={style.container}>
      <StatusBar />
      <SecondHeader page="ActionPlan" />
      <Card style={style.card} transparent>
        {/* {icone} */}
        <View style={style.containerBodyIcon}>
          <MaterialCommunityIcons
            name="file-powerpoint"
            size={24}
            color={cores.preto}
          />
          <Text style={style.containerText}>Adicionar Plano de Ação</Text>
        </View>
        <Text style={style.containerSubHeader}>
          Adicione um novo plano de ação
        </Text>
        {/* {icone} */}

        <View style={style.containerInit}>
          <Text style={style.solution}>Solução</Text>
          <TextInput
            style={style.solutionInput}
            value={data.solution}
            onChangeText={(value) => setData({ ...data, solution: value })}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="default"
          />

          <Text style={style.solution}>Descrição</Text>
          <TextInput
            style={style.solutionInputDescription}
            value={data.description}
            onChangeText={(value) => setData({ ...data, description: value })}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="default"
          />
        </View>
        <View style={style.informationContainerText}>
          <View style={style.ColOneText}>
            <Text>Equipamento</Text>
          </View>
          <Text style={style.ColTwoText}>Data de início</Text>
        </View>
        <View style={style.informationContainer}>
          <View style={style.ColOne}>
            <Picker
              selectedValue={data.id_contract_item}
              onValueChange={(value) =>
                setData({ ...data, id_contract_item: value })
              }
            >
              <Picker.Item value="all" label="Equipamento" />
              {listEquip.data?.models.map((map) => {
                return (
                  <Picker.Item
                    key={map.id}
                    value={map.id}
                    label={map.nickname}
                  />
                );
              })}
            </Picker>
          </View>
          <View style={style.ColTwo}>
            <TouchableOpacity
              onPress={() => setShow(true)}
              style={style.buttonDate}
            >
              <Text>
                {data.started_at == ''
                  ? 'dd/mm/YYYY'
                  : moment(data.started_at).format('DD/MM/YYYY')}
              </Text>
            </TouchableOpacity>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChange}
              />
            )}
          </View>
        </View>
        <View style={style.containerButtons}>
          <Pressable style={style.buttonMyAccount} onPress={handleFinish}>
            <Text style={style.buttonStyle}>Finalizar</Text>
          </Pressable>
        </View>
      </Card>
    </SafeAreaView>
  );
}
