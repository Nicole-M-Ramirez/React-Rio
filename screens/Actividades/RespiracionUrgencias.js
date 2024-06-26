
import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  Button,
  TouchableOpacity,
  Dimensions, Image, ScrollView
} from 'react-native';
//import Constants from 'expo-constants';
import { Audio } from 'expo-av';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../components/constants';
import { normalize } from '../../components/FondNormilize';
import { dimensions } from '../../components/constants';
import BackLinkWithDate from '../../components/BackLinkWithDate';

import HeaderView from '../../components/HeaderView';
import BodyView from '../../components/BodyView';
import FooterView from '../../components/FooterView';
import Emergency from '../../components/Emergency';
import EmergencyView from '../../components/EmergencyView';
import TimeSince from '../../components/TimeSince';
import DropDown from '../../components/DropDown';
import { gs } from '../../components/RioGlobalStrings';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import TrackPlayer from 'react-native-track-player';
import { useIsFocused } from '@react-navigation/native';
import { stop } from 'react-native-track-player/lib/src/trackPlayer';
import BotonConfig from '../../components/BotonConfig';


const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width



function RespiracionUrgencia({route}) {
  const { forDate } = route.params;
  const navigation = useNavigation();
  const lang = useSelector(state => state.counter.language);
  const [track, setTrack] = useState(require('../../assets/Audio/InstCirculoEs.m4a'))
  const [lenguageAudio, setLenguajeAudio] = useState("");
  const isFocused = useIsFocused();

  const setupEs = async () => {
    // Set up the player
    await TrackPlayer.setupPlayer();

    await setLenguajeAudio('es')

    // Add a track to the queue
    await TrackPlayer.add({
        id: 'track1',
        url: require('../../assets/Audio/InstCirculoEs.m4a'),
        title: 'Track Title',
        artist: 'Track Artist',
        artwork: require('../../assets/aceptacion.png')
    });
  };

  const setupEn = async () => {
    // Set up the player
    await TrackPlayer.setupPlayer();

    await setLenguajeAudio('en')

    // Add a track to the queue
    await TrackPlayer.add({
        id: 'track2',
        url: require('../../assets/Audio/InstCirculoEn.m4a'),
        title: 'Track Title',
        artist: 'Track Artist',
        artwork: require('../../assets/aceptacion.png')
    });
  };

  if (lang === 'es') {
    //setLenguajeAudio('esp')
    setupEs();
  }
  else {
    setupEn();
  }

  const [audioSelect, setAudioSelect] = useState ("play")

const play = async () => {
  await TrackPlayer.play();
  await setAudioSelect("pause")
}

const pause = async () => {
  await TrackPlayer.pause();
  await setAudioSelect("play")
}
const stop = async () => {
  await TrackPlayer.stop();
  await setAudioSelect("pause")
}

const reset = async () => {
  await TrackPlayer.stop();
  await TrackPlayer.play();
  await setAudioSelect("pause")
}

const eraseAndLoad = async () => {
    await TrackPlayer.stop
    let activeTrack =  await TrackPlayer.getActiveTrackIndex();
  
    if (lang === 'es') {
      //setupEs();
      //await TrackPlayer.setupPlayer();
  
      await TrackPlayer.add({
        id: 'track1',
        url: require('../../assets/Audio/InstCirculoEs.m4a'),
        title: 'Track Title',
        artist: 'Track Artist',
        artwork: require('../../assets/aceptacion.png')
    });
    }
    else {
      //setupEn();
      //await TrackPlayer.setupPlayer();
  
      await TrackPlayer.add({
        id: 'track2',
        url: require('../../assets/Audio/InstCirculoEn.m4a'),
        title: 'Track Title',
        artist: 'Track Artist',
        artwork: require('../../assets/aceptacion.png')
    });
    }
  
    let TrackAhora = await TrackPlayer.getActiveTrackIndex();
    console.log('El track ahora antes del skip:', TrackAhora)
  
    await TrackPlayer.skipToNext();
    let TrackDespues = await TrackPlayer.getActiveTrackIndex();
    console.log('El track ahora antes del skip:', TrackDespues)
  
    await TrackPlayer.remove(TrackAhora);
  
    let listaAhora = await TrackPlayer.getQueue()
    console.log('Lista despues de borrar:', listaAhora)
  
    let Activo = await TrackPlayer.getActiveTrack()
    console.log('track activo ahora despues de borra: ', Activo)
  
    await TrackPlayer.play();
    await setAudioSelect("pause")
  
    setLenguajeAudio(lang)
  }

  //eraseAndLoad();

  if(isFocused){
    //play()
    // reset()
    if(lang == lenguageAudio){
      play()
      //reset()
    } 
    else {
      eraseAndLoad()
    }
  }
  else if(!isFocused){
    // pause()
    // reset()
    // //eraseAndLoad()
    stop()
  }

  const [imagen, setImagen] = useState(<Image source={require('../../assets/play.png')} resizeMode='contain' style={styles.buttonTitleImage} />)
  const [imName, setImName] = useState("Play")

  function changeImage (){
    if(imName === "Play"){
        setImagen(<Image source={require('../../assets/CirculoRespiracion.gif')} resizeMode='contain' style={styles.buttonTitleImage} />)
        setImName("Respiracion")
    }
    else{
        setImagen(<Image source={require('../../assets/play.png')} resizeMode='contain' style={styles.buttonTitleImage} />)
        setImName("Play")
    }
  }
  

  return(
    <View>
      <BotonConfig pantalla = 'RespiracionInst' Back={()=>{navigation.navigate('RespiracionInst',{forDate:forDate})}}/>
      <HeaderView headerButtons = 'yes'>
        <TimeSince  />
      </HeaderView>

      <View style={styles.scrollView}>
        <TouchableOpacity style={{top:dimensions.bodyHeight*0}} onPress={()=>{changeImage()}}>
          {imagen}
        </TouchableOpacity>
        <Text style={styles.titleText}>{gs['respiracion'][lang]}</Text>
        <View style={[styles.TextView]}>
            <Text style={styles.text}>{gs['respiracionInst'][lang]}</Text>
        </View>

     </View>

          <FooterView>
              <View style={{width:'50%', position:'absolute',top: dimensions.footerHeight*0.6,}}>
              <BackLinkWithDate labelBack={gs['volver'][lang]} gotoScreen={'Emergencia'} theDate={forDate}></BackLinkWithDate>
              </View> 

              <TouchableOpacity  style={{left:dimensions.bodyWidth*0.7,width:dimensions.bodyWidth*0.25,height:dimensions.footerHeight*0.5,marginTop: dimensions.separator*6}}  onPress={() => navigation.navigate('SeguimientoUrgencia', {forDate : forDate})}>
          <View style={styles.hookedStyles}>
            <View style={{width:'92%', 'height': dimensions.footerHeight*0.5, alignItems: 'flex-end',justifyContent: 'center', }}> 
              <Text style={{color: 'white', textAlignVertical: 'center'}}>{gs['continuar'][lang]}</Text>
            </View>
            <View style={{width:'15%', 'height': dimensions.footerHeight*0.5,  alignItems: 'flex-end',justifyContent: 'center',  }}>
              <Image source={require('../../assets/continuar2.png')}  style={styles.buttonCont} />
            </View>
          </View>
        </TouchableOpacity>        
            </FooterView>

          <EmergencyView>
            <Emergency/>
          </EmergencyView>
    </View>
  )
 }

export default RespiracionUrgencia;

const styles = StyleSheet.create({
  title: {
    top: dimensions.headerHeight*0.25,
    left:dimensions.bodyWidth*0.71,
    fontSize: normalize(20),
    color: colors.mintGreen
  },
  textEx: {
    color: colors.mintGreen,
    fontSize: normalize(17),
    top: dimensions.bodyHeight*0.03,
  },
  buttonView: {
    height: dimensions.buttonHeight/3,
    borderRadius: 8,
    marginTop: dimensions.bodyHeight*0.02,
  },
  buttonsText: {
    color: 'white',
    fontSize: normalize(16),
    top: dimensions.buttonHeight/12,
    left: dimensions.separator*4,
  },
  // buttonImage: {
  //   width: dimensions.buttonWidth/5,
  //   height: dimensions.buttonHeight/5,
  //   top: (dimensions.buttonHeight/3)*0.2,
  //   left: dimensions.buttonWidth*1.7,
  // },
titleImage :{
  left: dimensions.bodyWidth /3,
  width: dimensions.buttonWidth * 0.6,
  height: dimensions.buttonHeight *0.6,
  margin: dimensions.separator,
  marginBottom: dimensions.separator*4
},
titleText: {
color: "#4eb5a3",
fontSize: normalize(20),
fontWeight: '600',
top: dimensions.bodyHeight*0.08
},
buttonImage: {
  width: dimensions.buttonWidth/5,
  height: dimensions.buttonHeight/5,
  top: dimensions.buttonHeight/40,
  left: dimensions.buttonWidth*1.8,
},
scrollView: {
  left: dimensions.leftMargin,
  top: dimensions.bodyHeight*0.2,
  height: dimensions.bodyHeight*1.04,
  width:dimensions.bodyWidth,
  //backgroundColor: 'grey',
},

hookedStyles :{
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  direction: 'inherit',
  flexWrap: 'nowrap',
  height: '100%'

},
buttonsImage :{
  width: (dimensions.buttonHeight/2)*0.4,
  height: (dimensions.buttonHeight/2)*0.4,
  position: 'absolute'
},
buttonTitleImage :{
  width: ScreenWidth * 0.4,
  height: ScreenHeight * 0.3,
  // top: ScreenHeight * 0.01,
  // left: ScreenWidth * 0.08
  // justifyContent: 'center',
  // alignContent: 'center',
  alignSelf: 'center',
  top: dimensions.buttonHeight /10

},
TextView: {
  width: dimensions.bodyWidth,
  height: dimensions.bodyHeight,
  marginTop: dimensions.bodyHeight *0.1,
},
text:{
  color:'white',
  fontSize: normalize(13),
  //width: dimensions.bodyWidth *,
  //left: dimensions.bodyWidth*0.05,
  top: dimensions.buttonHeight*0
},
buttonCont :{
  width: dimensions.bodyWidth * 0.024,
  height: dimensions.footerHeight * 0.14,
  position: 'absolute'
},
buttonRegistro :{
  width: dimensions.shortButtonHeight*1,
  height: dimensions.shortButtonHeight*1,
  //left : dimensions.bodyWidth *0.38,
  top: dimensions.bodyHeight *0.04,
  
},
});
