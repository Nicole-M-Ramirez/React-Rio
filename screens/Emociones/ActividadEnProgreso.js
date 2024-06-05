import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, PixelRatio,Image, ScrollView } from 'react-native';
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
import { useSelector } from 'react-redux';
import BotonConfig from '../../components/BotonConfig';
// import BackLink from '../../components/BackLink';
import BackLinkWithDate from '../../components/BackLinkWithDate';
import NextLink from '../../components/NextLink';

const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width

function ActividadEnProgreso({route}) {
  const lang = useSelector(state => state.counter.language);
  const navigation = useNavigation();
  const { forDate } = route.params;
  const {pantalla} = route.params;
  const {img} = route.params;
  const {texto} = route.params;
  const {titulo} = route.params;
  const {vieneDe} = route.params;
  //const {continuacionExtra} = route.params;
  //const {forDate} = route.params;

  const today = new Date();

  const functions = [
    () => navigation.navigate('RegistroUtilidad',{img:img, forDate: forDate, pantalla : pantalla}),
    () => navigation.navigate(continuacionExtra, {forDate:forDate}),

  ]


  console.log("In ActividadEnProgreso forDate: " + forDate +  "  VieneDe:"  + pantalla + " Titulo:" + titulo);
  let functionIdx = 0;
  if (titulo == "Diario" || titulo == "Diary" ) {
    functions.push(
      () => navigation.navigate('Diary', {day:today.getDate(),month:today.getMonth(),year:today.getFullYear(), 
      dateString:today.toISOString().substr(0,10), 
      fromScreen:'RegistroUtilidad', pantalla:pantalla, img:img, forDate:forDate }));
    functionIdx = 2;
  }


  return (
    <View>
      <BotonConfig pantalla = 'MenuPrincipal' Back={()=>{navigation.navigate('ActividadEnProgreso',{forDate:forDate, pantalla:pantalla,img:img,texto:texto,titulo:titulo,vieneDe:vieneDe})}}/>
      <HeaderView>
        <TimeSince/>
      </HeaderView>

      <BodyView>
        <View style={{top:dimensions.bodyHeight*0.1}}>
          {img === null ? <View></View> : img}
        </View>

        <Text style={styles.titleText}>{titulo}</Text>
        <View style={[styles.TextView,{}]}>
            <Text style={styles.text}>{texto}</Text>
        </View>
      </BodyView>

      <FooterView>
          <View style={{width:'50%', position:'absolute',top:dimensions.footerHeight*0.6}}>
            <BackLinkWithDate labelBack={gs['volver'][lang]} gotoScreen={pantalla} forDate={forDate}></BackLinkWithDate>
          </View>

          {/* <TouchableOpacity  style={{left:dimensions.bodyWidth*0.7,width:dimensions.bodyWidth*0.25,height:dimensions.footerHeight*0.5}}  onPress={functions[0]}>
            <View style={styles.hookedStyles}>
              <View style={{width:'92%', 'height': dimensions.footerHeight*0.5, alignItems: 'flex-end',justifyContent: 'center', }}> 
                <Text style={{color: 'white', textAlignVertical: 'center'}}>Continuar</Text>
              </View>
              <View style={{width:'15%', 'height': dimensions.footerHeight*0.5,  alignItems: 'flex-end',justifyContent: 'center',  }}>
                <Image source={require('../../assets/continuar2.png')}  style={styles.buttonTitleImage} />
              </View>
            </View>
          </TouchableOpacity>       */}
          { vieneDe === 'Emergencia' ? <View></View> :
            <TouchableOpacity  style={{left:dimensions.bodyWidth*0.7,width:dimensions.bodyWidth*0.25,height:dimensions.footerHeight*0.5,top:dimensions.footerHeight*0.5}}  onPress={functions[functionIdx]}>
              <View style={styles.hookedStyles}>
                <View style={{width:'92%', 'height': dimensions.footerHeight*0.5, alignItems: 'flex-end',justifyContent: 'center', }}> 
                  <Text style={{color: 'white', textAlignVertical: 'center'}}>{gs['continuar'][lang]}</Text>
                </View>
                <View style={{width:'15%', 'height': dimensions.footerHeight*0.5,  alignItems: 'flex-end',justifyContent: 'center',  }}>
                  <Image source={require('../../assets/continuar2.png')}  style={styles.buttonTitleImage} />
                </View>
              </View>
            </TouchableOpacity> }
      </FooterView>

      <EmergencyView>
          <Emergency/>
        </EmergencyView>
    </View>
  );
}


export default ActividadEnProgreso;

const styles = StyleSheet.create({
  buttonImage :{
    width: ScreenWidth * 0.23,
    height: ScreenHeight * 0.13,
    alignSelf: 'center',
    top: dimensions.buttonHeight /7
  },
  TextView: {
    width: dimensions.bodyWidth,
    height: dimensions.bodyHeight,
    marginTop: dimensions.bodyHeight *0.2,
  },
  text:{
    color:'white',
    fontSize: normalize(13),
    //width: dimensions.bodyWidth *,
    //left: dimensions.bodyWidth*0.05,
    top: dimensions.buttonHeight*0.09
  },
  titleText:{
    color: colors.mintGreen,
    fontWeight: '600',
    fontSize: normalize(20),
    top: dimensions.bodyHeight*0.2
  },
  hookedStyles :{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    direction: 'inherit',
    flexWrap: 'nowrap',
    height: '100%'
  
  },
  buttonTitleImage :{
    width: dimensions.bodyWidth * 0.024,
    height: dimensions.footerHeight * 0.14,
    position: 'absolute'
  }
});

