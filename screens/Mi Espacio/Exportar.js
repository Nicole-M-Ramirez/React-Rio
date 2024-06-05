import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors, dimensions } from '../../components/constants';
import { normalize } from '../../components/FondNormilize';
import React, { useState } from 'react';

import HeaderView from '../../components/HeaderView';
import BodyView from '../../components/BodyView';
import EmergencyView from '../../components/EmergencyView';
import FooterView from '../../components/FooterView';
import Emergency from '../../components/Emergency';
import TimeSince from '../../components/TimeSince';
import BackLink from '../../components/BackLink';
import BotonConfig from '../../components/BotonConfig';


const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width



function Exportar() {
    const [buttonTipoColors, setButtonTipoColors] = useState(colors.mintGreen);
    const [buttonTiempoColor, setButtonTiempoColor] = useState(colors.mintGreen)

    const [circle1, setcircle1] = useState(colors.purple);
    const [circle2, setcircle2] = useState(colors.purple);
    const [circle3, setcircle3] = useState(colors.purple);
    const [circle4, setcircle4] = useState(colors.purple);
    const [circle5, setcircle5] = useState(colors.purple);
    const [circle6, setcircle6] = useState(colors.purple);

    const [opciones, setOpciones] = useState({'Actividades': false, 'Logros': false, 'Graficas': false, 'Diario': false, 'Calendario': false});
    const [archivo, setarchivo] = useState({'PDF': false, 'CSV': false});
  
    const navigation = useNavigation();

    function toggleButton (state, setFunc) {
      if(state === 'white'){
        setFunc(colors.purple)
      }
      else{
        setFunc('white')
      }
    }

    function TipoPressHandle () {
        setButtonTipoColors(colors.darkForest)
        setButtonTiempoColor(colors.mintGreen)
    }
    
    function tiempoPressHandler () {
        setButtonTipoColors(colors.mintGreen)
        setButtonTiempoColor(colors.darkForest)
  }
  
    function nav () {
      navigation.navigate(pantalla)
    }
  
    function firstCircle () {
      if(circle1 === 'white'){
        setcircle1(colors.purple)
      }
      else{
        setcircle1('white')
      }
  
      //nav()
    }
  
    function SecondCircle () {
      if(circle2 === 'white'){
        setcircle2(colors.purple)
      }
      else{
        setcircle2('white')
      }
  
      //nav()
    }
  
    function ThridCircle () {
      if(circle3 === 'white'){
        setcircle3(colors.purple)
      }
      else{
        setcircle3('white')
      }
  
      //nav()
    }
  
    function ForthCircle () {
      if(circle4 === 'white'){
        setcircle4(colors.purple)
      }
      else{
        setcircle4('white')
      }
  
      //nav()
    }
  
    function FifhtCircle () {
      if(circle5 === 'white'){
        setcircle5(colors.purple)
      }
      else{
        setcircle5('white')
      }
  
      //nav()
    }

    function SixCircle () {
      if(circle6 === 'white'){
        setcircle6(colors.purple)
      }
      else{
        setcircle6('white')
      }
  
      //nav()
    }

  return (
    <View>
      <BotonConfig pantalla = 'Exportar' Back={()=>{navigation.navigate('Exportar')}}/>
      <HeaderView headerButtons = 'yes'>
        <TimeSince  />
      </HeaderView>

      <BodyView>
        <Image source={require('../../assets/exportar2.png')} resizeMode='contain' style={styles.titleImage} />

        <View style={[styles.buttonView,{
                                         top: dimensions.bodyHeight*0.25,
                                         width : dimensions.buttonWidth,
                                         height : ScreenHeight * 0.062,
                                        }]}>
            <Text style={styles.buttonsText}>Actividades</Text>
            <TouchableOpacity style={[styles.innerCircle, {backgroundColor: circle1}]} onPress={()=>{firstCircle()}}/>
            <View style={styles.outerCircle}/>
        </View>

        <View style={[styles.buttonView,{
                                         top: 1.45*(dimensions.bodyHeight*0.25),
                                         width : dimensions.buttonWidth,
                                         height : ScreenHeight * 0.062,
                                         //marginBottom: dimensions.separator,
                                        }]}>
            <TouchableOpacity style={[styles.innerCircle, {backgroundColor: circle2}]} onPress={()=>{SecondCircle()}}/>
            <View style={styles.outerCircle}></View>
            <Text style={styles.buttonsText}>Logros</Text>
        </View>

        <View style={[styles.buttonView,{
                                         top: 1.91*(dimensions.bodyHeight*0.25),
                                         width: dimensions.buttonWidth,
                                         height : ScreenHeight * 0.062,
                                        }]}>
            <Text style={styles.buttonsText}>Graficas</Text>
            <TouchableOpacity style={[styles.innerCircle, {backgroundColor: circle3}]} onPress={()=>{ThridCircle()}}/>
            <View style={styles.outerCircle}></View>
        </View>

        <View style={[styles.buttonView,{
                                         top: (dimensions.bodyHeight*0.25),
                                         width : dimensions.buttonWidth,
                                         height : ScreenHeight * 0.062,
                                         left: dimensions.bodyWidth*0.51
                                        }]}>
            <Text style={styles.buttonsText}>Diario</Text>
            <TouchableOpacity style={[styles.innerCircle, {backgroundColor: circle4}]} onPress={()=>{ForthCircle()}}/>
            <View style={styles.outerCircle}></View>
        </View>

        <View style={[styles.buttonView,{
                                         top: 1.45*(dimensions.bodyHeight*0.25),
                                         width : dimensions.buttonWidth,
                                         height : ScreenHeight * 0.062,
                                         left: dimensions.bodyWidth*0.51
                                        }]}>
            <Text style={styles.buttonsText}>Calendario</Text>
            <TouchableOpacity style={[styles.innerCircle, {backgroundColor: circle5}]} onPress={()=>{FifhtCircle()}}/>
            <View style={styles.outerCircle}/>
        </View>

        <View style={{borderBottomColor: colors.mintGreen, width: dimensions.bodyWidth, borderBottomWidth:3, top: dimensions.bodyHeight*0.4}}/>
        <Text style={styles.titleText}>Correo electrónico</Text>

        <View style={[styles.buttonView,{
                                         top: 2.75*(dimensions.bodyHeight*0.25),
                                         width: dimensions.bodyWidth,
                                         height : ScreenHeight * 0.062,
                                        }]}>
          <Text style={[styles.buttonsText,{left:dimensions.separator*2}]}>example@email.com</Text>
        </View>

        <View style={[styles.buttonView,{
                                         top: 3.5*(dimensions.bodyHeight*0.25),
                                         width : dimensions.buttonWidth,
                                         height : ScreenHeight * 0.062,
                                        }]}>
          <Text style={styles.buttonsText}>PDF</Text>
          <TouchableOpacity style={[styles.innerCircle, {backgroundColor: circle1}]} onPress={()=>{firstCircle()}}/>
          <View style={styles.outerCircle}/>
        </View>

        <View style={[styles.buttonView,{
                                         top: 3.5*(dimensions.bodyHeight*0.25),
                                         width : dimensions.buttonWidth,
                                         height : ScreenHeight * 0.062,
                                         left: dimensions.bodyWidth*0.51
                                        }]}>
          <Text style={styles.buttonsText}>CSV</Text>
          <TouchableOpacity style={[styles.innerCircle, {backgroundColor: circle4}]} onPress={()=>{ForthCircle()}}/>
          <View style={styles.outerCircle}></View>
        </View>
      </BodyView>

      <FooterView> 
        <View style={{height:'25%', width:'50%', position:'absolute',marginBottom: dimensions.separator}}> 
          <BackLink labelBack={"Regresar"} gotoScreen={'MiEspacio'}/> 
        </View> 

        <View style={{top:dimensions.footerHeight*.25, height:'75%',justifyContent: 'center' , alignItems: 'flex-start'}}> 
          <Text style={styles.titleText}>MiEspacio</Text> 
        </View>

        <TouchableOpacity style={styles.activarButton} onPress={() => navigation.navigate('ConfirmExport')}>
          <Text style={styles.activarText}>Enviar</Text>
          <Image source={require('../../assets/ingresar.png')} resizeMode='contain' style={styles.activarImg} />
        </TouchableOpacity>
      </FooterView>

      <EmergencyView>
          <Emergency/>
      </EmergencyView>
    </View>
  );
}

export default Exportar;

const styles = StyleSheet.create({
  titleText: {
    color: "#4eb5a3",
    fontSize: normalize(19),
    top: dimensions.bodyHeight*0.4
  },
    titleImage :{
        left: dimensions.bodyWidth /3,
        width: dimensions.buttonWidth * 0.6,
        height: dimensions.buttonHeight *0.6,
        margin: dimensions.separator,
    },
    activarButton: {
      width: dimensions.bodyWidth/4,
      height: dimensions.buttonHeight/3,
      borderRadius: 5,
      marginBottom: 3,
      position: 'absolute',
      top: dimensions.footerHeight * 0.2,
      left: dimensions.bodyWidth *0.7
    },
    activarText: {
      color: 'white',
      fontSize: normalize(15),
      top: '25%'
    },
    activarImg: {
      //backgroundColor: 'pink',
      width: ScreenWidth * 0.13,
      height: ScreenHeight * 0.07,
      top: dimensions.buttonHeight*-0.14,
      left: '60%'
    },
    buttonView: {
        backgroundColor:colors.purple,
        height: dimensions.buttonHeight/4,
        borderRadius: 8,
        marginTop: dimensions.separator,
        position: 'absolute',
        left: 0,
        backgroundColor:colors.purple
    },
    outerCircle: {
        color: colors.mintGreen,
        borderRadius: 30,
        borderColor: 'white',
        width: dimensions.bodyWidth * 0.1,
        height: (dimensions.buttonHeight/4) * 0.8,
        borderWidth: 2,
        position: 'absolute',
        top: (dimensions.buttonHeight/4) * 0.1,
        left: dimensions.separator
    },
    innerCircle: {
        borderRadius: 30,
        borderColor: 'white',
        width: dimensions.bodyWidth * 0.076,
        height: (dimensions.buttonHeight/4) * 0.61,
        borderWidth: 2,
        position: 'absolute',
        top: (dimensions.buttonHeight/4) * 0.2,
        left: dimensions.bodyWidth*0.032,
        zIndex: 1,
    },
    buttonsText: {
        color: 'white',
        fontSize: normalize(13),
        top: dimensions.buttonHeight/16,
        left: dimensions.buttonWidth*0.3,
    },
    TopButton: {
        width: dimensions.bodyWidth * 0.490,
        height: dimensions.buttonHeight * 0.6,
        position: 'absolute',
        borderRadius: 5,
        top: dimensions.bodyHeight * 0.61
    },
    TopButtonText: {
        fontSize: normalize(14),
        color: 'white',
        marginTop: dimensions.separator*2,
        marginLeft: dimensions.separator*2
    },
});
