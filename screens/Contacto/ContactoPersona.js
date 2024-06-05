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

import { gs } from '../../components/RioGlobalStrings';

const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width

function ContactoPersona () {
  const lang = useSelector(state => state.counter.language);
  const navigation = useNavigation();
  const ContactState = useSelector(state => state.counter.setContacto);

  return (
    <View>
      <HeaderView headerButtons = 'yes'>
        <TimeSince/>
      </HeaderView>

      <BodyView>
        <Text style={styles.textEx}>{gs['PassMenuTit'][lang]}</Text>
          <View>
            <TouchableOpacity style={[styles.buttonView,{backgroundColor:colors.pink, marginTop: dimensions.bodyHeight*0.07,}]} onPress={() => navigation.navigate('CrearContacto',{pantalla: 'ContactoPersona'})}>
              <Text style={styles.buttonsText}>{gs['CrearContacto'][lang]}</Text>
                <View style={{position: 'absolute', zIndex: 0,  alignItems: 'flex-end',justifyContent: 'center',}}>
                  <Image source={require('../../assets/ingresar.png')} resizeMode='contain' style={styles.buttonImage} />
                </View>
            </TouchableOpacity>
          
          
            <TouchableOpacity style={[styles.buttonView,{backgroundColor:colors.pink,}]} onPress={() => navigation.navigate('CrearContacto',{pantalla: 'ContactoPersona'})}>
              <Text style={styles.buttonsText}>{gs['CambiarCont'][lang]}</Text>
              <View style={{position: 'absolute', zIndex: 0,  alignItems: 'flex-end',justifyContent: 'center',}}>
                <Image source={require('../../assets/ingresar.png')} resizeMode='contain' style={styles.buttonImage} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.buttonView,{backgroundColor:colors.pink,}]} onPress={() => navigation.navigate('BorrarContacto')}>
              <Text style={styles.buttonsText}>{gs['DeleteCont'][lang]}</Text>
              <View style={{position: 'absolute', zIndex: 0,  alignItems: 'flex-end',justifyContent: 'center',}}>
                <Image source={require('../../assets/ingresar.png')} resizeMode='contain' style={styles.buttonImage} />
              </View>
            </TouchableOpacity>
          </View>
            
        

        {/* <TouchableOpacity style={[styles.buttonView,{backgroundColor:colors.pink, marginTop: dimensions.bodyHeight*0.07,}]} onPress={() => navigation.navigate('SobreNosotros',{pantalla: 'Bienvenida'})}>
            <Text style={styles.buttonsText}>{gs['sobreNosotros'][lang]}</Text>
            <View style={{position: 'absolute', zIndex: 0,  alignItems: 'flex-end',justifyContent: 'center',}}>
                <Image source={require('../../assets/ingresar.png')} resizeMode='contain' style={styles.buttonImage} />
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.buttonView,{backgroundColor:colors.pink,}]} onPress={() => navigation.navigate('BaseTeorica')}>
            <Text style={styles.buttonsText}>{gs['baseTeorica'][lang]}</Text>
            <View style={{position: 'absolute', zIndex: 0,  alignItems: 'flex-end',justifyContent: 'center',}}>
                <Image source={require('../../assets/ingresar.png')} resizeMode='contain' style={styles.buttonImage} />
            </View>
        </TouchableOpacity> */}

      </BodyView>

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


export default ContactoPersona;

const styles = StyleSheet.create({
//   titleImage :{
//     left: dimensions.bodyWidth /3,
//     width: dimensions.buttonWidth * 0.6,
//     height: dimensions.buttonHeight *0.6,
//     margin: dimensions.separator,
//     marginBottom: dimensions.separator*4
//   },
//  titleText: {
//   color: "#4eb5a3",
//   fontSize: normalize(20),
//   fontWeight: '600',
//   },
//   buttonImage: {
//     width: dimensions.buttonWidth/5,
//     height: dimensions.buttonHeight/5,
//     top: dimensions.buttonHeight/40,
//     left: dimensions.buttonWidth*1.8,
//   }
title: {
  top: dimensions.headerHeight*0.25,
  left:dimensions.bodyWidth*0.71,
  fontSize: normalize(20),
  color: colors.mintGreen
},
textEx: {
  color: colors.mintGreen,
  fontSize: normalize(18),
  marginTop: dimensions.bodyHeight *0.08,
  marginLeft : dimensions.bodyWidth*0.25,
  marginBottom: dimensions.bodyHeight*0.1
},
buttonView: {
  height: dimensions.buttonHeight/3,
  borderRadius: 8,
  marginTop: dimensions.bodyHeight*0.02,
},
buttonsText: {
  color: 'white',
  fontSize: normalize(16),
  top: dimensions.buttonHeight/12,
  left: dimensions.separator*4,
},
buttonImage: {
  width: dimensions.buttonWidth/5,
  height: dimensions.buttonHeight/5,
  top: (dimensions.buttonHeight/3)*0.2,
  left: dimensions.buttonWidth*1.7,
}
});
