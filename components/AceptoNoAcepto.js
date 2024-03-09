import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, PixelRatio, Platform, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors, dimensions } from './constants';

import {text} from '../Diccionario/español';
import { normalize } from './FondNormilize';

const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width

function AceptoNoAcepto() {
  const navigation = useNavigation();

  return (
    <>
        {/* <View style={styles.topLine}/> */}
        <View style={styles.backView}>
        <TouchableOpacity style={{height:'100%'}} onPress={() => navigation.navigate('SelectorDeLenguage')}>
        <Image source={require('../assets/back.png')} resizeMode='contain' style={styles.buttonImage} />
        </TouchableOpacity>
        </View>
        
        <View style={styles.noAceptoView}>
        <TouchableOpacity style={{height:'100%'}} onPress={() => navigation.navigate('SelectorDeLenguage')}>
        <Text style={styles.text}>No Acepto</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.aceptoView}>
        <TouchableOpacity  style={{height:'100%'}}  onPress={() => navigation.navigate('BaseTeorica')}>
        <Text style={styles.text}>Acepto</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.nextView}>
        {/* <TouchableOpacity style={{height:'100%', position:'absolute'}}  onPress={() => navigation.navigate('BaseTeorica')}> */}
        <Image source={require('../assets/continuar2.png')} resizeMode='stretch' style={styles.buttonImage} />
        {/* </TouchableOpacity> */}
        </View>

        {/* <View style={styles.emergencyButtonView}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Emergencia')}>
          <Image source={require('../assets/urgencia.png')} resizeMode='contain' style={styles.buttonImage} />
        </TouchableOpacity>
        </View> */}
    </>
  );
}

export default AceptoNoAcepto;

const styles = StyleSheet.create({
  backView: {
    top:0,
    left: 0,
    height: '100%',
    width: dimensions.bodyWidth * .1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    // backgroundColor: 'red'
  },
  nextView: {
    position: 'absolute',
    left: dimensions.bodyWidth * .9,
    width: dimensions.bodyWidth * .1 ,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    height: '100%',
    // backgroundColor: 'blue'
  },
  noAceptoView: {
    top:0,
    height: '100%',
    width: dimensions.bodyWidth * .3,
    position: 'absolute',
    left: dimensions.bodyWidth * .04,
    // backgroundColor: 'green'
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  aceptoView: {
    top:0,
    position: 'absolute',
    left: dimensions.leftMargin +   dimensions.bodyWidth * .4,
    width: dimensions.bodyWidth * .43,
    height: '100%',
    // backgroundColor: 'yellow',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',

  },
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
        color: 'white',
        fontSize:normalize(11),
        // width: dimensions.bodyWidth *.5,
        paddingTop: dimensions.footerHeight  * 0.15,
      },
      buttonImage :{
        width: dimensions.bodyWidth * 0.024,
        top: dimensions.footerHeight  * 0.2,
        height: dimensions.footerHeight * 0.14,

        // left: 0,
        position: 'absolute'
        // left: 0
        // right:0,
        // marginRight:0,
      }
});
