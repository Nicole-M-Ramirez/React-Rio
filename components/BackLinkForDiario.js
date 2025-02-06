import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, PixelRatio, Platform, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors, dimensions } from './constants';

import {text} from '../Diccionario/español';
import { normalize } from './FondNormilize';

// () => navigation.navigate('RegistroUtilidad',{img:img, forDate: forDate, pantalla : pantalla}),

function BackLinkForDiario({labelBack, gotoScreen, theDate, img, pantalla}) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity  style={{height:'100%'}}  onPress={() => navigation.navigate(gotoScreen, {forDate: theDate, img:img, pantalla: pantalla, actividad: "diario", nombre:"Diario"})}>
    <View style={styles.hookedStyles}>
      <View style={{width:'8%', 'height': '100%',  alignItems: 'flex-start',justifyContent: 'center',  }}>
        <Image source={require('../assets/back.png')}  style={styles.buttonImage} />
      </View>
      <View style={{width:'92%', 'height': '100%', alignItems: 'flex-start',justifyContent: 'center', }}> 
        <Text style={{color: 'white', textAlignVertical: 'center'}}>{labelBack}</Text>
      </View>
    </View>
    </TouchableOpacity>
  );
}

export default BackLinkForDiario;

const styles = StyleSheet.create({
  hookedStyles :{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    direction: 'inherit',
    flexWrap: 'nowrap',
    height: '100%'
  
  },
  buttonImage :{
    width: dimensions.bodyWidth * 0.024,
    height: dimensions.footerHeight * 0.14,
    position: 'absolute'
  }
});
