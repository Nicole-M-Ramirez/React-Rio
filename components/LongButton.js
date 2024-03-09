import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from 'react-native';
import {colors, dimensions} from '../components/constants';
import React, { useState } from 'react';
import { normalize } from '../components/FondNormilize';
import { useNavigation } from '@react-navigation/native';

const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width


function LongButton({Color, Title, Function,Image}) {
  const navigation = useNavigation(); 
  
  return (
    <TouchableOpacity style={[styles.buttonView,{backgroundColor:Color}]} onPress={Function}>
        <Text style={styles.buttonsText}>{Title}</Text>
        <View style={{position: 'absolute', zIndex: 0,  alignItems: 'flex-end',justifyContent: 'center',}}>
            {Image}
        </View>
    </TouchableOpacity>
  );
}

export default LongButton;

const styles = StyleSheet.create({
  titleImage :{
    left: dimensions.bodyWidth /3,
    width: dimensions.buttonWidth * 0.7,
    height: dimensions.buttonHeight *0.7,
    margin: dimensions.separator,
  },
 titleText: {
  color: "#4eb5a3",
  fontSize: normalize(20),
  fontWeight: '600',
  },
  buttonView: {
    height: dimensions.buttonHeight/4,
    borderRadius: 8,
    marginTop: dimensions.separator,
  },
  buttonsText: {
    color: 'white',
    fontSize: normalize(13),
    top: dimensions.buttonHeight/16,
    left: dimensions.separator,
  }
});
