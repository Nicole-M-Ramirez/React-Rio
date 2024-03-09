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


const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width



function Piechart() {
    const MoodCount = useSelector(state => state.counter.moodCounter);

    const data = [
        {
          name: " ",
          population: MoodCount["Felicidad"].cantidad,
          color: colors.pink,
          legendFontColor: "#7F7F7F",
          legendFontSize: 15,
          pathPhoto: require("../../assets/Felicidad.png")
        },
        {
          name: "  ",
          population: MoodCount["Coraje"].cantidad,
          color: colors.purple,
          legendFontColor: "#7F7F7F",
          legendFontSize: 15,
          pathPhoto: require("../../assets/Coraje.png")
        },
        {
          name: "  ",
          population: MoodCount["Tristeza"].cantidad,
          color: colors.blue,
          legendFontColor: "#7F7F7F",
          legendFontSize: 15,
          pathPhoto: require("../../assets/Tristeza.png")
        },
        {
          name: "  ",
          population: MoodCount["Miedo"].cantidad,
          color: colors.deepPurple,
          legendFontColor: "#7F7F7F",
          legendFontSize: 15,
          pathPhoto: require("../../assets/Miedo.png")
        },
        {
          name: "  ",
          population: MoodCount["Ansiedad"].cantidad,
          color: colors.mintGreen,
          legendFontColor: "#7F7F7F",
          legendFontSize: 15,
          pathPhoto: require("../../assets/Ansiedad.png")
        },
        {
          name: "  ",
          population: MoodCount["Otros"].cantidad,
          color: colors.greyBlue,
          legendFontColor: "#7F7F7F",
          legendFontSize: 15,
          pathPhoto: require("../../assets/Otros.png")
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
          //top: dimensions.bodyHeight*-0.1
          left: dimensions.buttonHeight*0.05
        }}
        data={data}
        width={dimensions.bodyWidth*1.9}
        height={dimensions.bodyHeight*0.8}
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

export default Piechart;

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
