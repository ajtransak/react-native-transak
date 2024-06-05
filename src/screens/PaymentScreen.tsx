import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  EventTypes,
  Events,
  Order,
  TransakWebView,
} from '@transak/react-native-sdk';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import transakConfig from '../configs/transakConfig';
import {AppStackParamsList} from '../types/screens';

interface PaymentScreenProps
  extends NativeStackScreenProps<AppStackParamsList, 'PAYMENT'> {}

const PaymentScreen: React.FC<PaymentScreenProps> = ({navigation}) => {
  const onTransakEventHandler = (event: EventTypes, data: Order) => {
    switch (event) {
      case Events.ORDER_CREATED:
        // API call to register ORDER_CREATED
        break;

      case Events.ORDER_PAYMENT_VERIFYING:
        // API call to register ORDER_PAYMENT_VERIFYING
        break;

      case Events.ORDER_PROCESSING:
        // API call to register ORDER_PROCESSING
        navigation.navigate('HOME');
        break;

      case Events.ORDER_COMPLETED:
        navigation.navigate('HOME');
        break;

      case Events.ORDER_FAILED:
        navigation.navigate('ERROR');
        break;

      default:
        console.log(event, data);
    }
  };

  return (
    <View style={styles.container}>
      <TransakWebView
        transakConfig={transakConfig}
        onTransakEvent={onTransakEventHandler}
        style={styles.transakWebview}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flex: 1,
    backgroundColor: 'red',
  },
  transakWebview: {
    flex: 1,
    flexGrow: 1,
  },
});

export default PaymentScreen;
