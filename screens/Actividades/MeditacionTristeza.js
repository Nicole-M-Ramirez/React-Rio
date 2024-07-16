import React, {Component, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  Button,
  TouchableOpacity,
  Dimensions, Image, ScrollView, Alert,ImageBackground
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../components/constants';
import { normalize } from '../../components/FondNormilize';
import { dimensions } from '../../components/constants';
import HeaderView from '../../components/HeaderView';
import BodyView from '../../components/BodyView';
import FooterView from '../../components/FooterView';
import Emergency from '../../components/Emergency';
import EmergencyView from '../../components/EmergencyView';
import TimeSince from '../../components/TimeSince';
import { useEffect } from 'react';
// import SoundPlayer from 'react-native-sound-player';
// import Sound from 'react-native-sound';
import TrackPlayer from 'react-native-track-player';
import { gs } from '../../components/RioGlobalStrings';
import { useSelector } from 'react-redux';
import BackLinkWithDate from '../../components/BackLinkWithDate';
import BotonConfig from '../../components/BotonConfig';
import { useIsFocused } from '@react-navigation/native';

const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width

function MeditacionTristeza ({route}) {
  const {pantalla} = route.params
  const {forDate} = route.params
  const navigation = useNavigation();
  const lang = useSelector(state => state.counter.language);
  const isFocused = useIsFocused();

  const [lenguageAudio, setLenguajeAudio] = useState("");

  const setupEs = async () => {
    // Set up the player
    await TrackPlayer.setupPlayer();

    await setLenguajeAudio('es')

    // Add a track to the queue
    await TrackPlayer.add({
        id: 'track1',
        url: require('../../assets/Audio/MeditacionTrisEs.mp3'),
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
        url: require('../../assets/Audio/MeditacionTrisEn.m4a'),
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
      url: require('../../assets/Audio/MeditacionTrisEs.mp3'),
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
      url: require('../../assets/Audio/MeditacionTrisEn.m4a'),
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

  //const todosLostracks = await TrackPlayer.getQueue();
  //console.log("El queu: ", todosLostracks)
  //await TrackPlayer.skipToPrevious
  //await TrackPlayer.remove(0)
  //await TrackPlayer.remove()
  // if (lang === 'es') {
  //   setupEs();
  // }
  // else {
  //   setupEn();
  // }

   //let activeTrack =  await TrackPlayer.getActiveTrackIndex();

  //console.log("reacks:", activeTrack)
  //await TrackPlayer.skipToNext
  //await TrackPlayer.skipToNext
  //await TrackPlayer.remove(1)
  //await TrackPlayer.play();
  //await setAudioSelect("pause")

  //setLenguajeAudio(lang)
}


//console.log('lenguage del Audio:'+lenguageAudio)

const stop = async () => {
  await TrackPlayer.stop();
  //await setAudioSelect("pause")
}

if(!isFocused){
  stop()
  //eraseAndLoad()
  
}


  return (
    <ImageBackground source={require('../../assets/test3.gif')} resizeMode="cover" style={styles.imageBackground} >
      {/* <BotonConfig pantalla = 'MeditacionTristeza' Back={()=>{navigation.navigate('MeditacionTristeza', {pantalla:'Tristeza', forDate: forDate})}}/>
      <HeaderView headerButtons = 'yes'>
        <TimeSince/>
      </HeaderView> */}

      <BodyView>
        <View style={styles.scrollView}>
          <ScrollView>
            <Text style={styles.scrollText}>{gs['meditacionTristeza'][lang]}</Text>
          </ScrollView>
        </View>

        {audioSelect === "play" ? 
            <View>
            <TouchableOpacity onPress={()=>{ if(lang == lenguageAudio) {play()} else {eraseAndLoad()}}}>
              <Image source={require('../../assets/play.png')}  style={[styles.buttonImage, {left : dimensions.bodyWidth *0.38,}]}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>reset()} style={{ width: dimensions.bodyWidth*0.075, height: dimensions.bodyHeight*0.05, left: dimensions.bodyWidth*0.75, top: dimensions.bodyHeight*-0.07}}>
                <Image source={require('../../assets/refresh.png')}  style={{width: dimensions.shortButtonHeight*0.3, height: dimensions.shortButtonHeight*0.3}}/>
              </TouchableOpacity>
            </View>
            :
            <View>
            <TouchableOpacity onPress={()=> {pause()}}>
              <Image source={require('../../assets/pausa.png')}  style={[styles.buttonImage, {left : dimensions.bodyWidth *0.38,}]}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>reset()} style={{ width: dimensions.bodyWidth*0.075, height: dimensions.bodyHeight*0.05, left: dimensions.bodyWidth*0.75, top: dimensions.bodyHeight*-0.07}}>
                <Image source={require('../../assets/refresh.png')}  style={{width: dimensions.shortButtonHeight*0.3, height: dimensions.shortButtonHeight*0.3}}/>
              </TouchableOpacity>
            </View>
        }
      </BodyView>

      <FooterView> 
        <View style={{width:'50%', position:'absolute',marginTop: dimensions.separator*6}}>
          <BackLinkWithDate labelBack={gs['volver'][lang]} gotoScreen={pantalla} forDate={forDate}></BackLinkWithDate>
        </View>

        <TouchableOpacity  style={{left:dimensions.bodyWidth*0.7,width:dimensions.bodyWidth*0.25,height:dimensions.footerHeight*0.5,marginTop: dimensions.separator*5}}  onPress={() => navigation.navigate('RegistroUtilidad',{img:<Image source={require('../../assets/meditacion2.png')} resizeMode='contain' style={[styles.buttonImage,{top:0,width: dimensions.bodyWidth *0.5, height:dimensions.bodyHeight*0.34}]} />, forDate: forDate, actividad: gs['meditacion'][lang] })}>
          <View style={styles.hookedStyles}>
            <View style={{width:'92%', 'height': dimensions.footerHeight*0.5, alignItems: 'flex-end',justifyContent: 'center', }}> 
              <Text style={{color: 'white', textAlignVertical: 'center'}}>{gs['continuar'][lang]}</Text>
            </View>
            <View style={{width:'15%', 'height': dimensions.footerHeight*0.5,  alignItems: 'flex-end',justifyContent: 'center',  }}>
              <Image source={require('../../assets/continuar2.png')}  style={styles.buttonTitleImage} />
            </View>
          </View>
        </TouchableOpacity>
      </FooterView>

      <EmergencyView>
          <Emergency/>
      </EmergencyView>
      </ImageBackground>
  )
}

export default MeditacionTristeza;

const styles = StyleSheet.create({
  buttonImage :{
    width: dimensions.shortButtonHeight*1,
    height: dimensions.shortButtonHeight*1,
    //left : dimensions.bodyWidth *0.38,
    top: dimensions.bodyHeight *0.04,
    
  },
  scrollText : {
    color: 'white',
    fontSize: normalize(14)
  },
  scrollView : {
    //backgroundColor: 'grey',
    height: dimensions.bodyHeight*0.85
  },

  hookedStyles :{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    direction: 'inherit',
    flexWrap: 'nowrap',
    height: '100%'
  
  },
  backButtonsImage :{
    width: dimensions.bodyWidth * 0.024,
    height: dimensions.footerHeight * 0.14,
    position: 'absolute'
  },
  buttonTitleImage :{
    width: dimensions.bodyWidth * 0.024,
    height: dimensions.footerHeight * 0.14,
    position: 'absolute'
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
  },
});