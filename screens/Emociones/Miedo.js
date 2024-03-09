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

const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width

function Miedo({route}) {
  const { forDate } = route.params;
  const navigation = useNavigation();

  const Colors = [colors.deepPurple,colors.blue,colors.pink,colors.mintGreen,colors.purple]
  const title = ['Diario', 'Habla', 'Respirar', 'Espiritualidad','Atención plena']
  const functions = [
    () => navigation.navigate('ActividadEnProgreso',{pantalla: 'Miedo',
                                                     img: <Image source={require('../../assets/diario2.png')} resizeMode='contain' style={[styles.buttonImage,{top:0,width: dimensions.bodyWidth *0.5, height:dimensions.bodyHeight*0.34}]} />,
                                                     texto:'Escribre tus pensamientos en palabras e incluye todo lo que estas sintiendo al momento. No te detengas; todo lo que sientes es valido y merece ser expresado.',
                                                     forDate: forDate,
                                                     titulo: title[0]
                                                    }),
    () => navigation.navigate('ActividadEnProgreso',{pantalla: 'Miedo',
                                                    img: null,
                                                    texto:'Háblate en voz alta o con alguien de confianza. El poder tener conversaciones sobre lo que estés pensando puede ayudarte a canalizar lo que sientes y a reflexionar antes de actuar.',
                                                    forDate: forDate,
                                                    titulo: title[1]
                                                   }),
    () => navigation.navigate('ActividadEnProgreso',{pantalla: 'Miedo',
                                                     img: <Image source={require('../../assets/Respiracion-Profunda.gif')} resizeMode='contain' style={[styles.buttonImage,{top:0,width: dimensions.bodyWidth *0.5, height:dimensions.bodyHeight*0.34}]} />,
                                                     texto:'Toma un momento para enfocarte en tu respiracion. Intenta seguir el circulo, inhalando mientras crece y exalando al achicarse. Respira con calma mientras pasa el tiempo y relajate. Aprender a relajarte te puede ayudar a evitar que te autolesiones, te enfermes y tambien te puede ayudar a mejorar tu rendimiento academico.',
                                                     forDate: forDate,
                                                     titulo: title[2]}),
    () => navigation.navigate('ActividadEnProgreso',{pantalla: 'Miedo',
                                                     img:null,
                                                     texto:'Conecta con tu espiritualidad de la manera que sea mejor para ti. Estos momentos pueden abrir un espacio para conectar contigo y con las metas que identificaste.',
                                                     forDate: forDate,
                                                     titulo: title[3]}),
    () => navigation.navigate('ActividadEnProgreso',{pantalla: 'Miedo',
                                                     img:null,
                                                     texto:'Enfócate en tus cinco (5) sentidos en este momento. ¿Qué estás viendo, escuchando, oliendo, saboreando y sintiendo? En este momento sólo existe el momento presente. Observa atentamente y sin juicios tu cuerpo, tu mente y tus emociones. Practica la aceptación y la curiosidad de esto que logras identificar. Descubre todos los beneficios que la ciencia ha descubierto que puedes obtener cuando practicas la atención plena de manera regular:',
                                                     forDate: forDate,
                                                     titulo: title[4]}),
  ]

  const images = [
    <Image source={require('../../assets/diario2.png')} resizeMode='contain' style={[styles.buttonImage, {alignSelf: 'flex-start', left: dimensions.buttonHeight/5}]} />,
    null,
    <Image source={require('../../assets/respirar2.png')} resizeMode='contain' style={styles.buttonImage} />,
    null,
    null
  ]

  return (
    <View>
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

export default Miedo;

const styles = StyleSheet.create({
  button:{
    borderRadius:5,
  },
  buttonText:{
    color:'white',
    fontSize: normalize(11),
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
    fontSize: normalize(25),
    fontWeight: '600',
    width: dimensions.bodyWidth * 0.7
    },
});
