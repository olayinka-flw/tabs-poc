import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import Settings from './screens/Settings';
import {NavigationContainer} from '@react-navigation/native';
import {IRootBottomTabParamList} from './interfaces';
import Payments from './screens/Payments';
import linking from './linking';
import {Platform, Text} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {navigationRef} from './RootNavigation';

const Tab = createBottomTabNavigator<IRootBottomTabParamList>();

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer
        linking={linking}
        fallback={<Text>Loading...</Text>}
        ref={navigationRef}>
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: {
              height: Platform.OS === 'ios' ? 90 : 70,
            },
            tabBarItemStyle: {
              paddingBottom: Platform.OS === 'ios' ? 8 : 12,
            },
            tabBarLabelStyle: {
              fontWeight: '500',
              fontSize: 13,
            },
            headerShown: false,
          }}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Payments" component={Payments} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
export default App;
