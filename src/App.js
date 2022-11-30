import React, {Component} from 'react';
import {LogBox, StatusBar, YellowBox} from 'react-native';
import {persistStore} from 'redux-persist';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Nav from './navigation';
import NavigationService from './navigation/NavigationService';
import store from './store';
import {REDUX_STORE_VERSION} from './constants';
import {MenuProvider} from 'react-native-popup-menu';

YellowBox.ignoreWarnings([
  'ReactNativeFiberHostComponent',
  'Remote debugger',
  'Animated',
]);
LogBox.ignoreAllLogs();

let persist = null;

export default class App extends Component {
  state = {
    reHydrated: false,
  };

  async componentDidMount() {
    let currentReduxStoreVersion = await AsyncStorage.getItem(
      'CURRENT_REDUX_STORE_VERSION',
    );
    console.log('currentReduxStoreVersion', currentReduxStoreVersion);

    if (currentReduxStoreVersion != REDUX_STORE_VERSION) {
      console.log('store version changed');
      persist = await persistStore(store, null).purge();
      await AsyncStorage.setItem(
        'CURRENT_REDUX_STORE_VERSION',
        REDUX_STORE_VERSION,
      );
      persist = await persistStore(store, null, async () => {
        this.setState({reHydrated: true}, () => {});
      });
    } else {
      persist = await persistStore(store, null, async () => {
        this.setState({reHydrated: true}, () => {});
      });
    }
  }

  render() {
    if (!this.state.reHydrated) {
      return null;
    }
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persist}>
          <MenuProvider>
            <StatusBar
              barStyle="dark-content"
              translucent={true}
              backgroundColor="transparent"
            />
            <Nav
              ref={navigatorRef => {
                NavigationService.setTopLevelNavigator(navigatorRef);
              }}
            />
          </MenuProvider>
        </PersistGate>
      </Provider>
    );
  }
}
