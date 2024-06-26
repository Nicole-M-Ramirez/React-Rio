import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, PixelRatio, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors, dimensions } from '../../components/constants';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import FiveGrid from '../../components/FiveGrid';
import FooEmergencyther from '../../components/Emergency';
import Encabezado from '../../components/Encabezado';
import HeaderView from '../../components/HeaderView'
import EmergencyView from '../../components/EmergencyView';
import Emergency from '../../components/Emergency';
import { normalize } from '../../components/FondNormilize';
import BodyView from '../../components/BodyView';
import TimeSince from '../../components/TimeSince';
import FooterView from '../../components/FooterView';
import BotonConfig from '../../components/BotonConfig';
import BotonMenuPrin from '../../components/BotonMenuPrin';

import { gs } from '../../components/RioGlobalStrings';

const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width

function Menu() {
  const navigation = useNavigation();
  const passwordState = useSelector(state => state.counter.setPassword);
  const today = new Date();
  const theDate = today.toISOString().substring(0,10);
  const lang = useSelector(state => state.counter.language);

  console.log("Lang is: " +lang);
  // const theDate = today.toString().padStart(2, '0')  + '.' + month.toString().padStart(2, '0') + '.' + year % 100;
  const functions = [
    () => navigation.navigate('SelectorEmocion', { theDate: theDate }),
    () => {
      if(passwordState === true){
        //() => navigation.navigate('Contrasena',{pantalla: 'MiEspacio'})
        console.log(passwordState)
        navigation.navigate('Contrasena',{pantalla: 'MiEspacio', volver:'MenuPrincipal'})
      }
      else{
        navigation.navigate('MiEspacio')
      }
    },
    () => navigation.navigate('Informacion',{pantallaPasada:'MenuPrincipal',img:null}),
  ]

  return (
    <View>
      <BotonConfig pantalla = 'MenuPrincipal' Back={()=>{navigation.navigate('MenuPrincipal')}}/>
      <HeaderView headerButtons = 'yes'>
        {/* <Encabezado/> */}

        <TimeSince  />
      </HeaderView>

      {/* <View style={{zIndex:3, position: 'absolute'}}> */}
      <BodyView>
        {/* <FiveGrid colors={Colors} title={title} functions={functions} images={images}/> */}
        <View style={{top: dimensions.bodyHeight*0.02}}>
          <BotonMenuPrin Color={colors.blue} TitleImage={require('../../assets/autocuidado2.png')} Title={gs['actividades'][lang]} BackgroundImage={require('../../assets/A.png')} Function={() => navigation.navigate('SelectorEmocion', { theDate: theDate })} Left={dimensions.bodyWidth*0}/>
          <BotonMenuPrin Color={colors.pink} TitleImage={require('../../assets/miPerfil2.png')} Title={gs['miEspacio'][lang]} BackgroundImage={require('../../assets/B.png')} Function={functions[1]} Left={dimensions.bodyWidth*0}/>
          <BotonMenuPrin Color={colors.mintGreen} TitleImage={require('../../assets/infomacion2.png')} Title={gs['informacion'][lang]} BackgroundImage={require('../../assets/A.png')} Function={functions[2]} Left={dimensions.bodyWidth*0}/>
        {/* <TouchableOpacity onPress={functions[0]} style={[styles.button, {
                                                  backgroundColor:colors.blue,
                                                  top: 0.,
                                                  left: 0,
                                                  width : dimensions.bodyWidth,
                                                  height : dimensions.buttonHeight,
                                                }]}>
          <TouchableOpacity onPress={functions[0]} style={[styles.button, {
                                                  backgroundColor:colors.blue,
                                                  top: 0,
                                                  left: 0,
                                                  width : dimensions.buttonWidth,
                                                  height : dimensions.buttonHeight,
                                                  // position: 'absolute' 
                                                }]}>
             <Image source={require('../../assets/autocuidado2.png')} resizeMode='contain' style={[styles.buttonImage, {alignSelf: 'flex-start', left: dimensions.buttonHeight/5}]} /> 
             <Image source={require('../../assets/A.png')} resizeMode='contain' style={[{left: dimensions.bodyWidth*-1, width: dimensions.bodyWidth*4,height: ScreenHeight * 0.13,top: dimensions.bodyHeight*-0.2  }]} />           
            <Text style={styles.buttonText}>{gs['actividades'][lang]}</Text>
          </TouchableOpacity>
        </TouchableOpacity> */}

        {/* <TouchableOpacity onPress={functions[1]} style={[styles.button, {
                                                  backgroundColor:colors.pink,
                                                  top: 0,
                                                  left: 0,
                                                  width : dimensions.bodyWidth,
                                                  height : dimensions.buttonHeight,
                                                  marginTop: dimensions.bodyHeight * 0.02
                                                }]}>
          <TouchableOpacity onPress={functions[1]} style={[styles.button, {
                                                  backgroundColor:colors.pink,
                                                  top: 0,
                                                  left: 0,
                                                  width : dimensions.buttonWidth,
                                                  height : dimensions.buttonHeight,
                                                  //marginTop: dimensions.bodyHeight * 0.01 
                                                }]}>
             <Image source={require('../../assets/miPerfil2.png')} resizeMode='contain' style={[styles.buttonImage, {alignSelf: 'flex-start', left: dimensions.buttonHeight/5}]} />             
            <Text style={styles.buttonText}>{gs['miEspacio'][lang]}</Text>
          </TouchableOpacity>
        </TouchableOpacity>

        <TouchableOpacity onPress={functions[2]} style={[styles.button, {
                                                  backgroundColor:colors.mintGreen,
                                                  top: 0,
                                                  left: 0,
                                                  width : dimensions.bodyWidth,
                                                  height : dimensions.buttonHeight,
                                                  marginTop: dimensions.bodyHeight * 0.02
                                                }]}>
          <TouchableOpacity onPress={functions[2]} style={[styles.button, {
                                                  backgroundColor:colors.mintGreen,
                                                  top: 0,
                                                  left: 0,
                                                  width : dimensions.buttonWidth,
                                                  height : dimensions.buttonHeight,
                                                  //marginTop: dimensions.bodyHeight * 0.01 
                                                }]}>
             <Image source={require('../../assets/infomacion2.png')} resizeMode='contain' style={[styles.buttonImage, {alignSelf: 'flex-start', left: dimensions.buttonHeight/5}]} />             
            <Text style={[styles.buttonText, {top:dimensions.buttonHeight*0.17}]}>{gs['informacion'][lang]}</Text>
          </TouchableOpacity>
        </TouchableOpacity> */}
        </View>

      </BodyView>
      {/* </View> */}

      <FooterView>
      <View style={{height:'100%',justifyContent: 'center' , alignItems: 'flex-start'}}>
        <Text style={styles.titleText}>{gs['menuPrincipal'][lang]}</Text>
      </View>
    </FooterView>

      <EmergencyView>
          <Emergency/>
      </EmergencyView>
    </View>
  );
}

export default Menu;

const styles = StyleSheet.create({
  buttonImage :{
    width: ScreenWidth * 0.23,
    height: ScreenHeight * 0.13,
    // top: ScreenHeight * 0.01,
    // left: ScreenWidth * 0.08
    // justifyContent: 'center',
    // alignContent: 'center',
    alignSelf: 'center',
    top: dimensions.buttonHeight /10

  },
  titleText: {
    color: "#4eb5a3",
    fontSize: normalize(25),
    fontWeight: '600',
    //width: dimensions.bodyWidth * 0.75
    },
    button:{
      borderRadius:5,
    },
    buttonText:{
      color:'white',
      fontSize: normalize(13),
      top: dimensions.buttonHeight * 0.17,
      left: dimensions.buttonWidth * 0.08,
    },
});
