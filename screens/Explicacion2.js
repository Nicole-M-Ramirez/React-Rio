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
import FootherTextBox from '../components/FootherTextBox';

import { gs } from '../components/RioGlobalStrings';
import { useSelector } from 'react-redux';
import HeaderInicio from '../components/HeaderInicio';

import { useDispatch} from 'react-redux';
import { register } from '../redux/slices/counterSlice';


const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width


function Expicacion2() {
  const navigation = useNavigation();

  const lang = useSelector(state => state.counter.language);

  const dispatch = useDispatch();

  dispatch(register());

  function buttonHandler () {
    navigation.navigate('Politica')
  }

  return (
    <View>
        <HeaderInicio>
           <Text style={{color:colors.mintGreen,left: dimensions.bodyWidth*0.7, fontSize:normalize(9), top: dimensions.headerHeight*0.2, position:'absolute'}}>   D       H      M</Text>
           <Text style={{color:colors.mintGreen,left: dimensions.bodyWidth*0.71, fontSize:normalize(16), top: dimensions.headerHeight*0.4, position:'absolute'}}>00.00.00</Text>
        </HeaderInicio>
       

        <BodyView>
          <TextMessage2/>
          {/* <NextLink labelNoAcepto={"Continuar"} gotoScreen={'MenuPrincipal'}></NextLink> */}
        </BodyView>
        
        <FooterView>
          <View style={{left: '50%', width:'50%', position:'absolute', top: dimensions.footerHeight*0.7}}>
            <NextLink labelNoAcepto={gs['continuar'][lang]} gotoScreen={'MenuPrincipal'}></NextLink>
          </View>          
        </FooterView> 
        <EmergencyView>
          {/* <Emergency/> */}
          <FootherTextBox/>
        </EmergencyView>
{/* 
        <View style={{zIndex:3, position: 'absolute'}}>
          <Emergency/>
        </View> */}
    </View>
  );
}

export default Expicacion2;

const styles = StyleSheet.create({
});


