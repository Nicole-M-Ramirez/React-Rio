import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, PixelRatio, ScrollView, Image} from 'react-native';
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
import TimeSince from '../components/TimeSince';
import DropDown from '../components/DropDown';
import FootherInicio from '../components/FootherInicio';
import HeaderInicio from '../components/HeaderInicio';
//import { gs } from '../../components/RioGlobalStrings';
//import { ScrollView } from 'react-native-gesture-handler';

import BackLink from '../components/BackLink';
import NextLink from '../components/NextLink';

import { normalize } from '../components/FondNormilize';

import { gs } from '../components/RioGlobalStrings';

import { useSelector } from 'react-redux';

// const ScreenHeight = Dimensions.get("window").height
// const ScreenWidth = Dimensions.get("window").width


function Bienvenida() {
    const navigation = useNavigation();

    const lang = useSelector(state => state.counter.language);

  return (
    <View>
      <HeaderInicio>
        {/* <TimeSince/> */}
      </HeaderInicio>

      <View style={styles.scrollView}>
          <ScrollView>
            <Text style={styles.textEx}>{gs['bienvenidaCont'][lang]}</Text>
              <View style={{top:dimensions.bodyHeight*0.05}}>
                <DropDown Color={colors.pink} 
                            Title={gs['sobreNosotros'][lang]} 
                            Function ={() => navigation.navigate('Informacion',{pantalla: 'Configuracion'})} 
                            Image={<Image source={require('../assets/ingresar.png')} resizeMode='contain' style={styles.buttonImage} />}
                            DropSize = {dimensions.bodyHeight*1.3}
                            contText= {gs['sobreNosotrosCont'][lang]}
                            titleHeigth = {0.2}
                            downImage = {<Image source={require('../assets/ingresarAbajo.png')} resizeMode='contain' style={styles.buttonImage} />}
                />
                <DropDown Color={colors.pink} 
                            Title={gs['baseTeorica'][lang]} 
                            Function ={() => navigation.navigate('Informacion',{pantalla: 'Configuracion', regresarTitulo:'volver'})} 
                            Image={<Image source={require('../assets/ingresar.png')} resizeMode='contain' style={styles.buttonImage} />}
                            DropSize = {dimensions.bodyHeight*3.75}
                            contText= {gs['baseTeoricaCont'][lang]}
                            titleHeigth = {0.2}
                            downImage = {<Image source={require('../assets/ingresarAbajo.png')} resizeMode='contain' style={styles.buttonImage} />}
                />
              </View>
          </ScrollView>
        </View>

      {/* <BodyView>
        <Text style={styles.textEx}>{gs['bienvenidaCont'][lang]}</Text>

        <TouchableOpacity style={[styles.buttonView,{backgroundColor:colors.pink, marginTop: dimensions.bodyHeight*0.07,}]} onPress={() => navigation.navigate('SobreNosotros',{pantalla: 'Bienvenida'})}>
            <Text style={styles.buttonsText}>{gs['sobreNosotros'][lang]}</Text>
            <View style={{position: 'absolute', zIndex: 0,  alignItems: 'flex-end',justifyContent: 'center',}}>
                <Image source={require('../assets/ingresar.png')} resizeMode='contain' style={styles.buttonImage} />
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.buttonView,{backgroundColor:colors.pink,}]} onPress={() => navigation.navigate('BaseTeorica')}>
            <Text style={styles.buttonsText}>{gs['baseTeorica'][lang]}</Text>
            <View style={{position: 'absolute', zIndex: 0,  alignItems: 'flex-end',justifyContent: 'center',}}>
                <Image source={require('../assets/ingresar.png')} resizeMode='contain' style={styles.buttonImage} />
            </View>
        </TouchableOpacity>

      </BodyView> */}

      <FooterView>
          <View style={{left: '50%', width:'50%', position:'absolute', top:dimensions.footerHeight*0.7}}>
            <NextLink labelNoAcepto={gs['saltar'][lang]} gotoScreen={'Explicacion1'}></NextLink>
          </View>          
      </FooterView>

      <EmergencyView>
          {/* <Emergency/> */}
          <FootherInicio/>
        </EmergencyView>
    </View>
  );
}

export default Bienvenida;

const styles = StyleSheet.create({
  title: {
    top: dimensions.headerHeight*0.25,
    left:dimensions.bodyWidth*0.71,
    fontSize: normalize(13),
    color: colors.mintGreen
  },
  textEx: {
    color: colors.mintGreen,
    fontSize: normalize(17),
    top: dimensions.bodyHeight*0.03,
  },
  buttonView: {
    height: dimensions.buttonHeight/3,
    borderRadius: 8,
    marginTop: dimensions.bodyHeight*0.02,
  },
  buttonsText: {
    color: 'white',
    fontSize: normalize(13),
    top: dimensions.buttonHeight/12,
    left: dimensions.separator*4,
  },
  buttonImage: {
    width: dimensions.buttonWidth/5,
    height: dimensions.buttonHeight/5,
    top: (dimensions.buttonHeight/3)*0.2,
    left: dimensions.buttonWidth*1.7,
  },
//   leftColImg: {
//     width: dimensions.bodyWidth / 2,
//     // justifyContent: "flex-start",
//     top:0,
//     left:0,
//     // position: 'absolute' ,
//     // height: dimensions.footerHeight
//   },
//   leftColNavigation: {
//     width: dimensions.bodyWidth / 2,
//     // justifyContent: "flex-start",
//     top:0,
//     position: 'absolute' ,
//     height: dimensions.footerHeight
//   },
//   rightColNavigation: {
//     width: dimensions.bodyWidth / 2,
//     // justifyContent: "flex-start",
//     top:0,
//     left: dimensions.bodyWidth/2,
//     position: 'absolute' ,
//     height: dimensions.footerHeight,
//     alignItems: "flex-end",
//   },

//   textBox: {
//     backgroundColor: colors.mintGreen,
//     width: dimensions.bodyWidth,
//     height: "100%",
//     borderRadius: 8
//   },
//   boxTexts: {
//     color: 'white',
//     margin: dimensions.bodyHeight * 0.04,
//     fontSize: normalize(11)
//   },
//   button:{
    
//   },
//   buttonText:{
//     color:'white',
//     fontSize: normalize(12),
//     fontWeight:'bold',
//     //top: ScreenHeight * 0.01,
//     //left: ScreenWidth * 0.04
//   },
//   buttonImage :{

//     width: dimensions.footerHeight * 0.2,
//     position: 'absolute'
//   }

titleImage :{
  left: dimensions.bodyWidth /3,
  width: dimensions.buttonWidth * 0.6,
  height: dimensions.buttonHeight *0.6,
  margin: dimensions.separator,
  marginBottom: dimensions.separator*4
},
titleText: {
color: "#4eb5a3",
fontSize: normalize(13),
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
  height: dimensions.bodyHeight*1.04,
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


/*
    emergencyButtonView: {
      top: dimensions.footerHeight  * 0.2,
      position: 'absolute',
      left: dimensions.bodyWidth / 2, 
      justifyContent: 'flex-end',
      width: dimensions.bodyWidth / 2,
      alignItems: "flex-end",
    }, */