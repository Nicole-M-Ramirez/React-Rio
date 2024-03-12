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

import { gs } from '../components/RioGlobalStrings';
import { useSelector } from 'react-redux';

const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width


function Emergencia({route}) {
  const navigation = useNavigation();
  const lang = useSelector(state => state.counter.language);
  const { forDate } = route.params;
  const actividades=[
    () => navigation.navigate('ActividadEnProgreso',{pantalla: 'SeguimientoUrgencia',
                                                     vieneDe: 'Emergencia',
                                                     img: <Image source={require('../assets/Respiracion-Profunda.gif')} resizeMode='contain' style={[styles.ActividadImage,{top:0,width: dimensions.bodyWidth *0.5, height:dimensions.bodyHeight*0.34}]} />,
                                                     texto:gs['respiracionCont'][lang],
                                                     color: colors.mintGreen,
                                                     titulo: gs['respiracion'][lang],
                                                     forDate: forDate
                                                    }),
    () => navigation.navigate('MeditacionEmergencia', {forDate: forDate}),
    // () => navigation.navigate('ActividadEnProgreso',{pantalla: 'SeguimientoUrgencia',
    //                                                 vieneDe: 'Emergencia',
    //                                                 img: <Image source={require('../assets/meditacion2.png')} resizeMode='contain' style={[styles.ActividadImage,{top:0,width: dimensions.bodyWidth *0.5, height:dimensions.bodyHeight*0.34}]} />,
    //                                                 texto:'Desde garabatos hasta obras de arte, intenta plasmar lo que sientes. El arte puede ser un medio accesible para comenzar a explorar y reconocer tus emociones, particularmente para trabajar con sentimientos de preocupacion o ansiedad',
    //                                                 color: colors.mintGreen,
    //                                                 titulo: gs['meditacion'][lang]
    //                                                })
  ]

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
    <HeaderView headerButtons = 'yes'>
      <TimeSince/>
    </HeaderView>

    <BodyView>
      <TouchableOpacity onPress={actividades[0]} style={[styles.button, {
                                                  backgroundColor:colors.mintGreen,
                                                  top: 1*(dimensions.buttonHeight + dimensions.separator),
                                                  left: dimensions.buttonWidth + dimensions.separator,
                                                  width : dimensions.buttonWidth,
                                                  height : dimensions.buttonHeight,
                                                  position: 'absolute' 
                                                }]}>
          <Image source={require('../assets/respirar2.png')} resizeMode='contain' style={styles.buttonImage} />
          <Text style={styles.buttonText}>{gs['respiracion'][lang]}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={actividades[1]} style={[styles.button, {
                                                  backgroundColor:colors.mintGreen,
                                                  top: 2*(dimensions.buttonHeight + dimensions.separator),
                                                  left: dimensions.buttonWidth + dimensions.separator,
                                                  width : dimensions.buttonWidth,
                                                  height : dimensions.buttonHeight,
                                                  position: 'absolute' 
                                                }]}>
          <Image source={require('../assets/meditacion2.png')} resizeMode='contain' style={styles.buttonImage} />
          <Text style={styles.buttonText}>{gs['meditacion'][lang]}</Text>
        </TouchableOpacity>

        <View style={[styles.button, {top: dimensions.bodyHeight*0.02,
                                      left: dimensions.bodyWidth*0.25,
                                      width : dimensions.buttonWidth,
                                      height : dimensions.buttonHeight,
                                      position: 'absolute'}]}>
          <Image source={require('../assets/urgencia.png')} resizeMode='contain' style={styles.buttonImage} />
        </View>

        <TouchableOpacity onPress={()=>{Calling('7875080302')}} style={[styles.button, {
                                                  backgroundColor:colors.emergencyRed,
                                                  top: 1*(dimensions.buttonHeight + dimensions.separator),
                                                  left: 0,
                                                  width : dimensions.buttonWidth,
                                                  height : ScreenHeight * 0.062,
                                                  position: 'absolute'
                                                }]}>
          <Image source={require('../assets/llamada.png')} resizeMode='contain' style={styles.smallButtonImage} />
          <Text style={styles.smallButtonText}>Linea PAS</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{Calling('7875080302')}} style={[styles.button, {
                                                  backgroundColor:colors.emergencyRed,
                                                  top: 1.33*(dimensions.buttonHeight + dimensions.separator),
                                                  left: 0,
                                                  width : dimensions.buttonWidth,
                                                  height : ScreenHeight * 0.062,
                                                  marginBottom: dimensions.separator,
                                                  position: 'absolute'
                                                }]}>
            <Image source={require('../assets/llamada.png')} resizeMode='contain' style={styles.smallButtonImage} />
          <Text style={styles.smallButtonText}>911</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{Calling('7875080302')}} style={[styles.button, {
                                                  backgroundColor:colors.emergencyRed,
                                                  top: 1.66*(dimensions.buttonHeight + dimensions.separator),
                                                  left: 0,
                                                  width : dimensions.buttonWidth,
                                                  height : ScreenHeight * 0.062,
                                                  marginBottom: dimensions.separator,
                                                  position: 'absolute'
                                                }]}>
            <Image onPress={()=>{Calling('7875080302')}} source={require('../assets/llamada.png')} resizeMode='contain' style={styles.smallButtonImage} />
          <Text style={styles.smallButtonText}>988</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{Calling('7875080302')}} style={[styles.button, {
                                                  backgroundColor:colors.emergencyRed,
                                                  top: 2*(dimensions.buttonHeight + dimensions.separator),
                                                  left: 0,
                                                  width : dimensions.buttonWidth,
                                                  height : ScreenHeight * 0.062,
                                                  position: 'absolute' 
                                                }]}>
            <Image source={require('../assets/llamada.png')} resizeMode='contain' style={styles.smallButtonImage} />
          <Text style={[styles.smallButtonText, {top: ScreenHeight * 0.005}]}>{gs['personasSordas'][lang]}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{Calling('7875080302')}} style={[styles.button, {
                                                  backgroundColor:colors.mintGreen,
                                                  top: 2.33*(dimensions.buttonHeight + dimensions.separator),
                                                  left: 0,
                                                  width : dimensions.buttonWidth,
                                                  height : ScreenHeight * 0.132,
                                                  position: 'absolute' 
                                                }]}>
          <Image source={require('../assets/llamada.png')} resizeMode='contain' style={styles.smallButtonImage} />
          <Text style={styles.middleButtonText}>{gs['contactoPersonal'][lang]}</Text>
        </TouchableOpacity>

    </BodyView>

    <FooterView>
    <View style={{position:'absolute',marginTop: dimensions.separator}}>
      {/* <TouchableOpacity  style={{height:'100%'}}  onPress={() => navigation.navigate('MenuPrincipal')}>
        <View style={styles.hookedStyles}>
          <View style={{width:'8%', 'height': '100%',  alignItems: 'flex-start',justifyContent: 'center',  }}>
            <Image source={require ('../assets/back.png')}  style={styles.backButtonImage} />
          </View>
          <View style={{width:'92%', 'height': '100%', alignItems: 'flex-start',justifyContent: 'center', }}> 
            <Text style={{color: 'white', textAlignVertical: 'center'}}>{gs['volver'][lang]}</Text>
          </View>
        </View>
      </TouchableOpacity> */}
                {/* <View style={{width:'50%', position:'absolute',marginTop: dimensions.separator}}> */}
            <BackLink labelBack={"Regresar"} gotoScreen={'MiEspacio'}></BackLink>
          {/* </View> */}
    </View>

      <View style={{position:'absolute',marginTop: dimensions.separator*2}}>
        <Text style={styles.titleText}>{gs['tituloUrgencia'][lang]}</Text>
      </View>
    </FooterView>

    <EmergencyView>
      <Text style={styles.text}>{gs['tituloFoother'][lang]}</Text>
    </EmergencyView>
  </View>
  );
}

export default Emergencia;

const styles = StyleSheet.create({
    text: {
      color: colors.mintGreen,
      fontSize:normalize(10),
      width: dimensions.bodyWidth *.6,
      paddingTop: dimensions.emergencyHeight  * 0.1,
    },
    titleText: {
      //backgroundColor:'grey',
      color: "#4eb5a3",
      fontSize: normalize(14),
      fontWeight: '600',
      width: dimensions.bodyWidth * 0.75,
      top: dimensions.footerHeight * 0.25
      },
      button:{
        borderRadius:5,
      },
      buttonText:{
        color:'white',
        fontSize: normalize(13),
        top: dimensions.buttonHeight*0.1,
        left: ScreenWidth * 0.05,
        width: dimensions.bodyWidth*0.4 
      },
      buttonImage :{
        //backgroundColor: 'grey',
        width: ScreenWidth * 0.23,
        height: ScreenHeight * 0.13,
        // top: ScreenHeight * 0.01,
        // left: ScreenWidth * 0.08
        alignSelf: 'center',
        top: dimensions.buttonHeight /10
      },
      smallButtonImage :{
        //backgroundColor: 'grey',
        width: ScreenWidth * 0.10,
        height: ScreenHeight * 0.05,
        //top: ScreenHeight * 0.01,
        //left: ScreenWidth * 0.08,
        //alignSelf: '',
        left: dimensions.separator,
        top: dimensions.buttonHeight * 0.03
      },
      smallButtonText:{
       // backgroundColor:'grey',
        color:'white',
        fontSize: normalize(12),
        top: (ScreenHeight * 0.062) *0.1,
        left: ScreenWidth * 0.15,
        position: 'absolute',
        width: dimensions.buttonWidth * 0.57
      },
      middleButtonText: {
        color:'white',
        fontSize: normalize(12),
        top: ScreenHeight * 0.015,
        left: ScreenWidth * 0.15,
        position: 'absolute',
        width: dimensions.buttonWidth * 0.7
      },
      hookedStyles :{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        direction: 'inherit',
        flexWrap: 'nowrap',
        height: '100%'
        
      
      },
      backButtonImage :{
        width: dimensions.bodyWidth * 0.024,
        height: dimensions.footerHeight * 0.14,
        position: 'absolute'
      },
      ActividadImage :{
        width: ScreenWidth * 0.23,
        height: ScreenHeight * 0.13,
        alignSelf: 'center',
        top: dimensions.buttonHeight /2
      }
});