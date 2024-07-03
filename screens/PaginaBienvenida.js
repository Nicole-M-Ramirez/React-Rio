import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, PixelRatio, ScrollView, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors, dimensions } from '../components/constants';

import { titles } from '../Diccionario/español';
import { buttons } from '../Diccionario/español';
import Encabezado from '../components/Encabezado';
import Emergency from '../components/Emergency';
import HeaderView from '../components/HeaderView';
import BodyView from '../components/BodyView';
import EmergencyView from '../components/EmergencyView';
import FooterView from '../components/FooterView';
import AceptoNoAcepto from '../components/AceptoNoAcepto';
import TimeSince from '../components/TimeSince';
import DropDown from '../components/DropDown';
import FootherInicio from '../components/FootherInicio';
import HeaderInicio from '../components/HeaderInicio';
import WebView from 'react-native-webview';
//import { gs } from '../../components/RioGlobalStrings';
//import { ScrollView } from 'react-native-gesture-handler';

import BackLink from '../components/BackLink';
import NextLink from '../components/NextLink';

import { normalize } from '../components/FondNormilize';

import { gs } from '../components/RioGlobalStrings';

import { useSelector } from 'react-redux';
import style from '../components/react-native-calendars/src/calendar/header/style';
import { Colors } from 'react-native/Libraries/NewAppScreen';

// const ScreenHeight = Dimensions.get("window").height
// const ScreenWidth = Dimensions.get("window").width


function PaginaBienvenida() {
    const navigation = useNavigation();

    const lang = useSelector(state => state.counter.language);

    //let contText = gs['saludosdisclamer'][lang]

  return (
    <View>
      <HeaderInicio>
        {/* <TimeSince/> */}
      </HeaderInicio>

      <View style={styles.scrollView}>
        <ScrollView>
            <Text style={styles.titulo}>{gs['saludos'][lang]}</Text>
            <Text style={{color:colors.mintGreen, fontSize:normalize(13), fontWeight:'800', top:dimensions.bodyHeight*0.02}}>RIO:</Text>
            <Text style={{left:dimensions.bodyWidth*0.05,color:colors.mintGreen, fontSize:normalize(13), fontWeight:'500', top:dimensions.bodyHeight*0.02}}>{'\u2022'} {gs['bullet1'][lang]}</Text>
            <Text></Text>
            <Text style={{left:dimensions.bodyWidth*0.05,color:colors.mintGreen, fontSize:normalize(13), fontWeight:'500', top:dimensions.bodyHeight*0.02}}>{'\u2022'} {gs['bullet2'][lang]}</Text>
            <Text></Text>
            <Text style={{left:dimensions.bodyWidth*0.05,color:colors.mintGreen, fontSize:normalize(13), fontWeight:'500', top:dimensions.bodyHeight*0.02}}>{'\u2022'} {gs['bullet3'][lang]}</Text>
            <Text></Text>
            <Text style={{color:colors.mintGreen, fontSize:normalize(13), fontWeight:'500', top:dimensions.bodyHeight*0.02}}>{gs['warningPass'][lang]}</Text>
            <Text></Text>
            <Text style={{color:colors.mintGreen, fontSize:normalize(13), fontWeight:'500', top:dimensions.bodyHeight*0.02}}>{gs['minorWarning'][lang]}</Text>
            <Text></Text>
            <Text style={{color:colors.mintGreen, fontSize:normalize(13), fontWeight:'500', top:dimensions.bodyHeight*0.02}}>{gs['aceptar1'][lang]}<TouchableOpacity onPress={()=>navigation.navigate('Politica',{pantalla: 'PaginaBienvenida', regresarTitulo:'volver'})}><Text style={{color:colors.mintGreen, fontSize:normalize(14), fontWeight:'800', top:dimensions.bodyHeight*0.009, textDecorationLine: 'underline',}}>{gs['aceptar2'][lang]}</Text></TouchableOpacity></Text>
            <Text></Text>


            {/* <WebView style={{backgroundColor: 'transparent', width:dimensions.bodyWidth,color:colors.mintGreen, fontSize:normalize(24), marginTop:dimensions.bodyWidth*0.07}}  originWhitelist={['*']} source={{ html: '<div style="font-size: 57px;font-family: Arial, Helvetica; color: #4eb5a3" >' + contText + '</div>' }}/> */}
        </ScrollView>
      </View>

      <FooterView>
          <View style={{left: '50%', width:'50%', position:'absolute', top:dimensions.footerHeight*0.7}}>
            <NextLink labelNoAcepto={gs['aceptarTerminos'][lang]} gotoScreen={'Bienvenida'}></NextLink>
          </View>          
      </FooterView>

      <EmergencyView>
        <FootherInicio/>
      </EmergencyView>
    </View>
  );
}

export default PaginaBienvenida;

const styles = StyleSheet.create({
  titulo : {
    color:colors.mintGreen,
    fontSize:normalize(13),
    fontWeight: '500'
  },
  scrollView: {
    left: dimensions.leftMargin,
    top: dimensions.bodyHeight*0.25,
    width: dimensions.bodyWidth,
    height: dimensions.bodyHeight,
    //backgroundColor: 'grey',
  },
});
