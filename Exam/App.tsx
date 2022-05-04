import AsyncStorage from '@react-native-community/async-storage';
import React, { useEffect } from 'react';
import { AuthProvider } from './src/components/auth/AuthContext';
import Routes from './src/components/navigation/Routes';
const App = () => {
  return (
      <AuthProvider>
        <Routes/>
      </AuthProvider>
  );
};

export default App;
