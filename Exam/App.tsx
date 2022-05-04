import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
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
