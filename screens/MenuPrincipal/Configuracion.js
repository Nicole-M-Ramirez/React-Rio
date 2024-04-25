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
import BaseTeorica from '../../screens/BaseTeorica'

import { gs } from '../../components/RioGlobalStrings';

const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width


function Configuracion() {
  
  const navigation = useNavigation();
  const passwordState = useSelector(state => state.counter.setPassword);
  const lang = useSelector(state => state.counter.language);
  const dispatch = useDispatch();

  function CambiarPassword () {
    // navigation.navigate('Contrasena',{
    //   pantalla: 'NewPassword'
    // })
    if(passwordState === true){
      navigation.navigate('Contrasena',{pantalla: 'PasswordMenu',volver:'Configuracion'})
    }
    else{
      //navigation.navigate('NewPassword',{pantalla: 'Configuracion'})
      navigation.navigate('PasswordMenu')
    }
  }

  return (
    <View>
      <HeaderView headerButtons = 'yes'>
        {/* <Encabezado/> */}

        <TimeSince/>
      </HeaderView>

      <View style={{top:dimensions.bodyHeight*-0.04}}>
      <BodyView>
        {/* <Image source={require('../../assets/configuracion2.png')} resizeMode='contain' style={styles.titleImage} /> */}
        {/* <LongButton Color={colors.pink} 
                    Title={'Sobre Nosotros'} 
                    Function ={() => navigation.navigate('Configuracion')} 
                    Image={<Image source={require('../../assets/ingresar.png')} resizeMode='contain' style={styles.buttonImage} />}
        /> */}
        <LongButtonSwitch Color={colors.pink} 
                          Title={gs['idioma'][lang]} 
                          Function ={(enabled) => {
                            const lang = enabled ? 'en' : 'es';
                            dispatch(updateLang({"lang": lang}));
                          }} 
                          switchText1={"esp"}
                          switchText2={"eng"}
                          switchColor={colors.purple}
                          initialState={lang == 'es'}
        />
        <LongButtonSwitch Color={colors.pink} 
                          Title={gs['notificaciones'][lang]} 
                          Function ={(enabled) => {console.log("caca:" + enabled )}} 
                          switchText1={"      "}
                          switchText2={"      "}
                          switchColor={colors.wine}
                          initialState={false}
        />
        <LongButton Color={colors.pink} 
                    Title={gs['contraseña'][lang]} 
                    Function ={() => {CambiarPassword()}} 
                    Image={<Image source={require('../../assets/ingresar.png')} resizeMode='contain' style={styles.buttonImage} />}
        />
        <LongButton Color={colors.pink} 
                    Title={gs['politicaYterminos'][lang]} 
                    Function ={() => navigation.navigate('Politica',{pantalla: 'Configuracion', regresarTitulo:'volver'})} 
                    Image={<Image source={require('../../assets/ingresar.png')} resizeMode='contain' style={styles.buttonImage} />}
        />
        <LongButton Color={colors.pink} 
                    Title={gs['quienesSomos'][lang]} 
                    Function ={() => navigation.navigate('SobreNosotros',{pantalla: 'Configuracion'})} 
                    Image={<Image source={require('../../assets/ingresar.png')} resizeMode='contain' style={styles.buttonImage} />}
        />
        <LongButton Color={colors.pink} 
                    Title={gs['baseTeorica'][lang]} 
                    Function ={() => navigation.navigate('BaseTeorica',{pantalla: 'Configuracion'})} 
                    Image={<Image source={require('../../assets/ingresar.png')} resizeMode='contain' style={styles.buttonImage} />}
        />
        <LongButton Color={colors.pink} 
                    Title={gs['contactanos'][lang]} 
                    Function ={() => navigation.navigate('Configuracion')} 
                    Image={<Image source={require('../../assets/ingresar.png')} resizeMode='contain' style={styles.buttonImage} />}
        />
        <LongButton Color={colors.pink} 
                    Title={gs['comparte'][lang]} 
                    Function ={() => navigation.navigate('Configuracion')} 
                    Image={<Image source={require('../../assets/ingresar.png')} resizeMode='contain' style={styles.buttonImage} />}
        />
      </BodyView>
      </View>

      <FooterView> 
        <View style={{height:'25%', width:'50%', position:'absolute',top: dimensions.footerHeight*0.7}}> 
          <BackLink labelBack={gs['volver'][lang]} gotoScreen={'MenuPrincipal'}/> 
        </View> 
        {/* <View style={{top:dimensions.footerHeight*.25, height:'75%',justifyContent: 'center' , alignItems: 'flex-start'}}> 
          <Text style={styles.titleText}>{gs['configuracion'][lang]}</Text> 
        </View>  */}
      </FooterView>

      <EmergencyView>
          <Emergency/>
      </EmergencyView>
    </View>
  );
}

export default Configuracion;

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
  }
});
