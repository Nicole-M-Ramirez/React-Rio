// import * as React from 'react';
// import {
//   Text,
//   View,
//   StyleSheet,
//   ActivityIndicator,
//   Button,
//   TouchableOpacity,
//   Dimensions, Image
// } from 'react-native';
// import { Audio } from 'expo-av';
// import { useNavigation } from '@react-navigation/native';
// import { colors } from '../../components/constants';
// import { normalize } from '../../components/FondNormilize';
// import { dimensions } from '../../components/constants';

// import HeaderView from '../../components/HeaderView';
// import BodyView from '../../components/BodyView';
// import FooterView from '../../components/FooterView';
// import Emergency from '../../components/Emergency';
// import EmergencyView from '../../components/EmergencyView';
// import TimeSince from '../../components/TimeSince';

// const ScreenHeight = Dimensions.get("window").height
// const ScreenWidth = Dimensions.get("window").width

// const Tracks = [
//   {
//     id: 0,
//     track: require('../../assets/Audio/MeditacionEN1-3.mp4'),
//   },
//   {
//     id: 1,
//     track: require('../../assets/Audio/MeditacionEN1-3.mp4'),
//   },
//   {
//     id: 2,
//     track: require('../../assets/Audio/MeditacionEN1-3.mp4'),
//   },
// ];

// function Meditacion ({route}) {
//   const navigation = useNavigation();
//   const [Loaded, SetLoaded] = React.useState(false);
//   const [Loading, SetLoading] = React.useState(false);
//   const [CurrentSong, SetCurrentSong] = React.useState(Tracks[0]);
//   const { forDate } = route.params;

//   // return (
//   //   <View style={styles.container}>
//   //     <View style={styles.AudioPLayer}>
//   //       {Loading === true ? (
//   //         <ActivityIndicator size={'small'} color={'red'} />
//   //       ) : (
//   //         <>
//   //           <Button title="Play Song" onPress={PlayAudio} />
//   //           <Button title="Pause Song" onPress={PauseAudio} />
//   //           <Text>Currently Playing : {CurrentSong.id}</Text>
//   //           <Button title="Next Song" onPress={NextSong} />
//   //           <Button title="Previous Song" onPress={PrevSong} />
//   //         </>
//   //       )}
//   //     </View>
//   //   </View>
//   // );
//   return (
//             <View>
//               {/* <Button title="Play Sound" onPress={playSound} /> */}
    
//               <HeaderView headerButtons = 'yes'>
//                 <TimeSince  />
//               </HeaderView>
    
//               <BodyView>
//                 <TouchableOpacity style={[styles.buttonView,{backgroundColor:colors.mintGreen}]} onPress={PlayAudio}>
//                     <Text style={styles.buttonsText}>play</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={[styles.buttonView,{backgroundColor:colors.mintGreen}]} onPress={PauseAudio}>
//                     <Text style={styles.buttonsText}>pause</Text>
//                 </TouchableOpacity>
//               </BodyView>

//               <FooterView>
//                 <TouchableOpacity  style={{height:'100%'}}  onPress={() => navigation.navigate('Ansiedad',{forDate: forDate}) }>
//                   <View style={styles.hookedStyles}>
//                     <View style={{width:'8%', 'height': '100%',  alignItems: 'flex-start',justifyContent: 'center',  }}>
//                       <Image source={require('../../assets/back.png')}  style={styles.buttonsImage} />
//                     </View>
//                     <View style={{width:'92%', 'height': '100%', alignItems: 'flex-start',justifyContent: 'center', }}> 
//                       <Text style={{color: 'white', textAlignVertical: 'center'}}>volver</Text>
//                     </View>
//                   </View>
//                 </TouchableOpacity>
//               </FooterView>


//               <EmergencyView>
//                 <Emergency/>
//               </EmergencyView>
//             </View>
//           );
// }

// export default Meditacion;

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     paddingTop: Constants.statusBarHeight,
// //     backgroundColor: '#ecf0f1',
// //     padding: 8,
// //   },
// //   AudioPLayer: {
// //     width: '100%',
// //     height: 50,
// //     alignItems: 'center',
// //   },
// // });

// const styles = StyleSheet.create({
//         button:{
//           top: dimensions.bodyHeight /20 ,
//           width: dimensions.buttonWidth,
//           height: dimensions.shortButtonHeight*1.4,
//           borderRadius:3,
//           margin: dimensions.separator / 2,
//         },
//         buttonText:{
//           color:'white',
//           fontSize: normalize(27),
//           top: dimensions.shortButtonHeight/2.5,
//           left: dimensions.buttonWidth*0.35,
//         },
//         buttonImage :{
//           width: dimensions.shortButtonHeight /2,
//           height: dimensions.shortButtonHeight /2,
//           // top: ScreenHeight * 0.0,
//           // left: ScreenWidth * 0.25
//           position: 'absolute'
//         },
//         buttonTextView : {
//           height: dimensions.shortButtonHeight
//         },
  
//         TitleText:{
//           color: colors.mintGreen,
//           fontWeight: '500',
//           fontSize: normalize(20),
//           //top: dimensions.bodyHeight*0
//         },
  
//         buttonView: {
//           top:dimensions.bodyHeight*0.04,
//           left:dimensions.bodyWidth*0.01,
//           height: dimensions.buttonHeight/4,
//           width:dimensions.bodyWidth,
//           borderRadius: 3,
//           marginTop: dimensions.separator,
//         },
//         buttonsText: {
//           color: 'white',
//           fontSize: normalize(16),
//           top: dimensions.buttonHeight/20,
//           left: dimensions.bodyWidth*0.4,
//         },

//         hookedStyles :{
//           flexDirection: 'row',
//           justifyContent: 'flex-start',
//           alignItems: 'flex-start',
//           direction: 'inherit',
//           flexWrap: 'nowrap',
//           height: '100%'
        
//         },
//         buttonsImage :{
//           width: dimensions.bodyWidth * 0.024,
//           height: dimensions.footerHeight * 0.14,
//           position: 'absolute'
//         }
//   });

import React, {Component, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  Button,
  TouchableOpacity,
  Dimensions, Image, ScrollView, Alert, ImageBackground
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

function Meditacion ({route}) {
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
        url: require('../../assets/Audio/MeditacionEs.mp3'),
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
        url: require('../../assets/Audio/RIO_Ansiedad_English2.mp3'),
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
      url: require('../../assets/Audio/MeditacionEs.mp3'),
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
      url: require('../../assets/Audio/MeditacionEn.mp3'),
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

const stop = async () => {
  await TrackPlayer.stop();
  //await setAudioSelect("pause")
}


//console.log('lenguage del Audio:'+lenguageAudio)

if(!isFocused){
  stop()
  //eraseAndLoad()
  
}


  return (
    <ImageBackground source={require('../../assets/test3.gif')} resizeMode="cover" style={styles.imageBackground} >
      
      {/* <View style={{top:dimensions.bodyHeight*-0.8}}>
        <BotonConfig pantalla = 'Meditacion' Back={()=>{navigation.navigate('Meditacion',{pantalla:pantalla, forDate:forDate})}}/>
        <HeaderView headerButtons = 'yes'>
          <TimeSince/>
        </HeaderView>
      </View> */}

      <BodyView>
        
        <View style={styles.scrollView}>
          <ScrollView>
            <Text style={styles.scrollText}>{gs['meditacionNormal'][lang]}</Text>
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
        {/* <TouchableOpacity  style={{height:'100%'}}  onPress={() => navigation.navigate('SeguimientoUrgencia', {forDate : forDate})}>
          <View style={styles.hookedStyles}>
            <View style={{width:'8%', 'height': '100%',  alignItems: 'flex-start',justifyContent: 'center',  }}>
              <Image source={require('../../assets/back.png')}  style={styles.backButtonsImage} />
            </View>
            <View style={{width:'92%', 'height': '100%', alignItems: 'flex-start',justifyContent: 'center', }}> 
              <Text style={{color: 'white', textAlignVertical: 'center'}}>{gs['volver'][lang]}</Text>
            </View>
          </View>
        </TouchableOpacity> */}

        {/* <TouchableOpacity  style={{height:'100%'}}  onPress={() => navigation.navigate('RegistroUtilidad',{img:<Image source={require('../../assets/meditacion2.png')} resizeMode='contain' style={[styles.buttonImage,{top:0,width: dimensions.bodyWidth *0.5, height:dimensions.bodyHeight*0.34}]} />, forDate: forDate }) }>
          <View style={styles.hookedStyles}>
            <View style={{width:'8%', 'height': '100%',  alignItems: 'flex-start',justifyContent: 'center',  }}>
              <Image source={require('../../assets/back.png')}  style={styles.backButtonsImage} />
            </View>
            <View style={{width:'92%', 'height': '100%', alignItems: 'flex-start',justifyContent: 'center', }}> 
              <Text style={{color: 'white', textAlignVertical: 'center'}}>volver</Text>
            </View>
          </View>
        </TouchableOpacity> */}

        <View style={{width:'50%', position:'absolute',marginTop: dimensions.separator*6}}>
          <BackLinkWithDate labelBack={gs['volver'][lang]} gotoScreen={pantalla} forDate={forDate}></BackLinkWithDate>
        </View>

        <TouchableOpacity  style={{left:dimensions.bodyWidth*0.7,width:dimensions.bodyWidth*0.25,height:dimensions.footerHeight*0.5,marginTop: dimensions.separator*5}}  onPress={() => navigation.navigate('RegistroUtilidad',{img:<Image source={require('../../assets/meditacion2.png')} resizeMode='contain' style={[styles.buttonImage,{top:0,width: dimensions.bodyWidth *0.5, height:dimensions.bodyHeight*0.34}]} />, forDate: forDate, actividad: gs['meditacion'][lang]})}>
          <View style={styles.hookedStyles}>
            <View style={{width:'92%', 'height': dimensions.footerHeight*0.5, alignItems: 'flex-end',justifyContent: 'center', }}> 
              <Text style={{color: 'white', textAlignVertical: 'center'}}>{gs['finalizar'][lang]}</Text>
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

export default Meditacion;

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