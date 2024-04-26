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

const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width

function Ansiedad({route}) {
  const { forDate } = route.params;
  const navigation = useNavigation();
  const lang = useSelector(state => state.counter.language);


  const Colors = [colors.deepPurple,colors.mintGreen,colors.pink,colors.blue,colors.purple]
  const title = [gs['diario'][lang],gs['meditacion'][lang],gs['respiracion'][lang],gs['atencion'][lang],gs['mascotas'][lang]]
  const functions = [
    () => navigation.navigate('ActividadEnProgreso',{pantalla: 'Ansiedad',
                                                     img: <Image source={require('../../assets/diario2.png')} resizeMode='contain' style={[styles.buttonImage,{top:0,width: dimensions.bodyWidth *0.5, height:dimensions.bodyHeight*0.34}]} />,
                                                     texto:gs['diarioCont'][lang],
                                                     color: colors.deepPurple,
                                                     forDate: forDate,
                                                     titulo: title[0]
                                                    }),
    () => navigation.navigate('Meditacion', {pantalla:'Ansiedad', forDate: forDate}),
    // () => navigation.navigate('ActividadEnProgreso',{pantalla: 'Ansiedad',
    //                                                  img: <Image source={require('../../assets/meditacion2.png')} resizeMode='contain' style={[styles.buttonImage,{top:0,width: dimensions.bodyWidth *0.5, height:dimensions.bodyHeight*0.34}]} />,
    //                                                  texto: 'Conecta con tu espiritualidad de la manera que sea major para ti. Estos momentos pueden abrir un espacio para conectar contigo y con las metas que identificaste.',
    //                                                  forDate: forDate,
    //                                                  titulo: title[1]}),
    () => navigation.navigate('ActividadEnProgreso',{pantalla: 'Ansiedad',
                                                     img: <Image source={require('../../assets/Respiracion-Profunda.gif')} resizeMode='contain' style={[styles.buttonImage,{top:0,width: dimensions.bodyWidth *0.5, height:dimensions.bodyHeight*0.34}]} />,
                                                     texto:gs['respiracionCont'][lang],
                                                     forDate: forDate,
                                                     titulo: title[2]}),
    () => navigation.navigate('ActividadEnProgreso',{pantalla: 'Ansiedad',
                                                     img: <Image source={require('../../assets/atencionPlena.png')} resizeMode='contain' style={[styles.buttonImage,{top:0,width: dimensions.bodyWidth *0.5, height:dimensions.bodyHeight*0.34}]} />,
                                                     texto:gs['atencionCont'][lang],
                                                     forDate: forDate,
                                                     titulo: title[3]}),
    () => navigation.navigate('ActividadEnProgreso',{pantalla: 'Ansiedad',
                                                     img: <Image source={require('../../assets/mascota2.png')} resizeMode='contain' style={[styles.buttonImage,{top:0,width: dimensions.bodyWidth *0.5, height:dimensions.bodyHeight*0.34}]} />,
                                                     texto:gs['mascotasCont'][lang],
                                                     forDate: forDate,
                                                     titulo: title[4]}),
  ]

  const images = [
    <Image source={require('../../assets/diario2.png')} resizeMode='contain' style={[styles.buttonImage, {alignSelf: 'flex-start', left: dimensions.bodyWidth*0.59}]} />,
    <Image source={require('../../assets/meditacion2.png')} resizeMode='contain' style={styles.buttonImage} />,
    <Image source={require('../../assets/respirar2.png')} resizeMode='contain' style={styles.buttonImage} />,
    <Image source={require('../../assets/atencionPlena.png')} resizeMode='contain' style={styles.buttonImage} />,
    <Image source={require('../../assets/mascota2.png')} resizeMode='contain' style={styles.buttonImage} />
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
          <View style={{width:'50%', position:'absolute',top:dimensions.footerHeight*0.65}}>
          <BackLinkWithDate labelBack={gs['volver'][lang]} gotoScreen={'SelectorEmocion'} theDate={forDate}></BackLinkWithDate>
          </View>         
      </FooterView>

      <EmergencyView>
          <Emergency/>
      </EmergencyView>
    </View>
  );
}

export default Ansiedad;

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
