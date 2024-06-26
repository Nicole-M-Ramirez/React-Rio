import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, PixelRatio, Platform, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors, dimensions } from './constants';

import {text} from '../Diccionario/español';
import { normalize } from './FondNormilize';

const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width

function BotonMenuPrin({Color, TitleImage, BackgroundImage, Title, Function, Left}) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={[styles.boton,{backgroundColor: Color}]} onPress={Function}>
        <Image source={TitleImage} resizeMode='contain' style={[styles.buttonImage, {alignSelf: 'flex-start', left: dimensions.buttonHeight/5}]} />
        <Text style={styles.buttonText}>{Title}</Text> 
        <Image source={BackgroundImage} resizeMode='contain' style={[styles.backgroudImages,{left: Left}]}/>
    </TouchableOpacity>
  );
}

export default BotonMenuPrin;

const styles = StyleSheet.create({
    boton :{
        height: dimensions.buttonHeight,
        width: dimensions.buttonWidth*2.04,
        borderRadius:5,
        marginBottom:dimensions.bodyHeight*0.02
    },
    buttonImage :{
        width: ScreenWidth * 0.23,
        height: ScreenHeight * 0.13,
        alignSelf: 'center',
        top: dimensions.buttonHeight /10
    
      },
      buttonText :{
        color:'white',
        fontSize: normalize(13),
        top: dimensions.buttonHeight * 0.17,
        left: dimensions.buttonWidth * 0.08,
      },

      backgroudImages :{
        position: 'absolute',
        top: dimensions.bodyHeight*-0,
        //left: dimensions.bodyWidth*0,
        width: dimensions.bodyWidth*1,
        height: dimensions.buttonHeight,
        // top: dimensions.bodyHeight*-0.2,
        // left: dimensions.bodyWidth*2
      }
});
