import {createNavigationContainerRef} from '@react-navigation/native';
import {ICombinedParamList} from './interfaces';

export const navigationRef = createNavigationContainerRef<ICombinedParamList>();

export function navigate(name: keyof ICombinedParamList, params?: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

export function dispatch(action: any) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(action);
  }
}
