import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, PixelRatio, Image, ScrollView } from 'react-native';
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
import NextLink from '../../components/NextLink';
import ShortButton from '../../components/ShortButton';
import BackLinkWithDate from '../../components/BackLinkWithDate';

const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width

function EmocionesExpancion({route}) {
  const { forDate } = route.params;
  const navigation = useNavigation(); 
 
  const Colors = [colors.pink,colors.mintGreen,colors.deepPurple,colors.blue,colors.purple]
 
  const Functions = [
    () => navigation.navigate('Detonante',{
      pantalla: 'Felicidad'
    }),
    () => navigation.navigate('Detonante',{
      pantalla: 'Ansiedad'
    }),
    () => navigation.navigate('Detonante',{
      pantalla: 'Miedo'
    }),
    () => navigation.navigate('Detonante',{
      pantalla: 'Tristeza'
    }),
    () => navigation.navigate('Detonante',{
      pantalla: 'Coraje'
    })
  ]
  
  Tiltes = ['motivación', 'optimismo', 'satisfacción', 'tranquilidad','n/a',
            'nervios', 'estrés', 'impaciencia', 'desesperación', 'abrumo',
            'pánico', 'terror', 'inseguridad', 'parálisis', 'bloqueo mental',
            'vacío', 'desilusión', 'desmotivación', 'decepción', 'culpa',
            'irritabilidad', 'enojo', 'furia', 'indignación', 'molestia']

  const Images = [
    <Image source={require('../../assets/Felicidad.png')} resizeMode='contain' style={[styles.buttonImage, {top: dimensions.buttonHeight /4}]} />,
    <Image source={require('../../assets/Ansiedad.png')} resizeMode='contain' style={[styles.buttonImage, {top: dimensions.buttonHeight*1.57}]} />,
    <Image source={require('../../assets/Miedo.png')} resizeMode='contain' style={[styles.buttonImage, {top: dimensions.buttonHeight*2.8}]} />,
    <Image source={require('../../assets/Tristeza.png')} resizeMode='contain' style={[styles.buttonImage, {top: dimensions.buttonHeight*4.1}]} />,
    <Image source={require('../../assets/Coraje.png')} resizeMode='contain' style={[styles.buttonImage, {top: dimensions.buttonHeight*5.3}]} />
  ]

  const views = [];
  let count = 0
  for ( var i =0; i<5; i++){
    var color = Colors[i]
    var func = Functions[i]
    for ( var j =0; j<5; j++){
      views.push(<ShortButton Top={1.24} Color={color} Nav={func} Title={Tiltes[count]}/>);
      count = count+1
    }
    views.push(Images[i])
    views.push(<View style={{borderBottomColor: 'white', width: dimensions.bodyWidth, borderBottomWidth:3,marginBottom: 8}}/>)
  }

  return (
    <View>
      <HeaderView headerButtons = 'yes'>
        <TimeSince  />
      </HeaderView>

      {/* <BodyView> */}
        <View style={styles.scrollView}>
          <ScrollView>
            {views}
          </ScrollView>
        </View>
      {/* </BodyView> */}

      <FooterView>
        <View style={{width:'50%', position:'absolute',marginTop: dimensions.separator}}>
        <BackLinkWithDate labelBack={"Regresar"} gotoScreen={'SelectorEmocion'} theDate={forDate}></BackLinkWithDate>
          </View>
        <View style={{top:dimensions.bodyHeight*0.08,height:'50%',justifyContent: 'center' , alignItems: 'flex-start'}}>
          <Text style={styles.titleText}>Como te sientes hoy?</Text>
        </View>
      </FooterView>

      <EmergencyView>
          <Emergency/>
      </EmergencyView>
    </View>
  );
}

export default EmocionesExpancion;

const styles = StyleSheet.create({
    scrollView: {
      top: dimensions.bodyHeight*0.19,
      left:dimensions.leftMargin,
      height: dimensions.bodyHeight*0.99,
      //backgroundColor: 'grey',
    },
    titleText: {
      color: colors.mintGreen,
      fontSize: normalize(23),
      //top: dimensions.footerHeight*0.2
    },
    buttonImage :{
      width: ScreenWidth * 0.23,
      height: ScreenHeight * 0.13,
      alignSelf: 'center',
      zIndex: 1,
      position: 'absolute',
      left: dimensions.bodyWidth *0.63
    }
});
