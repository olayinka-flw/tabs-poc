import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';

export type IRootBottomTabParamList = {
  Home: NavigatorScreenParams<IHomeTabParamList> | undefined;
  Payments: NavigatorScreenParams<IPaymentsTabParamList> | undefined;
  Settings: undefined;
};

export type RootBottomTabScreenProps<T extends keyof IRootBottomTabParamList> =
  BottomTabScreenProps<IRootBottomTabParamList, T>;

export type IHomeTabParamList = {
  Balances: NavigatorScreenParams<IBalancesStackParamList> | undefined;
  Cards: undefined;
  Services: undefined;
};

export type HomeTabScreenProps<T extends keyof IHomeTabParamList> =
  CompositeScreenProps<
    StackScreenProps<IHomeTabParamList, T>,
    RootBottomTabScreenProps<'Home'>
  >;

export type IPaymentsTabParamList = {
  PaymentsIndex: undefined;
  Scheduled: undefined;
};

export type PaymentsTabScreenProps<T extends keyof IPaymentsTabParamList> =
  CompositeScreenProps<
    StackScreenProps<IPaymentsTabParamList, T>,
    RootBottomTabScreenProps<'Payments'>
  >;

export type IBalancesStackParamList = {
  BalancesOne: undefined;
  BalancesTwo: undefined;
};

export type BalancesStackScreenProps<T extends keyof IBalancesStackParamList> =
  CompositeScreenProps<
    StackScreenProps<IBalancesStackParamList, T>,
    CompositeScreenProps<
      StackScreenProps<IHomeTabParamList, 'Balances'>,
      RootBottomTabScreenProps<'Home'>
    >
  >;

export type ICombinedParamList = {} & IRootBottomTabParamList &
  IHomeTabParamList &
  IPaymentsTabParamList &
  IBalancesStackParamList;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends IRootBottomTabParamList {}
  }
}
