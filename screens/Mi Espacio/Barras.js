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


const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width



function Barras() {
  const MoodCount = useSelector(state => state.counter.moodCounter);
  //console.log(MoodCount)

  const Images = [
    <Image source={require('../../assets/Felicidad.png')} resizeMode='contain' style={[styles.buttonImage, {top: dimensions.buttonHeight /7}]} />,
    <Image source={require('../../assets/Ansiedad.png')} resizeMode='contain' style={[styles.buttonImage, {top: dimensions.buttonHeight*1.15}]} />,
    <Image source={require('../../assets/Miedo.png')} resizeMode='contain' style={[styles.buttonImage, {top: dimensions.buttonHeight*2.2}]} />,
    <Image source={require('../../assets/Tristeza.png')} resizeMode='contain' style={[styles.buttonImage, {top: dimensions.buttonHeight*3.2}]} />,
    <Image source={require('../../assets/Coraje.png')} resizeMode='contain' style={[styles.buttonImage, {top: dimensions.buttonHeight*4.2}]} />
  ]

  const data= {
    labels: [" ", " ", " ", " ", " ", " "],
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
          MoodCount["Miedo"].cantidad,
          MoodCount["Felicidad"].cantidad,
          MoodCount["Tristeza"].cantidad,
          MoodCount["Coraje"].cantidad,
          MoodCount["Ansiedad"].cantidad,
          MoodCount["Otros"].cantidad,
        ],
        colors: [
          (opacity =1) => `#8f79b2`,
          (opacity =1) => `#da88b9`,
          (opacity =1) => `#1e76ba`,
          (opacity =1) => `#524566`,
          (opacity =1) => `#4eb5a3`,
          (opacity =1) => `#5b8caf`,
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
        <BarChart
          style={{
            //transform: [{ rotate: '90deg'}]
            left: dimensions.bodyWidth *-0.2,
            top: dimensions.bodyHeight *0.2
          }}
          data={data}
          width={dimensions.bodyHeight}
          height={dimensions.bodyWidth-70}
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

export default Barras;

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
