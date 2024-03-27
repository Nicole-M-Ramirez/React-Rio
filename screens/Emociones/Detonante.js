import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../components/constants';
import React, { useState } from 'react';

import NextLink from '../../components/NextLink';
import SixGrid from '../../components/SixGrid';
import Emergency from '../../components/Emergency';
import EmergencyView from '../../components/EmergencyView';
import Encabezado from '../../components/Encabezado';
import BodyView from '../../components/BodyView';
import FooterView from '../../components/FooterView';
import HeaderView from '../../components/HeaderView'
import { normalize } from '../../components/FondNormilize';
import TimeSince from '../../components/TimeSince';
import { dimensions } from '../../components/constants';
import BackLink from '../../components/BackLink';
//import { useSelector } from 'react-redux';
import { gs } from '../../components/RioGlobalStrings';

const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width

import { useDispatch, useSelector } from 'react-redux';
import { updateMood, decreaseByOne } from '../../redux/slices/counterSlice';

let det = [];

function Detonante({route}) {
  const lang = useSelector(state => state.counter.language);
  const [detonanteCreado, setDetonanteCreado] = useState("")
  const [comfirmarDetonante, setComfirmarDetonante] = useState(<View></View>)
  const { pantalla } = route.params;

  const { forDate } = route.params;
  console.log("Doing detonantes for " + pantalla + "  for " + forDate);

  const dispatch = useDispatch();
  const [pareja, setPareja] = useState(colors.purple);
  const [familia, setFamilia] = useState(colors.purple);
  const [amistades, setAmistades] = useState(colors.purple);
  const [perdida, setPerdida] = useState(colors.purple);
  const [estudios, setEstudios] = useState(colors.purple);

  const [detonantes, setDetonantes] = useState({'pareja': false, 'familia': false, 'amistades': false, 'perdida': false, 'estudios': false});

  const navigation = useNavigation();

  console.log("Route Params: " + JSON.stringify(route.params));

  function nav () {
    navigation.navigate(pantalla)
  }

  function toggleButton (state, setFunc) {
    if(state === 'white'){
      setFunc(colors.purple)
    }
    else{
      setFunc('white')
    }
  }

  function toggleButtonDict (key) {
    if (key=='pareja')
      setDetonantes(prev => ({...prev, pareja: !prev[key]}))
    else if (key=='familia')
      setDetonantes(prev => ({...prev, familia: !prev[key]}))
      else if (key=='amistades')
      setDetonantes(prev => ({...prev, amistades: !prev[key]}))
      else if (key=='perdida')
      setDetonantes(prev => ({...prev, perdida: !prev[key]}))
      else if (key=='estudios')
      setDetonantes(prev => ({...prev, estudios: !prev[key]}))
  }




  return (
    <View>
      <HeaderView>
      <TimeSince/>
      </HeaderView>

      <BodyView>
        <Text style={styles.titleText}>{gs['DetTitulo'][lang]}</Text>
        <Text> </Text>
        <Text style={styles.defText}>{gs['DetContenido'][lang]}</Text>
        <Text> </Text>
        <View style={{borderBottomColor: colors.mintGreen, width: dimensions.bodyWidth, borderBottomWidth:3}}/>

        <View style={[styles.buttonView,{backgroundColor:colors.purple}]}>
            <Text style={styles.buttonsText}>{gs['pareja'][lang]}</Text>
            <TouchableOpacity style={[styles.innerCircle, {backgroundColor: detonantes['pareja'] ? 'white':colors.purple}]} 
            onPress={()=>{toggleButtonDict ('pareja')}}/>
            <View style={styles.outerCircle}/>
        </View>

        <View style={[styles.buttonView,{backgroundColor:colors.purple}]}>
            <Text style={styles.buttonsText}>{gs['familia'][lang]}</Text>
            <TouchableOpacity style={[styles.innerCircle, {backgroundColor: detonantes['familia'] ? 'white':colors.purple}]} 
            onPress={()=>{toggleButtonDict ('familia')}}/>
            <View style={styles.outerCircle}></View>
        </View>

        <View style={[styles.buttonView,{backgroundColor:colors.purple}]}>
            <Text style={styles.buttonsText}>{gs['amistades'][lang]}</Text>
            <TouchableOpacity style={[styles.innerCircle, {backgroundColor: detonantes['amistades'] ? 'white':colors.purple}]} 
            onPress={()=>{toggleButtonDict ('amistades')}}/>            
            <View style={styles.outerCircle}></View>
        </View>

        <View style={[styles.buttonView,{backgroundColor:colors.purple}]}>
            <Text style={styles.buttonsText}>{gs['perdida'][lang]}</Text>
            <TouchableOpacity style={[styles.innerCircle, {backgroundColor: detonantes['perdida'] ? 'white':colors.purple}]} 
            onPress={()=>{toggleButtonDict ('perdida')}}/>
            <View style={styles.outerCircle}></View>
        </View>

        <View style={[styles.buttonView,{backgroundColor:colors.purple}]}>
            <Text style={styles.buttonsText}>{gs['estUniversitarios'][lang]}</Text>
            <TouchableOpacity style={[styles.innerCircle, {backgroundColor: detonantes['estudios'] ? 'white':colors.purple}]} 
            onPress={()=>{toggleButtonDict ('estudios')}}/>
            <View style={styles.outerCircle}></View>
        </View>

        <View style={[styles.buttonView,{backgroundColor:colors.purple,height: dimensions.buttonHeight/2,}]}>
            <Text style={styles.buttonsText}>{gs['otraOp'][lang]}</Text>
            <TextInput
              style={{marginLeft:dimensions.separator,top:(dimensions.buttonHeight/2)*0.12, color:'white'}}
              onChangeText={setDetonanteCreado}
              value={detonanteCreado}
            />
        </View>
      </BodyView>

      

      <FooterView>
          <View style={{width:'50%', position:'absolute',marginTop: dimensions.separator*7}}>
            <TouchableOpacity  style={{height:'100%'}}  onPress={() => navigation.navigate('SelectorEmocion', {forDate: forDate})}>
            <View style={styles.hookedStyles}>
              <View style={{width:'8%', 'height': '100%',  alignItems: 'flex-start',justifyContent: 'center',  }}>
                <Image source={require ('../../assets/back.png')}  style={styles.buttonImage} />
              </View>
              <View style={{width:'92%', 'height': '100%', alignItems: 'flex-start',justifyContent: 'center', }}> 
                <Text style={{color: 'white', textAlignVertical: 'center'}}>{gs['emocionesTitulo'][lang]}</Text>
              </View>
            </View>
            </TouchableOpacity>
          </View>


          <View style={{left: '50%', width:'50%', position:'absolute',marginTop: dimensions.separator*7}}>
            {/* <NextLink labelNoAcepto={"Continuar"} gotoScreen={pantalla}></NextLink> */}

          <TouchableOpacity  style={{height:'100%'}}  onPress={() => {
            if (detonanteCreado.length > 0) detonantes['otros'] = detonanteCreado;
            console.log("Los detonantes son:" + JSON.stringify(detonantes));
            console.log("La fecha es:" + JSON.stringify(forDate));
            // updateMood(pantalla);
            dispatch(updateMood({"mood": pantalla, "detonantes": detonantes, "theDate": forDate}));
            // console.log("Openning the " + pantalla + " activities for date " + forDate);
            navigation.navigate(pantalla, {forDate: forDate}); 
          }}>
            <View style={styles.hookedStyles}>
              <View style={{width:'92%', 'height': '100%', alignItems: 'flex-end',justifyContent: 'center', }}> 
                <Text style={{color: 'white', textAlignVertical: 'center'}}>{gs['continuar'][lang]}</Text>
              </View>
              <View style={{width:'8%', 'height': '100%',  alignItems: 'flex-end',justifyContent: 'center',  }}>
                <Image source={require('../../assets/continuar2.png')}  style={styles.buttonImage} />
              </View>
            </View>
            {/* {comfirmarDetonante} */}
          </TouchableOpacity>


          </View>
      </FooterView>

      <EmergencyView>
          <Emergency/>
        </EmergencyView>
    </View>
  );
}


export default Detonante;

const styles = StyleSheet.create({
    titleText: {
        color: "#4eb5a3",
        fontSize: normalize(23),
    },
    defText: {
        color: colors.mintGreen,
        fontSize: normalize(15)
    },
    titleText: {
        color: "#4eb5a3",
        fontSize: normalize(20),
        fontWeight: '600',
    },
    buttonView: {
        backgroundColor:colors.purple,
        height: dimensions.buttonHeight/4,
        borderRadius: 8,
        marginTop: dimensions.separator,
    },
        buttonsText: {
          color: 'white',
          fontSize: normalize(13),
          top: dimensions.buttonHeight/16,
          left: dimensions.separator,
        },
        outerCircle: {
          color: colors.purple,
          borderRadius: 30,
          borderColor: 'white',
          width: dimensions.bodyWidth * 0.1,
          height: (dimensions.buttonHeight/4) * 0.8,
          borderWidth: 2,
          position: 'absolute',
          top: (dimensions.buttonHeight/4) * 0.1,
          left: dimensions.bodyWidth * 0.87
        },
        innerCircle: {
          borderRadius: 30,
          borderColor: 'white',
          width: dimensions.bodyWidth * 0.076,
          height: (dimensions.buttonHeight/4) * 0.61,
          borderWidth: 2,
          position: 'absolute',
          top: (dimensions.buttonHeight/4) * 0.2,
          left: (dimensions.bodyWidth * 0.87)+4.35,
          zIndex: 1,
        },
        hookedStyles :{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          direction: 'inherit',
          flexWrap: 'nowrap',
          height: '100%'
        
        },
        buttonImage :{
          width: dimensions.bodyWidth * 0.024,
          height: dimensions.footerHeight * 0.14,
          position: 'absolute'
        }
});

