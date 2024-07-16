import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors, dimensions } from '../../components/constants';
import { normalize } from '../../components/FondNormilize';
import React, { useState } from 'react';
import BarChart from '../../components/react-native-chart-kit/BarChart';
import { useDispatch, useSelector } from 'react-redux';

import HeaderView from '../../components/HeaderView';
import BodyView from '../../components/BodyView';
import EmergencyView from '../../components/EmergencyView';
import FooterView from '../../components/FooterView';
import Emergency from '../../components/Emergency';
import TimeSince from '../../components/TimeSince';
import LongButton from '../../components/LongButton';
import BackLink from '../../components/BackLink';
import { gs } from '../../components/RioGlobalStrings';



const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width



function BarrasActividades({route}) {
  const MoodCount = useSelector(state => state.counter.moodCounter);
  console.log(MoodCount)
  const {tiempo} = route.params;
  const {Data} = route.params;
  const lang = useSelector(state => state.counter.language);

  let cantidad = [0,0,0,0,0]
  let titulosAct = []

  //console.log("Data de detonante: " + JSON.stringify(Data))
  console.log("Data de actividad: " + JSON.stringify(Data))

  for(let i = 0; i < Data.length; i++){
    let act = Data[i].actividades
    
    if(titulosAct.length < 5){
        if(!titulosAct.includes(act)){
            titulosAct.push(act)
        }
    }
  }
  
  console.log(cantidad)
  console.log(JSON.stringify(titulosAct))

  for(let i = 0; i < titulosAct.length; i++){
    let act = Data[i].actividades

    if(act === titulosAct[0]){
      cantidad[0] = cantidad[0] + 1
    }

    if(act === titulosAct[1]){
      cantidad[1] = cantidad[1] + 1
    }

    if(act === titulosAct[2]){
      cantidad[2] = cantidad[2] + 1
    }

    if(act === titulosAct[3]){
      cantidad[3] = cantidad[3] + 1
    }

    if(act === titulosAct[4]){
      cantidad[4] = cantidad[4] + 1
    }

  }
 
  const Images = [
    <Image source={require('../../assets/Felicidad.png')} resizeMode='contain' style={[styles.buttonImage, {top: dimensions.buttonHeight /7}]} />,
    <Image source={require('../../assets/Ansiedad.png')} resizeMode='contain' style={[styles.buttonImage, {top: dimensions.buttonHeight*1.15}]} />,
    <Image source={require('../../assets/Miedo.png')} resizeMode='contain' style={[styles.buttonImage, {top: dimensions.buttonHeight*2.2}]} />,
    <Image source={require('../../assets/Tristeza.png')} resizeMode='contain' style={[styles.buttonImage, {top: dimensions.buttonHeight*3.2}]} />,
    <Image source={require('../../assets/Coraje.png')} resizeMode='contain' style={[styles.buttonImage, {top: dimensions.buttonHeight*4.2}]} />
  ]

  const data= {
    labels: [" ", " ", " ", " ", " "],
    photos :[
      require("../../assets/Coraje.png"),
      require("../../assets/Felicidad.png"),
      require("../../assets/Tristeza.png"),
      require("../../assets/Miedo.png"),
      require("../../assets/Ansiedad.png"),
      require("../../assets/Otros.png"),
    ],
    datasets:[
      {
        data: [
          cantidad[0],
          cantidad[1],
          cantidad[2],
          cantidad[3],
          cantidad[4],
        ],
        colors: [
          (opacity =1) => `#da88b9`,
          (opacity =1) => `#5b8caf`,
          (opacity =1) => `#8f79b2`,
          (opacity =1) => `#1e76ba`,
          (opacity =1) => `#524566`,

          
        ],

      }
    ]
  };

  return (
    <View>
      <HeaderView headerButtons = 'yes'>
        <TimeSince  />
      </HeaderView>

      <BodyView>
        <View style={{borderLeftColor:colors.mintGreen,borderLeftWidth:3, height:dimensions.bodyHeight*0.54,position:'absolute',zIndex:3, borderRadius:6, top:dimensions.bodyHeight*0.018 }}></View>
        <Text style={{color:colors.mintGreen, fontSize:normalize(50),top:dimensions.bodyHeight*0.43, position:'absolute', zIndex:3, left: dimensions.bodyWidth*-0.015}}>.    .    .    .     .</Text>
        <BarChart
          style={{
            //transform: [{ rotate: '90deg'}]
            left: dimensions.bodyWidth *-0.29,
            top: dimensions.bodyHeight *0
          }}
          data={data}
          width={dimensions.bodyHeight}
          height={dimensions.bodyWidth-30}
          chartConfig={{
            backgroundColor: "transparent",
            backgroundGradientTo: colors.backgroudDarkBlue,
            backgroundGradientToOpacity: 5,
            backgroundGradientFrom: colors.backgroudDarkBlue,
            backgroundGradientFromOpacity: 0,
            color: (opacity = 1) => `#ffffff`,
            barPercentage: 1,
            barRadius: 5,
            decimalPlaces: 0,
            labelColor: (opacity =1) => `#4eb5a3`,
          }}
          withHorizontalLabels={false}
          fromZero={true}
          withCustomBarColorFromData={true}
          flatColor={true}
          withInnerLines={false}
          showBarTops={false}
          showValuesOnTopOfBars={true}
          horizontalLabelRotation={270}
        />

        

        {/* <View style={styles.rectangle} /> */}
        <View style={{height: dimensions.bodyHeight*0.05}}></View>

        <View style={{flexDirection:'row', marginBottom:dimensions.bodyHeight*0.01}}>
          <View style={{backgroundColor:colors.pink, height:dimensions.bodyHeight*0.05, width:dimensions.bodyWidth*0.1, borderRadius:6}}></View>
          <Text style={{color:colors.mintGreen, left:dimensions.bodyWidth*0.04, fontSize:normalize(13), fontWeight:'700', top:dimensions.bodyHeight*0.005}}>{titulosAct[0]}</Text>
        </View>
        
        <View style={{flexDirection:'row', marginBottom:dimensions.bodyHeight*0.01}}>
          <View style={{backgroundColor:colors.mintGreen, height:dimensions.bodyHeight*0.05, width:dimensions.bodyWidth*0.1, borderRadius:6}}></View>
          <Text style={{color:colors.mintGreen, left:dimensions.bodyWidth*0.04, fontSize:normalize(13), fontWeight:'700', top:dimensions.bodyHeight*0.005}}>{titulosAct[1]}</Text>
        </View>

        <View style={{flexDirection:'row', marginBottom:dimensions.bodyHeight*0.01}}>
          <View style={{backgroundColor:colors.purple, height:dimensions.bodyHeight*0.05, width:dimensions.bodyWidth*0.1, borderRadius:6}}></View>
          <Text style={{color:colors.mintGreen, left:dimensions.bodyWidth*0.04, fontSize:normalize(13), fontWeight:'700', top:dimensions.bodyHeight*0.005}}>{titulosAct[2]}</Text>
        </View>

        <View style={{flexDirection:'row', marginBottom:dimensions.bodyHeight*0.01}}>
          <View style={{backgroundColor:colors.blue, height:dimensions.bodyHeight*0.05, width:dimensions.bodyWidth*0.1, borderRadius:6}}></View>
          <Text style={{color:colors.mintGreen, left:dimensions.bodyWidth*0.04, fontSize:normalize(13), fontWeight:'700', top:dimensions.bodyHeight*0.005}}>{titulosAct[3]}</Text>
        </View>

        <View style={{flexDirection:'row', marginBottom:dimensions.bodyHeight*0.01}}>
          <View style={{backgroundColor:colors.deepPurple, height:dimensions.bodyHeight*0.05, width:dimensions.bodyWidth*0.1, borderRadius:6}}></View>
          <Text style={{color:colors.mintGreen, left:dimensions.bodyWidth*0.04, fontSize:normalize(13), fontWeight:'700', top:dimensions.bodyHeight*0.005}}>{titulosAct[4]}</Text>
        </View>

        {/* <View style={{flexDirection:'row', marginBottom:dimensions.bodyHeight*0.01}}>
          <View style={{backgroundColor:colors.greyBlue, height:dimensions.bodyHeight*0.05, width:dimensions.bodyWidth*0.1, borderRadius:6}}></View>
          <Text style={{color:colors.mintGreen, left:dimensions.bodyWidth*0.04, fontSize:normalize(13), fontWeight:'700', top:dimensions.bodyHeight*0.005}}>{gs['Otros'][lang]}</Text>
        </View> */}

        
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

export default BarrasActividades;

const styles = StyleSheet.create({
    buttonImage :{
      width: ScreenWidth * 0.14,
      height: ScreenHeight * 0.04,
      alignSelf: 'center',
      zIndex: 1,
      position: 'absolute',
      // left: dimensions.bodyWidth *0.63
    },
    rectangle: {
      top: dimensions.bodyHeight*0.2,
      left: dimensions.bodyWidth*0.03,
      zIndex: 1,
      position: 'absolute',
      width: dimensions.bodyWidth*0.01,
      height: dimensions.bodyHeight*0.41,
      backgroundColor: colors.mintGreen,
    },
});