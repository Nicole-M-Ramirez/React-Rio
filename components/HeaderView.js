import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, PixelRatio, Platform, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors, dimensions } from './constants';

import {text} from '../Diccionario/español';
import { normalize } from './FondNormilize';
import { Children } from 'react';

const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width

function HeaderView(props) {
  const navigation = useNavigation();

  return (
    <View >
      <TouchableOpacity onPress={()=>{navigation.navigate('MenuPrincipal')}} style={{width:dimensions.bodyWidth*0.09,left: dimensions.leftMargin, top: dimensions.headerHeight *0.7}}>
        <Image source={require('../assets/hogar2.png')} resizeMode='contain' style={[styles.buttonImage]} />
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{navigation.navigate('Configuracion')}} style={{position:'absolute', width:dimensions.bodyWidth*0.09, top: dimensions.bodyHeight*0.075, right:dimensions.leftMargin-4}}>
        <Image source={require('../assets/actionMenu.png')} resizeMode='contain' style={[styles.buttonImage,{top:dimensions.headerHeight*0.13, position:'absolute',}]} />
      </TouchableOpacity>

      <View style={styles.style}>
          {props.children}
      </View>
    </View>
  );
}

export default HeaderView;

const styles = StyleSheet.create({
    headerHouseButton:{
      width: ScreenWidth * 0.06,
      height: ScreenHeight * 0.06,
      top: ScreenHeight * 0.03,
      //left: dimensions.leftMargin,
    },
    style: {
        top: dimensions.headerTopMargin,
        left: dimensions.leftMargin,
        height: dimensions.headerHeight,
        width: dimensions.bodyWidth,
        position: 'absolute',
        borderColor: colors.mintGreen,
        borderBottomWidth: dimensions.headerHeight *0.03,
        borderTopWidth: dimensions.headerHeight *0.03,
        verticalAlign: 'middle',
        //backgroundColor: 'pink'
    },
    buttonImage :{
      width: dimensions.bodyWidth * 0.07,
      height: dimensions.headerHeight * 0.35,
      alignSelf: 'center',
      //backgroundColor: 'grey'
    }
});
