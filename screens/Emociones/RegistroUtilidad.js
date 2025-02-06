import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, PixelRatio, TouchableOpacity, Image} from 'react-native';
import React, { useState } from 'react';
import { colors } from '../../components/constants';
import { dimensions } from '../../components/constants';
import { normalize } from '../../components/FondNormilize';
import call from 'react-native-phone-call';
import { useNavigation } from '@react-navigation/native';

import TimeSince from '../../components/TimeSince';
import HeaderView from '../../components/HeaderView';
import BodyView from '../../components/BodyView';
import FooterView from '../../components/FooterView';
import EmergencyView from '../../components/EmergencyView';
import Emergency from '../../components/Emergency';
import BackLink from '../../components/BackLink';
import BotonConfig from '../../components/BotonConfig';
import {addDetonanteData, addActividadesData, addAutolecionData,updateActUso,addEmocionData} from '../../redux/slices/counterSlice';
import { useDispatch } from 'react-redux';

import { gs } from '../../components/RioGlobalStrings';
import { useSelector } from 'react-redux';

const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width


function RegistroUtilidad({route}) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const lang = useSelector(state => state.counter.language);
  const {img} = route.params;
  const today = new Date();
  const theDate = today.toISOString().substring(0,10);
  const {pantalla} = route.params;
  const {actividad} = route.params;
  const {nombre} = route.params; 
  const {detonante} = route.params;

  console.log("Nombre de la actividad:", nombre)
  //console.log("Emocion en RegistroUtilidad:",pantalla)
  dispatch(addEmocionData({"emo" : pantalla, "fec": theDate})); 
  dispatch(addActividadesData({"act" : actividad, "fec": theDate}));
  dispatch(addDetonanteData({"det" : detonante, "fec": theDate}))

  function Calling (phoneNumber) {

    const args = {
      number: phoneNumber, // String value with the number to call
      prompt: false, // Optional boolean property. Determines if the user should be prompted prior to the call 
      skipCanOpen: true // Skip the canOpenURL check
    }

    call(args).catch(console.error)
  }

  function ActualizarActividades(seleccion){
    console.log("En registro utilidad, el nombre de la actividad es: ", nombre)
    dispatch(updateActUso({"opcion" : seleccion, "nombre": nombre}));
  }

  return (
    <View>
       <BotonConfig pantalla = 'RegistroUtilidad' Back={() => navigation.navigate('RegistroUtilidad', { theDate: theDate, img:img,pantalla:pantalla })}/> 
    <HeaderView headerButtons = 'yes'>
      <TimeSince/>
    </HeaderView>

    <BodyView>
        <View style={[{top: dimensions.bodyHeight*0.1,
                       left: dimensions.bodyWidth*0.25,
                       width : dimensions.buttonWidth,
                       height : dimensions.buttonHeight,}]}>
          {img}
        </View>

        <View style={{top:dimensions.bodyHeight*0.32, borderBottomColor: colors.mintGreen, width: dimensions.bodyWidth, borderBottomWidth:3}}/>

        <Text style={styles.TitleText}>{gs['actividadFunciono'][lang]}</Text>

        <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={[styles.button, {backgroundColor: colors.blue}]} onPress={() => {navigation.navigate('SelectorEmocion', { theDate: theDate }); ActualizarActividades("si")}}>
                    <Text style={styles.buttonText}>{gs['si'][lang]}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, {backgroundColor: colors.pink}]} onPress={() => {navigation.navigate('NoFunciono', {pantalla:pantalla, theDate: theDate});ActualizarActividades("no") }}>
                    <Text style={styles.buttonText}>No</Text>     
            </TouchableOpacity>
        </View>
    </BodyView>

    <FooterView>
      {/* <View style={{height:'100%',justifyContent: 'center' , alignItems: 'flex-start'}}>
        <Text style={styles.titleText}>{gs['volver'][lang]}</Text>
      </View> */}
    </FooterView>

    <EmergencyView>
      <Text style={styles.text}>{gs['tituloFoother'][lang]}</Text>
    </EmergencyView>
  </View>
  );
}

export default RegistroUtilidad;

const styles = StyleSheet.create({
    text: {
      color: colors.mintGreen,
      fontSize:normalize(10),
      width: dimensions.bodyWidth *.6,
      paddingTop: dimensions.emergencyHeight  * 0.1,
    },
    titleText: {
      color: "#4eb5a3",
      fontSize: normalize(15),
      fontWeight: '600',
      width: dimensions.bodyWidth * 0.75,
      top: dimensions.footerHeight * 0.2
      },
      titleImage :{
        width: ScreenWidth * 0.23,
        height: ScreenHeight * 0.13,
        alignSelf: 'center',
        top: dimensions.buttonHeight /10
      },

      button:{
        top: dimensions.bodyHeight*0.4 ,
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
        top: dimensions.bodyHeight*0.35
      },
      

});