import '~/config/reactotron';
import React from 'react';
import { Provider } from 'react-redux';
import Routes from './routes';
import store from './store';
import { setNavigator } from '~/services/navigation';

const App = () => (
  <Provider store={store}>
    <Routes ref={setNavigator} />
  </Provider>
);

export default App;
