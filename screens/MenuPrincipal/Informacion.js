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
import DropDown from '../../components/DropDown';
import BotonConfig from '../../components/BotonConfig';
import DropDownLink from '../../components/DropDownLink';

import { gs } from '../../components/RioGlobalStrings';
import { ScrollView } from 'react-native-gesture-handler';

const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width


function Informacion({route}) {
  const {pantallaPasada} = route.params;
  const {img} = route.params;
  
  const navigation = useNavigation();
  const passwordState = useSelector(state => state.counter.setPassword);
  const lang = useSelector(state => state.counter.language);
  const dispatch = useDispatch();

  console.log("Route de informacion:",)
  function CambiarPassword () {
    // navigation.navigate('Contrasena',{
    //   pantalla: 'NewPassword'
    // })
    if(passwordState === true){
      navigation.navigate('Contrasena',{pantalla: 'NewPassword',volver:'Configuracion'})
    }
    else{
      navigation.navigate('NewPassword',{pantalla: 'Configuracion'})
    }
  }

  return (
    <View>
      <BotonConfig pantalla = 'Informacion' Back={() => navigation.navigate('Informacion',{pantallaPasada:'MenuPrincipal',img:null})}/>
      <HeaderView headerButtons = 'yes'>
        {/* <Encabezado/> */}

        <TimeSince/>
      </HeaderView>
      
     
        <View style={styles.scrollView}>
          <ScrollView>
            <Image source={require('../../assets/infomacion2.png')} resizeMode='contain' style={styles.titleImage} />
            {/* <LongButton Color={colors.pink} 
                        Title={'Sobre Nosotros'} 
                        Function ={() => navigation.navigate('Configuracion')} 
                        Image={<Image source={require('../../assets/ingresar.png')} resizeMode='contain' style={styles.buttonImage} />}
            /> */}
            <DropDown Color={colors.mintGreen} 
                        Title={gs['mayorBenef'][lang]} 
                        Function ={() => navigation.navigate('Informacion',{pantalla: 'Configuracion'})} 
                        Image={<Image source={require('../../assets/ingresar.png')} resizeMode='contain' style={styles.buttonImage} />}
                        DropSize = {dimensions.bodyHeight*1.4}
                        contText= {gs['mayorBenefCont'][lang]}
                        titleHeigth = {0.07}
                        downImage = {<Image source={require('../../assets/ingresarAbajo.png')} resizeMode='contain' style={styles.buttonImage} />}
            />
            <DropDown Color={colors.mintGreen} 
                        Title={gs['usoComp'][lang]} 
                        Function ={() => navigation.navigate('Informacion',{pantalla: 'Configuracion', regresarTitulo:'volver'})} 
                        Image={<Image source={require('../../assets/ingresar.png')} resizeMode='contain' style={styles.buttonImage} />}
                        DropSize = {dimensions.bodyHeight*1.1}
                        contText= {gs['usoCompCont'][lang]}
                        titleHeigth = {0.2}
                        downImage = {<Image source={require('../../assets/ingresarAbajo.png')} resizeMode='contain' style={styles.buttonImage} />}
            />
            <DropDownLink Color={colors.mintGreen} 
                        Title={gs['queAutolecion'][lang]} 
                        Function ={() => navigation.navigate('Informacion')} 
                        Image={<Image source={require('../../assets/ingresar.png')} resizeMode='contain' style={styles.buttonImage} />}
                        DropSize = {dimensions.bodyHeight*0.8}
                        contText= {gs['queAutolecionCont1'][lang]}
                        titleHeigth = {0.2}
                        downImage = {<Image source={require('../../assets/ingresarAbajo.png')} resizeMode='contain' style={styles.buttonImage} />}
            />
            <DropDown Color={colors.mintGreen} 
                        Title={gs['porqueAutolesion'][lang]} 
                        Function ={() => navigation.navigate('Informacion')} 
                        Image={<Image source={require('../../assets/ingresar.png')} resizeMode='contain' style={styles.buttonImage} />}
                        DropSize = {dimensions.bodyHeight*1.7}
                        contText= {gs['porqueAutolesionCont'][lang]}
                        titleHeigth = {0.1}
                        downImage = {<Image source={require('../../assets/ingresarAbajo.png')} resizeMode='contain' style={styles.buttonImage} />}
            />
            <DropDown Color={colors.mintGreen} 
                        Title={gs['cuanAutolesion'][lang]} 
                        Function ={() => navigation.navigate('Informacion',{pantalla: 'Configuracion'})} 
                        Image={<Image source={require('../../assets/ingresar.png')} resizeMode='contain' style={styles.buttonImage} />}
                        DropSize = {dimensions.bodyHeight*0.6}
                        contText= {gs['cuanAutolesionCont'][lang]}
                        titleHeigth = {0.1}
                        downImage = {<Image source={require('../../assets/ingresarAbajo.png')} resizeMode='contain' style={styles.buttonImage} />}
            />
            <DropDown Color={colors.mintGreen} 
                        Title={gs['quienAutolesion'][lang]} 
                        Function ={() => navigation.navigate('Informacion',{pantalla: 'Configuracion'})} 
                        Image={<Image source={require('../../assets/ingresar.png')} resizeMode='contain' style={styles.buttonImage} />}
                        DropSize = {dimensions.bodyHeight*0.5}
                        contText= {gs['quienAutolesionCont'][lang]}
                        titleHeigth = {0.2}
                        downImage = {<Image source={require('../../assets/ingresarAbajo.png')} resizeMode='contain' style={styles.buttonImage} />}
            />
            <DropDown Color={colors.mintGreen} 
                        Title={gs['detonantes'][lang]} 
                        Function ={() => navigation.navigate('Informacion',{pantalla: 'Configuracion'})} 
                        Image={<Image source={require('../../assets/ingresar.png')} resizeMode='contain' style={styles.buttonImage} />}
                        DropSize = {dimensions.bodyHeight*1.1}
                        contText= {gs['detonantesCont'][lang]}
                        titleHeigth = {0.2}
                        downImage = {<Image source={require('../../assets/ingresarAbajo.png')} resizeMode='contain' style={styles.buttonImage} />}
            />
            <DropDown Color={colors.mintGreen} 
                        Title={gs['alerta'][lang]} 
                        Function ={() => navigation.navigate('Informacion',{pantalla: 'Configuracion'})} 
                        Image={<Image source={require('../../assets/ingresar.png')} resizeMode='contain' style={styles.buttonImage} />}
                        DropSize = {dimensions.bodyHeight*1.3}
                        contText= {gs['alertaCont'][lang]}
                        titleHeigth = {0.2}
                        downImage = {<Image source={require('../../assets/ingresarAbajo.png')} resizeMode='contain' style={styles.buttonImage} />}
            />
            <DropDown Color={colors.mintGreen} 
                        Title={gs['riesgo'][lang]} 
                        Function ={() => navigation.navigate('Informacion',{pantalla: 'Configuracion'})} 
                        Image={<Image source={require('../../assets/ingresar.png')} resizeMode='contain' style={styles.buttonImage} />}
                        DropSize = {dimensions.bodyHeight*1.0}
                        contText= {gs['riesgoCont'][lang]}
                        titleHeigth = {0.2}
                        downImage = {<Image source={require('../../assets/ingresarAbajo.png')} resizeMode='contain' style={styles.buttonImage} />}
            />
            <DropDown Color={colors.mintGreen} 
                        Title={gs['regulacion'][lang]} 
                        Function ={() => navigation.navigate('Informacion',{pantalla: 'Configuracion'})} 
                        Image={<Image source={require('../../assets/ingresar.png')} resizeMode='contain' style={styles.buttonImage} />}
                        DropSize = {dimensions.bodyHeight*1.0}
                        contText= {gs['regulacionCont'][lang]}
                        titleHeigth = {0.07}
                        downImage = {<Image source={require('../../assets/ingresarAbajo.png')} resizeMode='contain' style={styles.buttonImage} />}
            />
            <DropDown Color={colors.mintGreen} 
                        Title={gs['suicidioAutolesion'][lang]} 
                        Function ={() => navigation.navigate('Informacion',{pantalla: 'Configuracion'})} 
                        Image={<Image source={require('../../assets/ingresar.png')} resizeMode='contain' style={styles.buttonImage} />}
                        DropSize = {dimensions.bodyHeight*0.6}
                        contText= {gs['suicidioAutolesionCont'][lang]}
                        titleHeigth = {0.2}
                        downImage = {<Image source={require('../../assets/ingresarAbajo.png')} resizeMode='contain' style={styles.buttonImage} />}
            />
            <DropDown Color={colors.mintGreen} 
                        Title={gs['queHacer'][lang]} 
                        Function ={() => navigation.navigate('Informacion',{pantalla: 'Configuracion'})} 
                        Image={<Image source={require('../../assets/ingresar.png')} resizeMode='contain' style={styles.buttonImage} />}
                        DropSize = {dimensions.bodyHeight*.8}
                        contText= {gs['queHacerCont'][lang]}
                        titleHeigth = {0.07}
                        downImage = {<Image source={require('../../assets/ingresarAbajo.png')} resizeMode='contain' style={styles.buttonImage} />}
            />
          </ScrollView>
        </View>
      

      <FooterView> 
        {/* <View style={{height:'25%', width:'50%', position:'absolute',marginBottom: dimensions.separator}}> 
          <BackLink labelBack={gs['volver'][lang]} gotoScreen={pantallaPasada}/> 
        </View>  */}
        <TouchableOpacity  style={{height:'100%'}}  onPress={() => navigation.navigate(pantallaPasada,{img:img})}>
          <View style={styles.hookedStyles}>
            <View style={{width:'8%', 'height': '100%',  alignItems: 'flex-start',justifyContent: 'center', top:dimensions.footerHeight*-0.3 }}>
              <Image source={require('../../assets/back.png')}  style={styles.buttonsImage} />
            </View>
            <View style={{width:'92%', 'height': '100%', alignItems: 'flex-start',justifyContent: 'center',top:dimensions.footerHeight*-0.3 }}> 
              <Text style={{color: 'white', textAlignVertical: 'center'}}>{gs['volver'][lang]}</Text>
            </View>
          </View>
        </TouchableOpacity>


        <View style={{top:dimensions.footerHeight*-0.65, height:'75%',justifyContent: 'center' , alignItems: 'flex-start'}}> 
          <Text style={styles.titleText}>{gs['informacion'][lang]}</Text> 
        </View> 
      </FooterView>

      <EmergencyView>
          <Emergency/>
      </EmergencyView>
    </View>
  );
}

export default Informacion;

const styles = StyleSheet.create({
  titleImage :{
    left: dimensions.bodyWidth /3,
    width: dimensions.buttonWidth * 0.6,
    height: dimensions.buttonHeight *0.6,
    margin: dimensions.separator,
    marginBottom: dimensions.separator*4
  },
 titleText: {
  color: "#4eb5a3",
  fontSize: normalize(20),
  fontWeight: '600',
  },
  buttonImage: {
    width: dimensions.buttonWidth/5,
    height: dimensions.buttonHeight/5,
    top: dimensions.buttonHeight/40,
    left: dimensions.buttonWidth*1.8,
  },
  scrollView: {
    left: dimensions.leftMargin,
    top: dimensions.bodyHeight*0.25,
    height: dimensions.bodyHeight*0.97,
    width:dimensions.bodyWidth,
    //backgroundColor: 'grey',
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
