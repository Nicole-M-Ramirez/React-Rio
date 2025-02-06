import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors, dimensions } from '../../components/constants';
import { normalize } from '../../components/FondNormilize';
import React, { useState } from 'react';
//import BarChart from '../../components/react-native-chart-kit/BarChart';
import LineChart from '../../components/react-native-chart-kit/line-chart/LineChart';
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
import moment from 'moment';

function LineaAutoLesion ({route}) {
    const MoodCount = useSelector(state => state.counter.moodCounter);
    //console.log(MoodCount)
    const {tiempo} = route.params;
    const {Data} = route.params;
    const lang = useSelector(state => state.counter.language);

    //console.log("Data de autolesion: " + JSON.stringify(Data))
    const DataAceptada = []

    
    //console.log(Data[1].fecha)
    // var counts = {};
    // for (var i = 0; i < Data.length; i++) {
    // counts[Data[i]] = 1 + (counts[Data[i]] || 0);

    // }



    // console.log(counts)

    const l = [""]
    const d = [0]

    // for(var i = 0; i < counts.length; i++){}

    // for(let i = 0; i < Data.length; i++){
    //     const fecha = Data[i].fecha
    //     const cantidad = 0


    // }

    count = 1

    for (i = 0; i < Data.length; i++){
      const fecha = Data[i].fecha
      let fec = Data[i].fecha
      fec = fec.replace('-', "");
      fec = fec.replace('-', "");

      let dateBetween = moment(fec, "YYYYMMDD").fromNow()
      console.log(dateBetween)
      let dateNum = dateBetween.slice(0, 2);
      console.log(dateNum)

      if(dateBetween.includes('hours') || dateNum <= tiempo && count<=10){
        if(i === 0){
          l[i]=fecha
          d[i]+=1
        }
  
        if(!l.includes(fecha)){
          l.push(fecha)
          d.push(1)
        }
        else{
          let indx = l.indexOf(fecha)
          d[indx]+=1
        }

        count+=1
      }
      }





    const data = {
        labels: l,
        datasets: [
          {
            data: d,
            color: (opacity = 1) => `rgba(218, 136, 185, ${opacity})`, // optional
            strokeWidth: 2 // optional
          }
        ],
        //legend: ["Rainy Days"] // optional
      };
    return (
        <View>
            <HeaderView headerButtons = 'yes'>
                <TimeSince  />
            </HeaderView>

            <BodyView>
            <View style={{left:dimensions.bodyWidth*0.05}}>
            <LineChart
            style={{
                //transform: [{ rotate: '90deg'}]
                left: dimensions.bodyWidth *-0.2,
                top: dimensions.bodyHeight *0.05,
                //height:dimensions.bodyHeight *0.6,
                //backgroundColor:'white'
              }}
                data={data}
                width={dimensions.bodyWidth*1.2}
                height={dimensions.bodyHeight*0.55}
                bezier
                //withHorizontalLabels={false}
                verticalLabelRotation={50}
                chartConfig={{
                    //backgroundColor:'white',
                    backgroundColor: "transparent",
                    //height:dimensions.bodyHeight *0.5,
                    backgroundGradientTo: colors.backgroudDarkBlue,
                    backgroundGradientToOpacity: 5,
                    backgroundGradientFrom: colors.backgroudDarkBlue,
                    backgroundGradientFromOpacity: 0,
                    labelColor: (opacity =1) => `#ffff`,
                    color: (opacity = 1) => `rgba(218, 136, 185, ${opacity})`,
                    decimalPlaces: 0,
                    style: {
                      borderRadius: 16
                    }
                }}
            />
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
    )
}

export default LineaAutoLesion;