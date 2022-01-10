import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './views/loginPages/Login/Login';
import RecoverPassword from './views/loginPages/RecoverPassword/RecoverPassword';
import RegistrationForm from './views/loginPages/RegistrationForm/RegistrationForm';
import Overview from './views/Overview/Overview';
import Alerts from './views/Alerts/Alerts';
import CustomDrawer from './components/CustomDrawer/CustomDrawer';
import ActionPlan from './views/ActionPlan/ActionPlan';
// import Notifications from './views/Notifications/Notifications';
import MyAccount from './views/MyAccount/MyAccount';
import NewPassword from './components/NewPassword/';
import CollectorGraphics from './views/CollectorGraphics/';
import { cores } from './style-global';
import ButtonTableActionPlan from './components/ButtonTableActionPlan';
import AddActionPlan from './components/ActionPlan/AddActionPlan';
import AlertFilters from './views/AlertFilters';
import OverviewMaster from './views/OverviewMaster';
import { Image } from 'react-native';

export default function Routes() {
  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();

  function Drawers() {
    return (
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props} />}
        drawerContentOptions={{
          activeBackgroundColor: cores.brancoOpacity,
          activeTintColor: cores.branco,
          marginTop: 16,
          labelStyle: {
            fontSize: 17,
            fontWeight: 'bold',
            color: cores.branco,
          },
        }}
      >
        <Drawer.Screen
          name="OverView"
          component={Overview}
          options={{
            title: 'Visão Geral',
            drawerIcon: () => (
              <Image
                style={{ width: 20, height: 20 }}
                source={require('./assets/overview.png')}
              />
            ),
          }}
        />

        <Drawer.Screen
          name="Alerts"
          component={Alerts}
          options={{
            title: 'Alertas',
            drawerIcon: ({ size }) => (
              <Image
                style={{ width: 20, height: 20 }}
                source={require('./assets/alerts.png')}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="ActionPlan"
          component={ActionPlan}
          options={{
            title: 'Plano de Ação',
            drawerIcon: ({ size }) => (
              <Image
                style={{ width: 20, height: 20 }}
                source={require('./assets/action-plan.png')}
              />
            ),
          }}
        />
        {/* <Drawer.Screen
          name="Notifications"
          component={Notifications}
          options={{
            title: 'Notificações',
            drawerIcon: ({ size }) => (
              <AntDesign name="notification" size={size} color={cores.branco} />
            ),
          }}
        /> */}
      </Drawer.Navigator>
    );
  }

  return (
    <Stack.Navigator
      initialRouteName="Overview"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="RecoverPassword" component={RecoverPassword} />
      <Stack.Screen name="RegistrationForm" component={RegistrationForm} />
      <Stack.Screen name="NewPassword" component={NewPassword} />
      <Stack.Screen name="CollectorGraphics" component={CollectorGraphics} />
      <Stack.Screen
        name="ButtonTableActionPlan"
        component={ButtonTableActionPlan}
      />
      <Stack.Screen name="AddActionPlan" component={AddActionPlan} />
      <Stack.Screen name="MyAccount" component={MyAccount} />
      <Stack.Screen name="OverviewMaster" component={OverviewMaster} />
      <Stack.Screen name="AlertFilters" component={AlertFilters} />
      <Stack.Screen name="Overview" component={Drawers} />
    </Stack.Navigator>
  );
}
