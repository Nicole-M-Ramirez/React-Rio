import React, {Component} from 'react';
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
// import SoundPlayer from 'react-native-sound-player';
// import Sound from 'react-native-sound';
import TrackPlayer from 'react-native-track-player';

const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width

function MeditacionEmergencia () {
  const setup = async () => {
    // Set up the player
    await TrackPlayer.setupPlayer();

    // Add a track to the queue
    await TrackPlayer.add({
        id: 'trackId',
        url: require('../../assets/Audio/MeditacionEN-EMER.mp4'),
        title: 'Track Title',
        artist: 'Track Artist',
        artwork: require('../../assets/aceptacion.png')
    });

    // Start playing it
    //await TrackPlayer.play();

    //await TrackPlayer.reset();
};

setup()

const play = async () => {
  await TrackPlayer.play();
}

const pause = async () => {
  await TrackPlayer.pause();
}

  return (
    <BodyView flexDirec = 'row'>
      <TouchableOpacity style={[styles.button, {backgroundColor: colors.blue}]} onPress={() => play()}>
            <View style={styles.buttonTextView} >
            <Text style={styles.buttonText}>play</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, {backgroundColor: colors.purple}]} onPress={() => pause()}>
          <View style={styles.buttonTextView} >
            <Text style={styles.buttonText}>pause</Text>
            </View>
          </TouchableOpacity>
        </BodyView>
  )
}

export default MeditacionEmergencia;

const styles = StyleSheet.create({
  title: {
    fontSize: normalize(20),
    color: colors.mintGreen
  },
  button:{
    top: dimensions.bodyHeight /2 ,
    width: dimensions.buttonWidth,
    height: dimensions.shortButtonHeight,
    borderRadius:3,
    margin: dimensions.separator / 2,
  },
  buttonText:{
    color:'white',
    fontSize: normalize(11),
    top: dimensions.shortButtonHeight/1.5,
    left: ScreenWidth * 0.04,
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
  buttonImgView : {
    height: dimensions.shortButtonHeight,
    left: dimensions.buttonWidth / 2,
    width: dimensions.buttonWidth / 2,
    position: 'absolute',
    justifyContent: "center",
    alignItems: "center",
    verticalAlign: "middle"
    
  }
});