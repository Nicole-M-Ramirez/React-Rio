
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

import HeaderView from '../../components/HeaderView';
import BodyView from '../../components/BodyView';
import FooterView from '../../components/FooterView';
import Emergency from '../../components/Emergency';
import EmergencyView from '../../components/EmergencyView';
import TimeSince from '../../components/TimeSince';


const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width



function Gratitud ({route}) {
  const { forDate } = route.params;
  const navigation = useNavigation();
 


  return (
            <View>
              <HeaderView headerButtons = 'yes'>
                <TimeSince  />
              </HeaderView>

              <BodyView>
                <Text style={styles.titleText}>Gratitud</Text>

                <View style={styles.scrollView}>
                    <ScrollView>
                        <Text style={{color:'white', fontSize:normalize(13), }}>
{`I. Paseo de la gratitud: Dar un paseo y describir cuantas cosas puedas encontrar a tu paso que puedes agradecer:
     a. Ejemplos: un cielo azul, un día soleado, el 
        olor a pan recién horneado, la belleza por 
        donde caminas, el tener el don de la vista
        para ver el lugar donde caminas, el poder 
        tener piernas que te permiten transportarte
        por ese lugar etc.

II. Inventario de la gratitud: Crea una lista de 25 cosas por las que estas agradecido/a. Puede dividir la lista por categorías: 

    a.  personas 
    b.  cualidades que posees 
    c.  experiencias 
    d.  cosas que posees 

III. Sonrisa de la gratitud: Dibuja una sonrisa en tu rostro cuando tengas tensión o estrés y mantenla por 20 segundos, en ese tiempo. Cierra tus ojos y mientras sonríes, piensa en tus cosas favoritas en la vida (tus sitios preferidos, personas más queridas, recuerdos más felices que tengas, tu canción favorita, tu comida favorita, etc. Todo aquello en lo que has pensado son las cosas por las que puedes estar agradecido. Con este ejercicio esperamos que puedas cambiar tu estado mental y emocional.  

                            `}
                        </Text>
                    </ScrollView>
                </View>
              </BodyView>

              <FooterView>
                <TouchableOpacity  style={{height:'100%'}}  onPress={() => navigation.navigate('Felicidad',{forDate: forDate})}>
                  <View style={styles.hookedStyles}>
                    <View style={{width:'8%', 'height': '100%',  alignItems: 'flex-start',justifyContent: 'center',  }}>
                      <Image source={require('../../assets/back.png')}  style={styles.buttonsImage} />
                    </View>
                    <View style={{width:'92%', 'height': '100%', alignItems: 'flex-start',justifyContent: 'center', }}> 
                      <Text style={{color: 'white', textAlignVertical: 'center'}}>volver</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </FooterView>


              <EmergencyView>
                <Emergency/>
              </EmergencyView>
            </View>
          );
}

export default Gratitud;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingTop: Constants.statusBarHeight,
//     backgroundColor: '#ecf0f1',
//     padding: 8,
//   },
//   AudioPLayer: {
//     width: '100%',
//     height: 50,
//     alignItems: 'center',
//   },
// });

const styles = StyleSheet.create({
        button:{
          top: dimensions.bodyHeight /20 ,
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
            width: ScreenWidth * 0.20,
            height: ScreenHeight * 0.12,
            //top: dimensions.buttonHeight*0.35,
            //left: dimensions.buttonWidth *0.85
        },
        buttonTextView : {
          height: dimensions.shortButtonHeight
        },
  
        titleText:{
            color: colors.mintGreen,
            fontWeight: '600',
            fontSize: normalize(20),
            top: dimensions.bodyHeight*0.2
        },
  
        buttonView: {
          top:dimensions.bodyHeight*0.04,
          left:dimensions.bodyWidth*0.01,
          height: dimensions.buttonHeight/4,
          width:dimensions.bodyWidth,
          borderRadius: 3,
          marginTop: dimensions.separator,
        },
        buttonsText: {
          color: 'white',
          fontSize: normalize(16),
          top: dimensions.buttonHeight/20,
          left: dimensions.bodyWidth*0.4,
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
        },

        scrollView: {
            //left: dimensions.leftMargin,
            top: dimensions.bodyHeight*0.25,
            height: dimensions.bodyHeight*0.7,
            width:dimensions.bodyWidth,
            //backgroundColor: 'grey',
        },
  });
