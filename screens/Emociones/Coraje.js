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

function Coraje({route}) {
  const { forDate } = route.params;
  const navigation = useNavigation();

  const Colors = [colors.deepPurple,colors.purple,colors.blue,colors.mintGreen,colors.greyBlue]
  const title = ['Diario', 'Caminar', 'Baño', 'Ejercicio','Cocinar']
  const functions = [
    () => navigation.navigate('ActividadEnProgreso',{pantalla: 'Coraje',
                                                     img: <Image source={require('../../assets/diario2.png')} resizeMode='contain' style={[styles.buttonImage,{top:0,width: dimensions.bodyWidth *0.5, height:dimensions.bodyHeight*0.34}]} />,
                                                     texto:'Escribre tus pensamientos en palabras e incluye todo lo que estas sintiendo al momento. No te detengas; todo lo que sientes es valido y merece ser expresado.',
                                                     forDate: forDate,
                                                     titulo: title[0]
                                                    }),
    () => navigation.navigate('ActividadEnProgreso',{pantalla: 'Coraje',
                                                     img: <Image source={require('../../assets/caminar2.png')} resizeMode='contain' style={[styles.buttonImage,{top:0,width: dimensions.bodyWidth *0.5, height:dimensions.bodyHeight*0.34}]} />,
                                                     texto: 'Agarra tus tenis y sal a caminar y a respirar aire fresco.Cambiar escenario te premite generar espacio entre lo que sientes y la situacion en la que te encuentras.Ademas, conectar con el ambiente natural nos permite reconsiderar aquello que nos aqueja y nos provee tranquilidad.',
                                                     forDate: forDate,
                                                     titulo: title[1]}),
    () => navigation.navigate('ActividadEnProgreso',{pantalla: 'Coraje',
                                                     img: <Image source={require('../../assets/bano2.png')} resizeMode='contain' style={[styles.buttonImage,{top:0,width: dimensions.bodyWidth *0.5, height:dimensions.bodyHeight*0.34}]} />,
                                                     texto:'Prepara el ambiente para un baño relajante con tu fragancia preferida. Deja que el agua corra, creando sensaciones que fomentan la relajacion.El sumergirnos en agua de esta manera promueve sentimientos fisisologicos agradables, lo que disminuye sentimientos de tension y coraje.',
                                                     forDate: forDate,
                                                     titulo: title[2]}),
    () => navigation.navigate('ActividadEnProgreso',{pantalla: 'Coraje',
                                                     img: <Image source={require('../../assets/ejercicio2.png')} resizeMode='contain' style={[styles.buttonImage,{top:0,width: dimensions.bodyWidth *0.5, height:dimensions.bodyHeight*0.34}]} />,
                                                     texto:'No necesitas ir al gimnasio para ejercitarte. El mantenerte en movimiento te puede ayudar a quemar el coraje que mantegan el ritmo cardiaco elevsfo pueden proveer beneficios psicoemocionales como reduccion de estres, ansiedad, miedo e ira',
                                                     forDate: forDate,
                                                     titulo: title[3]}),
    () => navigation.navigate('ActividadEnProgreso',{pantalla: 'Coraje',
                                                     img: <Image source={require('../../assets/cocinar.png')} resizeMode='contain' style={[styles.buttonImage,{top:0,width: dimensions.bodyWidth *0.5, height:dimensions.bodyHeight*0.34}]} />,
                                                     texto:'Saca un tiempo para hacer una comida, esto no solo mejora las funciones ejecutivas, sino que es una distraccion que puede canalizar tu energia y aumentar la autoestima.',
                                                     forDate: forDate,
                                                     titulo: title[4]}),
  ]

  const images = [
    <Image source={require('../../assets/diario2.png')} resizeMode='contain' style={[styles.buttonImage, {alignSelf: 'flex-start', left: dimensions.buttonHeight/5}]} />,
    <Image source={require('../../assets/caminar2.png')} resizeMode='contain' style={styles.buttonImage} />,
    <Image source={require('../../assets/bano2.png')} resizeMode='contain' style={styles.buttonImage} />,
    <Image source={require('../../assets/ejercicio2.png')} resizeMode='contain' style={styles.buttonImage} />,
    <Image source={require('../../assets/cocinar.png')} resizeMode='contain' style={styles.buttonImage} />
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

export default Coraje;

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
