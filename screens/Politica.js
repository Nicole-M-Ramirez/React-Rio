import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, PixelRatio, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors, dimensions } from '../components/constants';

import { titles } from '../Diccionario/español';
import { buttons } from '../Diccionario/español';
import Encabezado from '../components/Encabezado';
import Emergency from '../components/Emergency';
import HeaderView from '../components/HeaderView';
import BodyView from '../components/BodyView';
import EmergencyView from '../components/EmergencyView';
import FooterView from '../components/FooterView';
import AceptoNoAcepto from '../components/AceptoNoAcepto';
import FootherInicio from '../components/FootherInicio';
import HeaderInicio from '../components/HeaderInicio';
import { WebView } from 'react-native-webview'; 

import BackLink from '../components/BackLink';
import NextLink from '../components/NextLink';

import { normalize } from '../components/FondNormilize';

import { gs } from '../components/RioGlobalStrings';
// const ScreenHeight = Dimensions.get("window").height
// const ScreenWidth = Dimensions.get("window").width

import { useSelector } from 'react-redux';
function Politica({route}) {

    const navigation = useNavigation();
    const { pantalla} = route.params;
    const { regresarTitulo} = route.params;

    const lang = useSelector(state => state.counter.language);

  return (
    <View>
      {/* <View style={{zIndex:3, position: 'absolute'}}>
        <Image source={require('../assets/hogar2.png')} resizeMode='contain' style={styles.headerHouseButton} />
      </View>

      <View style={{zIndex:3, position: 'absolute'}}>
        <Image source={require('../assets/actionMenu.png')} resizeMode='contain' style={[styles.headerHouseButton, {left: ScreenWidth * 0.87,}]} />
      </View> */}
      <HeaderInicio>
        <Text style={styles.title}>{gs['politicaDePrivacidad'][lang]}</Text>
      </HeaderInicio>

      <View style={{position:'relative', 
        marginTop: dimensions.bodyTopMargin - dimensions.headerHeight + dimensions.separator*5.5, 
        marginLeft: dimensions.leftMargin,
        height: dimensions.bodyHeight,
        width: dimensions.bodyWidth}}>
      <View style={styles.textBox}>
          <ScrollView>
            <Text style={styles.boxTexts}>{gs['politicaCont'][lang]}</Text>
            {/* <WebView style={{backgroundColor: 'transparent', width:dimensions.buttonWidth*1.99,color:'white', fontSize:normalize(24),top:20, left:dimensions.separator, marginTop:dimensions.bodyWidth*0.07}}  
            originWhitelist={['*']} 
            source={{ html: `
              <ul>
                <li>Arguments with parents, partners, or friends
                <li>Receiving low grades
              </ul>` 
            }}/> */}
          </ScrollView>
        </View>

      </View>
      {/* <FooterView>
        <AceptoNoAcepto/>
      </FooterView> */}

      <FooterView>
          <View style={{width:'50%', position:'absolute',top: dimensions.footerHeight*0.7}}>
            <BackLink labelBack={gs[regresarTitulo][lang]} gotoScreen={pantalla}></BackLink>
          </View>
          {/* <View style={{left: '50%', width:'50%', position:'absolute',marginTop: dimensions.separator}}>
            <NextLink labelNoAcepto={"Acepto"} gotoScreen={'Bienvenida'}></NextLink>
          </View>           */}
          { pantalla === 'SelectorDeLenguage' ? <View style={{left: '50%', width:'50%', position:'absolute',top: dimensions.footerHeight*0.7}}>
                                            <NextLink labelNoAcepto={gs['acepto'][lang]} gotoScreen={'Bienvenida'}></NextLink>
                                           </View> 
          : null }
      </FooterView>

      <EmergencyView>
          {/* <Emergency/> */}
          <FootherInicio/>
        </EmergencyView>
    </View>
  );
}

export default Politica;

const styles = StyleSheet.create({
  title: {
    //top: dimensions.headerTopTextMargin,
    fontSize: normalize(20),
    color: colors.mintGreen
  },
  leftColImg: {
    width: dimensions.bodyWidth / 2,
    // justifyContent: "flex-start",
    top:0,
    left:0,
    // position: 'absolute' ,
    // height: dimensions.footerHeight
  },
  leftColNavigation: {
    width: dimensions.bodyWidth / 2,
    // justifyContent: "flex-start",
    top:0,
    position: 'absolute' ,
    height: dimensions.footerHeight
  },
  rightColNavigation: {
    width: dimensions.bodyWidth / 2,
    // justifyContent: "flex-start",
    top:0,
    left: dimensions.bodyWidth/2,
    position: 'absolute' ,
    height: dimensions.footerHeight,
    alignItems: "flex-end",
  },

  textBox: {
    top: dimensions.bodyHeight*0.015,
    backgroundColor: colors.mintGreen,
    width: dimensions.bodyWidth,
    height: "100%",
    borderRadius: 8
  },
  boxTexts: {
    color: 'white',
    margin: dimensions.bodyHeight * 0.04,
    fontSize: normalize(11)
  },
  button:{
    
  },
  buttonText:{
    color:'white',
    fontSize: normalize(12),
    fontWeight:'bold',
    //top: ScreenHeight * 0.01,
    //left: ScreenWidth * 0.04
  },
  buttonImage :{

    width: dimensions.footerHeight * 0.2,
    position: 'absolute'
  }
});


/*
    emergencyButtonView: {
      top: dimensions.footerHeight  * 0.2,
      position: 'absolute',
      left: dimensions.bodyWidth / 2, 
      justifyContent: 'flex-end',
      width: dimensions.bodyWidth / 2,
      alignItems: "flex-end",
    }, */