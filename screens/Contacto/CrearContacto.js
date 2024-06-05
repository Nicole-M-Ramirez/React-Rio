import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import { colors, dimensions } from '../../components/constants';
import {colors, dimensions} from '../../components/constants';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import HeaderView from '../../components/HeaderView';
import TimeSince from '../../components/TimeSince';
import BodyView from '../../components/BodyView';
import EmergencyView from '../../components/EmergencyView';
import Emergency from '../../components/Emergency';
import { normalize } from '../../components/FondNormilize';
import FooterView from '../../components/FooterView';
import { backgroundColor } from '../../components/react-native-calendars/src/style';
import { buttons } from '../../Diccionario/español';
import LongButton from '../../components/LongButton';
import LongButtonSwitch from '../../components/LongButtonSwitch';
import { updateLang } from '../../redux/slices/counterSlice';
import BackLink from '../../components/BackLink';
import BaseTeorica from '../BaseTeorica'
import { updateContacto } from '../../redux/slices/counterSlice';

import { gs } from '../../components/RioGlobalStrings';
import { symbolName } from 'typescript';

const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width

function CrearContacto ({route}) {
  const dispatch = useDispatch();
  const lang = useSelector(state => state.counter.language);
  const {pantalla} = route.params;
  const navigation = useNavigation();
  const passwordState = useSelector(state => state.counter.setPassword);
  let telefonoLength = 0

  const [telefono, setTelefono] = useState("")
  const [realTelefono, setRealTelefono] = useState("")

  function pressHandler(num) {
    let ralla = 0
    let dummyNum = telefono

    dummyNum = dummyNum + num;

   

    if(telefono.length === 2){
        dummyNum = dummyNum + "-"
    }

    if(telefono.length === 6 || telefono.length === 7){
        dummyNum = dummyNum + "-"
    }

    if(telefono.length < 12){
        setTelefono(dummyNum)
        setRealTelefono(realTelefono+num)
    }

  }

  function DeleteNum (){
    let dummyNum = telefono
    dummyNum = dummyNum.slice(0, -1)
    setTelefono(dummyNum)
  }

  function ConfirmarContacto () {
    if(telefono.length === 12){
      dispatch(updateContacto({"cont":realTelefono}));
    }

    navigation.navigate('MenuPrincipal')
  }

  return (
    <View>
      <HeaderView headerButtons = 'yes'>
        <TimeSince/>
      </HeaderView>

      <BodyView>
        <Text style={styles.titleText}>{gs['CrearContactoTit'][lang]}</Text>

        <TouchableOpacity onPress={()=>{ num = '1'; pressHandler('1')}} style={[styles.button, {
                                                  backgroundColor:colors.greyBlue,
                                                  top: dimensions.bodyHeight*0.2,
                                                  left: dimensions.bodyHeight*0.01,
                                                  width :dimensions.buttonWidth * 0.65,
                                                  height : dimensions.buttonHeight/2,
                                                  position: 'absolute' 
                                                }]}>
          
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{ num = '2'; pressHandler('2')}} style={[styles.button, {
                                                  backgroundColor:colors.greyBlue,
                                                  top: dimensions.bodyHeight*0.2,
                                                  left: dimensions.bodyWidth * 0.344,
                                                  width :dimensions.buttonWidth * 0.65,
                                                  height : dimensions.buttonHeight/2,
                                                  position: 'absolute' 
                                                }]}>
          
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{ num = '3'; pressHandler('3')}} style={[styles.button, {
                                                  backgroundColor:colors.greyBlue,
                                                  top: dimensions.bodyHeight*0.2,
                                                  left: dimensions.bodyWidth * 0.67,
                                                  width :dimensions.buttonWidth * 0.65,
                                                  height : dimensions.buttonHeight/2,
                                                  position: 'absolute' 
                                                }]}>
          
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{ num = '4'; pressHandler('4')}} style={[styles.button, {
                                                  backgroundColor:colors.greyBlue,
                                                  top: dimensions.bodyHeight*0.37,
                                                  left: dimensions.bodyHeight*0.01,
                                                  width :dimensions.buttonWidth * 0.65,
                                                  height : dimensions.buttonHeight/2,
                                                  position: 'absolute' 
                                                }]}>
          
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{ num = '5'; pressHandler('5')}} style={[styles.button, {
                                                  backgroundColor:colors.greyBlue,
                                                  top: dimensions.bodyHeight*0.37,
                                                  left: dimensions.bodyWidth * 0.344,
                                                  width :dimensions.buttonWidth * 0.65,
                                                  height : dimensions.buttonHeight/2,
                                                  position: 'absolute' 
                                                }]}>
          
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{ num = '6'; pressHandler('6')}} style={[styles.button, {
                                                  backgroundColor:colors.greyBlue,
                                                  top: dimensions.bodyHeight*0.37,
                                                  left: dimensions.bodyWidth * 0.67,
                                                  width :dimensions.buttonWidth * 0.65,
                                                  height : dimensions.buttonHeight/2,
                                                  position: 'absolute' 
                                                }]}>
          
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{ num = '7'; pressHandler('7')}} style={[styles.button, {
                                                  backgroundColor:colors.greyBlue,
                                                  top: dimensions.bodyHeight*0.54,
                                                  left: dimensions.bodyHeight*0.01,
                                                  width :dimensions.buttonWidth * 0.65,
                                                  height : dimensions.buttonHeight/2,
                                                  position: 'absolute' 
                                                }]}>
          
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{ num = '8'; pressHandler('8')}} style={[styles.button, {
                                                  backgroundColor:colors.greyBlue,
                                                  top: dimensions.bodyHeight*0.54,
                                                  left: dimensions.bodyWidth * 0.344,
                                                  width :dimensions.buttonWidth * 0.65,
                                                  height : dimensions.buttonHeight/2,
                                                  position: 'absolute' 
                                                }]}>
          
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{ num = '9'; pressHandler('9')}} style={[styles.button, {
                                                  backgroundColor:colors.greyBlue,
                                                  top: dimensions.bodyHeight*0.54,
                                                  left: dimensions.bodyWidth * 0.67,
                                                  width :dimensions.buttonWidth * 0.65,
                                                  height : dimensions.buttonHeight/2,
                                                  position: 'absolute' 
                                                }]}>
          
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{DeleteNum()}} style={[styles.button, {
                                                  backgroundColor:colors.mintGreen,
                                                  top: dimensions.bodyHeight * 0.71,
                                                  left: dimensions.bodyWidth * 0.67,
                                                  width :dimensions.buttonWidth * 0.65,
                                                  height : dimensions.buttonHeight/2,
                                                  position: 'absolute' 
                                                }]}>
          
          <Image source={require('../../assets/del.png')} resizeMode='contain' style={styles.buttonImage} />
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{ num = '0'; pressHandler('0')}} style={[styles.button, {
                                                  backgroundColor:colors.greyBlue,
                                                  top: dimensions.bodyHeight * 0.71,
                                                  left: dimensions.bodyWidth * 0.344,
                                                  width :dimensions.buttonWidth * 0.65,
                                                  height : dimensions.buttonHeight/2,
                                                  position: 'absolute' 
                                                }]}>
          
            <Text style={styles.buttonText}>0</Text>

            <Text style={{fontSize: normalize(23),
                          color: colors.mintGreen,
                          fontWeight: "600",
                          height: dimensions.buttonHeight *0.7,
                          top: dimensions.bodyHeight * 0.1,
                          left: dimensions.bodyWidth *-0.35,
                          textAlign: 'center',
                          width: dimensions.bodyWidth*1}}>
                {telefono}
            </Text>

          </TouchableOpacity>
      </BodyView>

      <FooterView>
        <View style={{width:'50%', position:'absolute',marginTop: dimensions.bodyHeight*0.09}}>
            <BackLink labelBack={gs['volver'][lang]} gotoScreen={pantalla}></BackLink>
        </View>

        <View  style={{left: '50%', width:'50%', position:'absolute', top:dimensions.footerHeight*0.6}}>
            <TouchableOpacity  style={{height:'100%'}}  onPress={() => {ConfirmarContacto()}}>
                <View style={styles.hookedStyles}>
                    <View style={{width:'92%', 'height': '100%', alignItems: 'flex-end',justifyContent: 'center', }}> 
                        <Text style={{color: 'white', textAlignVertical: 'center'}}>{gs['Confirmar Contacto'][lang]}</Text>
                    </View>
                    <View style={{width:'8%', 'height': '100%',  alignItems: 'flex-end',justifyContent: 'center',  }}>
                        <Image source={require('../../assets/continuar2.png')}  style={styles.CbuttonImage} />
                    </View>
                </View>
            </TouchableOpacity>
        </View>
      </FooterView>

      <EmergencyView>
          <Emergency/>
      </EmergencyView>
    </View>
  )
}

  // return (
  //   // <View>
  //   //   <HeaderView headerButtons = 'yes'>
  //   //     {/* <Encabezado/> */}

  //   //     <TimeSince/>
  //   //   </HeaderView>

  //   //   <View style={{top:dimensions.bodyHeight*-0.04}}>
  //   //   <BodyView>
  //   //   </BodyView>
  //   //   </View>

  //   //   <FooterView> 
  //   //     <View style={{height:'25%', width:'50%', position:'absolute',top: dimensions.footerHeight*0.7}}> 
  //   //       <BackLink labelBack={gs['volver'][lang]} gotoScreen={'MenuPrincipal'}/> 
  //   //     </View> 
  //   //     {/* <View style={{top:dimensions.footerHeight*.25, height:'75%',justifyContent: 'center' , alignItems: 'flex-start'}}> 
  //   //       <Text style={styles.titleText}>{gs['configuracion'][lang]}</Text> 
  //   //     </View>  */}
  //   //   </FooterView>

  //   //   <EmergencyView>
  //   //       <Emergency/>
  //   //   </EmergencyView>
  //   // </View>
  // );


export default CrearContacto;

const styles = StyleSheet.create({
    titleImage :{
        left: dimensions.bodyWidth /3,
        width: dimensions.buttonWidth * 0.7,
        height: dimensions.buttonHeight *0.7,
        top: dimensions.bodyHeight * 0.04
      },
      button:{
        borderRadius:5,
      },
      buttonText:{
        color:'white',
        fontSize: normalize(37),
        //top: dimensions.buttonHeight * 0.09,
        //left: dimensions.buttonWidth * 0.25,
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
        top: dimensions.bodyHeight * 0.02,
        left: dimensions.bodyWidth *0,
        textAlign: 'center',
        width: dimensions.bodyWidth*1
      },
      hookedStyles :{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        direction: 'inherit',
        flexWrap: 'nowrap',
        height: '100%'
      
      },
      CbuttonImage :{
        width: dimensions.bodyWidth * 0.024,
        height: dimensions.footerHeight * 0.14,
        position: 'absolute'
      }
});
