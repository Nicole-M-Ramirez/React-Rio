// //import React, { useState, useEffect } from 'react';
// import * as React from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, TouchableOpacity, Dimensions, PixelRatio,Image,Button,ActivityIndicator} from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { colors } from '../../components/constants';
// import { normalize } from '../../components/FondNormilize';
// import { dimensions } from '../../components/constants';

// import HeaderView from '../../components/HeaderView';
// import BodyView from '../../components/BodyView';
// import TimeSince from '../../components/TimeSince';


// import { Audio } from 'expo-av';


// const ScreenHeight = Dimensions.get("window").height
// const ScreenWidth = Dimensions.get("window").width

// const audio = require('../../assets/Audio/MeditacionEN1-3.mp4');

// function Meditacion () {
//     const navigation = useNavigation();
//     const [Loaded, SetLoaded] = React.useState(false);
//     const [Loading, SetLoading] = React.useState(false);
//     const sound = React.useRef(new Audio.Sound());

//     // React.useEffect(() => {
//     //   LoadAudio();
//     // }, []);
//     // const [sound, setSound] = React.useState();

//     // const PauseAudio = async () => {
//     //   try{
//     //     const result = await sound.current.getStatusAsync();
//     //     if(result.isLoaded) {
//     //       if(result.isPlaying === true){
//     //         sound . current.pauseAsync();
//     //       }
//     //     }
//     //   } catch(error){console.log(error)}
//     // };

//     // async function playSound() {
//     //     console.log('Loading Sound');
//     //     const { sound } = await Audio.Sound.createAsync( require('../../assets/Audio/MeditacionEN1-3.mp4')
//     //     );
//     //     setSound(sound);
    
//     //     console.log('Playing Sound');
//     //     await sound.playAsync();
//     // }

//     // React.useEffect(() => {
//     //     return sound
//     //       ? () => {
//     //           console.log('Unloading Sound');
//     //           sound.unloadAsync();
//     //         }
//     //       : undefined;
//     //   }, [sound]);

//       return (
//         <View>
//           {/* <Button title="Play Sound" onPress={playSound} /> */}

//           <HeaderView headerButtons = 'yes'>
//             <TimeSince  />
//           </HeaderView>

//           <BodyView>
//             {/* <TouchableOpacity style={[styles.buttonView,{backgroundColor:colors.mintGreen}]} onPress={playSound}>
//                 <Text style={styles.buttonsText}>play</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={[styles.buttonView,{backgroundColor:colors.mintGreen}]} onPress={PauseAudio}>
//                 <Text style={styles.buttonsText}>pause</Text>
//             </TouchableOpacity> */}
//           </BodyView>
//         </View>
//       );

//     // return(
//     //     <View></View>
//     // );
// }

// export default Meditacion;

// const styles = StyleSheet.create({
    
//       button:{
//         top: dimensions.bodyHeight /20 ,
//         width: dimensions.buttonWidth,
//         height: dimensions.shortButtonHeight*1.4,
//         borderRadius:3,
//         margin: dimensions.separator / 2,
//       },
//       buttonText:{
//         color:'white',
//         fontSize: normalize(27),
//         top: dimensions.shortButtonHeight/2.5,
//         left: dimensions.buttonWidth*0.35,
//       },
//       buttonImage :{
//         width: dimensions.shortButtonHeight /2,
//         height: dimensions.shortButtonHeight /2,
//         // top: ScreenHeight * 0.0,
//         // left: ScreenWidth * 0.25
//         position: 'absolute'
//       },
//       buttonTextView : {
//         height: dimensions.shortButtonHeight
//       },

//       TitleText:{
//         color: colors.mintGreen,
//         fontWeight: '500',
//         fontSize: normalize(20),
//         //top: dimensions.bodyHeight*0
//       },

//       buttonView: {
//         top:dimensions.bodyHeight*0.04,
//         left:dimensions.bodyWidth*0.01,
//         height: dimensions.buttonHeight/4,
//         width:dimensions.bodyWidth,
//         borderRadius: 3,
//         marginTop: dimensions.separator,
//       },
//       buttonsText: {
//         color: 'white',
//         fontSize: normalize(16),
//         top: dimensions.buttonHeight/20,
//         left: dimensions.bodyWidth*0.4,
//       }
// });

import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  Button,
  TouchableOpacity,
  Dimensions, Image
} from 'react-native';
import { Audio } from 'expo-av';
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

const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width

const Tracks = [
  {
    id: 0,
    track: require('../../assets/Audio/MeditacionEN1-3.mp4'),
  },
  {
    id: 1,
    track: require('../../assets/Audio/MeditacionEN1-3.mp4'),
  },
  {
    id: 2,
    track: require('../../assets/Audio/MeditacionEN1-3.mp4'),
  },
];

function Meditacion ({route}) {
  const navigation = useNavigation();
  const [Loaded, SetLoaded] = React.useState(false);
  const [Loading, SetLoading] = React.useState(false);
  const [CurrentSong, SetCurrentSong] = React.useState(Tracks[0]);
  const { forDate } = route.params;

  // return (
  //   <View style={styles.container}>
  //     <View style={styles.AudioPLayer}>
  //       {Loading === true ? (
  //         <ActivityIndicator size={'small'} color={'red'} />
  //       ) : (
  //         <>
  //           <Button title="Play Song" onPress={PlayAudio} />
  //           <Button title="Pause Song" onPress={PauseAudio} />
  //           <Text>Currently Playing : {CurrentSong.id}</Text>
  //           <Button title="Next Song" onPress={NextSong} />
  //           <Button title="Previous Song" onPress={PrevSong} />
  //         </>
  //       )}
  //     </View>
  //   </View>
  // );
  return (
            <View>
              {/* <Button title="Play Sound" onPress={playSound} /> */}
    
              <HeaderView headerButtons = 'yes'>
                <TimeSince  />
              </HeaderView>
    
              <BodyView>
                <TouchableOpacity style={[styles.buttonView,{backgroundColor:colors.mintGreen}]} onPress={PlayAudio}>
                    <Text style={styles.buttonsText}>play</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.buttonView,{backgroundColor:colors.mintGreen}]} onPress={PauseAudio}>
                    <Text style={styles.buttonsText}>pause</Text>
                </TouchableOpacity>
              </BodyView>

              <FooterView>
                <TouchableOpacity  style={{height:'100%'}}  onPress={() => navigation.navigate('Ansiedad',{forDate: forDate}) }>
                  <View style={styles.hookedStyles}>
                    <View style={{width:'8%', 'height': '100%',  alignItems: 'flex-start',justifyContent: 'center',  }}>
                      <Image source={require('../../assets/back.png')}  style={styles.buttonsImage} />
                    </View>
                    <View style={{width:'92%', 'height': '100%', alignItems: 'flex-start',justifyContent: 'center', }}> 
                      <Text style={{color: 'white', textAlignVertical: 'center'}}>volver</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </FooterView>


              <EmergencyView>
                <Emergency/>
              </EmergencyView>
            </View>
          );
}

export default Meditacion;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingTop: Constants.statusBarHeight,
//     backgroundColor: '#ecf0f1',
//     padding: 8,
//   },
//   AudioPLayer: {
//     width: '100%',
//     height: 50,
//     alignItems: 'center',
//   },
// });

const styles = StyleSheet.create({
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
          width: dimensions.bodyWidth * 0.024,
          height: dimensions.footerHeight * 0.14,
          position: 'absolute'
        }
  });
