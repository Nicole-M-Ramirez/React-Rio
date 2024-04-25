import React, {Component, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  Button,
  TouchableOpacity,
  Dimensions, Image, ScrollView, Alert
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

import { useIsFocused } from '@react-navigation/native';
// import SoundPlayer from 'react-native-sound-player';
// import Sound from 'react-native-sound';
import TrackPlayer from 'react-native-track-player';
import { gs } from '../../components/RioGlobalStrings';
import { useSelector } from 'react-redux';


const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width

function MeditacionEmergencia ({route}) {
  const {forDate} = route.params
  const navigation = useNavigation();
  const lang = useSelector(state => state.counter.language);

  const [track, setTrack] = useState(require('../../assets/Audio/MeditacionEsUrgencia.m4a'))

  const isFocused = useIsFocused();

  const setupEs = async () => {
    // Set up the player
    await TrackPlayer.setupPlayer();

    // Add a track to the queue
    await TrackPlayer.add({
        id: 'trackEs',
        url: require('../../assets/Audio/MeditacionEsUrgencia.m4a'),
        title: 'Track Title',
        artist: 'Track Artist',
        artwork: require('../../assets/aceptacion.png')
    });

    if(!isFocused) {
      await TrackPlayer.remove([trackId]);
    }
  };

  const setupEn = async () => {
    // Set up the player
    await TrackPlayer.setupPlayer();

    // Add a track to the queue
    await TrackPlayer.add({
        id: 'trackEn',
        url: require('../../assets/Audio/MeditacionEN-EMER.mp4'),
        title: 'Track Title',
        artist: 'Track Artist',
        artwork: require('../../assets/aceptacion.png')
    });

  };




if (lang === 'es') {
  setupEs();
}
else {
  setupEn();
}

// if(!isFocused) {
//   //await TrackPlayer.remove([trackId]);
//   TrackPlayer.stop();
// }

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

const close = async () => {
  await TrackPlayer.stop();
  await TrackPlayer.remove([trackId]);
  console.log('se borro')
}

//console.log('IS FOCUSED??????::', isFocused)

if(isFocused === true) {
  close();
  console.log('IS FOCUSED??????::', isFocused)
}


  return (
    <View>
      <HeaderView headerButtons = 'yes'>
        <TimeSince/>
      </HeaderView>

      <BodyView>
        <View style={styles.scrollView}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.scrollText}>{gs['meditacionEmer'][lang]}</Text>
          </ScrollView>
        </View>

        {audioSelect === "play" ? 
            <View>
            <TouchableOpacity onPress={()=>play()}>
              <Image source={require('../../assets/play.png')}  style={styles.buttonImage}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>reset()} style={{ width: dimensions.bodyWidth*0.075, height: dimensions.bodyHeight*0.05, left: dimensions.bodyWidth*0.75, top: dimensions.bodyHeight*-0.07}}>
                <Image source={require('../../assets/refresh.png')}  style={{width: dimensions.shortButtonHeight*0.3, height: dimensions.shortButtonHeight*0.3}}/>
              </TouchableOpacity>
            </View>
            :
            <View>
            <TouchableOpacity onPress={()=>pause()}>
              <Image source={require('../../assets/pausa.png')}  style={styles.buttonImage}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>reset()} style={{ width: dimensions.bodyWidth*0.075, height: dimensions.bodyHeight*0.05, left: dimensions.bodyWidth*0.75, top: dimensions.bodyHeight*-0.07}}>
                <Image source={require('../../assets/refresh.png')}  style={{width: dimensions.shortButtonHeight*0.3, height: dimensions.shortButtonHeight*0.3}}/>
              </TouchableOpacity>
            </View>
        }
      </BodyView>

      <FooterView> 
        <TouchableOpacity  style={{height:'100%'}}  onPress={() => navigation.navigate('SeguimientoUrgencia', {forDate : forDate})}>
          <View style={styles.hookedStyles}>
            <View style={{width:'8%', 'height': '100%',  alignItems: 'flex-start',justifyContent: 'center',  }}>
              <Image source={require('../../assets/back.png')}  style={styles.backButtonsImage} />
            </View>
            <View style={{width:'92%', 'height': '100%', alignItems: 'flex-start',justifyContent: 'center', }}> 
              <Text style={{color: 'white', textAlignVertical: 'center'}}>{gs['volver'][lang]}</Text>
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

export default MeditacionEmergencia;

const styles = StyleSheet.create({
  buttonImage :{
    width: dimensions.shortButtonHeight*1,
    height: dimensions.shortButtonHeight*1,
    left : dimensions.bodyWidth *0.38,
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
  }
});