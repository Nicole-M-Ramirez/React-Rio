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
import { useSelector } from 'react-redux';
import BotonConfig from '../../components/BotonConfig';
import { addEmocionData } from '../../redux/slices/counterSlice';
import { useDispatch } from 'react-redux';

const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width

function Miedo({route}) {
  const dispatch = useDispatch();
  // dispatch(addEmocionData({"emo" : "miedo", "fec": forDate})); 
  

  const { forDate } = route.params;
  const navigation = useNavigation();
  const lang = useSelector(state => state.counter.language);
  dispatch(addEmocionData({"emo" : "miedo", "fec": forDate})); 

  const Colors = [colors.deepPurple,colors.blue,colors.pink,colors.mintGreen,colors.purple]
  const title = [gs['diario'][lang],gs['hablar'][lang],gs['respirar'][lang],gs['espiritualidad'][lang],gs['atenPlena'][lang],]
  const images = [
    require('../../assets/diario2.png'),
    //<Image source={require('../../assets/diario2.png')} resizeMode='contain' style={[styles.buttonImage, {alignSelf: 'flex-start', left: dimensions.bodyWidth*0.59}]} />,
    <Image source={require('../../assets/hablar.png')} resizeMode='contain' style={styles.buttonImage} />,
    <Image source={require('../../assets/respirar2.png')} resizeMode='contain' style={styles.buttonImage} />,
    <Image source={require('../../assets/Espiritualidad.png')} resizeMode='contain' style={styles.buttonImage} />,
    <Image source={require('../../assets/pausa2.png')} resizeMode='contain' style={styles.buttonImage} />
  ]
  const functions = [
    () => navigation.navigate('ActividadEnProgreso',{pantalla: 'Miedo',
                                                     img: <Image source={require('../../assets/animaciones/DIARIO.gif')} resizeMode='contain' style={styles.buttonImage} />,
                                                     texto:gs['diarioCont'][lang],
                                                     forDate: forDate,
                                                     titulo: title[0],
                                                     nombre: "Diario"
                                                    }),
    () => navigation.navigate('ActividadEnProgreso',{pantalla: 'Miedo',
                                                    img: <Image source={require('../../assets/animaciones/HABLAR.gif')} resizeMode='contain' style={styles.buttonImage} />,
                                                    texto:gs['hablarCont'][lang],
                                                    forDate: forDate,
                                                    titulo: title[1],
                                                    nombre: "Hablar"
                                                   }),
    () => navigation.navigate('ActividadEnProgreso',{pantalla: 'Miedo',
                                                     img: <Image source={require('../../assets/Respiracion-Profunda.gif')} resizeMode='contain' style={styles.buttonImage} />,
                                                     texto:gs['respiracionCont'][lang],
                                                     forDate: forDate,
                                                     titulo: title[2],
                                                     nombre: "Respiracion"}),
    () => navigation.navigate('ActividadEnProgreso',{pantalla: 'Miedo',
                                                     img:<Image source={require('../../assets/animaciones/ESPIRITUALIDAD.gif')} resizeMode='contain' style={styles.buttonImage} />,
                                                     texto:gs['espiritualidadCont'][lang],
                                                     forDate: forDate,
                                                     titulo: title[3],
                                                     nombre: "Espiritualidad"}),
    () => navigation.navigate('ActividadEnProgreso',{pantalla: 'Miedo',
                                                     img:images[4],
                                                     texto:gs['atencionPlenaCont'][lang],
                                                     forDate: forDate,
                                                     nombre: "Atencion Plena",
                                                     titulo: title[4]}),
  ]



  return (
    <View>
      <BotonConfig pantalla = 'MenuPrincipal' Back={() => navigation.navigate('Miedo', {forDate: forDate})}/>
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
        <View style={{top: dimensions.footerHeight*0.1}}>
            <Text style={styles.titleText}>{gs['Miedo'][lang]}</Text>
        </View>

      <TouchableOpacity  style={{height:'100%'}}  onPress={() => navigation.navigate('Detonante',{pantalla: 'Miedo', forDate: forDate,Color : colors.deepPurple})}>
            <View style={styles.hookedStyles}>
              <View style={{width:'8%', 'height': '100%',  alignItems: 'flex-start',justifyContent: 'center', top: dimensions.footerHeight*-0.2  }}>
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

export default Miedo;

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
