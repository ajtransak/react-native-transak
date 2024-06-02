import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import Transak from '../components/Transak';
import {AppStackParamsList} from '../types/screens';

interface HomeScreenProps
  extends NativeStackScreenProps<AppStackParamsList, 'HOME'> {}

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Transak />

      <View style={styles.button}>
        <Button
          title="Payment Screen"
          onPress={() => navigation.navigate('PAYMENT')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    margin: 10,
  },
});

export default HomeScreen;
