import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors, dimensions } from '../../components/constants';
import { normalize } from '../../components/FondNormilize';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import BotonConfig from '../../components/BotonConfig';

import HeaderView from '../../components/HeaderView';
import BodyView from '../../components/BodyView';
import EmergencyView from '../../components/EmergencyView';
import FooterView from '../../components/FooterView';
import Emergency from '../../components/Emergency';
import TimeSince from '../../components/TimeSince';
import BackLink from '../../components/BackLink';
import { gs } from '../../components/RioGlobalStrings';

function Graficas () {
  const navigation = useNavigation();
  const lang = useSelector(state => state.counter.language);

  const [circle1, setcircle1] = useState(colors.mintGreen);
  const [circle2, setcircle2] = useState(colors.mintGreen);
  const [circle3, setcircle3] = useState(colors.mintGreen);
  const [circle4, setcircle4] = useState(colors.mintGreen);
  const [dropTipo, setDropTipo] = useState(false);
  const [dropTiempo, setDropTiempo] = useState(false);
  const [tipo1, setTipo1] = useState(colors.mintGreen);
  const [tipo2, setTipo2] = useState(colors.mintGreen);
  const [tipo3, setTipo3] = useState(colors.mintGreen);
  const [tiempo1, setTiempo1] = useState(colors.mintGreen);
  const [tiempo2, setTiempo2] = useState(colors.mintGreen);

  //const DetonanteData = useSelector(state => state.counter.password);
  const detData = useSelector(state => state.counter.detData);
  const emoData = useSelector(state => state.counter.emoData);
  const autoLecionData = useSelector(state => state.counter.autoLecionData);
  const actData = useSelector(state => state.counter.actData);

  const [graficaData, setGraficaData] = useState('');
  const [graficaTipo, setGraficaTipo] = useState('');
  const [graficaTiempo, setGraficaTiempo] = useState();

  function circuloTipo1 () {
    if(tipo1 === 'white'){
      setTipo1(colors.mintGreen)
      setGraficaTipo('')
    }
    else{
      setTipo1('white')
      setTipo2(colors.mintGreen)
      setTipo3(colors.mintGreen)
      setGraficaTipo('barra')
    }
  }

  function circuloTipo2 () {
    if(tipo2 === 'white'){
      setTipo2(colors.mintGreen)
      setGraficaTipo('')
    }
    else{
      setTipo2('white')
      setTipo1(colors.mintGreen)
      setTipo3(colors.mintGreen)
      setGraficaTipo('pie')
    }
  }

  function circuloTipo3 () {
    if(tipo3 === 'white'){
      setTipo3(colors.mintGreen)
      setGraficaTipo('')
    }
    else{
      setTipo3('white')
      setTipo1(colors.mintGreen)
      setTipo2(colors.mintGreen)
      setGraficaTipo('linea')
    }
  }

  function firstCircle () {
    if(circle1 === 'white'){
      setcircle1(colors.mintGreen)
      setGraficaData('')
    }
    else{
      setcircle1('white')
      setcircle2(colors.mintGreen)
      setcircle3(colors.mintGreen)
      setcircle4(colors.mintGreen)
      setGraficaData('detonante')
    }
  }

  function secondCircle () {
    if(circle2 === 'white'){
      setcircle2(colors.mintGreen)
      setGraficaData('')
    }
    else{
      setcircle2('white')
      setcircle1(colors.mintGreen)
      setcircle3(colors.mintGreen)
      setcircle4(colors.mintGreen)
      setGraficaData('emocion')
    }
  }

  function thirdCircle () {
    if(circle3 === 'white'){
      setcircle3(colors.mintGreen)
      setGraficaData('')
    }
    else{
      setcircle3('white')
      setcircle2(colors.mintGreen)
      setcircle1(colors.mintGreen)
      setcircle4(colors.mintGreen)
      setGraficaData('autolesion')
    }
  }

  function forthCircle () {
    if(circle4 === 'white'){
      setcircle4(colors.mintGreen)
      setGraficaData('')
    }
    else{
      setcircle4('white')
      setcircle2(colors.mintGreen)
      setcircle3(colors.mintGreen)
      setcircle1(colors.mintGreen)
      setGraficaData('actividad')
    }
  }

  function circuloTiempo1 () {
    if(tiempo1 === 'white'){
      setTiempo1(colors.mintGreen)
      setGraficaTiempo('')
    }
    else{
      setTiempo1('white')
      setTiempo2(colors.mintGreen)
      setGraficaTiempo(15)
    }
  }

  function circuloTiempo2 () {
    if(tiempo2 === 'white'){
      setTiempo2(colors.mintGreen)
      setGraficaTiempo('')
    }
    else{
      setTiempo2('white')
      setTiempo1(colors.mintGreen)
      setGraficaTiempo(30)
    }
  }

  function verDets () {
    // const detData = useSelector(state => state.counter.detData);
    console.log("Data de detonante: " + JSON.stringify(detData))
    console.log("Data de emociones: " + JSON.stringify(emoData))
    console.log("Data de autolecion: " + JSON.stringify(autoLecionData))
    console.log("Data de actividades: " + JSON.stringify(actData))
  }

  function crearGraf () {
    console.log(graficaData)
    console.log(graficaTipo)
    console.log(graficaTiempo)

    if(graficaData === '' && graficaTipo === '' && graficaTiempo === '' ){
      console.log('no suficiente info')
    }
    else{
      // console.log(graficaData)
      // console.log(graficaTipo)
      // console.log(graficaTiempo)
      if(graficaTipo === 'barra'){
        if(graficaData === 'detonante'){
          navigation.navigate('BarrasDetonante', {tiempo: graficaTiempo, Data : detData })
        }

        if(graficaData === 'emocion'){
          navigation.navigate('BarrasEmociones', {tiempo: graficaTiempo, Data : emoData })
        }

        if(graficaData === 'actividad'){
          navigation.navigate('BarrasActividades', {tiempo: graficaTiempo, Data : actData })
        }

      }
      else if(graficaTipo === 'pie') {
        if(graficaData === 'detonante'){
          navigation.navigate('PieDetonantes', {tiempo: graficaTiempo, Data : detData })
        }
        if(graficaData === 'emocion'){
          navigation.navigate('PieEmociones', {tiempo: graficaTiempo, Data : emoData })
        }

        if(graficaData === 'actividad'){
          navigation.navigate('PieActividades', {tiempo: graficaTiempo, Data : actData })
        }
      }
      else if(graficaTipo === 'linea') {
        navigation.navigate('LineasAutoLesion', {tiempo: graficaTiempo, Data : autoLecionData })
      }
      else{
        console.log('aun en proceso')
      }
    }
  }

  function verOpcionesTipo () {

    if (graficaData === 'autolesion'){
      return (
        <View>
          <View style={[styles.buttonView,{backgroundColor:colors.mintGreen}]}>
            <Text style={styles.buttonsText}>{gs['tipo3'][lang]}</Text>
            <TouchableOpacity style={[styles.innerCircle, {backgroundColor: tipo3,  left:dimensions.bodyWidth*0.894}]} onPress={()=>{circuloTipo3()}}/>
            <View style={[styles.outerCircle, {left:dimensions.bodyWidth*0.88}]}/>
          </View>
        </View>
      )
    }
    else{
      return(
        <View>
        <View style={[styles.buttonView,{backgroundColor:colors.mintGreen}]}>
          <Text style={styles.buttonsText}>{gs['tipo1'][lang]}</Text>
          <TouchableOpacity style={[styles.innerCircle, {backgroundColor: tipo1,  left:dimensions.bodyWidth*0.894}]} onPress={()=>{circuloTipo1()}}/>
          <View style={[styles.outerCircle, {left:dimensions.bodyWidth*0.88}]}/>
        </View>

        <View style={[styles.buttonView,{backgroundColor:colors.mintGreen}]}>
          <Text style={styles.buttonsText}>{gs['tipo2'][lang]}</Text>
          <TouchableOpacity style={[styles.innerCircle, {backgroundColor: tipo2,  left:dimensions.bodyWidth*0.894}]} onPress={()=>{circuloTipo2()}}/>
          <View style={[styles.outerCircle, {left:dimensions.bodyWidth*0.88}]}/>
        </View>
      </View>
      );
    }
  }

  return(
    <View>
      <BotonConfig pantalla = 'Graficas' Back={()=>{navigation.navigate('Graficas')}}/>
      <HeaderView headerButtons = 'yes'>
        <TimeSince  />
      </HeaderView>

      <Image source={require('../../assets/graficas2.png')} resizeMode='contain' style={styles.titleImage} />

      <BodyView>
        <View style={styles.scrollView}>
          <ScrollView>

            

              <View style={[styles.buttonView,{backgroundColor:colors.mintGreen}]}>
                <Text style={styles.buttonsText}>{gs['detonantes'][lang]}</Text>
                <TouchableOpacity style={[styles.innerCircle, {backgroundColor: circle1}]} onPress={()=>{firstCircle()}}/>
                <View style={styles.outerCircle}/>
              </View>

              <View style={[styles.buttonView,{backgroundColor:colors.mintGreen}]}>
                <Text style={styles.buttonsText}>{gs['emociones'][lang]}</Text>
                <TouchableOpacity style={[styles.innerCircle, {backgroundColor: circle2}]} onPress={()=>{secondCircle()}}/>
                <View style={styles.outerCircle}/>
              </View>

              <View style={[styles.buttonView,{backgroundColor:colors.mintGreen}]}>
                <Text style={styles.buttonsText}>{gs['frecAutolecion'][lang]}</Text>
                <TouchableOpacity style={[styles.innerCircle, {backgroundColor: circle3}]} onPress={()=>{thirdCircle()}}/>
                <View style={styles.outerCircle}/>
              </View>

              <View style={[styles.buttonView,{backgroundColor:colors.mintGreen}]}>
                <Text style={styles.buttonsText}>{gs['frecActividades'][lang]}</Text>
                <TouchableOpacity style={[styles.innerCircle, {backgroundColor: circle4}]} onPress={()=>{forthCircle()}}/>
                <View style={styles.outerCircle}/>
              </View>

              {dropTipo === false ? 
                <TouchableOpacity style={[styles.buttonView,{backgroundColor:colors.mintGreen}]} onPress={()=>setDropTipo(true)}>
                  <Text style={[styles.buttonsText,{left:dimensions.bodyWidth*0.04}]}>{gs['escojerTipo'][lang]}</Text>
                  <Image source={require('../../assets/ingresar.png')} resizeMode='contain' style={styles.buttonImage} />
                </TouchableOpacity>
                :
                <>
                <TouchableOpacity style={[styles.buttonView,{backgroundColor:colors.mintGreen}]} onPress={()=>setDropTipo(false)}>
                    <Text style={[styles.buttonsText,{left:dimensions.bodyWidth*0.04}]}>{gs['escojerTipo'][lang]}</Text>
                    <Image source={require('../../assets/ingresarAbajo.png')} resizeMode='contain' style={styles.buttonImage} />
                  </TouchableOpacity>
                  {/* <TouchableOpacity style={[styles.buttonView,{backgroundColor:colors.mintGreen}]} onPress={()=>setDropTipo(false)}>
                    <Text style={[styles.buttonsText,{left:dimensions.bodyWidth*0.04}]}>{gs['escojerTipo'][lang]}</Text>
                    <Image source={require('../../assets/ingresarAbajo.png')} resizeMode='contain' style={styles.buttonImage} />
                  </TouchableOpacity>

                  <View style={[styles.buttonView,{backgroundColor:colors.mintGreen}]}>
                    <Text style={styles.buttonsText}>{gs['tipo1'][lang]}</Text>
                    <TouchableOpacity style={[styles.innerCircle, {backgroundColor: tipo1,  left:dimensions.bodyWidth*0.894}]} onPress={()=>{circuloTipo1()}}/>
                    <View style={[styles.outerCircle, {left:dimensions.bodyWidth*0.88}]}/>
                  </View>

                  <View style={[styles.buttonView,{backgroundColor:colors.mintGreen}]}>
                    <Text style={styles.buttonsText}>{gs['tipo2'][lang]}</Text>
                    <TouchableOpacity style={[styles.innerCircle, {backgroundColor: tipo2, left:dimensions.bodyWidth*0.894}]} onPress={()=>{circuloTipo2()}}/>
                    <View style={[styles.outerCircle, {left:dimensions.bodyWidth*0.88}]}/>
                  </View> */}
                  {verOpcionesTipo()}
                </>
              }

              {dropTiempo === false ? 
                <TouchableOpacity style={[styles.buttonView,{backgroundColor:colors.mintGreen}]} onPress={()=>setDropTiempo(true)}>
                  <Text style={[styles.buttonsText,{left:dimensions.bodyWidth*0.04}]}>{gs['escojerTiempo'][lang]}</Text>
                  <Image source={require('../../assets/ingresar.png')} resizeMode='contain' style={styles.buttonImage} />
                </TouchableOpacity>
                :
                <>
                  <TouchableOpacity style={[styles.buttonView,{backgroundColor:colors.mintGreen}]} onPress={()=>setDropTiempo(false)}>
                    <Text style={[styles.buttonsText,{left:dimensions.bodyWidth*0.04}]}>{gs['escojerTiempo'][lang]}</Text>
                    <Image source={require('../../assets/ingresarAbajo.png')} resizeMode='contain' style={styles.buttonImage} />
                  </TouchableOpacity>

                  <View style={[styles.buttonView,{backgroundColor:colors.mintGreen}]}>
                    <Text style={styles.buttonsText}>{gs['tiempo1'][lang]}</Text>
                    <TouchableOpacity style={[styles.innerCircle, {backgroundColor: tiempo1,  left:dimensions.bodyWidth*0.894}]} onPress={()=>{circuloTiempo1()}}/>
                    <View style={[styles.outerCircle, {left:dimensions.bodyWidth*0.88}]}/>
                  </View>

                  <View style={[styles.buttonView,{backgroundColor:colors.mintGreen}]}>
                    <Text style={styles.buttonsText}>{gs['tiempo2'][lang]}</Text>
                    <TouchableOpacity style={[styles.innerCircle, {backgroundColor: tiempo2, left:dimensions.bodyWidth*0.894}]} onPress={()=>{circuloTiempo2()}}/>
                    <View style={[styles.outerCircle, {left:dimensions.bodyWidth*0.88}]}/>
                  </View>
                </>
              }

              
            
          </ScrollView>
        </View>

      </BodyView>

      <FooterView>

        <View style={{width:'50%', position:'absolute',top: dimensions.footerHeight*-0.05}}>
          <BackLink labelBack={gs['volver'][lang]} gotoScreen={'MiEspacio'}></BackLink>
        </View>
        <View style={{height:'70%',justifyContent: 'center' , alignItems: 'flex-start', top:dimensions.footerHeight*0.3}}>
          <Text style={styles.titleText}>{gs['Graficas'][lang]}</Text>
        </View>

        <TouchableOpacity  style={{left:dimensions.bodyWidth*0.7,width:dimensions.bodyWidth*0.25,height:dimensions.footerHeight*0.5, top: dimensions.bodyHeight*-0.13}}  onPress={()=>{crearGraf()}}>
          <View style={styles.hookedStyles}>
            <View style={{width:'92%', 'height': dimensions.footerHeight*0.5, alignItems: 'flex-end',justifyContent: 'center', }}> 
              <Text style={{color: 'white', textAlignVertical: 'center'}}>{gs['crear'][lang]}</Text>
            </View>
            <View style={{width:'15%', 'height': dimensions.footerHeight*0.5,  alignItems: 'flex-end',justifyContent: 'center',  }}>
              <Image source={require('../../assets/continuar2.png')}  style={styles.buttonTitleImage} />
            </View>
          </View>
        </TouchableOpacity>

      </FooterView>

      <EmergencyView>
          <Emergency/>
      </EmergencyView>
    </View>
  )

}

export default Graficas;

const styles = StyleSheet.create({
      // titleText: {
      //     color: colors.mintGreen,
      //     fontSize: normalize(24),
      //     marginTop: dimensions.footerHeight*0.2,
      //     fontWeight: '400'
      // },
      titleText: {
        color: "#4eb5a3",
        fontSize: normalize(25),
        fontWeight: '600',
        //width: dimensions.bodyWidth * 0.75
        },
      titleImage :{
          top: dimensions.bodyHeight*0.26,
          left: dimensions.bodyWidth*0.5,
          width: dimensions.buttonWidth * 0.8,
          height: dimensions.buttonHeight *0.8,
          //margin: dimensions.separator,
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
        //width: ScreenWidth * 0.13,
        //height: ScreenHeight * 0.07,
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
          //marginLeft: dimensions.separator*2
      },
      scrollView: {
        //left: dimensions.leftMargin,
        top: dimensions.bodyHeight*0.3,
        height: dimensions.bodyHeight*0.65,
        width:dimensions.bodyWidth,
        //backgroundColor: 'grey',
      },
      buttonImage: {
        width: dimensions.buttonWidth/5,
        height: dimensions.buttonHeight/5,
        top: (dimensions.buttonHeight/3)*-0.32,
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
      buttonTitleImage :{
        width: dimensions.bodyWidth * 0.024,
        height: dimensions.footerHeight * 0.14,
        position: 'absolute'
      }
  });