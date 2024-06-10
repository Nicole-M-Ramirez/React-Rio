
import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image, Dimensions, PixelRatio } from 'react-native';
import { colors, dimensions } from '../components/constants';
import { normalize } from './FondNormilize';
import Emergency from './Emergency';
import EmergencyView from './Emergency';


const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width

function SixGrid ({colors, title, functions, images}) {
  return (
    <>
        <TouchableOpacity onPress={functions[0]} style={[styles.button, {
                                                  backgroundColor:colors[0],
                                                  top: 0,
                                                  left: 0,
                                                  width : dimensions.buttonWidth,
                                                  height : dimensions.buttonHeight,
                                                  // position: 'absolute' 
                                                }]}>
                                    {images[0]}              
          <Text style={styles.buttonText}>{title[0]}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={functions[1]} style={[styles.button, {
                                                  backgroundColor:colors[1],
                                                  top: 0,
                                                  left: dimensions.buttonWidth + dimensions.separator,
                                                  width : dimensions.buttonWidth,
                                                  height : dimensions.buttonHeight,
                                                  position: 'absolute' 
                                                }]}>
          {images[1]}
          <Text style={styles.buttonText}>{title[1]}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={functions[2]} style={[styles.button, {
                                                  backgroundColor:colors[2],
                                                  top: (dimensions.buttonHeight + dimensions.separator),
                                                  left: 0,
                                                  width : dimensions.buttonWidth,
                                                  height : dimensions.buttonHeight,
                                                  position: 'absolute' 
                                                }]}>
          {images[2]}
          <Text style={[styles.buttonText, {fontSize:normalize(13), top: dimensions.buttonHeight*0.17}]}>{title[2]}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={functions[3]} style={[styles.button, {
                                                  backgroundColor:colors[3],
                                                  top: 1*(dimensions.buttonHeight + dimensions.separator),
                                                  left: dimensions.buttonWidth + dimensions.separator,
                                                  width : dimensions.buttonWidth,
                                                  height : dimensions.buttonHeight,
                                                  position: 'absolute' 
                                                }]}>
          {images[3]}
          <Text style={[styles.buttonText,{fontSize: normalize(12), top:dimensions.buttonHeight*0.18, left:dimensions.buttonWidth*0.1}]}>{title[3]}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={functions[4]} style={[styles.button, {
                                                  backgroundColor:colors[4],
                                                  top: 2*(dimensions.buttonHeight + dimensions.separator),
                                                  left: 0,
                                                  width : dimensions.buttonWidth,
                                                  height : dimensions.buttonHeight,
                                                  position: 'absolute' 
                                                }]}>
          {images[4]}
          <Text style={styles.buttonText}>{title[4]}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={functions[5]} style={[styles.button, {
                                                  backgroundColor:colors[5],
                                                  top: 2*(dimensions.buttonHeight + dimensions.separator),
                                                  left: dimensions.buttonWidth + dimensions.separator,
                                                  width : dimensions.buttonWidth,
                                                  height : dimensions.buttonHeight,
                                                  position: 'absolute' 
                                                }]}>
          {images[5]}
          <Text style={styles.buttonText}>{title[5]}</Text>
        </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  button:{
    borderRadius:5,
  },
  buttonText:{
    color:'white',
    fontSize: normalize(13),
    top: dimensions.buttonHeight *0.15,
    left: ScreenWidth * 0.05
  },
});

export default SixGrid;
