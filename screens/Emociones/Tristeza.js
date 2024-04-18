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

const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width

function Tristeza({route}) {
  const { forDate } = route.params;


  const navigation = useNavigation();

  const Colors = [colors.blue, colors.deepPurple, colors.mintGreen, colors.pink, colors.greyBlue, colors.purple]
  const title = ['Descanso', 'Diario', 'Meditacion', 'Dibujar','Musica', 'Aceptación']
  const functions = [
    () => navigation.navigate('ActividadEnProgreso',{pantalla: 'Tristeza',
                                                     img: <Image source={require('../../assets/descanso2.png')} resizeMode='contain' style={[styles.buttonImage,{top:0,width: dimensions.bodyWidth *0.5, height:dimensions.bodyHeight*0.34}]} />,
                                                     texto:'Busca un espacio seguro donde puedas descansar y relajarte. En momentos donde nos sentimos tristes, es natural que nuestros patrones de sueño se vean afectados. El descansar podría ayudarte a regular lo que sientes.',
                                                     forDate: forDate,
                                                     titulo: title[0]
                                                    }),
    () => navigation.navigate('ActividadEnProgreso',{pantalla: 'Tristeza',
                                                     img: <Image source={require('../../assets/diario2.png')} resizeMode='contain' style={[styles.buttonImage,{top:0,width: dimensions.bodyWidth *0.5, height:dimensions.bodyHeight*0.34}]} />,
                                                     texto:'Escribre tus pensamientos en palabras e incluye todo lo que estas sintiendo al momento. No te detengas; todo lo que sientes es valido y merece ser expresado.',
                                                     forDate: forDate,
                                                     titulo: title[1]}),
    () => navigation.navigate('ActividadEnProgreso',{pantalla: 'Tristeza',
                                                     img: <Image source={require('../../assets/meditacion2.png')} resizeMode='contain' style={[styles.buttonImage,{top:0,width: dimensions.bodyWidth *0.5, height:dimensions.bodyHeight*0.34}]} />,
                                                     texto:'Conecta con tu espiritualidad de la manera que sea major para ti. Estos momentos pueden abrir un espacio para conectar contigo y con las metas que identificaste.',
                                                     forDate: forDate,
                                                     titulo: title[2]}),
    () => navigation.navigate('ActividadEnProgreso',{pantalla: 'Tristeza',
                                                     img: <Image source={require('../../assets/dibujo2.png')} resizeMode='contain' style={[styles.buttonImage,{top:0,width: dimensions.bodyWidth *0.5, height:dimensions.bodyHeight*0.34}]} />,
                                                     texto:'Desde garabatos hasta obras de arte, intenta plasmar lo que sientes. El arte puede ser un medio accesible para comenzar a explorar y reconocer tus emociones, particularmente para trabajar con sentimientos de preocupación o ansiedad.',
                                                     forDate: forDate,
                                                     titulo: title[3]}),
    () => navigation.navigate('ActividadEnProgreso',{pantalla: 'Tristeza',
                                                     img: <Image source={require('../../assets/musica2.png')} resizeMode='contain' style={[styles.buttonImage,{top:0,width: dimensions.bodyWidth *0.5, height:dimensions.bodyHeight*0.34}]} />,
                                                     texto:'La musica es un buen medio para regular las emociones. Busca tu musica favorita o crea tu propia lista de musica, organizala en el orden que desees y ponle un nombre que te inspire. Escuchala y disfrutala.',
                                                     forDate: forDate,
                                                     titulo: title[4]}),
    () => navigation.navigate('ActividadEnProgreso',{pantalla: 'Tristeza',
                                                     img: <Image source={require('../../assets/aceptacion.png')} resizeMode='contain' style={[styles.buttonImage,{top:0,width: dimensions.bodyWidth *0.5, height:dimensions.bodyHeight*0.34}]} />,
                                                     texto:'Practica la aceptación. Ábrete a la experiencia de sentir y pensar sin emitir juicio alguno. Puede que no te agrade el proceso. Sin embargo, es un gran paso para poder asumir la realidad hacia lo que no podemos cambiar.',
                                                     forDate: forDate,
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
          <View style={{width:'50%', position:'absolute',marginTop: dimensions.separator}}>
            <BackLinkWithDate labelBack={"Regresar"} gotoScreen={'SelectorEmocion'} theDate={forDate}></BackLinkWithDate>
          </View>         
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
  }
});