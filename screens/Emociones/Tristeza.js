// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, TouchableOpacity, Dimensions, PixelRatio, Image } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { colors, dimensions } from '../../components/constants';

// import FiveGrid from '../../components/FiveGrid';
// import FooEmergencyther from '../../components/Emergency';
// import Encabezado from '../../components/Encabezado';
// import HeaderView from '../../components/HeaderView'
// import EmergencyView from '../../components/EmergencyView';
// import Emergency from '../../components/Emergency';
// import { normalize } from '../../components/FondNormilize';
// import BodyView from '../../components/BodyView';
// import TimeSince from '../../components/TimeSince';
// import FooterView from '../../components/FooterView';
// import BackLinkWithDate from '../../components/BackLinkWithDate';

// const ScreenHeight = Dimensions.get("window").height
// const ScreenWidth = Dimensions.get("window").width

// function Tristeza({route}) {
//   const { forDate } = route.params;
//   const navigation = useNavigation();

//   const Colors = [colors.deepPurple,colors.mintGreen,colors.pink,colors.blue,colors.backgroudDarkBlue]
//   const title = ['Diario', 'Meditacion', 'Dibujar', 'Musica','']
//   const functions = [
//     () => navigation.navigate('ActividadEnProgreso',{pantalla: 'Tristeza',
//                                                      img: <Image source={require('../../assets/diario2.png')} resizeMode='contain' style={[styles.buttonImage,{width: dimensions.bodyWidth *0.5, height:dimensions.bodyHeight*0.34}]} />,
//                                                      texto:'Escribre tus pensamientos en palabras e incluye todo lo que estas sintiendo al momento. No te detengas; todo lo que sientes es valido y merece ser expresado.',
//                                                      color: colors.deepPurple,
//                                                      forDate: forDate
//                                                     }),
//     () => navigation.navigate('ActividadEnProgreso',{pantalla: 'Tristeza',
//                                                      img: <Image source={require('../../assets/meditacion2.png')} resizeMode='contain' style={styles.buttonImage} />,
//                                                      texto: 'Conecta con tu espiritualidad de la manera que sea major para ti. Estos momentos pueden abrir un espacio para conectar contigo y con las metas que identificaste.',
//                                                      color: colors.mintGreen, 
//                                                      forDate: forDate}),
//     () => navigation.navigate('ActividadEnProgreso',{pantalla: 'Tristeza',
//                                                      img: <Image source={require('../../assets/dibujo2.png')} resizeMode='contain' style={[styles.buttonImage,{width: dimensions.bodyWidth *0.5, height:dimensions.bodyHeight*0.34}]} />,
//                                                      texto:'Desde garabatos hasta obras de arte, intenta plasmar lo que sientes. El arte puede ser un medio accesible para comenzar a explorar y reconocer tus emociones, particularmente para trabajar con sentimientos de preocupacion o ansiedad.',
//                                                      color: colors.pink, 
//                                                      forDate: forDate}),
//     () => navigation.navigate('ActividadEnProgreso',{pantalla: 'Tristeza',
//                                                      img: <Image source={require('../../assets/musica2.png')} resizeMode='contain' style={[styles.buttonImage,{width: dimensions.bodyWidth *0.5, height:dimensions.bodyHeight*0.34}]} />,
//                                                      texto:'La musica es un buen medio para regular las emociones. Busca tu musica favorita o crea tu propia lista de musica, organizala en el orden que desees y ponle un nombre que te inspire. Escuchala y disfrutala.',
//                                                      color: colors.blue, 
//                                                      forDate: forDate}),
//     null
//   ]

//   const images = [
//     <Image source={require('../../assets/diario2.png')} resizeMode='contain' style={[styles.buttonImage, {alignSelf: 'flex-start', left: dimensions.buttonHeight/5}]} />,
//     <Image source={require('../../assets/meditacion2.png')} resizeMode='contain' style={styles.buttonImage} />,
//     <Image source={require('../../assets/dibujo2.png')} resizeMode='contain' style={styles.buttonImage} />,
//     <Image source={require('../../assets/musica2.png')} resizeMode='contain' style={styles.buttonImage} />,
//     null
//   ]

//   return (
//     <View>
//       <HeaderView headerButtons = 'yes'>
//         {/* <Encabezado/> */}

//         <TimeSince  />
//       </HeaderView>

//       {/* <View style={{zIndex:3, position: 'absolute'}}> */}
//       <BodyView>
//         <FiveGrid colors={Colors} title={title} functions={functions} images={images}/>
//         </BodyView>
//       {/* </View> */}

//       <FooterView>
//           <View style={{width:'50%', position:'absolute',marginTop: dimensions.separator}}>
//           <BackLinkWithDate labelBack={"Regresar"} gotoScreen={'SelectorEmocion'} theDate={forDate}></BackLinkWithDate>
//           </View>         
//       </FooterView>

//       <EmergencyView>
//           <Emergency/>
//       </EmergencyView>
//     </View>
//   );
// }

// export default Tristeza;

// const styles = StyleSheet.create({
//   button:{
//     borderRadius:5,
//   },
//   buttonText:{
//     color:'white',
//     fontSize: normalize(11),
//     // top: ScreenHeight * 0.15,
//     // left: ScreenWidth * 0.05
//   },
//   buttonImage :{
//     width: ScreenWidth * 0.25,
//     height: ScreenHeight * 0.15,
//     // top: ScreenHeight * 0.01,
//     // left: ScreenWidth * 0.08
//     // justifyContent: 'center',
//     // alignContent: 'center',
//     alignSelf: 'center',
//     top: dimensions.buttonHeight /10

//   },
//   titleText: {
//     color: "#4eb5a3",
//     fontSize: normalize(25),
//     fontWeight: '600',
//     width: dimensions.bodyWidth * 0.7
//     },
// });

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, PixelRatio,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../components/constants';

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
import BackLinkWithDate from '../../components/BackLinkWithDate';
import { gs } from '../../components/RioGlobalStrings';
import BotonConfig from '../../components/BotonConfig';
import { addEmocionData } from '../../redux/slices/counterSlice';
import { useDispatch } from 'react-redux';

// const ScreenHeight = Dimensions.get("window").height
// const ScreenWidth = Dimensions.get("window").width

import { useSelector } from 'react-redux';

const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width

function Tristeza({route}) {
  const dispatch = useDispatch();
  // dispatch(addEmocionData({"emo" : "tristeza", "fec": forDate})); 

  const { forDate } = route.params;
  const lang = useSelector(state => state.counter.language);
  dispatch(addEmocionData({"emo" : "tristeza", "fec": forDate})); 


  const navigation = useNavigation();

  const Colors = [colors.blue, colors.deepPurple, colors.mintGreen, colors.pink, colors.greyBlue, colors.purple]
  const title = [gs['descanso'][lang],gs['diario'][lang],gs['meditacion'][lang],gs['dibujar'][lang],gs['musica'][lang],gs['aceptacion'][lang]]
  const functions = [
    () => navigation.navigate('ActividadEnProgreso',{pantalla: 'Tristeza',
                                                     img: <Image source={require('../../assets/animaciones/DESCANSO.gif')} resizeMode='contain' style={[styles.buttonImage,{top:0,width: dimensions.bodyWidth *0.5, height:dimensions.bodyHeight*0.34}]} />,
                                                     texto:gs['descansoCont'][lang],
                                                     forDate: forDate,
                                                     titulo: title[0],
                                                     nombre: "Descanso"
                                                    }),
    () => navigation.navigate('ActividadEnProgreso',{pantalla: 'Tristeza',
                                                     img: <Image source={require('../../assets/animaciones/DIARIO.gif')} resizeMode='contain' style={[styles.buttonImage,{top:0,width: dimensions.bodyWidth *0.5, height:dimensions.bodyHeight*0.34}]} />,
                                                     texto:gs['diarioCont'][lang],
                                                     forDate: forDate,
                                                     nombre: "Diario",
                                                     titulo: title[1]}),
    () => navigation.navigate('MeditacionTristeza', {pantalla:'Tristeza', forDate: forDate}),
    // () => navigation.navigate('Meditacion',{pantalla: 'Tristeza',
    //                                                  img: <Image source={require('../../assets/meditacion2.png')} resizeMode='contain' style={[styles.buttonImage,{top:0,width: dimensions.bodyWidth *0.5, height:dimensions.bodyHeight*0.34}]} />,
    //                                                  texto:gs['meditacion'][lang],
    //                                                  forDate: forDate,
    //                                                  titulo: title[2]}),
    () => navigation.navigate('ActividadEnProgreso',{pantalla: 'Tristeza',
                                                     img: <Image source={require('../../assets/animaciones/DIBUJAR.gif')} resizeMode='contain' style={[styles.buttonImage,{top:0,width: dimensions.bodyWidth *0.5, height:dimensions.bodyHeight*0.34}]} />,
                                                     texto:gs['dibujarCont'][lang],
                                                     forDate: forDate,
                                                     nombre: "Dibujo",
                                                     titulo: title[3]}),
    () => navigation.navigate('ActividadEnProgreso',{pantalla: 'Tristeza',
                                                     img: <Image source={require('../../assets/animaciones/SONIDOS.gif')} resizeMode='contain' style={[styles.buttonImage,{top:0,width: dimensions.bodyWidth *0.5, height:dimensions.bodyHeight*0.34}]} />,
                                                     texto:gs['musicaCont'][lang],
                                                     forDate: forDate,
                                                     nombre: "Musica",
                                                     titulo: title[4]}),
    () => navigation.navigate('ActividadEnProgreso',{pantalla: 'Tristeza',
                                                     img: <Image source={require('../../assets/animaciones/ACEPTACION.gif')} resizeMode='contain' style={[styles.buttonImage,{top:0,width: dimensions.bodyWidth *0.6, height:dimensions.bodyHeight*0.45}]} />,
                                                     texto:gs['aceptacionCont'][lang],
                                                     forDate: forDate,
                                                     nombre: "Aceptacion",
                                                     titulo: title[5]}),
  ]
  const images = [
    <Image source={require('../../assets/descanso2.png')} resizeMode='contain' style={styles.buttonImage} />,
    <Image source={require('../../assets/diario2.png')} resizeMode='contain' style={styles.buttonImage} />,
    <Image source={require('../../assets/meditacion2.png')} resizeMode='contain' style={styles.buttonImage} />,
    <Image source={require('../../assets/dibujo2.png')} resizeMode='contain' style={styles.buttonImage} />,
    <Image source={require('../../assets/musica2.png')} resizeMode='contain' style={styles.buttonImage} />,
    <Image source={require('../../assets/aceptacion.png')} resizeMode='contain' style={styles.buttonImage} />,
  ]


  return (
    <View>
      <BotonConfig pantalla = 'MenuPrincipal' Back={() => navigation.navigate('Tristeza', {forDate: forDate})}/>
      <HeaderView>
      <TimeSince/>
      </HeaderView>

      <BodyView>
        <SixGrid colors={Colors} title={title} functions={functions} images={images}/>
      </BodyView>

      {/* <FooterView>
        <View style={{height:'100%',justifyContent: 'center' , alignItems: 'flex-start'}}>
          <Text style={styles.titleText}>Estado de ánimo</Text>
        </View>
      </FooterView> */}

      <FooterView>
          <View style={{top: dimensions.footerHeight*0.1}}>
            <Text style={styles.titleText}>{gs['Tristeza'][lang]}</Text>
          </View>
          {/* <View style={{width:'50%', position:'absolute',marginTop: dimensions.separator}}>
            <BackLinkWithDate labelBack={"Regresar"} gotoScreen={'SelectorEmocion'} theDate={forDate}></BackLinkWithDate>
          </View>          */}
          <TouchableOpacity  style={{height:'100%'}}  onPress={() => navigation.navigate('Detonante',{pantalla: 'Trsteza', forDate: forDate,Color : colors.blue})}>
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

/*
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
*/

export default Tristeza;

const styles = StyleSheet.create({
  titleText: {
    color: "#4eb5a3",
    fontSize: normalize(20),
    fontWeight: '600',
    // top: ScreenHeight * 0.83,
    // left: ScreenWidth * 0.08,
  },
  buttonImage :{
    width: ScreenWidth * 0.23,
    height: ScreenHeight * 0.13,
    alignSelf: 'center',
    top: dimensions.buttonHeight /7
  },
  button:{
    borderRadius:5,
  },
  // buttonText:{
  //   color:'white',
  //   fontSize: normalize(11),
  //   // top: ScreenHeight * 0.15,
  //   // left: ScreenWidth * 0.05
  // },
  // buttonImage :{
  //   width: ScreenWidth * 0.25,
  //   height: ScreenHeight * 0.15,
  //   // top: ScreenHeight * 0.01,
  //   // left: ScreenWidth * 0.08
  //   // justifyContent: 'center',
  //   // alignContent: 'center',
  //   alignSelf: 'center',
  //   top: dimensions.buttonHeight /10

  // },
  // titleText: {
  //   color: "#4eb5a3",
  //   fontSize: normalize(25),
  //   fontWeight: '600',
  //   width: dimensions.bodyWidth * 0.7
  //   },

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