import Expo from 'expo';
import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import App from './src/App';
import configureStore from './src/store/configureStore';

const store = configureStore();

const Container = () => (
    <Provider store={store}>
        <App />
    </Provider>
);
Expo.registerRootComponent(Container);
