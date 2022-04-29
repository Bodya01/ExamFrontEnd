/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { Component, useEffect, useState } from 'react';
import GreetingService from './api-service/greeting-service/GreetingService'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Message from './models/Message';
import axios from 'axios';



const App = () => {
  const baseHeaders = {
    headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest"
    }
};

  const [message, setMessage] = useState<any>();

  const fetchGreeting = () =>{
    console.log("fetch started");
    fetch('http://10.0.2.2:5000/api/greeting/123', {
      method: 'GET'
    }).then((response) => {
      console.log(response.json());
    })
    .catch((err) => console.log(err))





    GreetingService.getGreeting(3)
      .then((res) => {
        console.log(res.data);
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <TouchableOpacity
        onPress={fetchGreeting}
      >
        <Text style={[{fontSize: 30, alignSelf: 'center'}]}>Fetch data</Text>
      </TouchableOpacity>
      <Text>{message}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
