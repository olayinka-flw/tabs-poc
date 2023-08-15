import React from 'react';
import {RootBottomTabScreenProps} from '../interfaces';
import {Button, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import * as RootNavigation from '../RootNavigation';

const Settings: React.FC<RootBottomTabScreenProps<'Settings'>> = ({
  navigation,
}) => {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.title}>Settings</Text>

        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button
              title="Balances One Screen"
              onPress={() => RootNavigation.navigate('BalancesOne')}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Balances Two Screen"
              onPress={() => RootNavigation.navigate('BalancesTwo')}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Cards Screen"
              onPress={() => navigation.jumpTo('Home', {screen: 'Cards'})}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Services Screen"
              onPress={() => navigation.jumpTo('Home', {screen: 'Services'})}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Home Tab"
              onPress={() => navigation.jumpTo('Home', {screen: 'Balances'})}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Payments Tab"
              onPress={() =>
                navigation.jumpTo('Payments', {screen: 'PaymentsIndex'})
              }
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Payments Screen"
              onPress={() =>
                navigation.jumpTo('Payments', {screen: 'PaymentsIndex'})
              }
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Scheduled Screen"
              onPress={() =>
                navigation.jumpTo('Payments', {screen: 'Scheduled'})
              }
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
    textTransform: 'uppercase',
  },
  buttonsContainer: {
    marginTop: 40,
  },
  button: {
    marginBottom: 12,
  },
});

export default Settings;
