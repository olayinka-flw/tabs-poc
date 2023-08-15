import React from 'react';
import {BalancesStackScreenProps} from '../interfaces';
import {Button, StyleSheet, View} from 'react-native';

const BalancesOne: React.FC<BalancesStackScreenProps<'BalancesOne'>> = ({
  navigation,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <View style={styles.button}>
          <Button
            title="Balances Two Screen"
            onPress={() => navigation.navigate('BalancesTwo')}
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
            title="Services Screen"
            onPress={() => navigation.navigate('Services')}
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

export default BalancesOne;
