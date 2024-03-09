import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {colors, dimensions} from '../components//constants'
import { normalize } from '../components/FondNormilize';
import React, { useState } from 'react';

import HeaderView from '../components/HeaderView';
import BodyView from '../components/BodyView';
import EmergencyView from '../components/EmergencyView';
import FooterView from '../components/FooterView';
import Emergency from '../components/Emergency';
import TimeSince from '../components/TimeSince';
import LongButton from '../components/LongButton';
import BackLink from '../components/BackLink';


const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width



function MetaPorAct() {

  const [selectedOption, setSelectedOption] = useState('');

  const handleButtonPress = (option) => {
    setSelectedOption(option);
  };
  console.log("Meta escogida: " + selectedOption);

  return (
        <View style={styles.scrollView}>
          <ScrollView>
            <TouchableOpacity onPress={()=>{handleButtonPress('meditar')}} style={[styles.LongButton, {backgroundColor: colors.mintGreen, 
              borderColor: selectedOption === 'meditar' ? 'white' : 'gray'}]}  >
              <Text style={[styles.LongButtonText]}>Meditar por 5 días corridos</Text>
              <Image source={require('../assets/meditacion2.png')} resizeMode='contain' style={styles.buttonImage} />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{handleButtonPress('escribir')}} style={[styles.LongButton, {backgroundColor: colors.purple,
              borderColor: selectedOption === 'escribir' ? 'white' : 'gray'}]} >
              <Text style={styles.LongButtonText}>Escribir en el diario 5 días</Text>
              <Image source={require('../assets/dibujo2.png')} resizeMode='contain' style={styles.buttonImage} />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{handleButtonPress('mascota')}} style={[styles.LongButton, {backgroundColor: colors.greyBlue,borderColor: selectedOption === 'mascota' ? 'white' : 'gray'}]} >
              <Text style={styles.LongButtonText}>Cuidar mi mascota</Text>
              <Image source={require('../assets/mascota2.png')} resizeMode='contain' style={styles.buttonImage} />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{handleButtonPress('ejercitar')}} style={[styles.LongButton, {backgroundColor: colors.mintGreen, borderColor: selectedOption === 'ejercitar' ? 'white' : 'gray'}]}>
              <Text style={styles.LongButtonText}>Ejercitar 5 días corridos</Text>
              <Image source={require('../assets/ejercicio2.png')} resizeMode='contain' style={styles.buttonImage} />
            </TouchableOpacity>
          </ScrollView>
        </View>
  );
}

export default MetaPorAct;

const styles = StyleSheet.create({
    titleText: {
        color: colors.mintGreen,
        fontSize: normalize(18),
        marginTop: dimensions.separator,
        fontWeight: '500'
    },
    TopButton: {
        width: dimensions.bodyWidth * 0.490,
        height: dimensions.buttonHeight * 0.6,
        position: 'absolute',
        borderRadius: 5,
        top: dimensions.bodyHeight * 0.15
    },
    TopButtonText: {
        fontSize: normalize(14),
        color: 'white',
        marginTop: dimensions.separator*2,
        marginLeft: dimensions.separator*2
    },
    LongButton: {
      width: dimensions.bodyWidth,
      height: dimensions.buttonHeight/2,
      borderWidth: 2,
      borderRadius: 5,
      //marginBottom: 3,
      marginTop:5,
      //position: 'absolute',
      //top: dimensions.bodyHeight * 0.36
    },
    LongButtonText: {
      fontSize: normalize(14),
      color: 'white',
      marginTop: dimensions.separator*7.5,
      marginLeft: dimensions.separator*2
    },
    buttonImage :{
      width: ScreenWidth * 0.17,
      height: ScreenHeight * 0.09,
      top: dimensions.buttonHeight*-0.4,
      left: dimensions.buttonWidth *1.55
    },
    scrollView: {
      top: dimensions.bodyHeight*0.28,
      height: dimensions.bodyHeight*0.64,
      //backgroundColor: 'grey',
    },
    activarButton: {
      //backgroundColor: 'grey',
      width: dimensions.bodyWidth/3,
      height: dimensions.buttonHeight/3,
      borderRadius: 5,
      marginBottom: 3,
      position: 'absolute',
      top: dimensions.footerHeight * 0.2,
      left: dimensions.bodyWidth *0.64
    },
    activarText: {
      color: 'white',
      fontSize: normalize(15),
      top: '25%'
    },
    activarImg: {
      //backgroundColor: 'pink',
      width: ScreenWidth * 0.13,
      height: ScreenHeight * 0.07,
      top: dimensions.buttonHeight*-0.14,
      left: '60%'
    }
});
