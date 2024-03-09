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
// import BackLink from '../../components/BackLink';
import BackLinkWithDate from '../../components/BackLinkWithDate';

const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width

function RespiracionProfunda({route}) {
  const navigation = useNavigation();
  const { forDate } = route.params;
  const {pantalla} = route.params;
  const {img} = route.params;
  const {texto} = route.params;
  const {color} = route.params;


  console.log("In ActividadEnProgreso forDate: " + forDate);
  return (
    <View>
      <HeaderView>
        <TimeSince/>
      </HeaderView>

      <BodyView>
        {img}
        <View style={[styles.TextView,{backgroundColor:color}]}>
            <Text style={styles.text}>{texto}</Text>
        </View>
      </BodyView>

      <FooterView>
          <View style={{width:'50%', position:'absolute',marginTop: dimensions.separator}}>
            <BackLinkWithDate labelBack={"Regresar"} gotoScreen={pantalla} forDate={forDate}></BackLinkWithDate>
          </View>         
      </FooterView>

      <EmergencyView>
          <Emergency/>
        </EmergencyView>
    </View>
  );
}


export default RespiracionProfunda;

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
  },
  TextView: {
    width: dimensions.bodyWidth,
    height: dimensions.buttonHeight,
    marginTop: dimensions.bodyHeight *0.3,
  },
  text:{
    color:'white',
    fontSize: normalize(15),
    width: dimensions.bodyWidth *0.95,
    left: dimensions.bodyWidth*0.05,
    top: dimensions.buttonHeight*0.1
  }
});

