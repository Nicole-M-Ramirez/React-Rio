import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, PixelRatio, Platform, SafeAreaView, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors, dimensions } from '../components/constants';

import Emergency from '../components/Emergency';
import HeaderView from '../components/HeaderView';
import BodyView from '../components/BodyView';
import EmergencyView from '../components/EmergencyView';
import TextMessage1 from '../components/TextMessage1';

import BackLink from '../components/BackLink';
import NextLink from '../components/NextLink';
import FooterView from '../components/FooterView'
import { normalize } from '../components/FondNormilize';
import TimeSince from '../components/TimeSince';

import { gs } from '../components/RioGlobalStrings';
import { useSelector } from 'react-redux';

const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width

function Expicacion1() {
  const navigation = useNavigation();

  const lang = useSelector(state => state.counter.language);

  function buttonHandler () {
    navigation.navigate('Politica')
  }

  return (
    <SafeAreaView>
        <HeaderView>
           <TimeSince/>
        </HeaderView>

        <BodyView>
            <View style={{top:ScreenHeight*0.43}}>
                <TextMessage1/>
            </View>

          {/* <View style={{top:ScreenHeight*-0.09}}>
            <NextLink labelNoAcepto={"Continuar"} gotoScreen={'Explicacion2'}></NextLink>
          </View> */}
        </BodyView>
        
        <FooterView>
          <View style={{left: '50%', width:'50%', position:'absolute', marginTop: dimensions.separator}}>
            <NextLink labelNoAcepto={gs['continuar'][lang]} gotoScreen={'Explicacion2'}></NextLink>
          </View>          
        </FooterView>  
        
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

export default Expicacion1;

const styles = StyleSheet.create({
    // ImageViewDimetions:{
    //   backgroundColor: 'grey',
    //   height: dimensions.bodyHeight*0.2,
    //   top: dimensions.bodyHeight*0.08,
    // },
    fecha:{
        fontSize: normalize(10),
        color: colors.mintGreen,
        left: dimensions.bodyWidth * 0.6,
    },
    hora:{
        fontSize: normalize(30),
        fontWeight: '600',
        color: colors.mintGreen,
        left: dimensions.bodyWidth * 0.55,
    },
    rectangle: {
      marginTop: dimensions.separator*11,
      width: 191 * 2,
      height: 150,
      backgroundColor: colors.mintGreen,
    },
    // Image :{
    //     width: dimensions.buttonWidth+410,
    //     height: dimensions.buttonHeight+410,
    //     top: dimensions.bodyHeight *-0.38,
    //     left:dimensions.bodyWidth * -0.25,
    //     position: 'absolute'
    //   },
    // ImageText: {
    //     color: 'white',
    // },

});


