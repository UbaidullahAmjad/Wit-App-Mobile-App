import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import createCompressor from 'redux-persist-transform-compress';

import errorHandler from './error_reducer';

const compressor = createCompressor();
const whitelist = ['auth', 'lists', 'billing'];

const rootReducerConfig = {
  key: 'primary',
  storage: AsyncStorage,
  whitelist,
  transforms: [compressor],
  //blacklist
};

const rootReducer = combineReducers({
  errorHandler,
});

export default persistedReducers = persistReducer(
  rootReducerConfig,
  rootReducer,
);
