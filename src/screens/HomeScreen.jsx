import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../utils/constant';

const HomeScreen = () => {
  const navigation = useNavigation();
  const name = 'ReactNative 8.sezon eğitimine hoşgeldiniz.';

  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        onPress={() => navigation.navigate(SCREENS.Notification, {title: name})}
        style={{backgroundColor: 'pink', padding: 10, borderRadius: 20}}>
        <Text>Go to Notifications Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate(SCREENS.Profile)}
        style={{backgroundColor: 'tomato', padding: 10, borderRadius: 20}}>
        <Text>Go to Profile Screen</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
