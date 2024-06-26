import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, PixelRatio, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors, dimensions } from '../../components/constants';

import FiveGrid from '../../components/FiveGrid';
import FooEmergencyther from '../../components/Emergency';
import Encabezado from '../../components/Encabezado';
import HeaderView from '../../components/HeaderView'
import EmergencyView from '../../components/EmergencyView';
import Emergency from '../../components/Emergency';
import { normalize } from '../../components/FondNormilize';
import BodyView from '../../components/BodyView';
import TimeSince from '../../components/TimeSince';
import FooterView from '../../components/FooterView';
import BackLink from '../../components/BackLink';
import BackLinkWithDate from '../../components/BackLinkWithDate';
import { gs } from '../../components/RioGlobalStrings';
import { useDispatch, useSelector } from 'react-redux';
import BotonConfig from '../../components/BotonConfig';
import { addEmocionData } from '../../redux/slices/counterSlice';
//import { useDispatch, useSelector } from 'react-redux';

const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width

function Felicidad({route}) {
  const dispatch = useDispatch();
  const { forDate } = route.params;
  const navigation = useNavigation();
  const lang = useSelector(state => state.counter.language);
  
  dispatch(addEmocionData({"emo" : "felicidad", "fec": forDate})); 


  const Colors = [colors.deepPurple,colors.mintGreen,colors.pink,colors.blue,colors.purple]
  const title = [gs['diario'][lang],gs['gratitud'][lang],gs['dibujar'][lang],gs['musica'][lang],gs['psicoeduacion'][lang]]
  const functions = [
    () => navigation.navigate('ActividadEnProgreso',{pantalla: 'Felicidad',
                                                     img: <Image source={require('../../assets/animaciones/DIARIO.gif')} resizeMode='contain' style={[styles.buttonImage,{top:0,width: dimensions.bodyWidth *0.5, height:dimensions.bodyHeight*0.34}]} />,
                                                     texto:gs['diarioCont'][lang],
                                                     forDate: forDate,
                                                     titulo: title[0],
                                                     continuacionExtra : 'Diary'
                                                    }),
    () => navigation.navigate('Gratitud',{forDate: forDate}),
    // () => navigation.navigate('ActividadEnProgreso',{pantalla: 'Felicidad',
    //                                                  img: <Image source={require('../../assets/meditacion2.png')} resizeMode='contain' style={[styles.buttonImage,{top:0,width: dimensions.bodyWidth *0.5, height:dimensions.bodyHeight*0.34}]} />,
    //                                                  texto: 'Conecta con tu espiritualidad de la manera que sea major para ti. Estos momentos pueden abrir un espacio para conectar contigo y con las metas que identificaste.',
    //                                                  forDate: forDate,
    //                                                  titulo: title[1]}),
    () => navigation.navigate('ActividadEnProgreso',{pantalla: 'Felicidad',
                                                     img: <Image source={require('../../assets/animaciones/DIBUJAR.gif')} resizeMode='contain' style={[styles.buttonImage,{top:0,width: dimensions.bodyWidth *0.5, height:dimensions.bodyHeight*0.34}]} />,
                                                     texto:gs['dibujarCont'][lang],
                                                     forDate: forDate,
                                                     titulo: title[2],
                                                     continuacionExtra :null}),
    () => navigation.navigate('ActividadEnProgreso',{pantalla: 'Felicidad',
                                                     img: <Image source={require('../../assets/animaciones/SONIDOS.gif')} resizeMode='contain' style={[styles.buttonImage,{top:0,width: dimensions.bodyWidth *0.5, height:dimensions.bodyHeight*0.34}]} />,
                                                     texto:gs['musicaCont'][lang],
                                                     forDate: forDate,
                                                     titulo: title[3]}),
    () => navigation.navigate('Psicoeducacion',{pantalla: 'Felicidad',
                                                     img: <Image source={require('../../assets/infomacion2.png')} resizeMode='contain' style={[styles.buttonImage,{top:0,width: dimensions.bodyWidth *0.5, height:dimensions.bodyHeight*0.34}]} />,
                                                     texto:gs['psicoeducacionCont'][lang],
                                                     forDate: forDate,
                                                     titulo: title[4],
                                                     continuacionExtra :null}),
    () => navigation.navigate('Felicidad', {forDate: forDate}),
  ]

  const images = [
    require('../../assets/diario2.png'),
    // <Image source={require('../../assets/diario2.png')} resizeMode='contain' style={[styles.buttonImage, {alignSelf: 'flex-start', left: dimensions.buttonHeight/5}]} />,
    <Image source={require('../../assets/comunidad2.png')} resizeMode='contain' style={styles.buttonImage} />,
    <Image source={require('../../assets/dibujo2.png')} resizeMode='contain' style={styles.buttonImage} />,
    <Image source={require('../../assets/musica2.png')} resizeMode='contain' style={styles.buttonImage} />,
    <Image source={require('../../assets/infomacion2.png')} resizeMode='contain' style={styles.buttonImage} />
  ]

  return (
    <View>
      <BotonConfig pantalla = 'MenuPrincipal' Back={() => navigation.navigate('Felicidad', {forDate: forDate})}/>
      <HeaderView headerButtons = 'yes'>
        {/* <Encabezado/> */}

        <TimeSince  />
        </HeaderView>

      {/* <View style={{zIndex:3, position: 'absolute'}}> */}
      <BodyView>
        <FiveGrid colors={Colors} title={title} functions={functions} images={images}/>
        </BodyView>
      {/* </View> */}

      <FooterView>
          {/* <View style={{width:'50%', position:'absolute',marginTop: dimensions.separator}}>
          <BackLinkWithDate labelBack={"Detonantes"} gotoScreen={'Detonantes'} theDate={forDate}></BackLinkWithDate>
          </View>          */}
           <View style={{top: dimensions.footerHeight*0.1}}>
            <Text style={styles.titleText}>{gs['Felicidad'][lang]}</Text>
          </View>

          <TouchableOpacity  style={{height:'100%'}}  onPress={() => navigation.navigate('Detonante',{pantalla: 'Felicidad', forDate: forDate, Color : colors.pink})}>
            <View style={styles.hookedStyles}>
              <View style={{width:'8%', 'height': '100%',  alignItems: 'flex-start',justifyContent: 'center', top: dimensions.footerHeight*-0.2 }}>
                <Image source={require('../../assets/back.png')}  style={styles.buttonsImage} />
              </View>
              <View style={{width:'92%', 'height': '100%', alignItems: 'flex-start',justifyContent: 'center', top: dimensions.footerHeight*-0.2, left:dimensions.bodyWidth*-0.03 }}> 
                <Text style={{color: 'white', textAlignVertical: 'center'}}>{gs['volver'][lang]}</Text>
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

export default Felicidad;

const styles = StyleSheet.create({
  button:{
    borderRadius:5,
  },
  buttonText:{
    color:'white',
    fontSize: normalize(13),
    // top: ScreenHeight * 0.15,
    // left: ScreenWidth * 0.05
  },
  buttonImage :{
    width: ScreenWidth * 0.25,
    height: ScreenHeight * 0.15,
    // top: ScreenHeight * 0.01,
    // left: ScreenWidth * 0.08
    // justifyContent: 'center',
    // alignContent: 'center',
    alignSelf: 'center',
    top: dimensions.buttonHeight /10

  },
  titleText: {
    color: "#4eb5a3",
    fontSize: normalize(20),
    fontWeight: '600',
    width: dimensions.bodyWidth * 0.7
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
