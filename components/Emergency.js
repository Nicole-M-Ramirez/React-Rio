import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, PixelRatio, Platform, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors, dimensions } from './constants';

import {text} from '../Diccionario/español';
import { normalize } from './FondNormilize';
import { gs } from '../components/RioGlobalStrings';
import { useSelector } from 'react-redux';

const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width

function Emergency() {
  const lang = useSelector(state => state.counter.language);
  const navigation = useNavigation();
  const today = new Date();
  const theDate = today.toISOString().substring(0,10);
  return (
    <>
        {/* <View style={styles.topLine}/> */}

        <Text style={styles.text}>{gs['tituloFoother'][lang]}</Text>
        <View style={styles.emergencyButtonView}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Emergencia',{forDate: theDate})}>
          <Image source={require('../assets/urgencia.png')} resizeMode='contain' style={styles.buttonImage} />
        </TouchableOpacity>
        </View>
    </>
  );
}

export default Emergency;

const styles = StyleSheet.create({
    emergencyButtonView: {
      top: dimensions.footerHeight  * 0.2,
      position: 'absolute',
      left: dimensions.bodyWidth / 2, 
      justifyContent: 'flex-end',
      width: dimensions.bodyWidth / 2,
      alignItems: "flex-end",
    },
      button:{
        backgroundColor: colors.EmergencyRed,
        top: 0,
        borderRadius: 35,
      },
      buttonText:{
        color:'white',
        fontWeight:'900',
        fontSize:normalize(38),

      },
      text: {
        color: colors.mintGreen,
        fontSize:normalize(10),
        width: dimensions.bodyWidth *.6,
        paddingTop: dimensions.emergencyHeight  * 0.1,
      },
      buttonImage :{
        width: dimensions.bodyWidth * 0.14,
        height: dimensions.bodyWidth * 0.14,
        top: 0,
        right:0,
        marginRight:0,
      }
});
