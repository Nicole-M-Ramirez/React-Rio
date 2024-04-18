
import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  Button,
  TouchableOpacity,
  Dimensions, Image, ScrollView
} from 'react-native';
//import Constants from 'expo-constants';
import { Audio } from 'expo-av';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../components/constants';
import { normalize } from '../../components/FondNormilize';
import { dimensions } from '../../components/constants';
import BackLinkWithDate from '../../components/BackLinkWithDate';

import HeaderView from '../../components/HeaderView';
import BodyView from '../../components/BodyView';
import FooterView from '../../components/FooterView';
import Emergency from '../../components/Emergency';
import EmergencyView from '../../components/EmergencyView';
import TimeSince from '../../components/TimeSince';
import DropDown from '../../components/DropDown';
import { gs } from '../../components/RioGlobalStrings';
import { useSelector } from 'react-redux';


const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width



function Gratitud ({route}) {
  const { forDate } = route.params;
  const navigation = useNavigation();
  const lang = useSelector(state => state.counter.language);

  return(
    <View>
      <HeaderView headerButtons = 'yes'>
        <TimeSince  />
      </HeaderView>

        <View style={styles.scrollView}>
          <ScrollView>
           
              <Image source={require('../../assets/comunidad2.png')} resizeMode='contain' style={styles.buttonTitleImage} />
              <Text style={styles.titleText}>{gs['gratitud'][lang]}</Text>
              <View style={[styles.TextView]}>
                <Text style={styles.text}>{gs['gratitudCont'][lang]}</Text>
              </View>
            
              <View style={{top:dimensions.bodyHeight*-0.85}}>
                <DropDown Color={colors.pink} 
                            Title={gs['gratitudPaseo'][lang]} 
                            Function ={() => navigation.navigate('Informacion',{pantalla: 'Configuracion'})} 
                            Image={<Image source={require('../../assets/ingresar.png')} resizeMode='contain' style={styles.buttonImage} />}
                            DropSize = {dimensions.bodyHeight*0.7}
                            contText= {gs['gratitudPaseoCont'][lang]}
                            titleHeigth = {0.2}
                />
                <DropDown Color={colors.pink} 
                            Title={gs['gratitudInventario'][lang]} 
                            Function ={() => navigation.navigate('Informacion',{pantalla: 'Configuracion', regresarTitulo:'volver'})} 
                            Image={<Image source={require('../../assets/ingresar.png')} resizeMode='contain' style={styles.buttonImage}  />}
                            DropSize = {dimensions.bodyHeight*0.7}
                            contText= {gs['gratitudInventarioCont'][lang]}
                            titleHeigth = {0.2}
                />
                <DropDown Color={colors.pink} 
                            Title={gs['gratitudSonrisa'][lang]} 
                            Function ={() => navigation.navigate('Informacion',{pantalla: 'Configuracion', regresarTitulo:'volver'})} 
                            Image={<Image source={require('../../assets/ingresar.png')} resizeMode='contain' style={styles.buttonImage}  />}
                            DropSize = {dimensions.bodyHeight*0.8}
                            contText= {gs['gratitudSonrisaCont'][lang]}
                            titleHeigth = {0.2}
                />
              </View>
            </ScrollView>

          </View>

          <FooterView>
              <View style={{width:'50%', position:'absolute',top: dimensions.footerHeight*0.6,}}>
              <BackLinkWithDate labelBack={gs['volver'][lang]} gotoScreen={'Felicidad'} theDate={forDate}></BackLinkWithDate>
              </View>         
            </FooterView>

          <EmergencyView>
            <Emergency/>
          </EmergencyView>
    </View>
  )
 }

export default Gratitud;

const styles = StyleSheet.create({
  title: {
    top: dimensions.headerHeight*0.25,
    left:dimensions.bodyWidth*0.71,
    fontSize: normalize(20),
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
    fontSize: normalize(16),
    top: dimensions.buttonHeight/12,
    left: dimensions.separator*4,
  },
  // buttonImage: {
  //   width: dimensions.buttonWidth/5,
  //   height: dimensions.buttonHeight/5,
  //   top: (dimensions.buttonHeight/3)*0.2,
  //   left: dimensions.buttonWidth*1.7,
  // },
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
top: dimensions.bodyHeight*0.07
},
buttonImage: {
  width: dimensions.buttonWidth/5,
  height: dimensions.buttonHeight/5,
  top: dimensions.buttonHeight/40,
  left: dimensions.buttonWidth*1.8,
},
scrollView: {
  left: dimensions.leftMargin,
  top: dimensions.bodyHeight*0.2,
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
  width: (dimensions.buttonHeight/2)*0.4,
  height: (dimensions.buttonHeight/2)*0.4,
  position: 'absolute'
},
buttonTitleImage :{
  width: ScreenWidth * 0.4,
  height: ScreenHeight * 0.3,
  // top: ScreenHeight * 0.01,
  // left: ScreenWidth * 0.08
  // justifyContent: 'center',
  // alignContent: 'center',
  alignSelf: 'center',
  top: dimensions.buttonHeight /10

},
TextView: {
  width: dimensions.bodyWidth,
  height: dimensions.bodyHeight,
  marginTop: dimensions.bodyHeight *0.1,
},
text:{
  color:'white',
  fontSize: normalize(13),
  //width: dimensions.bodyWidth *,
  //left: dimensions.bodyWidth*0.05,
  //top: dimensions.buttonHeight*0.01
},
});
