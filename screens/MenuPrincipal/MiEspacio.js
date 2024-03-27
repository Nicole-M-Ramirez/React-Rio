import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, PixelRatio,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors, dimensions } from '../../components/constants';

import SixGrid from '../../components/SixGrid';
import Emergency from '../../components/Emergency';
import EmergencyView from '../../components/EmergencyView';
import Encabezado from '../../components/Encabezado';
import BodyView from '../../components/BodyView';
import FooterView from '../../components/FooterView';
import HeaderView from '../../components/HeaderView'
import { normalize } from '../../components/FondNormilize';
import TimeSince from '../../components/TimeSince';
import { useSelector } from 'react-redux';
import { gs } from '../../components/RioGlobalStrings';
import BackLink from '../../components/BackLink';

const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width

function MiEspacio() {
  const navigation = useNavigation();
  const lang = useSelector(state => state.counter.language);
  const Colors = [colors.deepPurple, colors.pink, colors.blue, colors.greyBlue, colors.purple, colors.mintGreen]

  const title = [gs['calendario'][lang], gs['diario'][lang], gs['logros'][lang], gs['metas'][lang],gs['graficas'][lang], gs['exportar'][lang]]

  const today = new Date();
  const functions = [
    () => navigation.navigate('RioCalendar', {initialDate: today.toISOString().substr(0,10)}),
    // () => navigation.navigate('Diary'),
    () => navigation.navigate('Diary', {day:today.getDate(),month:today.getMonth(),year:today.getFullYear(), 
      dateString:today.toISOString().substr(0,10), fromScreen:'MiEspacio'}),
    () => navigation.navigate('Logros'),
    () => navigation.navigate('Metas'),
    () => navigation.navigate('Graficas'),
    () => navigation.navigate('Exportar'),
  ]
  const images = [
    <Image source={require('../../assets/calendario2.png')} resizeMode='contain' style={styles.buttonImage} />,
    <Image source={require('../../assets/diario2.png')} resizeMode='contain' style={styles.buttonImage} />,
    <Image source={require('../../assets/logros2.png')} resizeMode='contain' style={styles.buttonImage} />,
    <Image source={require('../../assets/metas2.png')} resizeMode='contain' style={styles.buttonImage} />,
    <Image source={require('../../assets/graficas2.png')} resizeMode='contain' style={styles.buttonImage} />,
    <Image source={require('../../assets/exportar2.png')} resizeMode='contain' style={styles.buttonImage} />,
  ]


  return (
    <View>
      <HeaderView>
      <TimeSince/>
      </HeaderView>

      <BodyView>
        <SixGrid colors={Colors} title={title} functions={functions} images={images}/>
      </BodyView>

      <FooterView>
        <View style={{height:'100%',justifyContent: 'center' , alignItems: 'flex-start'}}>
          <Text style={styles.titleText}>{gs['miEspacio'][lang]}</Text>
        </View>

        {/* 2023-10-11: Valerie me dijo que el botón de Reportar Incidente ya no va en
                    esta pantalla */}

        {/* <TouchableOpacity style={styles.reportView}>
          <Text style={styles.reportText} >Reportar Incidente</Text>

          <Image source={require('../../assets/continuar3.png')}  style={styles.reportArrow} />
        </TouchableOpacity> */}
         <View style={{top:dimensions.footerHeight*0.55,width:'50%', position:'absolute',marginTop: dimensions.separator}}>
            <BackLink labelBack={gs['volver'][lang]} gotoScreen={"MenuPrincipal"}></BackLink>
          </View>
        
      </FooterView>

      <EmergencyView>
          <Emergency/>
        </EmergencyView>
    </View>
  );
}

export default MiEspacio;

const styles = StyleSheet.create({
  titleText: {
    color: "#4eb5a3",
    fontSize: normalize(20),
    fontWeight: '600',
    top: dimensions.footerHeight*-0.2,
    // left: ScreenWidth * 0.08,
  },
  buttonImage :{
    width: ScreenWidth * 0.23,
    height: ScreenHeight * 0.13,
    alignSelf: 'center',
    top: dimensions.buttonHeight /7
  },
  reportView: {
    backgroundColor: colors.emergencyRed,
    borderRadius: 6,
    marginTop: dimensions.separator,
    height:'75%',
    justifyContent: 'center', 
    alignItems: 'flex-start'
  },
  reportText: {
    marginLeft: dimensions.separator+5,
    color: 'white',
    fontWeight: '600',
    fontSize: normalize(13),
    width: '30%',
  },
  reportArrow: {
    width: dimensions.bodyWidth * 0.048,
    height: dimensions.footerHeight * 0.28,
    position: 'absolute',
    left: dimensions.bodyWidth *0.9,
  }
});

