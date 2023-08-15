import {
  Animated,
  View,
  Text,
  Pressable,
  StyleSheet,
  Platform,
  Easing,
} from 'react-native';
import {
  MaterialTopTabBarProps,
  MaterialTopTabNavigationEventMap,
} from '@react-navigation/material-top-tabs';
import {useEffect, useRef} from 'react';
import {NavigationHelpers, ParamListBase} from '@react-navigation/native';

export default function CustomTabBar({
  state,
  descriptors,
  navigation,
}: MaterialTopTabBarProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>FLUTTERWAVE</Text>

      <View style={styles.labelFlex}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label = options?.title ?? route.name;
          const isFocused = state.index === index;

          return (
            <TabItem
              label={label}
              isFocused={isFocused}
              navigation={navigation}
              routeKey={route.key}
              routeName={route.name}
              key={Math.random()}
            />
          );
        })}
      </View>
    </View>
  );
}

interface TabItemProps {
  label: string;
  navigation: NavigationHelpers<
    ParamListBase,
    MaterialTopTabNavigationEventMap
  >;
  routeKey?: string;
  routeName: string;
  isFocused: boolean;
}

const TabItem = ({
  label,
  navigation,
  routeKey,
  routeName,
  isFocused,
}: TabItemProps) => {
  const animatedIndex = useRef(new Animated.Value(0)).current;

  const onPress = () => {
    const event = navigation.emit({
      type: 'tabPress',
      target: routeKey,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      // The `merge: true` option makes sure that the params inside the tab screen are preserved
      //@ts-ignore
      navigation.navigate({name: routeName, merge: true});
    }
  };

  const onLongPress = () => {
    navigation.emit({
      type: 'tabLongPress',
      target: routeKey,
    });
  };

  useEffect(() => {
    if (isFocused) {
      Animated.timing(animatedIndex, {
        toValue: 1,
        duration: 500,
        easing: Easing.in(Easing.bezier(0.49, 0.78, 0.26, 0.99)),
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(animatedIndex, {
        toValue: 0,
        duration: 500,
        easing: Easing.in(Easing.bezier(0.49, 0.78, 0.26, 0.99)),
        useNativeDriver: false,
      }).start();
    }
  }, [isFocused]);

  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      key={`${Math.random()}-${routeKey}`}
      style={[styles.labelBtn]}>
      <Animated.View
        style={{
          borderRadius: 50,
          backgroundColor: animatedIndex.interpolate({
            inputRange: [0, 1],
            outputRange: [INACTIVE_BG_COLOR, ACTIVE_BG_COLOR],
          }),
        }}>
        <Text style={styles.label}>{label}</Text>
      </Animated.View>
    </Pressable>
  );
};

const INACTIVE_BG_COLOR = '#21274A';
const ACTIVE_BG_COLOR = '#040A2D';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#21274A',
    height: Platform.OS === 'ios' ? 150 : 110,
    paddingTop: Platform.OS === 'ios' ? 60 : 20,
  },
  label: {
    color: 'white',
    fontWeight: '500',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  labelBtn: {
    marginHorizontal: 8,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  labelFlex: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
});
