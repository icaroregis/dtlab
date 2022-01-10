import React, { useState } from 'react';
import Stack from './src/routes';
import { NavigationContainer } from '@react-navigation/native';
import { Context } from './src/services/context';

export default function App() {
  const [token, setToken] = useState(
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMC4xMTUuMTAxLjEzXC9hcGlcL2VudHJhciIsImlhdCI6MTYyODUzMzQxOCwiZXhwIjoxNjI4OTY1NDE4LCJuYmYiOjE2Mjg1MzM0MTgsImp0aSI6IlNHUG5TZXV3TXBQYXhpdnIiLCJzdWIiOjE0LCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.pPcppOOBbVoWwMpjiYdPIe5altpl9TROhXS4N4oK_aI',
  );
  const [group, setGroup] = useState('client');
  const [idClient, setIdClient] = useState(14);
  const [idCollector, setIdCollector] = useState(null);
  const [nicknameCollector, setNicknameCollector] = useState('');
  const [units, setUnits] = useState('');
  const [stateUnits, setStateUnits] = useState('');
  const [stateSectors, setStateSectors] = useState('');
  const [stateRooms, setStateRooms] = useState('');
  const [stateSerial, setStateSerial] = useState('');
  const [stateTypeAlerts, setStateTypeAlerts] = useState('');
  const [stateInitialDate, setStateInitialDate] = useState('');
  const [stateFinalDate, setStateFinalDate] = useState('');

  return (
    <>
      <NavigationContainer>
        <Context.Provider
          value={{
            token,
            setToken,
            group,
            setGroup,
            idClient,
            setIdClient,
            units,
            setUnits,
            idCollector,
            setIdCollector,
            nicknameCollector,
            setNicknameCollector,
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
          }}
        >
          <Stack />
        </Context.Provider>
      </NavigationContainer>
    </>
  );
}
