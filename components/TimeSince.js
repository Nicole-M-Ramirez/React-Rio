import React, { useState, useEffect } from "react";
import { colors, dimensions } from '../components/constants';
import { SafeAreaView, StyleSheet, View, Text } from "react-native";

import { useDispatch, useSelector } from 'react-redux';
import { getActiveMeta } from "./RioGlobalFuncs";
import { updateMetaCumplida } from "../redux/slices/counterSlice";
import { gs } from '../components/RioGlobalStrings';
import { normalize } from "./FondNormilize";
//import { useSelector } from 'react-redux';

const MINUTE_MS = 10000;

const LetterAndQty = ({letter, qty}) => {
  

    return (
        <View >
        <View style={{ height: dimensions.headerHeight/4,   alignItems: 'flex-start' }}>
          <Text style={styles.textStyleLetter}>{letter}</Text>
        </View>
        <View style={{ height: dimensions.headerHeight/2,  justifyContent: 'center' }}> 
          <Text style={styles.textStyleQty}>{qty}</Text>
        </View>
      </View>
    );
}
const Libre = () => {
    const lang = useSelector(state => state.counter.language);

    return (
        <View >
        <View style={{ height: dimensions.headerHeight/4,  justifyContent: 'center' }}>
          <Text style={styles.textStyleLetter}></Text>
        </View>
        <View style={{  height: dimensions.headerHeight/2,  justifyContent: 'center' }}> 
          <Text style={styles.textStyleLibre}>{gs['libreCasis'][lang]}</Text>
        </View>
      </View>
    );
}

const Line = () => {
    return (
    <View 
    style={{
        borderColor: colors.mintGreen,
        borderWidth: .5,
        justifyContent: 'center',
        height: '50%',
        top: dimensions.headerHeight/2,
        width: dimensions.bodyWidth*0.25,
        left: dimensions.bodyWidth*0.04,
        position:'absolute'
    }}
    />
    );
}

Date.prototype.addDays = function(days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
}

Date.prototype.addMinutes = function(min) {
  var date = new Date(this.valueOf());
  date.setSeconds(date.getSeconds() + min*10);
  return date;
}

const TimeSince = (props) => {
    // console.log(JSON.stringify(props));
    // const theDate = new Date(2023, 3, 1, 12, 13, 14);
    // console.log(theDate.toString());

    const dispatch = useDispatch();
    let gdateLastArray = useSelector(state => state.counter.lastAuto);


    
    // const firstAutoReg = useSelector(state => state.counter.firstAutoReg);
    const dateReg = useSelector(state => state.counter.dateReg);

    // console.log("The firstAutoReg is: " + firstAutoReg);
    // console.log("In Time Since: gdateLastArray: " + gdateLastArray + " dateReg: " + dateReg);

    if (gdateLastArray === undefined) { 
      

      gdateLastArray = dateReg;
    }



    const metas = useSelector(state => state.counter.metas);
    
    let activeMeta = getActiveMeta(metas);
    // console.log("Int TimeSince, active Meta:" + JSON.stringify(activeMeta));
    

    // Logica para marcar meta cumplida si se llega al día esperado sin CASIS

    if (activeMeta !== undefined && activeMeta.meta.includes('dia')) {
      // const activeMetaDate = activeMeta.date;
      let targetDate = new Date(activeMeta.date);
      targetDate = targetDate.addMinutes(parseInt(activeMeta.meta.substring(0,2)));
      // targetDate.addDays(parseInt(activeMeta.meta.substring(0,2)));
      // console.log("*****Checking the date of the meta: " + targetDate);
      const currentDate = new Date();
      if (targetDate <= currentDate) {
        console.log("SE CUMPLIO LA META, FELICIDADES!!!!!!!!!");
        dispatch(updateMetaCumplida({ activeMeta: activeMeta}));  //necesitamos saber cual es la meta!
      }

    }


    // console.log("======= gdateLastArray =======>" + gdateLastArray);

    // const gDateLast = new Date(gdateLastArray[0],gdateLastArray[1],gdateLastArray[2], gdateLastArray[3], gdateLastArray[4], gdateLastArray[5]);

    const gDateLast = new Date(gdateLastArray)

    // console.log("======= gDateLast =======>" + gDateLast.toString());
    
    // console.log("======= gDateLast =======>" + gDateLast);

    // console.log(props.dateLast);
  const [currentDate, setCurrentDate] = useState("");
  const [minutes, setMinutes] = useState("");
  const [hours, setHours] = useState("");
  const [days, setDays] = useState("");
  const computeValues = () => {

    const diffTime = Math.abs(new Date() - gDateLast);
    const diffSecs = parseInt(diffTime / 1000);
    const diffMins = parseInt(diffTime / 60000);
    const diffHours = parseInt(diffSecs / 3600);
    const diffDays = parseInt(diffSecs / (24 * 3600));

    // console.log("diffTime: " + diffTime);
    // console.log("diffSecs: " + diffSecs);

    setMinutes(
      Math.floor(diffMins % 60)
        .toString()
        .padStart(2, "0")
    );

    setHours(
      Math.floor(diffHours % 24)
        .toString()
        .padStart(2, "0")
    );
    setDays(Math.floor(diffDays).toString().padStart(2, "0"));
    setCurrentDate(
      Math.floor(diffDays).toString().padStart(2, "0") +
        "." +
        Math.floor(diffHours % 24)
          .toString()
          .padStart(2, "0") +
        "." +
        Math.floor(diffMins % 60)
          .toString()
          .padStart(2, "0")
    );
  };

  // To execute on initialization
  useEffect(() => {
    computeValues();
  }, []);

  useEffect(() => {
    computeValues();
  }, [gDateLast]);

  // To execute every minute
  useEffect(() => {
    const interval = setInterval(() => {
      computeValues();
    }, MINUTE_MS);
    return () => clearInterval(interval);
  }, [props.dateLast]);

  // return <Text style={s.timeSince}>{currentDate}</Text>;
  return (
    <View style={{  width: '100%'}}>
    <View style={{flexDirection: 'row', alignItems: 'center', 
        justifyContent: 'flex-start', left: 0, position: 'absolute', width: '40%'}}>
        <Libre></Libre>
    </View>
    <View style={{flexDirection: 'row', alignItems: 'center', 
        justifyContent: 'flex-start', left: dimensions.bodyWidth/3 , position: 'absolute', width: '66%'}}>
        <Line></Line>
    </View>
    <View style={{flexDirection: 'row', alignItems: 'center', 
        justifyContent: 'flex-end', left: dimensions.bodyWidth/2, position: 'absolute', width: '50%'}}>
        <LetterAndQty letter="D" qty={days}/>
        <LetterAndQty letter="" qty="."/>
        <LetterAndQty letter="H" qty={hours}/>
        <LetterAndQty letter="" qty="."/>
        <LetterAndQty letter="M" qty={minutes}/>
    </View>
    </View>
  
  );
};

const styles = StyleSheet.create({
    hookedStyles :{
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        direction: 'rtl',
        flexWrap: 'nowrap',
        height: '100%', 
        
      
      },
  textStyleQty: {
    textAlign: "center",
    fontSize: 22,
    color: colors.mintGreen,
  },
  textStyleLetter: {
    textAlign: "center",
    fontSize: 9,
    color: colors.mintGreen,
    left: dimensions.bodyWidth*0.03,
    top: dimensions.headerHeight*0.1
  },
  textStyleLibre: {
    textAlign: "center",
    fontSize: normalize(12),
    color: colors.mintGreen,
  },
});

export default TimeSince;
