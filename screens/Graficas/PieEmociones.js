
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors, dimensions } from '../../components/constants';
import { normalize } from '../../components/FondNormilize';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PieChart from '../../components/react-native-chart-kit/PieChart';

import HeaderView from '../../components/HeaderView';
import BodyView from '../../components/BodyView';
import EmergencyView from '../../components/EmergencyView';
import FooterView from '../../components/FooterView';
import Emergency from '../../components/Emergency';
import TimeSince from '../../components/TimeSince';
import LongButton from '../../components/LongButton';
import BackLink from '../../components/BackLink';
import { gs } from '../../components/RioGlobalStrings';
import moment from 'moment';


const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width



function PieEmociones({route}) {
  //const lang = useSelector(state => state.counter.language);
  const MoodCount = useSelector(state => state.counter.moodCounter);

  const {tiempo} = route.params;
  const {Data} = route.params;
  const lang = useSelector(state => state.counter.language);

  let cantidad = [0,0,0,0,0,0]

  console.log("Data de detonante: " + JSON.stringify(Data))
  // console.log(data[1].detonante)

  for(let i = 0; i < Data.length; i++) {
    let emo = Data[i].emocion
    let fec = Data[i].fecha
    fec = fec.replace('-', "");
    fec = fec.replace('-', "");
    console.log(fec)
    console.log(emo)


    let dateBetween = moment(fec, "YYYYMMDD").fromNow()
    console.log(dateBetween)
    let dateNum = dateBetween.slice(0, 2);
    console.log(dateNum)

    if(dateBetween.includes('hours') || dateNum <= tiempo){
      if(emo === 'felicidad'){
        cantidad[0] = cantidad[0] + 1
      }
  
      if(emo === 'ansiedad'){
        cantidad[1] = cantidad[1] + 1
      }
  
      if(emo === 'miedo'){
        cantidad[2] = cantidad[2] + 1
      }
  
      if(emo === 'tristeza'){
        cantidad[3] = cantidad[3] + 1
      }
  
      if(emo === 'coraje'){
        cantidad[4] = cantidad[4] + 1
      }
  
      if(emo === 'otros'){
        cantidad[5] = cantidad[5] + 1
      }
    }

    // if(emo === 'felicidad'){
    //   cantidad[0] = cantidad[0] + 1
    // }

    // if(emo === 'ansiedad'){
    //   cantidad[1] = cantidad[1] + 1
    // }

    // if(emo === 'miedo'){
    //   cantidad[2] = cantidad[2] + 1
    // }

    // if(emo === 'tristeza'){
    //   cantidad[3] = cantidad[3] + 1
    // }

    // if(emo === 'coraje'){
    //   cantidad[4] = cantidad[4] + 1
    // }

    // if(emo === 'otros'){
    //   cantidad[5] = cantidad[5] + 1
    // }

  }


  console.log(cantidad)

    const data = [
        {
          name: " ",
          population: cantidad[0],
          color: colors.pink,
          legendFontColor: "#7F7F7F",
          legendFontSize: normalize(13),
          pathPhoto: null
        },
        {
          name: "  ",
          population: cantidad[1],
          color: colors.purple,
          legendFontColor: "#7F7F7F",
          legendFontSize: normalize(13),
          pathPhoto: null
        },
        {
          name: "  ",
          population:cantidad[2],
          color: colors.blue,
          legendFontColor: "#7F7F7F",
          legendFontSize: normalize(13),
          pathPhoto: null
        },
        {
          name: "  ",
          population: cantidad[3],
          color: colors.deepPurple,
          legendFontColor: "#7F7F7F",
          legendFontSize: normalize(13),
          pathPhoto: null
        },
        {
          name: "  ",
          population:cantidad[4],
          color: colors.mintGreen,
          legendFontColor: "#7F7F7F",
          legendFontSize: normalize(13),
          pathPhoto: null
        },
        {
          name: "  ",
          population: cantidad[5],
          color: colors.greyBlue,
          legendFontColor: "#7F7F7F",
          legendFontSize: normalize(13),
          pathPhoto: null
        }
      ];

  return (
    <View>
      <HeaderView headerButtons = 'yes'>
        <TimeSince  />
      </HeaderView>

      <BodyView> 
      <PieChart
        style={{
          top: dimensions.bodyHeight*-0.15,
          left: dimensions.buttonHeight*0
        }}
        data={data}
        width={dimensions.bodyWidth*1.9}
        height={dimensions.bodyHeight*0.9}
        chartConfig={{
            backgroundColor: "transparent",
            backgroundGradientTo: colors.greyBlue,
            backgroundGradientToOpacity: 0,
            backgroundGradientFrom: colors.backgroudDarkBlue,
            backgroundGradientFromOpacity: 0,
            color: (opacity = 1) => `#ffffff`,
            barPercentage: 1,
            barRadius: 5,
            
        }}
        accessor={"population"}
        backgroundColor={"transparent"}
        //paddingLeft={"15"}
        center={[20,0]}
        hasLegend={false}
        //absolute
      /> 
      {/* <View style={styles.circle}/> */}

      <View style={{top:dimensions.bodyHeight*-0.3}}>

        <View style={{flexDirection:'row', marginBottom:dimensions.bodyHeight*0.01}}>
            <View style={{backgroundColor:colors.pink, height:dimensions.bodyHeight*0.05, width:dimensions.bodyWidth*0.1, borderRadius:6}}></View>
            <Text style={{color:colors.mintGreen, left:dimensions.bodyWidth*0.04, fontSize:normalize(13), fontWeight:'700', top:dimensions.bodyHeight*0.005}}>{gs['Felicidad'][lang]}</Text>
          </View>
          
          <View style={{flexDirection:'row', marginBottom:dimensions.bodyHeight*0.01}}>
            <View style={{backgroundColor:colors.mintGreen, height:dimensions.bodyHeight*0.05, width:dimensions.bodyWidth*0.1, borderRadius:6}}></View>
            <Text style={{color:colors.mintGreen, left:dimensions.bodyWidth*0.04, fontSize:normalize(13), fontWeight:'700', top:dimensions.bodyHeight*0.005}}>{gs['Ansiedad'][lang]}</Text>
          </View>

          <View style={{flexDirection:'row', marginBottom:dimensions.bodyHeight*0.01}}>
            <View style={{backgroundColor:colors.purple, height:dimensions.bodyHeight*0.05, width:dimensions.bodyWidth*0.1, borderRadius:6}}></View>
            <Text style={{color:colors.mintGreen, left:dimensions.bodyWidth*0.04, fontSize:normalize(13), fontWeight:'700', top:dimensions.bodyHeight*0.005}}>{gs['Miedo'][lang]}</Text>
          </View>

          <View style={{flexDirection:'row', marginBottom:dimensions.bodyHeight*0.01}}>
            <View style={{backgroundColor:colors.blue, height:dimensions.bodyHeight*0.05, width:dimensions.bodyWidth*0.1, borderRadius:6}}></View>
            <Text style={{color:colors.mintGreen, left:dimensions.bodyWidth*0.04, fontSize:normalize(13), fontWeight:'700', top:dimensions.bodyHeight*0.005}}>{gs['Tristeza'][lang]}</Text>
          </View>

          <View style={{flexDirection:'row', marginBottom:dimensions.bodyHeight*0.01}}>
            <View style={{backgroundColor:colors.deepPurple, height:dimensions.bodyHeight*0.05, width:dimensions.bodyWidth*0.1, borderRadius:6}}></View>
            <Text style={{color:colors.mintGreen, left:dimensions.bodyWidth*0.04, fontSize:normalize(13), fontWeight:'700', top:dimensions.bodyHeight*0.005}}>{gs['Coraje'][lang]}</Text>
          </View>

          

        </View>

      </BodyView>

      <FooterView>
          <View style={{width:'50%', position:'absolute',marginTop: dimensions.separator}}>
            <BackLink labelBack={"Regresar"} gotoScreen={'Graficas'}></BackLink>
          </View>
      </FooterView>

      <EmergencyView>
          <Emergency/>
      </EmergencyView>
    </View>
  );
}

export default PieEmociones;

const styles = StyleSheet.create({
    buttonImage :{
      width: ScreenWidth * 0.14,
      height: ScreenHeight * 0.04,
      alignSelf: 'center',
      zIndex: 1,
      position: 'absolute',
      // left: dimensions.bodyWidth *0.63
    },
    circle: {
      top: dimensions.bodyHeight*0.17,
      left: dimensions.bodyWidth*0.22,
      width: dimensions.bodyWidth*0.22,
      height: dimensions.bodyHeight*0.14,
      borderRadius: 30,
      borderWidth: 5,
      borderColor: colors.backgroudDarkBlue,
      margin: dimensions.separator,
      backgroundColor: colors.backgroudDarkBlue,
      position: 'absolute',
   },
});
