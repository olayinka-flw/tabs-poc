import React from 'react';
import {HomeTabScreenProps, IBalancesStackParamList} from '../interfaces';
import {createStackNavigator} from '@react-navigation/stack';
import BalancesOne from './BalancesOne';
import BalancesTwo from './BalancesTwo';

const Stack = createStackNavigator<IBalancesStackParamList>();

const Balances: React.FC<HomeTabScreenProps<'Balances'>> = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="BalancesOne">
      <Stack.Screen name="BalancesOne" component={BalancesOne} />
      <Stack.Screen name="BalancesTwo" component={BalancesTwo} />
    </Stack.Navigator>
  );
};

export default Balances;
