import {LinkingOptions} from '@react-navigation/native';
import {IRootBottomTabParamList} from './interfaces';

const config = {
  screens: {
    Home: {
      screens: {
        Balances: {
          screens: {
            BalancesOne: 'home/balances/balancesOne',
            BalancesTwo: 'home/balances/balancesTwo',
          },
        },
        Cards: 'home/cards',
        Services: 'home/services',
      },
    },
    Payments: {
      screens: {
        PaymentsIndex: 'payments/payments',
        Scheduled: 'payments/scheduled',
      },
    },
    Settings: 'settings',
    NotFound: '*',
  },
};

const linking: LinkingOptions<IRootBottomTabParamList> = {
  prefixes: ['tabstest://'],
  config,
};

export default linking;
