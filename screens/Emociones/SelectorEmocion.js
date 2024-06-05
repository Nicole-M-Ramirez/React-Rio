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
import { gs } from '../../components/RioGlobalStrings';
import { useDispatch, useSelector } from 'react-redux';
import BotonConfig from '../../components/BotonConfig';

const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width

function SelectorEmocion({route}) {
  const navigation = useNavigation();
  const { theDate } = route.params;
  const lang = useSelector(state => state.counter.language);

  console.log("You have entered the moods window in date: " + theDate);


  const Colors = [colors.pink, colors.mintGreen, colors.deepPurple, colors.blue, colors.purple, colors.greyBlue]
  const title = [gs['Felicidad'][lang], gs['Ansiedad'][lang], gs['Miedo'][lang], gs['Tristeza'][lang],gs['Coraje'][lang], gs['Otros'][lang]]
  const functions = [
    () => navigation.navigate('Detonante',{
      pantalla: 'Felicidad', forDate: theDate, Color : colors.pink
    }),
    () => navigation.navigate('Detonante',{
      pantalla: 'Ansiedad', forDate: theDate, Color : colors.mintGreen
    }),
    () => navigation.navigate('Detonante',{
      pantalla: 'Miedo', forDate: theDate, Color : colors.deepPurple
    }),
    () => navigation.navigate('Detonante',{
      pantalla: 'Tristeza', forDate: theDate, Color : colors.blue
    }),
    () => navigation.navigate('Detonante',{
      pantalla: 'Coraje', forDate: theDate, Color : colors.purple
    }),
    () => navigation.navigate('EmocionExpancion',{
      pantalla:'EmocionExpancion', forDate: theDate
    }),
    // () => navigation.navigate('Detonante'),
    // () => navigation.navigate('Detonante'),
    // () => navigation.navigate('Detonante'),
    // () => navigation.navigate('Detonante'),
    // () => navigation.navigate('Detonante'),
  ]
  const images = [
    <Image source={require('../../assets/Felicidad.png')} resizeMode='contain' style={styles.buttonImage} />,
    <Image source={require('../../assets/Ansiedad.png')} resizeMode='contain' style={styles.buttonImage} />,
    <Image source={require('../../assets/Miedo.png')} resizeMode='contain' style={styles.buttonImage} />,
    <Image source={require('../../assets/Tristeza.png')} resizeMode='contain' style={styles.buttonImage} />,
    <Image source={require('../../assets/Coraje.png')} resizeMode='contain' style={styles.buttonImage} />,
    <Image source={require('../../assets/Otros.png')} resizeMode='contain' style={styles.buttonImage} />,
  ]


  return (
    <View>
      <BotonConfig pantalla = 'MenuPrincipal' Back={() => navigation.navigate('SelectorEmocion', { theDate: theDate })}/>
      <HeaderView>
      <TimeSince/>
      </HeaderView>

      <BodyView>
      <View style={{top: dimensions.bodyHeight*0.02}}>

        <SixGrid colors={Colors} title={title} functions={functions} images={images}/>
        </View>
      </BodyView>

      <FooterView>
        <View style={{height:'100%',justifyContent: 'center' , alignItems: 'flex-start'}}>
          <Text style={styles.titleText}>{gs['emocionesTitulo'][lang]}</Text>
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

export default SelectorEmocion;

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

