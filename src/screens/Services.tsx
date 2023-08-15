import React from 'react';
import {HomeTabScreenProps} from '../interfaces';
import {Button, StyleSheet, Text, View} from 'react-native';

const Services: React.FC<HomeTabScreenProps<'Services'>> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Services</Text>

      <View style={styles.buttonsContainer}>
        <View style={styles.button}>
          <Button
            title="Balances One Screen"
            onPress={() =>
              navigation.navigate('Balances', {screen: 'BalancesOne'})
            }
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Balances Two Screen"
            onPress={() =>
              navigation.navigate('Balances', {screen: 'BalancesTwo'})
            }
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Cards Screen"
            onPress={() => navigation.navigate('Cards')}
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
              navigation.navigate('Payments', {screen: 'Scheduled'})
            }
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

export default Services;
