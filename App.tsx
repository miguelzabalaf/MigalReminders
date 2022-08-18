import React from 'react';
import { NativeModules } from 'react-native';
// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { Navigation as RootNavigation } from './src/navigation';
// Store
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { useStore } from './src/store/index';
// Sheets
import { SheetProvider } from 'react-native-actions-sheet';
import './src/modules/sheets';

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

const App = () => {
  const { store, persistor } = useStore();

  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <SheetProvider>
            <RootNavigation />
          </SheetProvider>
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
