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
  const pantalla = useSelector(state => state.counter.pantallaConfig);
  const Back = useSelector(state => state.counter.pantallConfigExtras);
  const dispatch = useDispatch();

  console.log("Configuracion extra",Back)

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
        {/* <LongButton Color={colors.pink} 
                    Title={gs['contactanos'][lang]} 
                    Function ={() => navigation.navigate('Configuracion')} 
                    Image={<Image source={require('../../assets/ingresar.png')} resizeMode='contain' style={styles.buttonImage} />}
        /> */}
        {/* <LongButton Color={colors.pink} 
                    Title={gs['comparte'][lang]} 
                    Function ={() => navigation.navigate('Configuracion')} 
                    Image={<Image source={require('../../assets/ingresar.png')} resizeMode='contain' style={styles.buttonImage} />}
        /> */}
        <LongButton Color={colors.pink} 
                    Title={gs['PersonaContacto'][lang]} 
                    Function ={() => navigation.navigate('ContactoPersona')} 
                    Image={<Image source={require('../../assets/ingresar.png')} resizeMode='contain' style={styles.buttonImage} />}
        />
      </BodyView>
      </View>

      <FooterView> 
        {/* <View style={{height:'25%', width:'50%', position:'absolute',top: dimensions.footerHeight*0.7}}> 
          <BackLink labelBack={gs['volver'][lang]} gotoScreen={pantalla}/> 
        </View>  */}
        <View style={{width:'50%', position:'absolute',marginTop: dimensions.separator*7}}>
            <TouchableOpacity  style={{height:'100%'}}  onPress={() => {Back()}}>
            <View style={styles.hookedStyles}>
              <View style={{width:'8%', 'height': '100%',  alignItems: 'flex-start',justifyContent: 'center',  }}>
                <Image source={require ('../../assets/back.png')}  style={styles.buttonBackImage} />
              </View>
              <View style={{width:'92%', 'height': '100%', alignItems: 'flex-start',justifyContent: 'center', }}> 
                <Text style={{color: 'white', textAlignVertical: 'center'}}>{gs['volver'][lang]}</Text>
              </View>
            </View>
            </TouchableOpacity>
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
  },
  hookedStyles :{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    direction: 'inherit',
    flexWrap: 'nowrap',
    height: '100%'
  
  },
  buttonBackImage :{
    width: dimensions.bodyWidth * 0.024,
    height: dimensions.footerHeight * 0.14,
    position: 'absolute'
  },
});
