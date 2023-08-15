import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Balances from './Balances';
import Cards from './Cards';
import Services from './Services';
import {IHomeTabParamList} from '../interfaces';
import CustomTabBar from '../components/CustomTabBar';

const Tab = createMaterialTopTabNavigator<IHomeTabParamList>();

const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 100,
          backgroundColor: '#21274A',
        },
      }}
      tabBar={props => <CustomTabBar {...props} />}
      initialRouteName="Balances">
      <Tab.Screen name="Balances" component={Balances} />
      <Tab.Screen name="Cards" component={Cards} />
      <Tab.Screen name="Services" component={Services} />
    </Tab.Navigator>
  );
};

export default Home;
