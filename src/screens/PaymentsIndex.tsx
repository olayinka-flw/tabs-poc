import React from 'react';
import {PaymentsTabScreenProps} from '../interfaces';
import {Button, StyleSheet, Text, View} from 'react-native';
import * as RootNavigation from '../RootNavigation';

const PaymentsIndex: React.FC<PaymentsTabScreenProps<'PaymentsIndex'>> = ({
  navigation,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payments</Text>

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
            title="Scheduled Screen"
            onPress={() => navigation.navigate('Scheduled')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Settings Screen"
            onPress={() => navigation.navigate('Settings')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default PaymentsIndex;
