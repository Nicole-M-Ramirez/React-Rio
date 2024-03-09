import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors, dimensions } from '../../components/constants';
import { normalize } from '../../components/FondNormilize';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';

import HeaderView from '../../components/HeaderView';
import BodyView from '../../components/BodyView';
import EmergencyView from '../../components/EmergencyView';
import FooterView from '../../components/FooterView';
import Emergency from '../../components/Emergency';
import TimeSince from '../../components/TimeSince';
import BackLink from '../../components/BackLink';


const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width



function Graficas() {
    const [buttonTipoColors, setButtonTipoColors] = useState(colors.mintGreen);
    const [buttonTiempoColor, setButtonTiempoColor] = useState(colors.mintGreen)

    const [circle1, setcircle1] = useState(colors.mintGreen);
    const [circle2, setcircle2] = useState(colors.mintGreen);
    const [funtionTipo1, setFuntionTipo1] = useState();
    const [funtionTipo2, setFuntionTipo2] = useState();

    const [circle3, setcircle3] = useState(colors.mintGreen);
    const [circle4, setcircle4] = useState(colors.mintGreen);
    const [circle5, setcircle5] = useState(colors.mintGreen);
    const [circle6, setcircle6] = useState(colors.mintGreen);
  
    const navigation = useNavigation();

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
        setcircle1(colors.mintGreen)
      }
      else{
        setcircle1('white')
        setcircle2(colors.mintGreen)
        setcircle3(colors.mintGreen)
        setcircle4(colors.mintGreen)
      }
  
      //nav()
    }
  
    function SecondCircle () {
      if(circle2 === 'white'){
        setcircle2(colors.mintGreen)
      }
      else{
        setcircle2('white')
        setcircle1(colors.mintGreen)
        setcircle3(colors.mintGreen)
        setcircle4(colors.mintGreen)
      }
  
      //nav()
    }
  
    function ThridCircle () {
      if(circle3 === 'white'){
        setcircle3(colors.mintGreen)
      }
      else{
        setcircle3('white')
        setcircle2(colors.mintGreen)
        setcircle1(colors.mintGreen)
        setcircle4(colors.mintGreen)
      }
  
      //nav()
    }
  
    function ForthCircle () {
      if(circle4 === 'white'){
        setcircle4(colors.mintGreen)
      }
      else{
        setcircle4('white')
        setcircle3(colors.mintGreen)
        setcircle2(colors.mintGreen)
        setcircle1(colors.mintGreen)
      }
  
      //nav()
    }
  
    function FifhtCircle () {
      if(circle5 === 'white'){
        setcircle5(colors.mintGreen)
      }
      else{
        setcircle5('white')
        if(circle6 === 'white'){
          setcircle6(colors.mintGreen)
        }
      }
  
      //nav()
    }

    function SixCircle () {
      if(circle6 === 'white'){
        setcircle6(colors.mintGreen)
      }
      else{
        setcircle6('white')
        if(circle5 === 'white'){
          setcircle5(colors.mintGreen)
        }
      }
  
      //nav()
    }

    function ChooseChart () {
      if(circle5 === 'white' && circle6 === colors.mintGreen){
        navigation.navigate('Barras')
      }
      else if (circle6 === 'white' && circle5 === colors.mintGreen){
        navigation.navigate('PieChart')
      }
      else{
        return
      }
    }

  return (
    <View>
      <HeaderView headerButtons = 'yes'>
        <TimeSince  />
      </HeaderView>

      <BodyView>
        <Image source={require('../../assets/graficas2.png')} resizeMode='contain' style={styles.titleImage} />

        <View style={[styles.buttonView,{backgroundColor:colors.mintGreen}]}>
            <Text style={styles.buttonsText}>Detonantes</Text>
            <TouchableOpacity style={[styles.innerCircle, {backgroundColor: circle1}]} onPress={()=>{firstCircle()}}/>
            <View style={styles.outerCircle}/>
        </View>

        <View style={[styles.buttonView,{backgroundColor:colors.mintGreen}]}>
            <TouchableOpacity style={[styles.innerCircle, {backgroundColor: circle2}]} onPress={()=>{SecondCircle()}}/>
            <View style={styles.outerCircle}></View>
            <Text style={styles.buttonsText}>Emociones</Text>
        </View>

        <View style={[styles.buttonView,{backgroundColor:colors.mintGreen}]}>
            <Text style={styles.buttonsText}>Frecuencia de autolesiones</Text>
            <TouchableOpacity style={[styles.innerCircle, {backgroundColor: circle3}]} onPress={()=>{ThridCircle()}}/>
            <View style={styles.outerCircle}></View>
        </View>

        <View style={[styles.buttonView,{backgroundColor:colors.mintGreen}]}>
            <Text style={styles.buttonsText}>Actividades frecuentes</Text>
            <TouchableOpacity style={[styles.innerCircle, {backgroundColor: circle4}]} onPress={()=>{ForthCircle()}}/>
            <View style={styles.outerCircle}></View>
        </View>

        <TouchableOpacity onPress={TipoPressHandle} style={[styles.TopButton, {backgroundColor: buttonTipoColors}]}>
            <Text style={styles.TopButtonText}>Escojer Tipo</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={tiempoPressHandler} style={[styles.TopButton, {backgroundColor: buttonTiempoColor, left: (dimensions.bodyWidth / 2) + 3}]}>
        <Text style={styles.TopButtonText}>Tiempo</Text>
        </TouchableOpacity>

        <View style={[styles.buttonView,{backgroundColor:colors.mintGreen,  top: dimensions.bodyHeight*0.21}]}>
            <Text style={styles.buttonsText}>Tipo 1: Barras</Text>
            <TouchableOpacity style={[styles.innerCircle, {backgroundColor: circle5}]} onPress={()=>{FifhtCircle()}}/>
            <View style={styles.outerCircle}/>
        </View>

        <View style={[styles.buttonView,{backgroundColor:colors.mintGreen, top: dimensions.bodyHeight*0.21}]}>
            <TouchableOpacity style={[styles.innerCircle, {backgroundColor: circle6}]} onPress={()=>{SixCircle()}}/>
            <View style={styles.outerCircle}></View>
            <Text style={styles.buttonsText}>Tipo 2: Pie Chart</Text>
        </View>
      </BodyView>

      {/* <FooterView>
          <View style={{width:'50%', position:'absolute',marginTop: dimensions.separator}}>
            <BackLink labelBack={"Regresar"} gotoScreen={'MiEspacio'}></BackLink>
          </View>

          <View style={{height:'100%',justifyContent: 'center' , alignItems: 'flex-start'}}>
            <Text style={styles.titleText}>Gráficas</Text>
          </View>

          <TouchableOpacity style={styles.activarButton} onPress={() => navigation.navigate('Barras')}>
            <Text style={styles.activarText}>Crear</Text>
            <Image source={require('../../assets/ingresar.png')} resizeMode='contain' style={styles.activarImg} />
          </TouchableOpacity>
      </FooterView> */}
      <FooterView> 
        <View style={{height:'25%', width:'50%', position:'absolute',marginBottom: dimensions.separator}}> 
          <BackLink labelBack={"Regresar"} gotoScreen={'MiEspacio'}/> 
        </View> 

        <View style={{top:dimensions.footerHeight*.25, height:'75%',justifyContent: 'center' , alignItems: 'flex-start'}}> 
          <Text style={styles.titleText}>Configuración</Text> 
        </View>

        <TouchableOpacity style={styles.activarButton} onPress={()=>{ChooseChart()}}>
          <Text style={styles.activarText}>Crear</Text>
          <Image source={require('../../assets/ingresar.png')} resizeMode='contain' style={styles.activarImg} />
        </TouchableOpacity>
      </FooterView>

      <EmergencyView>
          <Emergency/>
      </EmergencyView>
    </View>
  );
}

export default Graficas;

const styles = StyleSheet.create({
    titleText: {
        color: colors.mintGreen,
        fontSize: normalize(24),
        marginTop: dimensions.footerHeight*0.2,
        fontWeight: '400'
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
