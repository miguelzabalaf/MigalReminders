import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Navigation as RootNavigation } from './src/navigation';
import { useStore } from './src/store/index';

const App = () => {
  const { store, persistor } = useStore();

  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <RootNavigation />
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
