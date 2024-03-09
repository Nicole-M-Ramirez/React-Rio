
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, PixelRatio, Platform, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors, dimensions } from './constants';

import {text} from '../Diccionario/español';
import { normalize } from './FondNormilize';



function NoAcepto({labelNoAcepto, gotoScreen}) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity  style={{height:'100%'}}  onPress={() => navigation.navigate(gotoScreen)}>
    <View style={styles.hookedStyles}>
      <View style={{width:'92%', 'height': '100%', alignItems: 'flex-end',justifyContent: 'center', }}> 
        <Text style={{color: 'white', textAlignVertical: 'center'}}>{labelNoAcepto}</Text>
      </View>
      <View style={{width:'8%', 'height': '100%',  alignItems: 'flex-end',justifyContent: 'center',  }}>
        <Image source={require('../assets/continuar2.png')}  style={styles.buttonImage} />
      </View>
    </View>
    </TouchableOpacity>
  );
}

export default NoAcepto;

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
