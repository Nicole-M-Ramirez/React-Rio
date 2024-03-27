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
import { gs } from '../../components/RioGlobalStrings';
import { useSelector } from 'react-redux';

function Coraje({route}) {
  const lang = useSelector(state => state.counter.language);
  const { forDate } = route.params;
  const navigation = useNavigation();

  const Colors = [colors.deepPurple,colors.purple,colors.blue,colors.mintGreen,colors.greyBlue]
  const title = [gs['diario'][lang], gs['caminar'][lang], gs['bano'][lang],gs['ejercicio'][lang],gs['cocinar'][lang]]
  const functions = [
    () => navigation.navigate('ActividadEnProgreso',{pantalla: 'Coraje',
                                                     img: <Image source={require('../../assets/diario2.png')} resizeMode='contain' style={[styles.buttonImage,{top:0,width: dimensions.bodyWidth *0.5, height:dimensions.bodyHeight*0.34}]} />,
                                                     texto:gs['diarioCont'][lang],
                                                     forDate: forDate,
                                                     titulo: title[0]
                                                    }),
    () => navigation.navigate('ActividadEnProgreso',{pantalla: 'Coraje',
                                                     img: <Image source={require('../../assets/caminar2.png')} resizeMode='contain' style={[styles.buttonImage,{top:0,width: dimensions.bodyWidth *0.5, height:dimensions.bodyHeight*0.34}]} />,
                                                     texto: gs['caminarCont'][lang],
                                                     forDate: forDate,
                                                     titulo: title[1]}),
    () => navigation.navigate('ActividadEnProgreso',{pantalla: 'Coraje',
                                                     img: <Image source={require('../../assets/bano2.png')} resizeMode='contain' style={[styles.buttonImage,{top:0,width: dimensions.bodyWidth *0.5, height:dimensions.bodyHeight*0.34}]} />,
                                                     texto:gs['banoCont'][lang],
                                                     forDate: forDate,
                                                     titulo: title[2]}),
    () => navigation.navigate('ActividadEnProgreso',{pantalla: 'Coraje',
                                                     img: <Image source={require('../../assets/ejercicio2.png')} resizeMode='contain' style={[styles.buttonImage,{top:0,width: dimensions.bodyWidth *0.5, height:dimensions.bodyHeight*0.34}]} />,
                                                     texto:gs['ejercicioCont'][lang],
                                                     forDate: forDate,
                                                     titulo: title[3]}),
    () => navigation.navigate('ActividadEnProgreso',{pantalla: 'Coraje',
                                                     img: <Image source={require('../../assets/cocinar.png')} resizeMode='contain' style={[styles.buttonImage,{top:0,width: dimensions.bodyWidth *0.5, height:dimensions.bodyHeight*0.34}]} />,
                                                     texto:gs['cocinarCont'][lang],
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
            <BackLinkWithDate labelBack={gs['volver'][lang]} gotoScreen={'SelectorEmocion'} theDate={forDate}></BackLinkWithDate>
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
