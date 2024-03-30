import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, PixelRatio, Platform, SafeAreaView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors, dimensions } from '../components/constants';

import Emergency from '../components/Emergency';
import HeaderView from '../components/HeaderView';
import BodyView from '../components/BodyView';
import EmergencyView from '../components/EmergencyView';

import BackLink from '../components/BackLink';
import NextLink from '../components/NextLink';
import FooterView from '../components/FooterView'
import { normalize } from '../components/FondNormilize';

const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width

import { useDispatch, useSelector } from 'react-redux';
import { updateLang } from '../redux/slices/counterSlice';

import { registerFirstDate } from '../redux/slices/counterSlice';


function SelectorIdioma() {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  function buttonHandler (lang) {
    dispatch(updateLang({"lang": lang}));
    navigation.navigate('Politica',{pantalla: 'SelectorDeLenguage', regresarTitulo:'noAcepto'})
  }
  
  dispatch(registerFirstDate());

  return (
    <SafeAreaView>
        <HeaderView>
          <Text style={styles.title}>Seleccionar idioma de preferencia.</Text>
        </HeaderView>

        <BodyView flexDirec = 'row'>
          <TouchableOpacity style={[styles.button, {backgroundColor: colors.blue}]} onPress={() => buttonHandler('es')}>
            <View style={styles.buttonTextView} >
            <Text style={styles.buttonText}>Español</Text>
            </View>
            <View style={styles.buttonImgView}>
              <Image source={require('../assets/ingresar.png')} resizeMode='contain' style={styles.buttonImage} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, {backgroundColor: colors.pink}]} onPress={() => buttonHandler('en')}>
          <View style={styles.buttonTextView} >
            <Text style={styles.buttonText}>Inglés</Text>
            </View>
            <View style={styles.buttonImgView}>
              <Image source={require('../assets/ingresar.png')} resizeMode='contain' style={styles.buttonImage} />
            </View>
          </TouchableOpacity>


        </BodyView>
        


        <EmergencyView>
          <Emergency/>
        </EmergencyView>
{/* 
        <View style={{zIndex:3, position: 'absolute'}}>
          <Emergency/>
        </View> */}
    </SafeAreaView>
  );
}

export default SelectorIdioma;

const styles = StyleSheet.create({
  title: {
    fontSize: normalize(18),
    color: colors.mintGreen

  },
  button:{
    top: dimensions.bodyHeight /2 ,
    width: dimensions.buttonWidth,
    height: dimensions.shortButtonHeight,
    borderRadius:3,
    margin: dimensions.separator / 2,
  },
  buttonText:{
    color:'white',
    fontSize: normalize(11),
    top: dimensions.shortButtonHeight/1.5,
    left: ScreenWidth * 0.04,
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
  buttonImgView : {
    height: dimensions.shortButtonHeight,
    left: dimensions.buttonWidth / 2,
    width: dimensions.buttonWidth / 2,
    position: 'absolute',
    justifyContent: "center",
    alignItems: "center",
    verticalAlign: "middle"
    
  }
});


