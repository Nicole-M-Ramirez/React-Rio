import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, ScrollView, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors, dimensions } from '../../components/constants';
import { normalize } from '../../components/FondNormilize';
import React, { useState, useEffect } from 'react';

import HeaderView from '../../components/HeaderView';
import BodyView from '../../components/BodyView';
import EmergencyView from '../../components/EmergencyView';
import FooterView from '../../components/FooterView';
import Emergency from '../../components/Emergency';
import TimeSince from '../../components/TimeSince';
import LongButton from '../../components/LongButton';
import BackLink from '../../components/BackLink';
import MetaPorAct from '../../components/MetaPorAct';
import MetaPorTiem from '../../components/MetaPorTiem';
import { useDispatch, useSelector } from 'react-redux';
import { addMeta, updateMetaCheck } from '../../redux/slices/counterSlice';
import { ProgressBar, MD3Colors } from 'react-native-paper';
import { titles } from '../../Diccionario/español';
import { getYYYYMMMDD } from '../../components/RioGlobalFuncs';
import { gs } from '../../components/RioGlobalStrings';
// import { metaImageMap } from '../../components/RioGlobalFuncs';
// import { useSelector } from 'react-redux';
import { getActiveMeta, getAccomplishedMetas } from '../../components/RioGlobalFuncs';
import { backgroundColor } from '../../components/react-native-calendars/src/style';
import { formatDateYYMMDD } from '../../components/RioGlobalFuncs';
import { metaToImageMap } from '../../components/RioGlobalFuncs';
import { updateMetaCumplida } from '../../redux/slices/counterSlice';

const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width



function Logros() {
  
  const lang = useSelector(state => state.counter.language);
  // Determinar si hay una meta activa
  const metas = useSelector(state => state.counter.metas);
  console.log("metas en logros:" + JSON.stringify(metas));
  let activeMeta = getActiveMeta(metas);
  console.log("In Logros(), activeMeta:", JSON.stringify(activeMeta));

  if (activeMeta !== undefined) console.log("In Logros(), activeMeta:", activeMeta.meta);


  let accomplishedMetas = getAccomplishedMetas(metas);

  console.log("In Logros(), accomplishedMetas:", JSON.stringify(accomplishedMetas));


  // if (metas !== undefined) {
  //   for (let i = metas.length - 1; i >=0 && activeMeta === undefined ; i--) {
  //     if (metas[i].active) activeMeta = metas[i];
  //   }
  // }



  const metaImageMap =  { 
    'escribir' : require('../../assets/diario2.png'), 
    'meditar' : require('../../assets/meditacion2.png'),
    'mascota' : require('../../assets/mascota2.png'),
    'ejercitar' : require('../../assets/ejercicio2.png'),
    '01dias': require('../../assets/01-2.png'),
    '02dias': require('../../assets/02-2.png'),
    '05dias': require('../../assets/05-2.png'),
    '10dias': require('../../assets/10-2.png'),
  }

  const metaDiasMap =  { 
    'escribir' : 5, 
    'meditar' : 5,
    'mascota' : 5,
    'ejercitar' : 5,
    '01dias': 1,
    '02dias': 2,
    '05dias': 5,
    '10dias': 10,
  }


  let logroImage = undefined;
  if (activeMeta !== undefined) {
    console.log("active meta en logros:" + JSON.stringify(activeMeta));
    console.log("dia meta en logros:" + getYYYYMMMDD(activeMeta.date));
    let diffDates = new Date() - new Date(activeMeta.date);
    console.log(diffDates/ 1000  ); 
    // console.log("la image es: " + metaImageMap["meditar5Dias"]);

    logroImage = metaToImageMap[activeMeta.meta];
    console.log("la image es: " + logroImage);
    

  }

  let metaType = undefined;
  let metaDias = undefined;
  let metaDate = undefined;
  let percentComplete = undefined;
  if (activeMeta !== undefined) {
    metaType = activeMeta.meta.includes("dia") ? 'dia' : 'actividad'; 
    if (metaType == 'dia') {
      metaDias = parseInt(activeMeta.meta.substring(0,2));
      metaDate = activeMeta.date;
      percentComplete = (new Date() - new Date(metaDate))/ (1000 * 3600 * 24. * 2);
      percentComplete = percentComplete > 1 ? 1: percentComplete;
    }  
  }


  console.log("meta type: " + metaType);
  console.log("meta date: " + metaDate);
  console.log("hace:" + ((new Date() - new Date(metaDate))/ (1000 * 3600 * 24.)));
  console.log("percent :" + percentComplete);
  // console.log("la image es: " + JSON.stringify(metaImageMap));

  return (
    <View>
      <HeaderView headerButtons = 'yes'>
        <TimeSince  />
      </HeaderView>

      <BodyView>
        {logroImage !== undefined && <Text style={styles.titleText}>{gs['retoActivo'][lang]}</Text>}
        {logroImage === undefined && <Text style={styles.titleText}>{gs['ningunReto'][lang]}</Text>}

        {logroImage !== undefined &&
        <Image source={logroImage} resizeMode='contain' style={styles.buttonImage} />}

        {logroImage !== undefined && 
        <View>
          { metaType == 'dia' &&
          <>
          <View>
            <ProgressBar progress={percentComplete} color={colors.mintGreen} style={styles.progressBar}/>
 

            <View style={styles.barScaleContainer}>
              <View style={{left:0}}>
                <Text style={[styles.NumberText,{textAlign: 'left'}]}>0</Text>
              </View>
              <View style={{left:0}}>
                <Text style={[styles.NumberText,{textAlign: 'center'}]}>días</Text>
              </View>
              <View style={{left:0}}>
                <Text style={[styles.NumberText,{textAlign: 'right'}]}>{metaDias}</Text>
              </View>
            </View>
          </View>
          </>
          }
          {
            metaType == 'actividad' &&
            <CircleComponent activeMeta={activeMeta}/>
          }

        </View>
        }
        <View style={{position: 'absolute', top:dimensions.bodyHeight*.44}}>
          <View style={{borderBottomColor: colors.mintGreen, width: dimensions.bodyWidth, borderBottomWidth:2,top: dimensions.bodyHeight * 0.02}}/>
          <View style={{position: 'relative', top: dimensions.separator * 2, height: dimensions.bodyHeight*.52}}>
            <Text style={{color: colors.mintGreen, fontSize: normalize(18), fontWeight:'500', }}>{gs['logrosAnteriores'][lang]}</Text>
        
              <ScrollView>
        {/* Region donde salen las metas logradas */}

        {accomplishedMetas !== undefined && accomplishedMetas.map((item, index) => (
        // <View key={index}>
        //   <Text>{item.meta}</Text>
        // </View>

          <View key={index} style={[styles.LongButton, {backgroundColor: colors.greyBlue}]} >
          <Text style={styles.LongButtonText}>{item.meta}</Text>
          <Text style={[styles.LongButtonText,{marginTop:dimensions.separator*1}]}>{gs['completado'][lang]} {formatDateYYMMDD(new Date(item.dateComplete))}</Text>
          <Image source={metaToImageMap[item.meta]} resizeMode='contain' style={styles.smallButtonImage} />

{/* <Image source={require('../../assets/01-2.png')} resizeMode='contain' style={styles.smallButtonImage} /> */}
</View>
      ))}
      </ScrollView>
      </View>


        {/* <View style={[styles.LongButton, {backgroundColor: colors.greyBlue}]} >
        <Text style={styles.LongButtonText}>1 día</Text>
        <Text style={[styles.LongButtonText,{marginTop:dimensions.separator*1}]}>Completado 20.10.22</Text>
        <Image source={require('../../assets/01-2.png')} resizeMode='contain' style={styles.smallButtonImage} />
        </View> */}



        </View>

      </BodyView>

      <FooterView>
          <View style={{width:'50%', position:'absolute',marginTop: dimensions.separator}}>
            <BackLink labelBack={gs['volver'][lang]} gotoScreen={'MiEspacio'}></BackLink>
          </View>
      </FooterView>

      <EmergencyView>
          <Emergency/>
      </EmergencyView>
    </View>
  );
}

export default Logros;

const styles = StyleSheet.create({
    barScaleContainer: { 
      flexDirection: 'row',
      justifyContent: 'space-between',
      // height: 200,
      position: 'relative',top: dimensions.bodyHeight*0.03
      // paddingHorizontal: 16,

    },
    titleText: {
        color: colors.mintGreen,
        fontSize: normalize(20),
        marginTop: dimensions.separator,
        fontWeight: '500'
    },
    NumberText:{
        color: colors.mintGreen,
        fontSize: normalize(20),
        // marginTop: dimensions.separator,
        // top: dimensions.bodyHeight*0.08
        //fontWeight: '500'
    },
    buttonImage :{
        width: dimensions.bodyWidth * 0.40,
        height: dimensions.bodyHeight * 0.27,
        backgroundColor : colors.mintGreen,
        borderRadius: 90,
        top: dimensions.buttonHeight*0,
        left: dimensions.buttonWidth *1.2
    },
    progressBar:{
        backgroundColor:colors.backgroudDarkBlue,
        borderColor: colors.mintGreen,
        borderWidth:1,
        height: dimensions.bodyHeight *0.03,
        top: dimensions.bodyHeight*0.03
    },
    smallButtonImage :{
      width: ScreenWidth * 0.17,
      height: ScreenHeight * 0.08,
      alignSelf: 'center',
      zIndex: 1,
      position: 'absolute',
      left: dimensions.bodyWidth *0.75,
      top: dimensions.bodyHeight *0.02
      //backgroundColor: 'grey'
    },
    LongButton: {
      width: dimensions.bodyWidth,
      height: dimensions.buttonHeight/2,
      borderRadius: 5,
      top: dimensions.bodyHeight*0.05
      //borderWidth: 2,
      //marginBottom: 3,
      //marginTop:5,
      //position: 'absolute',
      //top: dimensions.bodyHeight * 0.36
    },
    LongButtonText: {
      fontSize: normalize(14),
      color: 'white',
      marginTop: dimensions.separator*4,
      marginLeft: dimensions.separator*2
    },
    circleContainer: {
      flexDirection: 'row',
      // alignContent: 'center',
      // alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      paddingTop: dimensions.separator,
      // backgroundColor: 'yellow'
    },
    circle: {
      //flex: 1,
      aspectRatio: 1,
      borderRadius: 50,
      marginHorizontal: 15,
      backgroundColor: 'black',
      borderColor: 'blue',
      borderWidth: 2,
      // height: '100%'
      height: 50
    },
    scrollView: {
      // top: dimensions.bodyHeight*0.28,
      // height: dimensions.bodyHeight*0.64,
      //backgroundColor: 'grey',
    },
});


const CircleComponent = ({activeMeta}) => {
  const [circleState, setCircleState] = useState(activeMeta.check);

  console.log("The active meta in Circle Compo: " + JSON.stringify(activeMeta));
  const circleQty = parseInt(activeMeta.meta.slice(-2));
  console.log("Qty of circles: " + circleQty);

  const dispatch = useDispatch();


  useEffect(
    () => {console.log("CAMBIO@!!!!!");
    console.log("in Metas() circleState: " , circleState);
    // determinar si todas son ciertas
    const values = Object.values(circleState);
    if (values.every(value => value === true) == true) { 
      console.log("SE CUMPLIIOOOOOOOOO!");
      dispatch(updateMetaCumplida({ activeMeta: activeMeta}));  


    }

  },
    [circleState] 
  );




  function toggleCircle (key) {
    console.log("In Toggle Circle")
    // dispatch(updateMetaCheck({ activeMeta: activeMeta, idx: key, checkState: !circleState[key] }))  
    // setCircleState(prev => ({...prev, key: !prev[key]}));
    if (key==1) {
      dispatch(updateMetaCheck({ activeMeta: activeMeta, idx: 1, checkState: !circleState[1] }))  
      setCircleState(prev => ({...prev, 1: !prev[key]}));
    }
    else if (key==2){
      dispatch(updateMetaCheck({ activeMeta: activeMeta, idx: 2, checkState: !circleState[2] }))  
      setCircleState(prev => ({...prev, 2: !prev[key]}));
    }
    else if (key==3){
      dispatch(updateMetaCheck({ activeMeta: activeMeta, idx: 3, checkState: !circleState[3] }))  
      setCircleState(prev => ({...prev, 3: !prev[key]}));
    }
    else if (key==4){
      dispatch(updateMetaCheck({ activeMeta: activeMeta, idx: 4, checkState: !circleState[4] }))  
      setCircleState(prev => ({...prev, 4: !prev[key]}));
    }
    else if (key==5){
      dispatch(updateMetaCheck({ activeMeta: activeMeta, idx: 5, checkState: !circleState[5] }))  
      setCircleState(prev => ({...prev, 5: !prev[key]}));
    }
    else if (key==6){
      dispatch(updateMetaCheck({ activeMeta: activeMeta, idx: 6, checkState: !circleState[6] }))  
      setCircleState(prev => ({...prev, 6: !prev[key]}));
    }
    else if (key==7){
      dispatch(updateMetaCheck({ activeMeta: activeMeta, idx: 7, checkState: !circleState[7] }))  
      setCircleState(prev => ({...prev, 7: !prev[key]}));
    }
    else if (key==8){
      dispatch(updateMetaCheck({ activeMeta: activeMeta, idx: 8, checkState: !circleState[8] }))  
      setCircleState(prev => ({...prev, 8: !prev[key]}));
    }
    else if (key==8){
      dispatch(updateMetaCheck({ activeMeta: activeMeta, idx: 8, checkState: !circleState[8] }))  
      setCircleState(prev => ({...prev, 8: !prev[key]}));
    }
    else if (key==9){
      dispatch(updateMetaCheck({ activeMeta: activeMeta, idx: 9, checkState: !circleState[9] }))  
      setCircleState(prev => ({...prev, 9: !prev[key]}));
    }
    else if (key==10){
      dispatch(updateMetaCheck({ activeMeta: activeMeta, idx: 10, checkState: !circleState[10] }))  
      setCircleState(prev => ({...prev, 10: !prev[key]}));
    }
      console.log("************************** ");
      console.log("in Metas() circleState: " , circleState);
      console.log("************************** ");
  }

  // let names = [1,2,3,4,5,6,7];

  let names = [];
  for (let i = 1; i <= circleQty; i++) names.push(i);

  let firstRowOfCircles;
  let secondRowOfCircles;

  if (circleQty <=5) { 
    firstRowOfCircles = names.slice(0,circleQty);
    secondRowOfCircles = [];
  } 
  if (circleQty == 7) { 
    firstRowOfCircles = names.slice(0,4);
    secondRowOfCircles = names.slice(4,7);
  } 
  if (circleQty == 10) { 
    firstRowOfCircles = names.slice(0,5);
    secondRowOfCircles = names.slice(5,10);
  } 
  return (
    <View>
    <View style={styles.circleContainer}>

      
      {firstRowOfCircles.map((name, index) => (
        <TouchableOpacity key={index} style={[styles.circle, {backgroundColor: circleState[name] ? 'white':colors.purple}]}
        onPress={() => toggleCircle(name)} />
      ))}
      </View>
      <View style={styles.circleContainer}>
      {secondRowOfCircles.map((name, index) => (
        <TouchableOpacity key={index} style={[styles.circle, {backgroundColor: circleState[name] ? 'white':colors.purple}]}
        onPress={() => toggleCircle(name)} />
      ))}
      </View>

    </View>
  );
};