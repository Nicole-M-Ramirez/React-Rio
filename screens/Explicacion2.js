import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, PixelRatio, Platform, SafeAreaView, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors, dimensions } from '../components/constants';

import Emergency from '../components/Emergency';
import HeaderView from '../components/HeaderView';
import BodyView from '../components/BodyView';
import EmergencyView from '../components/EmergencyView';
import TextMessage2 from '../components/TextMessage2';

import BackLink from '../components/BackLink';
import NextLink from '../components/NextLink';
import FooterView from '../components/FooterView'
import { normalize } from '../components/FondNormilize';
import TimeSince from '../components/TimeSince';

import { gs } from '../components/RioGlobalStrings';
import { useSelector } from 'react-redux';

const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width

function Expicacion2() {
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
          <TextMessage2/>
          {/* <NextLink labelNoAcepto={"Continuar"} gotoScreen={'MenuPrincipal'}></NextLink> */}
        </BodyView>
        
        <FooterView>
          <View style={{left: '50%', width:'50%', position:'absolute', marginTop: dimensions.separator}}>
            <NextLink labelNoAcepto={gs['continuar'][lang]} gotoScreen={'MenuPrincipal'}></NextLink>
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

export default Expicacion2;

const styles = StyleSheet.create({
});


