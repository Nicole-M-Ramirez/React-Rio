import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, TextInput, Image, ScrollView, Keyboard , TouchableWithoutFeedback} from 'react-native';
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
import BotonConfig from '../../components/BotonConfig';

const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width

import { useDispatch, useSelector } from 'react-redux';
import { updateMood, decreaseByOne } from '../../redux/slices/counterSlice';
import { addDetonanteData } from '../../redux/slices/counterSlice';

let det = [];

function Detonante({route}) {
  const lang = useSelector(state => state.counter.language);
  const [detonanteCreado, setDetonanteCreado] = useState("")
  const [comfirmarDetonante, setComfirmarDetonante] = useState(<View></View>)
  const [subirView, setSubirView] = useState(0)
  const { pantalla } = route.params;
  const {Color} = route.params;

  const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback  onPress={Keyboard.dismiss} accessible={false}>
      {children}
    </TouchableWithoutFeedback>
  );
  

  const { forDate } = route.params;
  console.log("Doing detonantes for " + pantalla + "  for " + forDate);

  const dispatch = useDispatch();
  const [pareja, setPareja] = useState(Color);
  const [familia, setFamilia] = useState(Color);
  const [amistades, setAmistades] = useState(Color);
  const [perdida, setPerdida] = useState(Color);
  const [estudios, setEstudios] = useState(Color);
  const [trabajo, setTrabajo] = useState(Color);

  const [detonanteFinal, setDetonanteFinal] = useState('');

  const [detonantes, setDetonantes] = useState({'pareja': false, 'familia': false, 'amistades': false, 'perdida': false, 'estudios': false});

  const navigation = useNavigation();

  console.log("Route Params: " + JSON.stringify(route.params));

  function nav () {
    navigation.navigate(pantalla)
  }

  function toggleButton (state, setFunc) {
    if(state === 'white'){
      setFunc(Color)
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
      else if (key=='trabajo')
        setDetonantes(prev => ({...prev, trabajo: !prev[key]}))
  }

  function paraRecolectar(key) {

  }




  return (
    
    <View>
      <View style={{top: dimensions.bodyHeight*subirView}}>
      <BotonConfig pantalla = 'MenuPrincipal' Back={() => navigation.navigate('Detonante', { forDate: forDate, pantalla:pantalla, Color:Color })}/>
      <HeaderView>
      <TimeSince/>
      </HeaderView>

      
      <BodyView>
        
        <Text style={styles.titleText}>{gs['DetTitulo'][lang]}</Text>
        <Text> </Text>
        <Text style={styles.defText}>{gs['DetContenido'][lang]}</Text>
        <Text> </Text>
        <View style={{borderBottomColor: colors.mintGreen, width: dimensions.bodyWidth, borderBottomWidth:3}}/>

        <View style={styles.scrollView}>
        <ScrollView>

        <View style={[styles.buttonView,{backgroundColor:Color}]}>
            <Text style={styles.buttonsText}>{gs['pareja'][lang]}</Text>
            <TouchableOpacity style={[styles.innerCircle, {backgroundColor: detonantes['pareja'] ? 'white':Color}]} 
            onPress={()=>{toggleButtonDict ('pareja'); setDetonanteFinal('pareja')}}/>
            <View style={styles.outerCircle}/>
        </View>

        <View style={[styles.buttonView,{backgroundColor:Color}]}>
            <Text style={styles.buttonsText}>{gs['familia'][lang]}</Text>
            <TouchableOpacity style={[styles.innerCircle, {backgroundColor: detonantes['familia'] ? 'white':Color}]} 
            onPress={()=>{toggleButtonDict ('familia'); setDetonanteFinal('familia')}}/>
            <View style={styles.outerCircle}></View>
        </View>

        <View style={[styles.buttonView,{backgroundColor:Color}]}>
            <Text style={styles.buttonsText}>{gs['amistades'][lang]}</Text>
            <TouchableOpacity style={[styles.innerCircle, {backgroundColor: detonantes['amistades'] ? 'white':Color}]} 
            onPress={()=>{toggleButtonDict ('amistades'); setDetonanteFinal('amistades')}}/>            
            <View style={styles.outerCircle}></View>
        </View>

        <View style={[styles.buttonView,{backgroundColor:Color}]}>
            <Text style={styles.buttonsText}>{gs['perdida'][lang]}</Text>
            <TouchableOpacity style={[styles.innerCircle, {backgroundColor: detonantes['perdida'] ? 'white':Color}]} 
            onPress={()=>{toggleButtonDict ('perdida'); setDetonanteFinal('perdida')}}/>
            <View style={styles.outerCircle}></View>
        </View>

        <View style={[styles.buttonView,{backgroundColor:Color}]}>
            <Text style={styles.buttonsText}>{gs['estUniversitarios'][lang]}</Text>
            <TouchableOpacity style={[styles.innerCircle, {backgroundColor: detonantes['estudios'] ? 'white':Color}]} 
            onPress={()=>{toggleButtonDict ('estudios'); setDetonanteFinal('estudios') }}/>
            <View style={styles.outerCircle}></View>
        </View>

        <View style={[styles.buttonView,{backgroundColor:Color}]}>
            <Text style={styles.buttonsText}>{gs['trabajo'][lang]}</Text>
            <TouchableOpacity style={[styles.innerCircle, {backgroundColor: detonantes['trabajo'] ? 'white':Color}]} 
            onPress={()=>{toggleButtonDict ('trabajo'); setDetonanteFinal('trabajo')}}/>
            <View style={styles.outerCircle}></View>
        </View>

        <View style={[styles.buttonView,{backgroundColor:Color,height: dimensions.buttonHeight/2,}]}>
            <Text style={styles.buttonsText}>{gs['otraOp'][lang]}</Text>
            <TextInput
              style={{marginLeft:dimensions.separator,top:(dimensions.buttonHeight/2)*0.12, color:'white'}}
              onChangeText={setDetonanteCreado}
              value={detonanteCreado}
              enablesReturnKeyAutomatically={true}
              onFocus={()=>{setSubirView(-0.5)}}
              //onSelectionChange={()=>{setSubirView(0)}}
              onPressOute={()=>{setSubirView(0); setDetonanteFinal('otro')}}
            />
        </View>

        </ScrollView>
        </View>
      </BodyView>
      </View>

      

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

            dispatch(addDetonanteData({"det" : detonanteFinal, "fec": forDate}))
            //paraRecolectar('Pareja');

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
        },
        scrollView: {
          top: dimensions.bodyHeight*0,
          height: dimensions.bodyHeight*0.6,
          //backgroundColor: 'grey',
        },
});

