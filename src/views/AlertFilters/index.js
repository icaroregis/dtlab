import React, { useContext, useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import style from './style';
import { Card } from 'native-base';
import { cores } from '../../style-global';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import { useFetch } from '../../components/hooks/useFetch';
import { Context } from '../../services/context';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import SecondHeader from '../../components/Header/secondHeader';

export default function AlertFilters() {
  const {
    stateUnits,
    setStateUnits,
    stateSectors,
    setStateSectors,
    stateRooms,
    setStateRooms,
    stateSerial,
    setStateSerial,
    stateTypeAlerts,
    setStateTypeAlerts,
    stateInitialDate,
    setStateInitialDate,
    stateFinalDate,
    setStateFinalDate,
  } = useContext(Context);
  const [mode, setMode] = useState('date');
  const [showInitial, setShowInitial] = useState(false);
  const [showFinal, setShowFinal] = useState(false);
  const [initialDate, setInitialDate] = useState(new Date());
  const [finalDate, setFinalDate] = useState(new Date());

  const navigation = useNavigation();
  const image = require('../../assets/plano-de-fundo.webp');

  const units = useFetch('/units?all=true');
  const sectors = useFetch('/sectors?all=true');
  const rooms = useFetch('/rooms?all=true');
  const serial = useFetch('/contract-items?all=true');

  let typeAlerts = [
    { key: 1, type: 'WARNING' },
    { key: 2, type: 'DANGER' },
  ];

  const onChangeInitialDate = (event, selectedDate) => {
    let oficialDate = moment(selectedDate).format('YYYY-MM-DD');
    if (!selectedDate) {
    } else {
      setStateInitialDate(oficialDate);
      setInitialDate(selectedDate);
    }
    setShowInitial(false);
  };

  const onChangeFinalDate = (event, selectedDate) => {
    let oficialDate = moment(selectedDate).format('YYYY-MM-DD');
    if (!selectedDate) {
    } else {
      setStateFinalDate(oficialDate);
      setFinalDate(selectedDate);
    }
    setShowFinal(false);
  };

  function cleanFilters() {
    setStateUnits('');
    setStateSectors('');
    setStateRooms('');
    setStateSerial('');
    setStateTypeAlerts('');
    setStateInitialDate('');
    setStateFinalDate('');
  }

  return (
    <SafeAreaView style={style.container}>
      <StatusBar />
      <SecondHeader page="Alerts" />

      <Card style={style.card} transparent>
        {/* {icone} */}
        <View style={style.containerBodyIcon}>
          <FontAwesome name="filter" size={24} color={cores.preto} />
          <Text style={style.containerText}>Filtros</Text>
        </View>
        <Text style={style.containerSubHeader}>Gestão de filtros</Text>
        {/* {icone} */}
        <View style={style.containerPicker}>
          <Picker
            selectedValue={stateUnits}
            onValueChange={(itemValue, itemIndex) => setStateUnits(itemValue)}
            style={style.stylePickers}
          >
            <Picker.Item
              label="Selecione uma unidade"
              value=""
              disabled={true}
            />
            {units.data?.models.map((map, key) => {
              return <Picker.Item key={key} label={map.name} value={map.id} />;
            })}
          </Picker>
        </View>
        <View style={style.containerPicker}>
          <Picker
            selectedValue={stateSectors}
            onValueChange={(itemValue, itemIndex) => setStateSectors(itemValue)}
            style={style.stylePickers}
          >
            <Picker.Item label="Selecione um setor" value="" disabled={true} />
            {sectors.data?.models.map((map, key) => {
              return <Picker.Item key={key} label={map.name} value={map.id} />;
            })}
          </Picker>
        </View>
        <View style={style.containerPicker}>
          <Picker
            selectedValue={stateRooms}
            onValueChange={(itemValue, itemIndex) => setStateRooms(itemValue)}
            style={style.stylePickers}
          >
            <Picker.Item label="Selecione uma sala" value="" disabled={true} />
            {rooms.data?.models.map((map, key) => {
              return <Picker.Item key={key} label={map.name} value={map.id} />;
            })}
          </Picker>
        </View>
        <View style={style.containerPicker}>
          <Picker
            selectedValue={stateSerial}
            onValueChange={(itemValue, itemIndex) => setStateSerial(itemValue)}
            style={style.stylePickers}
          >
            <Picker.Item label="Selecione um serial" value="" disabled={true} />
            {serial.data?.models.map((map, key) => {
              return (
                <Picker.Item key={key} label={map.serial} value={map.id} />
              );
            })}
          </Picker>
        </View>
        <View style={style.containerPicker}>
          <Picker
            selectedValue={stateTypeAlerts}
            onValueChange={(itemValue) => setStateTypeAlerts(itemValue)}
            style={style.stylePickers}
          >
            <Picker.Item
              label="Selecione um tipo de alerta"
              value=""
              disabled={true}
            />
            {typeAlerts.map((map, key) => {
              return (
                <Picker.Item key={key} label={map.type} value={map.type} />
              );
            })}
          </Picker>
        </View>

        <View style={style.containerDates}>
          <View style={style.containerInitialDate}>
            <TouchableOpacity onPress={() => setShowInitial(true)}>
              <Text>
                {stateInitialDate == ''
                  ? 'dd/mm/aaaa'
                  : moment(stateInitialDate).format('DD/MM/YYYY')}
              </Text>
            </TouchableOpacity>
            {showInitial && (
              <DateTimePicker
                testID="dateTimePicker"
                value={initialDate}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChangeInitialDate}
              />
            )}
          </View>
          <View style={style.containerFinalDate}>
            <TouchableOpacity onPress={() => setShowFinal(true)}>
              <Text>
                {stateFinalDate == ''
                  ? 'dd/mm/aaaa'
                  : moment(stateFinalDate).format('DD/MM/YYYY')}
              </Text>
            </TouchableOpacity>
            {showFinal && (
              <DateTimePicker
                testID="dateTimePickerTwo"
                value={finalDate}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChangeFinalDate}
              />
            )}
          </View>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('Alerts')}
          style={style.containerButtonFilters}
        >
          <Text style={style.textButtonFilters}>Aplicar Filtros</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={cleanFilters}
          style={style.containerButtonFilters}
        >
          <Text style={style.textButtonFilters}>Limpar Filtros</Text>
        </TouchableOpacity>
      </Card>
    </SafeAreaView>
  );
}
