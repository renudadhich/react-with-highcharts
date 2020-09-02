import React from 'react';
import { Provider } from 'react-redux';
import './App.scss';
import configureStore from './store';
import { AppRouter } from './router';
const store = configureStore();

const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

export default App;
