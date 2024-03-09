import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, PixelRatio, Platform, SafeAreaView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors, dimensions } from '../components/constants';

import Emergency from '../components/Emergency';
import HeaderView from '../components/HeaderView';
import BodyView from '../components/BodyView';
import EmergencyView from '../components/EmergencyView';

import { normalize } from '../components/FondNormilize';

const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width

function SelectorIdioma() {
  const navigation = useNavigation();

  

  function buttonHandler () {
    navigation.navigate('Politica')
  }

  return (
    <SafeAreaView>
        <HeaderView>
          <Text style={styles.title}>Seleccionar idioma de preferencia</Text>
        </HeaderView>

        <BodyView flexDirec = 'row'>
          <TouchableOpacity style={[styles.button, {backgroundColor: colors.blue}]} onPress={buttonHandler}>
            <Text style={styles.buttonText}>Español</Text>
            <Image source={require('../assets/ingresar.png')} resizeMode='contain' style={styles.buttonImage} />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, {backgroundColor: colors.pink}]} onPress={buttonHandler}>
            <Text style={styles.buttonText}>English</Text>
            <Image source={require('../assets/ingresar.png')} resizeMode='contain' style={styles.buttonImage} />
          </TouchableOpacity>
        </BodyView>

        <EmergencyView>
          <Emergency/>
        </EmergencyView>
{/* 
        <View style={{zIndex:3, position: 'absolute'}}>
          <Emergency/>
        </View> */}
    </SafeAreaView>
  );
}

export default SelectorIdioma;

const styles = StyleSheet.create({
  title: {
    //top: dimensions.headerTopTextMargin,
    fontSize: normalize(20),
    color: colors.mintGreen
  },
  button:{
    top: dimensions.bodyHeight /2 ,
    width: dimensions.buttonWidth,
    height: dimensions.buttonHeight/2,
    // borderRadius:3,
    margin: dimensions.separator,
  },
  buttonText:{
    color:'white',
    fontSize: normalize(11),
    // top: ScreenHeight * 0.07,
    // left: ScreenWidth * 0.04
  },
  buttonImage :{
    // width: ScreenWidth * 0.12,
    // height: ScreenHeight * 0.06,
    // top: ScreenHeight * 0.0,
    // left: ScreenWidth * 0.25
  }
});
