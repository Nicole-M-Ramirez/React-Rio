import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, PixelRatio, TouchableOpacity, Image} from 'react-native';
import React, { useState } from 'react';
import { colors } from '../components/constants';
import { dimensions } from '../components/constants';
import { normalize } from '../components/FondNormilize';
import call from 'react-native-phone-call';
import { useNavigation } from '@react-navigation/native';

import TimeSince from '../components/TimeSince';
import HeaderView from '../components/HeaderView';
import BodyView from '../components/BodyView';
import FooterView from '../components/FooterView';
import EmergencyView from '../components/EmergencyView';
import Emergency from '../components/Emergency';
import BackLink from '../components/BackLink';
import { updateintentosActividad } from '../redux/slices/counterSlice';

import { gs } from '../components/RioGlobalStrings';
import { useSelector,useDispatch } from 'react-redux';
import { convertToObject } from 'typescript';

const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width

function SeguimientoUrgencia({route}) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const lang = useSelector(state => state.counter.language);

  const intentos = useSelector(state => state.counter.intentosActividad);

  function Calling (phoneNumber) {

    const args = {
      number: phoneNumber, // String value with the number to call
      prompt: false, // Optional boolean property. Determines if the user should be prompted prior to the call 
      skipCanOpen: true // Skip the canOpenURL check
    }

    call(args).catch(console.error)
  }

  function noFunciono (){
    if(intentos === false){
      console.log('primero')
      dispatch(updateintentosActividad({"intento":true}));
      navigation.navigate('Emergencia')
    }
    else{
      dispatch(updateintentosActividad({"intento":false}));
      navigation.navigate('SegundoSeguimiento')
    }
  }

  function siFunciono ( ){
    dispatch(updateintentosActividad({"intento":false}));
    navigation.navigate('MenuPrincipal')
  }

  return (
    <View>
    <HeaderView headerButtons = 'yes'>
      <TimeSince/>
    </HeaderView>

    <BodyView>
        <View style={[{top: dimensions.bodyHeight*0.02,
                       left: dimensions.bodyWidth*0.25,
                       width : dimensions.buttonWidth,
                       height : dimensions.buttonHeight,}]}>
          <Image source={require('../assets/urgencia.png')} resizeMode='contain' style={styles.titleImage} />
        </View>

        <View style={{borderBottomColor: colors.mintGreen, width: dimensions.bodyWidth, borderBottomWidth:3}}/>

        <Text style={styles.TitleText}>{gs['pasoUrgencia'][lang]}</Text>

        <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={[styles.button, {backgroundColor: colors.blue}]} onPress={()=>{siFunciono()}}>
                    <Text style={styles.buttonText}>{gs['si'][lang]}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, {backgroundColor: colors.emergencyRed}]} onPress={()=>{noFunciono()}}>
                    <Text style={styles.buttonText}>No</Text>     
            </TouchableOpacity>
        </View>
        <TouchableOpacity style={[styles.buttonView,{backgroundColor:colors.mintGreen}]} onPress={() => {navigation.navigate('MenuPrincipal')}}>
          <Text style={styles.buttonsText}>{gs['cancelar'][lang]}</Text>
        </TouchableOpacity>
    </BodyView>

    <FooterView>
      <View style={{height:'100%',justifyContent: 'center' , alignItems: 'flex-start'}}>
        <Text style={styles.titleText}>{gs['tituloUrgencia'][lang]}</Text>
      </View>
    </FooterView>

    <EmergencyView>
      <Text style={styles.text}>{gs['tituloFoother'][lang]}</Text>
    </EmergencyView>
  </View>
  );
}

export default SeguimientoUrgencia;

const styles = StyleSheet.create({
    text: {
      color: colors.mintGreen,
      fontSize:normalize(10),
      width: dimensions.bodyWidth *.6,
      paddingTop: dimensions.emergencyHeight  * 0.1,
    },
    titleText: {
      color: "#4eb5a3",
      fontSize: normalize(15),
      fontWeight: '600',
      width: dimensions.bodyWidth * 0.75,
      top: dimensions.footerHeight * 0.15
      },
      titleImage :{
        width: ScreenWidth * 0.23,
        height: ScreenHeight * 0.13,
        alignSelf: 'center',
        top: dimensions.buttonHeight /10
      },

      button:{
        top: dimensions.bodyHeight /20 ,
        width: dimensions.buttonWidth,
        height: dimensions.shortButtonHeight*1.4,
        borderRadius:3,
        margin: dimensions.separator / 2,
      },
      buttonText:{
        color:'white',
        fontSize: normalize(27),
        top: dimensions.shortButtonHeight/2.5,
        left: dimensions.buttonWidth*0.35,
      },
      buttonImage :{
        width: dimensions.shortButtonHeight /2,
        height: dimensions.shortButtonHeight /2,
        // top: ScreenHeight * 0.0,
        // left: ScreenWidth * 0.25
        position: 'absolute'
      },
      buttonTextView : {
        height: dimensions.shortButtonHeight
      },

      TitleText:{
        color: colors.mintGreen,
        fontWeight: '500',
        fontSize: normalize(20),
        //top: dimensions.bodyHeight*0
      },

      buttonView: {
        top:dimensions.bodyHeight*0.04,
        left:dimensions.bodyWidth*0.01,
        height: dimensions.buttonHeight/4,
        width:dimensions.bodyWidth,
        borderRadius: 3,
        marginTop: dimensions.separator,
      },
      buttonsText: {
        color: 'white',
        fontSize: normalize(16),
        top: dimensions.buttonHeight/20,
        left: dimensions.bodyWidth*0.4,
      }
});