import React from 'react';
import { SafeAreaView } from 'react-native';
import UserInfoApp from './components/UserInfoApp'; // Import the UserInfoApp component

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <UserInfoApp />
    </SafeAreaView>
  );
};

export default App;
