import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {IPaymentsTabParamList} from '../interfaces';
import PaymentsIndex from './PaymentsIndex';
import Scheduled from './Scheduled';
import CustomTabBar from '../components/CustomTabBar';

const Tab = createMaterialTopTabNavigator<IPaymentsTabParamList>();

const Payments = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 100,
          backgroundColor: '#21274A',
        },
      }}
      tabBar={props => <CustomTabBar {...props} />}
      initialRouteName="PaymentsIndex">
      <Tab.Screen
        name="PaymentsIndex"
        component={PaymentsIndex}
        options={{
          title: 'Payments',
        }}
      />
      <Tab.Screen name="Scheduled" component={Scheduled} />
    </Tab.Navigator>
  );
};

export default Payments;
