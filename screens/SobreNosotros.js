import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, PixelRatio, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
//import { colors } from '../components/constants';
import { colors, dimensions } from '../components/constants';

import { titles } from '../Diccionario/español';
import { buttons } from '../Diccionario/español';
import Encabezado from '../components/Encabezado';
import Emergency from '../components/Emergency';
import HeaderView from '../components/HeaderView';
import BodyView from '../components/BodyView';
import EmergencyView from '../components/EmergencyView';
import FooterView from '../components/FooterView';
import Continuar from '../components/Continuar';
import { normalize } from '../components/FondNormilize';
import BackLink from '../components/BackLink';
import NextLink from '../components/NextLink';
// const ScreenHeight = Dimensions.get("window").height
// const ScreenWidth = Dimensions.get("window").width

import { gs } from '../components/RioGlobalStrings';
import { useSelector } from 'react-redux';


function SobreNosotros({route}) {
    const navigation = useNavigation();
    const { pantalla} = route.params;

    const lang = useSelector(state => state.counter.language);

  return (
    <View>
      <HeaderView>
        <Text style={styles.title}>{gs['sobreNosotros'][lang]}</Text>
      </HeaderView>

      <View style={{position:'relative', 
        marginTop: dimensions.bodyTopMargin - dimensions.headerHeight + dimensions.separator*2, 
        marginLeft: dimensions.leftMargin,
        height: dimensions.bodyHeight,
        width: dimensions.bodyWidth}}>
      <View style={styles.textBox}>
          <ScrollView>
            <Text style={styles.boxTexts}>{gs['sobreNosotrosCont'][lang]}</Text>
          </ScrollView>
        </View>
        
        {/* <TouchableOpacity style={[styles.button, {width: ScreenWidth * 0.40,}]} onPress={() => navigation.navigate('MenuPrincipal')}>
          <Text style={[styles.buttonText, {left: dimensions.leftMargin+245,top:ScreenHeight * 0.01}]}>continuar</Text>
          <Image source={require('../assets/continuar2.png')} resizeMode='contain' style={[styles.buttonImage, {left: dimensions.leftMargin+325}]} />
        </TouchableOpacity>*/}
        </View>

      <FooterView>
        <View style={{width:'50%', position:'absolute',marginTop: dimensions.separator}}>
          <BackLink labelBack={gs['volver'][lang]} gotoScreen={pantalla}></BackLink>
        </View>
          {/* <View style={{left: '50%', width:'50%', position:'absolute', marginTop: dimensions.separator}}>
            <NextLink labelNoAcepto={"Continuar"} gotoScreen={'Explicacion1'}></NextLink>
          </View>           */}
      </FooterView>


      <EmergencyView>
          <Emergency/>
        </EmergencyView>
    </View>
  );
}

export default SobreNosotros;

const styles = StyleSheet.create({
  title: {
    //top: dimensions.headerTopTextMargin,
    fontSize: normalize(20),
    color: colors.mintGreen
  },
  textBox: {
    backgroundColor: colors.pink,
    width: dimensions.bodyWidth,
    height: "100%",
    borderRadius: 8,
  },
  boxTexts: {
    color: 'white',
    margin: dimensions.bodyHeight * 0.04,
    fontSize: normalize(13)
  },

  buttonText:{
    color:'white',
    fontSize: normalize(12),
    fontWeight:'bold',
  },
  buttonImage :{
    // width: ScreenWidth * 0.03,
    // height: ScreenHeight * 0.06,
    // top: ScreenHeight * -0.03,
  }
});
