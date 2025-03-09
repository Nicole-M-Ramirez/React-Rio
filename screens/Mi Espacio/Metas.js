import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, ScrollView, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors, dimensions } from '../../components/constants';
import { normalize } from '../../components/FondNormilize';
import React, { useState } from 'react';

import HeaderView from '../../components/HeaderView';
import BodyView from '../../components/BodyView';
import EmergencyView from '../../components/EmergencyView';
import FooterView from '../../components/FooterView';
import Emergency from '../../components/Emergency';
import TimeSince from '../../components/TimeSince';
import LongButton from '../../components/LongButton';
import BackLink from '../../components/BackLink';
import MetaPorAct from '../../components/MetaPorAct';
import MetaPorTiem from '../../components/MetaPorTiem';
import { useDispatch, useSelector } from 'react-redux';
import { addMeta } from '../../redux/slices/counterSlice';
import { gs } from '../../components/RioGlobalStrings';
import BotonConfig from '../../components/BotonConfig';
import TextMessageMetas from '../../components/TextMessageMetas';
import { cancelMeta } from '../../redux/slices/counterSlice';
import { getMetaStringGlobal } from '../../components/RioGlobalFuncs';
import { DAY_IN_MS } from '../../components/constants';


import notifee, { TriggerType} from '@notifee/react-native';

//import { useSelector } from 'react-redux';

const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width


// const showAlert = (dispatch, meta, oldMeta) => {

//   let msg;
//   if (oldMeta == undefined) msg = gs['activarMeta'][lang] 
//   else msg = gs['activarMeta2'][lang]+" (" + oldMeta +  ")?"
//   Alert.alert(
//     'Confirmación',
//     msg,
//     [
//       {
//         text: 'No',
//         // onPress: handleCancel,
//         style: 'cancel',
//       },
//       {
//         text: gs['si'][lang],
//         onPress: ()=> { 
//           console.log("Confirmed!!: " + meta);
//           // console.log(meta);
//           // console.log(meta.includes("dia"));

//           // if (meta.includes("dia")) {
//             dispatch(addMeta({"theDate":new Date().toString().split("(")[0], meta: meta}))
//           // }
//           // else {
//           //   dispatch(addMeta({"theDate":new Date().toString().split("(")[0], meta: meta, check: {'1': false, '2': false,'3': false, '4': false, '5': false}}))
//           // }
//         }
//       },
//     ],
//     { cancelable: false }
//   );
// };

const getMetaActiva = (metas) => {
  for (let i = metas.length - 1; i >=0; i--) {
    // console.log(metas[i].meta);
    if (metas[i].active == true) return metas[i].meta;
  }
  return undefined;
} 

const getMetaActivaObj = (metas) => {
  for (let i = metas.length - 1; i >=0; i--) {
    // console.log(metas[i].meta);
    if (metas[i].active == true) return metas[i];
  }
  return undefined;
} 



function Metas() {

  // 2024-07-24 - Notifee
  async function onSchedNotification(message, dateForNotification, subtitle ) {
    // Request permissions (required for iOS)
    await notifee.requestPermission();

    let date = new Date();
    // date.setSeconds(date.getSeconds() + 60);
    const milliseconds = 5 * 60 * 1000; // 10 seconds = 10000 milliseconds
    date = dateForNotification; //new Date(date.getTime() + milliseconds);
    console.log("----------------- setting a sched alamr..... ------ for " + date);

    const trigger = {
      type: TriggerType.TIMESTAMP, // This is the type of trigger, we have other types of triggers as well
      timestamp: +date, // +date converts the date to timestamp
    };

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    // Display a notification
    await notifee.createTriggerNotification({
      
        id: dateForNotification.toString(),
        title: `${message}`,
        body: subtitle,
        android: {
          channelId: 'reminder',
          pressAction: {
            id: 'default',
          },
        },
        data: {
          id: '1',
          action: 'reminder',
          details: {
            name: "caca",
            date: dateForNotification.toString(),
          },
        },
      }, trigger);
  }


  const [popUp, setPopUp] = useState(true)
  const showAlert = (dispatch, meta, oldMeta) => {

    let msg;
    if (oldMeta == undefined) msg = gs['activarMeta'][lang] 
    else msg = gs['activarMeta2'][lang]+" (" + getMetaStringGlobal(oldMeta.meta,lang) +  ")?"
    Alert.alert(
      gs['confirmacion'][lang],
      // 'Confirmación',
      msg,
      [
        {
          text: 'No',
          // onPress: handleCancel,
          style: 'cancel',
        },
        {
          text: gs['si'][lang],
          onPress: ()=> { 
            console.log("Confirmed!!: " + meta);

            if (oldMeta) { 
              console.log("habia otra meta así que debemos cancelar su alarma");
              console.log(oldMeta);
              // cancelMeta();
              // dispatch(cancelMeta({ "nid": oldMeta.notifID}));
              console.log("Will kill the alarm.......");
              if (oldMeta.notifID !== undefined)
                console.log("The meta whose alarms I will cancel: " + JSON.stringify(oldMeta));
                if (typeof oldMeta.notifID == "string")  notifee.cancelTriggerNotification(oldMeta.notifID);
                else {
                  for (let i =0; i < oldMeta.notifID.length; i = i+1 ) {
                    console.log("======== I am going to cancel the notification: " + oldMeta.notifID[i]);
                    notifee.cancelTriggerNotification(oldMeta.notifID[i]);
                  }
                }
            }

            // console.log(meta);
            // console.log(meta.includes("dia"));
  
            // if (meta.includes("dia")) {
              const now = new Date();
              console.log("Setting and alarm for meta: " + meta);
              let duration = 0
              if (meta.includes("dia")) { 
                duration = parseInt(meta.slice(0,2)); 
                const deadline = new Date(now.getTime() + duration * DAY_IN_MS);

                dispatch(addMeta({"theDate":new Date().toString().split("(")[0], meta: meta, nid: deadline.toString()}));
                // let msg = "Felicidades, cumpliste tu meta: " + meta;
                let msg = gs['notifFelicidades'][lang];
                let subtitle = gs['notifCumplioDiasPre'][lang] + duration + gs['notifDia'][lang] + (duration > 1 ? 's':'') + gs['notifCumplioDiasPost'][lang];
                onSchedNotification(msg, deadline, subtitle);
              }
              else {
                // extract the number of times
                times = parseInt(meta.slice(-2));
                console.log("TIMES: " + times);
                let nid = [];
                for (let i = 1; i <= times; i = i + 1) {
                  let tmp = new Date(now.getTime() + i * DAY_IN_MS);
                  // let msg = "Dia " + i + " de tu meta " + meta;
                  let msg =  gs['notifActividad'][lang]
                  let subtitle = gs['notifDiaActividadPre'][lang] +  gs['notifDia'][lang] + ' ' + i +  gs['notifDiaActividadPost'][lang] + times + ' ';
                  
                  const justMeta = meta.slice(0,-2);
                  let key = undefined;
                  if (justMeta == 'meditar') key = (times == 1 ? 'diaMeditacion' : 'diasMeditacion');
                  else if (justMeta == 'caminar') key = (times == 1 ? 'diaEjercicio' : 'diasEjercicio');
                  else if (justMeta == 'escribir') key = (times == 1 ? 'diaEscribir' : 'diasEscribir');
                  else if (justMeta == 'meditar') key = (times == 1 ? 'diaEjercicio' : 'diasEjercicio');
                  else if (justMeta == 'dibujar') key = (times == 1 ? 'diaDibujar' : 'diasDibujar');
                  else if (justMeta == 'descansar') key = (times == 1 ? 'diaAutocuidado' : 'diasAutocuidado');
                  
                  subtitle += gs[key][lang];   


                  
                  onSchedNotification(msg, tmp, subtitle);
                  nid.push(tmp.toString());
                }
                console.log("nid: " + JSON.stringify(nid));
                
                dispatch(addMeta({"theDate":new Date().toString().split("(")[0], meta: meta, nid: nid}));

              }
            // }
            // else {
            //   dispatch(addMeta({"theDate":new Date().toString().split("(")[0], meta: meta, check: {'1': false, '2': false,'3': false, '4': false, '5': false}}))
            // }
          }
        },
      ],
      { cancelable: false }
    );
  };

  const dispatch = useDispatch();
  const lang = useSelector(state => state.counter.language);

  const metasFromStore = useSelector(state => state.counter.metas);
  // console.log("All the metas in the store:")
  // for (let i = 0; i < metasFromStore.length; i++)
  //   console.log(metasFromStore[i]);
  const metaActiva = getMetaActivaObj(metasFromStore)
  if (metaActiva !== undefined) console.log("meta activa: " +  metaActiva.meta);

  const [buttonActividadColors, setButtonActividadColors] = useState(colors.mintGreen);
  const [buttonTiempoColor, setButtonTiempoColor] = useState(colors.wine)

  const [metasMostradas, setMetasMostradas] = useState(<MetaPorAct/>)

  const [porActividad, setPorActividad] = useState(true);

  const [selectedOption, setSelectedOption] = useState('');

  const handleButtonPress = (option) => {
    setSelectedOption(option);
  };
  // console.log("Meta escogida: " + selectedOption);


  function actividadPressHandle () {
    setButtonActividadColors(colors.mintGreen)
    setButtonTiempoColor(colors.wine)

    setMetasMostradas(<MetaPorAct/>)
    setPorActividad(true);
  }

  function tiempoPressHandler () {
    setButtonTiempoColor(colors.pink)
    setButtonActividadColors(colors.darkForest)

    setMetasMostradas(<MetaPorTiem/>)
    setPorActividad(false);
  }

  const navigation = useNavigation();

  return (
    <View>
      <BotonConfig pantalla = 'Metas' Back={()=>{navigation.navigate('Metas')}}/>
      <HeaderView headerButtons = 'yes'>
        <TimeSince  />
      </HeaderView>

      <TextMessageMetas/>

      {/* <BodyView> */}
      <View style={{position:'relative', 
        marginTop: dimensions.bodyTopMargin - dimensions.headerHeight + dimensions.separator*5.5, 
        marginLeft: dimensions.leftMargin,
        height: dimensions.bodyHeight,
        width: dimensions.bodyWidth}}>
        <Text style={styles.titleText}>{gs['seleccionarReto'][lang]}</Text>

        <TouchableOpacity onPress={actividadPressHandle} style={[styles.TopButton, {backgroundColor: buttonActividadColors}]}>
            <Text style={styles.TopButtonText}>{gs['porActividad'][lang]}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={tiempoPressHandler} style={[styles.TopButton, {backgroundColor: buttonTiempoColor, left: (dimensions.bodyWidth / 2) + 3}]}>
        <Text style={styles.TopButtonText}>{gs['porTiempo'][lang]}</Text>
        </TouchableOpacity>

        {/* {metasMostradas} */}







        {porActividad &&
        <View style={styles.scrollView}>
          <ScrollView>
            <TouchableOpacity onPress={()=>{handleButtonPress('meditar01')}} 
                              style={[styles.LongButton, {backgroundColor: colors.mintGreen,
                                borderWidth: selectedOption === 'meditar01' ? 2 : 0,
                                borderColor: selectedOption === 'meditar01' ? 'white' : 'gray'}]} >
              <Text style={[styles.LongButtonText]}>1 {gs['diaMeditacion'][lang]}</Text>
              <Image source={require('../../assets/meditacion2.png')} resizeMode='contain' style={[styles.buttonImage, {position: 'absolute',top: (dimensions.buttonHeight)*0.08}]} />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{handleButtonPress('meditar03')}} 
                              style={[styles.LongButton, {backgroundColor: colors.purple,
                                      borderWidth: selectedOption === 'meditar03' ? 2 : 0,
                                      borderColor: selectedOption === 'meditar03' ? 'white' : 'gray'}]} >
              <Text style={styles.LongButtonText}>3 {gs['diasMeditacion'][lang]}</Text>
              <Image source={require('../../assets/meditacion2.png')} resizeMode='contain' style={[styles.buttonImage, {position: 'absolute',top: (dimensions.buttonHeight)*0.08}]} />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{handleButtonPress('meditar05')}} 
                              style={[styles.LongButton, {backgroundColor: colors.greyBlue,
                                      borderWidth: selectedOption === 'meditar05' ? 2 : 0,
                                      borderColor: selectedOption === 'meditar05' ? 'white' : 'gray'}]} >
              <Text style={styles.LongButtonText}>5 {gs['diasMeditacion'][lang]}</Text>
              <Image source={require('../../assets/meditacion2.png')} resizeMode='contain' style={[styles.buttonImage, {position: 'absolute',top: (dimensions.buttonHeight)*0.08}]} />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{handleButtonPress('meditar07')}} 
                              style={[styles.LongButton, {backgroundColor: colors.blue,
                                      borderWidth: selectedOption === 'meditar07' ? 2 : 0,
                                      borderColor: selectedOption === 'meditar07' ? 'white' : 'gray'}]} >
              <Text style={styles.LongButtonText}>7 {gs['diasMeditacion'][lang]}</Text>
              <Image source={require('../../assets/meditacion2.png')} resizeMode='contain' style={[styles.buttonImage, {position: 'absolute',top: (dimensions.buttonHeight)*0.08}]} />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{handleButtonPress('meditar10')}} 
                              style={[styles.LongButton, {backgroundColor: colors.deepPurple,
                                      borderWidth: selectedOption === 'meditar10' ? 2 : 0,
                                      borderColor: selectedOption === 'meditar10' ? 'white' : 'gray'}]} >
              <Text style={styles.LongButtonText}>10 {gs['diasMeditacion'][lang]}</Text>
              <Image source={require('../../assets/meditacion2.png')} resizeMode='contain' style={[styles.buttonImage, {position: 'absolute',top: (dimensions.buttonHeight)*0.08}]} />
            </TouchableOpacity>

            {/*--------------------------------------------------------------------------- */}

            <TouchableOpacity onPress={()=>{handleButtonPress('caminar01')}} 
                              style={[styles.LongButton, {backgroundColor: colors.mintGreen,
                                borderWidth: selectedOption === 'caminar01' ? 2 : 0,
                                borderColor: selectedOption === 'caminar01' ? 'white' : 'gray'}]} >
              <Text style={[styles.LongButtonText]}>1 {gs['diaEjercicio'][lang]}</Text>
              <Image source={require('../../assets/caminar2.png')} resizeMode='contain' style={[styles.buttonImage, {position: 'absolute',top: (dimensions.buttonHeight)*0.08}]} />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{handleButtonPress('caminar02')}} 
                              style={[styles.LongButton, {backgroundColor: colors.purple,
                                      borderWidth: selectedOption === 'caminar02' ? 2 : 0,
                                      borderColor: selectedOption === 'caminar02' ? 'white' : 'gray'}]} >
              <Text style={styles.LongButtonText}>3 {gs['diasEjercicio'][lang]}</Text>
              <Image source={require('../../assets/caminar2.png')} resizeMode='contain' style={[styles.buttonImage, {position: 'absolute',top: (dimensions.buttonHeight)*0.08}]} />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{handleButtonPress('caminar05')}} 
                              style={[styles.LongButton, {backgroundColor: colors.greyBlue,
                                      borderWidth: selectedOption === 'caminar05' ? 2 : 0,
                                      borderColor: selectedOption === 'caminar05' ? 'white' : 'gray'}]} >
              <Text style={styles.LongButtonText}>5 {gs['diasEjercicio'][lang]}</Text>
              <Image source={require('../../assets/caminar2.png')} resizeMode='contain' style={[styles.buttonImage, {position: 'absolute',top: (dimensions.buttonHeight)*0.08}]} />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{handleButtonPress('caminar07')}} 
                              style={[styles.LongButton, {backgroundColor: colors.blue,
                                      borderWidth: selectedOption === 'caminar07' ? 2 : 0,
                                      borderColor: selectedOption === 'caminar07' ? 'white' : 'gray'}]} >
              <Text style={styles.LongButtonText}>7 {gs['diasEjercicio'][lang]}</Text>
              <Image source={require('../../assets/caminar2.png')} resizeMode='contain' style={[styles.buttonImage, {position: 'absolute',top: (dimensions.buttonHeight)*0.08}]} />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{handleButtonPress('caminar10')}} 
                              style={[styles.LongButton, {backgroundColor: colors.deepPurple,
                                      borderWidth: selectedOption === 'caminar10' ? 2 : 0,
                                      borderColor: selectedOption === 'caminar10' ? 'white' : 'gray'}]} >
              <Text style={styles.LongButtonText}>10 {gs['diasEjercicio'][lang]}</Text>
              <Image source={require('../../assets/caminar2.png')} resizeMode='contain' style={[styles.buttonImage, {position: 'absolute',top: (dimensions.buttonHeight)*0.08}]} />
            </TouchableOpacity>

            {/*--------------------------------------------------------------------------- */}

            <TouchableOpacity onPress={()=>{handleButtonPress('escribir01')}} 
                              style={[styles.LongButton, {backgroundColor: colors.mintGreen,
                                borderWidth: selectedOption === 'escribir01' ? 2 : 0,
                                borderColor: selectedOption === 'escribir01' ? 'white' : 'gray'}]} >
              <Text style={[styles.LongButtonText]}>1 {gs['diaEscribir'][lang]}</Text>
              <Image source={require('../../assets/diario2.png')} resizeMode='contain' style={[styles.buttonImage, {position: 'absolute',top: (dimensions.buttonHeight)*0.08}]} />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{handleButtonPress('escribir03')}} 
                              style={[styles.LongButton, {backgroundColor: colors.purple,
                                      borderWidth: selectedOption === 'escribir03' ? 2 : 0,
                                      borderColor: selectedOption === 'escribir03' ? 'white' : 'gray'}]} >
              <Text style={styles.LongButtonText}>3 {gs['diasEscribir'][lang]}</Text>
              <Image source={require('../../assets/diario2.png')} resizeMode='contain' style={[styles.buttonImage, {position: 'absolute',top: (dimensions.buttonHeight)*0.08}]} />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{handleButtonPress('escribir05')}} 
                              style={[styles.LongButton, {backgroundColor: colors.greyBlue,
                                      borderWidth: selectedOption === 'escribir05' ? 2 : 0,
                                      borderColor: selectedOption === 'escribir05' ? 'white' : 'gray'}]} >
              <Text style={styles.LongButtonText}>5 {gs['diasEscribir'][lang]}</Text>
              <Image source={require('../../assets/diario2.png')} resizeMode='contain' style={[styles.buttonImage, {position: 'absolute',top: (dimensions.buttonHeight)*0.08}]} />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{handleButtonPress('escribiri07')}} 
                              style={[styles.LongButton, {backgroundColor: colors.blue,
                                      borderWidth: selectedOption === 'escribiri07' ? 2 : 0,
                                      borderColor: selectedOption === 'escribiri07' ? 'white' : 'gray'}]} >
              <Text style={styles.LongButtonText}>7 {gs['diasEscribir'][lang]}</Text>
              <Image source={require('../../assets/diario2.png')} resizeMode='contain' style={[styles.buttonImage, {position: 'absolute',top: (dimensions.buttonHeight)*0.08}]} />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{handleButtonPress('escribir10')}} 
                              style={[styles.LongButton, {backgroundColor: colors.deepPurple,
                                      borderWidth: selectedOption === 'escribir10' ? 2 : 0,
                                      borderColor: selectedOption === 'escribir10' ? 'white' : 'gray'}]} >
              <Text style={styles.LongButtonText}>10 {gs['diasEscribir'][lang]}</Text>
              <Image source={require('../../assets/diario2.png')} resizeMode='contain' style={[styles.buttonImage, {position: 'absolute',top: (dimensions.buttonHeight)*0.08}]} />
            </TouchableOpacity>

            {/*--------------------------------------------------------------------------- */}

            <TouchableOpacity onPress={()=>{handleButtonPress('dibujar01')}} 
                              style={[styles.LongButton, {backgroundColor: colors.mintGreen,
                                borderWidth: selectedOption === 'dibujar01' ? 2 : 0,
                                borderColor: selectedOption === 'dibujar01' ? 'white' : 'gray'}]} >
              <Text style={[styles.LongButtonText]}>1 {gs['diaDibujar'][lang]}</Text>
              <Image source={require('../../assets/dibujo2.png')} resizeMode='contain' style={[styles.buttonImage, {position: 'absolute',top: (dimensions.buttonHeight)*0.08}]} />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{handleButtonPress('dibujar03')}} 
                              style={[styles.LongButton, {backgroundColor: colors.purple,
                                      borderWidth: selectedOption === 'dibujar03' ? 2 : 0,
                                      borderColor: selectedOption === 'dibujar03' ? 'white' : 'gray'}]} >
              <Text style={styles.LongButtonText}>3 {gs['diasDibujar'][lang]}</Text>
              <Image source={require('../../assets/dibujo2.png')} resizeMode='contain' style={[styles.buttonImage, {position: 'absolute',top: (dimensions.buttonHeight)*0.08}]} />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{handleButtonPress('dibujar05')}} 
                              style={[styles.LongButton, {backgroundColor: colors.greyBlue,
                                      borderWidth: selectedOption === 'dibujar05' ? 2 : 0,
                                      borderColor: selectedOption === 'dibujar05' ? 'white' : 'gray'}]} >
              <Text style={styles.LongButtonText}>5 {gs['diasDibujar'][lang]}</Text>
              <Image source={require('../../assets/dibujo2.png')} resizeMode='contain' style={[styles.buttonImage, {position: 'absolute',top: (dimensions.buttonHeight)*0.08}]} />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{handleButtonPress('dibujar07')}} 
                              style={[styles.LongButton, {backgroundColor: colors.blue,
                                      borderWidth: selectedOption === 'dibujar07' ? 2 : 0,
                                      borderColor: selectedOption === 'dibujar07' ? 'white' : 'gray'}]} >
              <Text style={styles.LongButtonText}>7 {gs['diasDibujar'][lang]}</Text>
              <Image source={require('../../assets/dibujo2.png')} resizeMode='contain' style={[styles.buttonImage, {position: 'absolute',top: (dimensions.buttonHeight)*0.08}]} />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{handleButtonPress('dibujar10')}} 
                              style={[styles.LongButton, {backgroundColor: colors.deepPurple,
                                      borderWidth: selectedOption === 'dibujar10' ? 2 : 0,
                                      borderColor: selectedOption === 'dibujar10' ? 'white' : 'gray'}]} >
              <Text style={styles.LongButtonText}>10 {gs['diasDibujar'][lang]}</Text>
              <Image source={require('../../assets/dibujo2.png')} resizeMode='contain' style={[styles.buttonImage, {position: 'absolute',top: (dimensions.buttonHeight)*0.08}]} />
            </TouchableOpacity>

            {/*--------------------------------------------------------------------------- */}

            <TouchableOpacity onPress={()=>{handleButtonPress('descansar01')}} 
                              style={[styles.LongButton, {backgroundColor: colors.mintGreen,
                                borderWidth: selectedOption === 'descansar01' ? 2 : 0,
                                borderColor: selectedOption === 'descansar01' ? 'white' : 'gray'}]} >
              <Text style={[styles.LongButtonText]}>1 {gs['diaAutocuidado'][lang]}</Text>
              <Image source={require('../../assets/aceptacion.png')} resizeMode='contain' style={[styles.buttonImage, {position: 'absolute',top: (dimensions.buttonHeight)*0.08}]} />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{handleButtonPress('descansar03')}} 
                              style={[styles.LongButton, {backgroundColor: colors.purple,
                                      borderWidth: selectedOption === 'descansar03' ? 2 : 0,
                                      borderColor: selectedOption === 'descansar03' ? 'white' : 'gray'}]} >
              <Text style={styles.LongButtonText}>3 {gs['diasAutocuidado'][lang]}</Text>
              <Image source={require('../../assets/aceptacion.png')} resizeMode='contain' style={[styles.buttonImage, {position: 'absolute',top: (dimensions.buttonHeight)*0.08}]} />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{handleButtonPress('descansar05')}} 
                              style={[styles.LongButton, {backgroundColor: colors.greyBlue,
                                      borderWidth: selectedOption === 'descansar05' ? 2 : 0,
                                      borderColor: selectedOption === 'descansar05' ? 'white' : 'gray'}]} >
              <Text style={styles.LongButtonText}>5 {gs['diasAutocuidado'][lang]}</Text>
              <Image source={require('../../assets/aceptacion.png')} resizeMode='contain' style={[styles.buttonImage, {position: 'absolute',top: (dimensions.buttonHeight)*0.08}]} />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{handleButtonPress('descansar07')}} 
                              style={[styles.LongButton, {backgroundColor: colors.blue,
                                      borderWidth: selectedOption === 'descansar07' ? 2 : 0,
                                      borderColor: selectedOption === 'descansar07' ? 'white' : 'gray'}]} >
              <Text style={styles.LongButtonText}>7 {gs['diasAutocuidado'][lang]}</Text>
              <Image source={require('../../assets/aceptacion.png')} resizeMode='contain' style={[styles.buttonImage, {position: 'absolute',top: (dimensions.buttonHeight)*0.08}]} />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{handleButtonPress('descansar10')}} 
                              style={[styles.LongButton, {backgroundColor: colors.deepPurple,
                                      borderWidth: selectedOption === 'descansar10' ? 2 : 0,
                                      borderColor: selectedOption === 'descansar10' ? 'white' : 'gray'}]} >
              <Text style={styles.LongButtonText}>10 {gs['diasAutocuidado'][lang]}</Text>
              <Image source={require('../../assets/aceptacion.png')} resizeMode='contain' style={[styles.buttonImage, {position: 'absolute',top: (dimensions.buttonHeight)*0.08}]} />
            </TouchableOpacity>

            {/*--------------------------------------------------------------------------- */}

          </ScrollView>
        </View>
        }

        {!porActividad &&
                <View style={styles.scrollView}>
                <ScrollView>
                  <TouchableOpacity onPress={()=>{handleButtonPress('01dias')}} 
                              style={[styles.LongButton, {backgroundColor: colors.pink,
                                borderWidth: selectedOption === '01dias' ? 2 : 0,
                                borderColor: selectedOption === '01dias' ? 'white' : 'gray'}]} >
                  
                    <Text style={styles.LongButtonText}>01 {gs['diaLibreCasis'][lang]}</Text>
                    <Image source={require('../../assets/01-2.png')} resizeMode='contain' style={[styles.buttonImage, {position: 'absolute',top: (dimensions.buttonHeight)*0.08}]} />
                  </TouchableOpacity>
      
                  <TouchableOpacity onPress={()=>{handleButtonPress('02dias')}} 
                              style={[styles.LongButton, {backgroundColor: colors.greyBlue,
                                borderWidth: selectedOption === '02dias' ? 2 : 0,
                                borderColor: selectedOption === '02dias' ? 'white' : 'gray'}]} >
                    <Text style={styles.LongButtonText}>02 {gs['diasLibreCasis'][lang]}</Text>
                    <Image source={require('../../assets/02-2.png')} resizeMode='contain' style={[styles.buttonImage, {position: 'absolute',top: (dimensions.buttonHeight)*0.08}]} />
                  </TouchableOpacity>
      
                  <TouchableOpacity onPress={()=>{handleButtonPress('05dias')}} 
                              style={[styles.LongButton, {backgroundColor: colors.purple,
                                borderWidth: selectedOption === '05dias' ? 2 : 0,
                                borderColor: selectedOption === '05dias' ? 'white' : 'gray'}]} >
                    <Text style={styles.LongButtonText}>05 {gs['diasLibreCasis'][lang]}</Text>
                    <Image source={require('../../assets/05-2.png')} resizeMode='contain' style={[styles.buttonImage, {position: 'absolute',top: (dimensions.buttonHeight)*0.08}]} />
                  </TouchableOpacity>
      
                  <TouchableOpacity onPress={()=>{handleButtonPress('07dias')}} 
                              style={[styles.LongButton, {backgroundColor: colors.blue,
                                borderWidth: selectedOption === '07dias' ? 2 : 0,
                                borderColor: selectedOption === '07dias' ? 'white' : 'gray'}]} >
                    <Text style={styles.LongButtonText}>07 {gs['diasLibreCasis'][lang]}</Text>
                    <Image source={require('../../assets/10-2.png')} resizeMode='contain' style={[styles.buttonImage, {position: 'absolute',top: (dimensions.buttonHeight)*0.08}]} />
                  </TouchableOpacity>

                  <TouchableOpacity onPress={()=>{handleButtonPress('14dias')}} 
                              style={[styles.LongButton, {backgroundColor: colors.greyBlue,
                                borderWidth: selectedOption === '14dias' ? 2 : 0,
                                borderColor: selectedOption === '14dias' ? 'white' : 'gray'}]} >
                    <Text style={styles.LongButtonText}>14 {gs['diasLibreCasis'][lang]}</Text>
                    <Image source={require('../../assets/10-2.png')} resizeMode='contain' style={[styles.buttonImage, {position: 'absolute',top: (dimensions.buttonHeight)*0.08}]} />
                  </TouchableOpacity>

                  <TouchableOpacity onPress={()=>{handleButtonPress('30dias')}} 
                              style={[styles.LongButton, {backgroundColor: colors.purple,
                                borderWidth: selectedOption === '30dias' ? 2 : 0,
                                borderColor: selectedOption === '30dias' ? 'white' : 'gray'}]} >
                    <Text style={styles.LongButtonText}>30 {gs['diasLibreCasis'][lang]}</Text>
                    <Image source={require('../../assets/10-2.png')} resizeMode='contain' style={[styles.buttonImage, {position: 'absolute',top: (dimensions.buttonHeight)*0.08}]} />
                  </TouchableOpacity>
                </ScrollView>
            </View>
        }


      </View>
      {/* </BodyView> */}

      <FooterView>
          <View style={{width:'50%', position:'absolute',top: dimensions.footerHeight*0.6}}>
            <BackLink labelBack={gs['volver'][lang]} gotoScreen={'MiEspacio'}></BackLink>
          </View>

          <TouchableOpacity style={styles.activarButton} onPress={() => 
            { 
              console.log(selectedOption);
              showAlert(dispatch, selectedOption, metaActiva);
              navigation.navigate('Logros')
            }}>
            <Text style={styles.activarText}>{gs['activar'][lang]}</Text>
            <Image source={require('../../assets/continuar2.png')} resizeMode='contain' style={styles.activarImg} />
          </TouchableOpacity>
      </FooterView>

      <EmergencyView>
          <Emergency/>
      </EmergencyView>
    </View>
  );
}

export default Metas;

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
        fontSize: normalize(13),
        color: 'white',
        marginTop: dimensions.separator*2,
        marginLeft: dimensions.separator*2
    },
    LongButton: {
      width: dimensions.bodyWidth,
      height: dimensions.buttonHeight/2,
      borderRadius: 5,
      borderWidth: 2,
      //marginBottom: 3,
      marginTop:5,
      //position: 'absolute',
      //top: dimensions.bodyHeight * 0.36
    },
    LongButtonText: {
      fontSize: normalize(13),
      color: 'white',
      marginTop: dimensions.separator*3,
      marginLeft: dimensions.separator*2,
      width: dimensions.bodyWidth*0.65,
    },
    buttonImage :{
     //width: ScreenWidth * 0.16,
      //height: ScreenHeight * 0.08,
      width: dimensions.bodyWidth*0.17,
      height: (dimensions.buttonHeight/2)*0.7,
      top: dimensions.buttonHeight*-0.37,
      left: dimensions.buttonWidth *1.55,
      //backgroundColor: 'grey',
    },
    scrollView: {
      top: dimensions.bodyHeight*0.3,
      height: dimensions.bodyHeight*0.6,
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
      left: dimensions.bodyWidth *0.6
    },
    activarText: {
      color: 'white',
      fontSize: normalize(13),
      top: dimensions.footerHeight*0.42,
      left: dimensions.bodyWidth*0.13,
    },
    activarImg: {
      //backgroundColor: 'pink',
      width: ScreenWidth * 0.025,
      height: ScreenHeight * 0.02,
      top: dimensions.buttonHeight*0.1,
      left: dimensions.bodyWidth*0.34
    }
});
// 