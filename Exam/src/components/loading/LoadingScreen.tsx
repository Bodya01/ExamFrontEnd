import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import AppColors from '../theme/AppColors';

const LoadingScreen = () => {
  return (
    <View
      style={{flex: 1, justifyContent: "center", backgroundColor: AppColors.white}}>
      <ActivityIndicator size="large" color={AppColors.primary}/>
    </View>
  );
};

export default LoadingScreen;