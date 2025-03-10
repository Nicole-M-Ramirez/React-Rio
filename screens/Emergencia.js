import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, PixelRatio, TouchableOpacity, Image, Alert} from 'react-native';
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
import TextMessage3 from '../components/TextMessage3';

import TwoThirdsButton from '../components/TwoThirdsButton';
import { useDispatch } from 'react-redux';
import { updateDateData, decreaseByOne, reportCASIS, addAutolecionData } from '../redux/slices/counterSlice';


import { gs } from '../components/RioGlobalStrings';
import { useSelector } from 'react-redux';
import BotonConfig from '../components/BotonConfig';

const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width


function Emergencia({route}) {
  const today = new Date();
  const contacto = useSelector(state => state.counter.contacto);
  const navigation = useNavigation();
  const lang = useSelector(state => state.counter.language);
  const { forDate } = route.params;
  const [popUp, setPopUp] = useState(true)
  const dispatch = useDispatch();

  const showAlert = (dispatch, meta, oldMeta) => {

    let msg;
    msg = gs['reportarAL'][lang];
    if ( meta !==undefined ) msg = msg + ". Hay una meta activa!";
    Alert.alert(
      gs['confirmacion'][lang],
      msg,
      [
        {
          text: 'No',
          style: 'cancel',
        },
        {
          text: gs['si'][lang],
          _onPress: () => {
            //console.log("Confirmed autolesion!!: " + met);
            
            dispatch(reportCASIS({"theDate":forDate}));
            dispatch(addAutolecionData({"fec": forDate}));

            // 2024-07-24 

            // If there is an active Meta and the CASIS falls before the scheduled deadline we 
            // must cancel the congratulations alarm
            //console.log("IN Diary: reporting CASIS at: " + theDate);
            //console.log("IN Diary: reporting CASIS at: " + new Date(today));
            
            if (meta !== undefined) {
              
              if (meta.active) { 
                console.log("IN DIARY Canceling the trigget notification: " + meta.notifID);
                notifee.cancelTriggerNotification(meta.notifID);
              }
            }


            // dispatch(addMeta({ "theDate": new Date().toString().split("(")[0], meta: meta }));
          },
          get onPress() {
            return this._onPress;
          },
          set onPress(value) {
            this._onPress = value;
          },
        },
      ],
      { cancelable: false }
    );
  };

  

  const actividades=[
    () => navigation.navigate('RespiracionUrgencia',{pantalla: 'SeguimientoUrgencia',
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
       <BotonConfig pantalla = 'Emergencia' Back={()=>{navigation.navigate('Emergencia', {forDate: forDate})}}/>
    <HeaderView headerButtons = 'yes'>
      <TimeSince/>
    </HeaderView>

    <BodyView>
      <TextMessage3/>
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

        <TouchableOpacity onPress={()=>{Calling('18009810023')}} style={[styles.button, {
                                                  backgroundColor:colors.emergencyRed,
                                                  top: 1.009*(dimensions.buttonHeight + dimensions.separator),
                                                  left: 0,
                                                  width : dimensions.buttonWidth,
                                                  height : ScreenHeight * 0.062,
                                                  position: 'absolute'
                                                }]}>
          <Image source={require('../assets/llamada.png')} resizeMode='contain' style={styles.smallButtonImage} />
          <Text style={styles.smallButtonText}>Línea PAS</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{Calling('911')}} style={[styles.button, {
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

        <TouchableOpacity onPress={()=>{Calling('988')}} style={[styles.button, {
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

        <TouchableOpacity onPress={()=>{Calling('18886727622')}} style={[styles.button, {
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

        <TouchableOpacity onPress={()=>{Calling(contacto)}} style={[styles.button, {
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

        {/* <View style={{position:'absolute',top: dimensions.bodyHeight*1.02}}>
            <BackLink labelBack={gs['volver'][lang]} gotoScreen={'MenuPrincipal'}></BackLink>
        </View> */}

        <View style={{height:dimensions.footerHeight*0.7,width:1, top:dimensions.bodyHeight*1.06}}>
          <Text style={styles.titleText}></Text>
        </View>

        <View style={{width: dimensions.bodyWidth,top: dimensions.bodyHeight*1.16,position: 'absolute', borderTopWidth: dimensions.headerHeight *0.03, borderColor: colors.mintGreen,}}/>

        <Text style={styles.text}>{gs['tituloFoother'][lang]}</Text>

    </BodyView>

    <FooterView>
      <View style={{position:'absolute',top: dimensions.footerHeight*0.2}}>
        <BackLink labelBack={gs['volver'][lang]} gotoScreen={'MenuPrincipal'}></BackLink>
      </View>

      <View style={{top:0, left: dimensions.bodyWidth/2, position: 'absolute'}}>
          {/* <TwoThirdsButton label ={gs['reportarAL'][lang]} topMargin = {16} 
            bg = {colors.emergencyRed} row = {0} col = {0} img={require('../assets/ingresar.png')} active={new Date(today) < new Date()}
            onPress={ () =>{showAlert(dispatch); dispatch(addAutolecionData({"fec": forDate}));} }
            /> */}
            <TouchableOpacity style={emergencyCasisStyle.emergencyCasis} onPress={ () =>{showAlert(dispatch); dispatch(addAutolecionData({"fec": today}));}}>
              <View style={emergencyCasisStyle.imageView}>
                <Image source={require('../assets/ingresar.png')}  style={emergencyCasisStyle.image}  />
              </View>
              <View style={emergencyCasisStyle.textView}>
                <Text style={emergencyCasisStyle.text}>{gs['reportarAL'][lang]}</Text>
              </View>
            </TouchableOpacity>
    
      </View>
    </FooterView>

    {/* <EmergencyView>
      <Text style={styles.text}>{gs['tituloFoother'][lang]}</Text>
    </EmergencyView> */}
  </View>
  );
}

export default Emergencia;

const styles = StyleSheet.create({
    text: {
      color: colors.mintGreen,
      fontSize:normalize(10),
      width: dimensions.bodyWidth *.6,
      //paddingTop: dimensions.emergencyHeight  * 0.1,
      top: dimensions.bodyHeight*1.06
    },
    titleText: {
      //backgroundColor:'grey',
      color: "#4eb5a3",
      fontSize: normalize(10),
      fontWeight: '600',
      width: dimensions.bodyWidth * 0.4,
      top: dimensions.footerHeight * 0
      },
      button:{
        borderRadius:5,
      },
      buttonText:{
        position: 'absolute',
        color:'white',
        fontSize: normalize(12),
        top: dimensions.buttonHeight*0.76,
        left: dimensions.buttonWidth*0.08,
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
        position:'absolute',
        color:'white',
        fontSize: normalize(13),
        top: (dimensions.buttonHeight/3)*0.3,
        left: ScreenWidth * 0.15,
        position: 'absolute',
        width: dimensions.buttonWidth * 0.57
      },
      middleButtonText: {
        color:'white',
        fontSize: normalize(13),
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

const emergencyCasisStyle = StyleSheet.create({
  emergencyCasis:{
    borderRadius: 6,
    width:dimensions.bodyWidth*0.49,
    height:dimensions.footerHeight*0.7,
    backgroundColor:colors.emergencyRed,
    top: dimensions.footerHeight*0.2,
    left:dimensions.bodyWidth*0.01
  },
  normal: {
    height: dimensions.buttonHeight * 1/ 3, 
    width: dimensions.buttonWidth,
    flexDirection: 'row',
    borderRadius: 5,
    position: 'absolute',
  },
  imageView: {
    height: '100%', 
    width: '20%',
    justifyContent: 'flex-start',
    alignItems: 'center', 
    alignContent: 'center',
    left: (dimensions.bodyWidth*0.49)*0.1,
    top: (dimensions.footerHeight*0.2)*0.2
    // backgroundColor: 'yellow'
  },
  textView: {
    height: '100%', 
    justifyContent: 'flex-start',
    width: '75%', 
    //marginLeft:'6%', 
    left: (dimensions.bodyWidth*0.49)*0.5,
    top: (dimensions.footerHeight*0.2)*-2.7,
    alignItems: 'flex-start', 
    alignContent: 'center'
  },
  text: {
    fontSize: normalize(12),
    color: "white"
  },
  image: {
    height: dimensions.buttonHeight * .81 * .35,
    width: dimensions.buttonHeight * .81 * .35,
    margin: '5%',
  }
})