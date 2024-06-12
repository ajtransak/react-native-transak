import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  EventTypes,
  Events,
  Order,
  TransakWebView,
} from '@transak/react-native-sdk';
import React, {useState} from 'react';
import {ColorValue, StyleSheet, View} from 'react-native';
import transakConfig from '../configs/transakConfig';
import {AppStackParamsList} from '../types/screens';

interface PaymentScreenProps
  extends NativeStackScreenProps<AppStackParamsList, 'PAYMENT'> {}

const PaymentScreen: React.FC<PaymentScreenProps> = ({navigation}) => {
  const [borderColor, setBorderColor] = useState<ColorValue>('black');

  const onTransakEventHandler = (event: EventTypes, data: Order) => {
    switch (event) {
      case Events.ORDER_CREATED:
        // API call to register ORDER_CREATED
        setBorderColor('yellow');
        break;

      case Events.ORDER_PAYMENT_VERIFYING:
        // API call to register ORDER_PAYMENT_VERIFYING
        setBorderColor('green');
        break;

      case Events.ORDER_PROCESSING:
        // API call to register ORDER_PROCESSING
        setBorderColor('purple');
        navigation.navigate('HOME');
        break;

      case Events.ORDER_COMPLETED:
        setBorderColor('orange');
        navigation.navigate('HOME');
        break;

      case Events.ORDER_FAILED:
        setBorderColor('red');
        navigation.navigate('ERROR');
        break;

      default:
        console.log(event, data);
    }
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
    webviewContainer: {
      borderColor,
      borderWidth: 5,
    },
  });

  return (
    <View style={styles.container}>
      <TransakWebView
        transakConfig={transakConfig}
        onTransakEvent={onTransakEventHandler}
        style={styles.transakWebview}
        containerStyle={styles.webviewContainer}
      />
    </View>
  );
};

export default PaymentScreen;
