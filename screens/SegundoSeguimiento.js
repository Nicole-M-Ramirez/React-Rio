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
import NextLink from '../components/NextLink';
import BotonConfig from '../components/BotonConfig';

import { gs } from '../components/RioGlobalStrings';
import { useSelector } from 'react-redux';

const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width


function SegundoSeguimiento({route}) {
  const navigation = useNavigation();
  const lang = useSelector(state => state.counter.language);

  function Calling (phoneNumber) {

    const args = {
      number: phoneNumber, // String value with the number to call
      prompt: false, // Optional boolean property. Determines if the user should be prompted prior to the call 
      skipCanOpen: true // Skip the canOpenURL check
    }

    call(args).catch(console.error)
  }

  function Calling (phoneNumber) {

    const args = {
      number: phoneNumber, // String value with the number to call
      prompt: false, // Optional boolean property. Determines if the user should be prompted prior to the call 
      skipCanOpen: true // Skip the canOpenURL check
    }

    call(args).catch(console.error)
  }

  return (
    <View>
      <BotonConfig pantalla = 'SegundoSeguimiento' Back={() => navigation.navigate('SegundoSeguimiento')}/> 
    <HeaderView headerButtons = 'yes'>
      <TimeSince/>
    </HeaderView>

    <BodyView>
        <Text style={styles.infoText}>{gs['urgenciaInfo'][lang]}</Text>

        <View style={{flexDirection:'row'}}>
            <TouchableOpacity onPress={()=>{Calling('18009810023')}} style={[styles.button, {backgroundColor: colors.emergencyRed}]}>
                <View style={styles.buttonTextView} >
                    <Text style={styles.buttonText}>PAS</Text>
                </View>
                <View style={styles.buttonImgView}>
                    <Image source={require('../assets/llamada.png')} resizeMode='contain' style={styles.buttonImage} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{Calling('18886727622')}} style={[styles.button, {backgroundColor: colors.emergencyRed}]}>
                <View style={styles.buttonTextView} >
                    <Text style={[styles.buttonText, {top: dimensions.shortButtonHeight*0.05}]}>{gs['personasSordas'][lang]}</Text>
                </View>
                <View style={styles.buttonImgView}>
                    <Image source={require('../assets/llamada.png')} resizeMode='contain' style={styles.buttonImage} />
                </View>
            </TouchableOpacity>
        </View>

        <View style={{flexDirection:'row'}}>
            <TouchableOpacity onPress={()=>{Calling('911')}} style={[styles.button, {backgroundColor: colors.emergencyRed}]}>
                <View style={styles.buttonTextView} >
                    <Text style={styles.buttonText}>911</Text>
                </View>
                <View style={styles.buttonImgView}>
                    <Image source={require('../assets/llamada.png')} resizeMode='contain' style={styles.buttonImage} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{Calling('988')}} style={[styles.button, {backgroundColor: colors.emergencyRed}]}>
                <View style={styles.buttonTextView} >
                    <Text style={styles.buttonText}>988</Text>
                </View>
                <View style={styles.buttonImgView}>
                    <Image source={require('../assets/llamada.png')} resizeMode='contain' style={styles.buttonImage} />
                </View>
            </TouchableOpacity>
        </View>

    </BodyView>

    <FooterView>
        {/* <View style={{width:'50%', position:'absolute',marginTop: dimensions.separator}}>
            <BackLink labelBack={gs['volver'][lang]} gotoScreen={'Emergencia'}></BackLink>
        </View> */}

      <View style={{height:'100%',justifyContent: 'center' , alignItems: 'flex-start'}}>
        <Text style={styles.titleText}>{gs['contactosEmergencia'][lang]}</Text>
      </View>

      <View style={{left: '50%', width:'50%', position:'absolute', top:dimensions.footerHeight*0.6}}>
        <NextLink labelNoAcepto={gs['continuar'][lang]} gotoScreen={'MenuPrincipal'}></NextLink>
      </View>
    </FooterView>

    <EmergencyView>
      <Text style={styles.text}>{gs['tituloFoother'][lang]}</Text>
    </EmergencyView>
  </View>
  );
}

export default SegundoSeguimiento;

const styles = StyleSheet.create({
    text: {
      color: colors.mintGreen,
      fontSize:normalize(10),
      width: dimensions.bodyWidth *.6,
      paddingTop: dimensions.emergencyHeight  * 0.1,
    },
    infoText:{
        color:colors.mintGreen,
        fontSize: normalize(15),
        //width: dimensions.bodyWidth *,
        //left: dimensions.bodyWidth*0.05,
        top: dimensions.buttonHeight*0.1
      },
    titleText: {
      color: "#4eb5a3",
      fontSize: normalize(15),
      fontWeight: '600',
      width: dimensions.bodyWidth * 0.75,
      top: dimensions.footerHeight * 0.05
      },
      titleImage :{
        width: ScreenWidth * 0.23,
        height: ScreenHeight * 0.13,
        alignSelf: 'center',
        top: dimensions.buttonHeight /10
      },

      button:{
        top: dimensions.bodyHeight /6,
        width: dimensions.buttonWidth,
        height: dimensions.shortButtonHeight/1.4,
        borderRadius:3,
        margin: dimensions.separator / 2,
      },
      buttonText:{
        color:'white',
        fontSize: normalize(14),
        top: dimensions.shortButtonHeight/6,
        left: dimensions.buttonWidth*0.4,
        width: dimensions.buttonWidth *0.6
      },
      buttonImage :{
        width: dimensions.shortButtonHeight /2,
        height: dimensions.shortButtonHeight /2,
        // top: ScreenHeight * 0.0,
        // left: ScreenWidth * 0.25
        //position: 'absolute'
      },
      buttonTextView : {
        height: dimensions.shortButtonHeight,
        width: dimensions.buttonWidth *0.8,
        //backgroundColor: 'grey'
      },
      buttonImgView : {
        height: dimensions.shortButtonHeight,
        left: dimensions.buttonWidth *-0.05,
        width: dimensions.buttonWidth / 2,
        top: dimensions.shortButtonHeight * -1.12,
       // position: 'absolute',
        justifyContent: "center",
        alignItems: "center",
        verticalAlign: "middle"
        
      },

      TitleText:{
        color: colors.mintGreen,
        fontWeight: '500',
        fontSize: normalize(20),
        //top: dimensions.bodyHeight*0
      }
});