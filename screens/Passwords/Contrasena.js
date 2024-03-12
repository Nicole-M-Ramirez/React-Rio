import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors, dimensions } from '../../components/constants';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import EmergencyView from '../../components/EmergencyView';
import Emergency from '../../components/Emergency';
import { normalize } from '../../components/FondNormilize';
import BodyView from '../../components/BodyView';
import TimeSince from '../../components/TimeSince';
import HeaderView from '../../components/HeaderView';
//import { backgroundColor } from '../../components/react-native-calendars/src/style';
import FooterView from '../../components/FooterView';

import { gs } from '../../components/RioGlobalStrings';

const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width

// const passwordR = useSelector(state => state.pass.password);
// console.log(passwordR)
let pass = '';
//let num = '';
//const passwordR = '12345';
let rightPass = true
let count = 0;

function Contrasena({route}) {
  const { pantalla} = route.params;
  const {volver} = route.params;
  const lang = useSelector(state => state.counter.language);
  
  const [circle1, setcircle1] = useState('');
  const [circle2, setcircle2] = useState('');
  const [circle3, setcircle3] = useState('');
  const [circle4, setcircle4] = useState('');
  const [circle5, setcircle5] = useState('');
 // const [title, setTitle] = useState(<Image source={require('../../assets/miPerfil2.png')} resizeMode='contain' style={styles.titleImage} />);
  //const [circle, setCircle] = useState(['','','','',''])

  // if(pantalla === 'NewPassword'){
  //   setTitle(<Text style={styles.titleText}>Porfavor registre una contraseña</Text>)
  // }


  const passwordR = useSelector(state => state.counter.password);
  console.log(passwordR)

  const navigation = useNavigation();

  function fillCircle(count){
    if(count === 1){
      setcircle1(colors.greyBlue)
    }
    if(count === 2){
      setcircle2(colors.greyBlue)
    }
    if(count === 3){
      setcircle3(colors.greyBlue)
    }
    if(count === 4){
      setcircle4(colors.greyBlue)
    }
    if(count === 5){
      setcircle5(colors.greyBlue)
    }
  }

  function emptyCircle(count){
    if(count === 1){
      setcircle1(colors.backgroudDarkBlue)
    }
    if(count === 2){
      setcircle2(colors.backgroudDarkBlue)
    }
    if(count === 3){
      setcircle3(colors.backgroudDarkBlue)
    }
    if(count === 4){
      setcircle4(colors.backgroudDarkBlue)
    }
    if(count === 5){
      setcircle5(colors.backgroudDarkBlue)
    }
  }

  function pressHandler (num) {
    if(num === 'del' & count != 0){
      pass = pass.slice(0, -1)
      emptyCircle(count)
      count -= 1
    }

    if(pass.length < 5 & num != 'del'){
      pass += num
      count += 1
      fillCircle(count)
    }

    // fillCircle(count)

    console.log(pass)
    console.log(pass.length)
    if(pass.length === 5){
      if(pass === passwordR){
        pass = ''
        count = 0
        setcircle1(colors.backgroudDarkBlue)
        setcircle2(colors.backgroudDarkBlue)
        setcircle3(colors.backgroudDarkBlue)
        setcircle4(colors.backgroudDarkBlue)
        setcircle5(colors.backgroudDarkBlue)
        navigation.navigate(pantalla)
      }
      else{
        pass = ''
        count = 0
        setcircle1(colors.backgroudDarkBlue)
        setcircle2(colors.backgroudDarkBlue)
        setcircle3(colors.backgroudDarkBlue)
        setcircle4(colors.backgroudDarkBlue)
        setcircle5(colors.backgroudDarkBlue)
      }
    }
  }

//   function Titulo () {
//     if(pantalla === 'NewPassword'){
//        setTitle(<Text style={styles.titleText}>Porfavor registre una contraseña</Text>)
//     } else {
//       setTitle(<Image source={require('../../assets/miPerfil2.png')} resizeMode='contain' style={styles.titleImage} />)
//     }
//   }

  return (
    <View>
      <HeaderView headerButtons = 'yes'>
        {/* <Encabezado/> */}

        <TimeSince/>
      </HeaderView>

      {/* <View style={{zIndex:3, position: 'absolute'}}> */}
      <BodyView>
        <Image source={require('../../assets/miPerfil2.png')} resizeMode='contain' style={styles.titleImage} />

        <TouchableOpacity onPress={()=>{ num = '1'; pressHandler('1')}} style={[styles.button, {
                                                  backgroundColor:colors.greyBlue,
                                                  top: dimensions.bodyHeight * 0.25,
                                                  left: dimensions.bodyHeight*0.01,
                                                  width :dimensions.buttonWidth * 0.65,
                                                  height : dimensions.buttonHeight/2,
                                                  position: 'absolute' 
                                                }]}>
          
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{ num = '2'; pressHandler('2')}} style={[styles.button, {
                                                  backgroundColor:colors.greyBlue,
                                                  top: dimensions.bodyHeight * 0.25,
                                                  left: dimensions.bodyWidth * 0.344,
                                                  width :dimensions.buttonWidth * 0.65,
                                                  height : dimensions.buttonHeight/2,
                                                  position: 'absolute' 
                                                }]}>
          
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{ num = '3'; pressHandler('3')}} style={[styles.button, {
                                                  backgroundColor:colors.greyBlue,
                                                  top: dimensions.bodyHeight * 0.25,
                                                  left: dimensions.bodyWidth * 0.67,
                                                  width :dimensions.buttonWidth * 0.65,
                                                  height : dimensions.buttonHeight/2,
                                                  position: 'absolute' 
                                                }]}>
          
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{ num = '4'; pressHandler('4')}} style={[styles.button, {
                                                  backgroundColor:colors.greyBlue,
                                                  top: dimensions.bodyHeight * 0.42,
                                                  left: dimensions.bodyHeight*0.01,
                                                  width :dimensions.buttonWidth * 0.65,
                                                  height : dimensions.buttonHeight/2,
                                                  position: 'absolute' 
                                                }]}>
          
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{ num = '5'; pressHandler('5')}} style={[styles.button, {
                                                  backgroundColor:colors.greyBlue,
                                                  top: dimensions.bodyHeight * 0.42,
                                                  left: dimensions.bodyWidth * 0.344,
                                                  width :dimensions.buttonWidth * 0.65,
                                                  height : dimensions.buttonHeight/2,
                                                  position: 'absolute' 
                                                }]}>
          
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{ num = '6'; pressHandler('6')}} style={[styles.button, {
                                                  backgroundColor:colors.greyBlue,
                                                  top: dimensions.bodyHeight * 0.42,
                                                  left: dimensions.bodyWidth * 0.67,
                                                  width :dimensions.buttonWidth * 0.65,
                                                  height : dimensions.buttonHeight/2,
                                                  position: 'absolute' 
                                                }]}>
          
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{ num = '7'; pressHandler('7')}} style={[styles.button, {
                                                  backgroundColor:colors.greyBlue,
                                                  top: dimensions.bodyHeight * 0.59,
                                                  left: dimensions.bodyHeight*0.01,
                                                  width :dimensions.buttonWidth * 0.65,
                                                  height : dimensions.buttonHeight/2,
                                                  position: 'absolute' 
                                                }]}>
          
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{ num = '8'; pressHandler('8')}} style={[styles.button, {
                                                  backgroundColor:colors.greyBlue,
                                                  top: dimensions.bodyHeight * 0.59,
                                                  left: dimensions.bodyWidth * 0.344,
                                                  width :dimensions.buttonWidth * 0.65,
                                                  height : dimensions.buttonHeight/2,
                                                  position: 'absolute' 
                                                }]}>
          
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{ num = '9'; pressHandler('9')}} style={[styles.button, {
                                                  backgroundColor:colors.greyBlue,
                                                  top: dimensions.bodyHeight * 0.59,
                                                  left: dimensions.bodyWidth * 0.67,
                                                  width :dimensions.buttonWidth * 0.65,
                                                  height : dimensions.buttonHeight/2,
                                                  position: 'absolute' 
                                                }]}>
          
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{ num = 'del'; pressHandler('del')}} style={[styles.button, {
                                                  backgroundColor:colors.mintGreen,
                                                  top: dimensions.bodyHeight * 0.76,
                                                  left: dimensions.bodyWidth * 0.67,
                                                  width :dimensions.buttonWidth * 0.65,
                                                  height : dimensions.buttonHeight/2,
                                                  position: 'absolute' 
                                                }]}>
          
          <Image source={require('../../assets/del.png')} resizeMode='contain' style={styles.buttonImage} />
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{ num = '0'; pressHandler('0')}} style={[styles.button, {
                                                  backgroundColor:colors.greyBlue,
                                                  top: dimensions.bodyHeight * 0.76,
                                                  left: dimensions.bodyWidth * 0.344,
                                                  width :dimensions.buttonWidth * 0.65,
                                                  height : dimensions.buttonHeight/2,
                                                  position: 'absolute' 
                                                }]}>
          
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <View style={{flexDirection:'row', top: dimensions.bodyHeight * 0.76, justifyContent: 'center', alignItems: 'center',}}>
            <View style={[styles.circle, {backgroundColor: circle1}]}/>
            <View style={[styles.circle, {backgroundColor: circle2}]}/>
            <View style={[styles.circle, {backgroundColor: circle3}]}/>
            <View style={[styles.circle, {backgroundColor: circle4}]}/>
            <View style={[styles.circle, {backgroundColor: circle5}]}/>
          </View>
      </BodyView>

      <FooterView>
          <TouchableOpacity  style={{height:'100%'}}  onPress={() => navigation.navigate(volver)}>
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

export default Contrasena;

const styles = StyleSheet.create({
  titleImage :{
    left: dimensions.bodyWidth /2.6,
    width: dimensions.buttonWidth * 0.5,
    height: dimensions.buttonHeight *0.5,
    top: dimensions.bodyHeight * 0.04
  },
  button:{
    borderRadius:5,
  },
  buttonText:{
    color:'white',
    fontSize: normalize(37),
    textAlign: 'center',
    top: (dimensions.buttonHeight/2) * 0.13
  },
  circle: {
    width: dimensions.bodyWidth*0.12,
    height: dimensions.bodyHeight*0.08,
    borderRadius: 22,
    borderWidth: 5,
    borderColor: colors.greyBlue,
    margin: dimensions.separator
 },
 buttonImage :{
  width: ScreenWidth * 0.17,
  height: ScreenHeight * 0.07,
  alignSelf: 'center',
  top: '17%'
},
  titleText: {
    fontSize: normalize(20),
    color: colors.mintGreen,
    height: dimensions.buttonHeight *0.7,
    top: dimensions.bodyHeight * 0.04,
    textAlign: 'center'
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