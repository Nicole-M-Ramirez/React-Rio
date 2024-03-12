import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, PixelRatio, ScrollView, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors, dimensions } from '../../components/constants';

import { titles } from '../../Diccionario/español';
import { buttons } from '../../Diccionario/español';
import Encabezado from '../../components/Encabezado';
import Emergency from '../../components/Emergency';
import HeaderView from '../../components/HeaderView';
import BodyView from '../../components/BodyView';
import EmergencyView from '../../components/EmergencyView';
import FooterView from '../../components/FooterView';
import AceptoNoAcepto from '../../components/AceptoNoAcepto';
import TimeSince from '../../components/TimeSince';
import { updatePasswordDelete } from '../../redux/slices/counterSlice';

import BackLink from '../../components/BackLink';
import NextLink from '../../components/NextLink';

import { normalize } from '../../components/FondNormilize';

import { gs } from '../../components/RioGlobalStrings';

import { useSelector, useDispatch } from 'react-redux';

// const ScreenHeight = Dimensions.get("window").height
// const ScreenWidth = Dimensions.get("window").width


function ConfirmarBorrar() {
    const navigation = useNavigation();
    const passwordState = useSelector(state => state.counter.setPassword);
    const lang = useSelector(state => state.counter.language);
    const dispatch = useDispatch();

    function borrar () {
        console.log('borrando...')
        dispatch(updatePasswordDelete({"pass":'00000'}));
        navigation.navigate('Configuracion')
    }

  return (
    <View>
      <HeaderView>
        <TimeSince/>
      </HeaderView>

      <BodyView>
        <Text style={styles.textEx}>{gs['confirmarBorrar'][lang]}</Text>

            <View>
                <TouchableOpacity style={[styles.buttonView,{backgroundColor:colors.emergencyRed, marginTop: dimensions.bodyHeight*0.07,}]} onPress={() => borrar()}>
                    <Text style={styles.buttonsText}>{gs['borrar'][lang]}</Text>
                    
                </TouchableOpacity>

                <TouchableOpacity style={[styles.buttonView,{backgroundColor:colors.mintGreen,}]} onPress={() => navigation.navigate('PasswordMenu')}>
                    <Text style={styles.buttonsText}>{gs['volver'][lang]}</Text>
                </TouchableOpacity>
            </View>
    
      </BodyView>

      

      <EmergencyView>
          <Emergency/>
        </EmergencyView>
    </View>
  );
}

export default ConfirmarBorrar;

const styles = StyleSheet.create({
  title: {
    top: dimensions.headerHeight*0.25,
    left:dimensions.bodyWidth*0.71,
    fontSize: normalize(20),
    color: colors.mintGreen
  },
  textEx: {
    color: colors.mintGreen,
    fontSize: normalize(18),
    marginTop: dimensions.bodyHeight *0.08,
    //marginLeft : dimensions.bodyWidth*0.2,
    left: dimensions.bodyWidth*0.1,
    marginBottom: dimensions.bodyHeight*0.1
  },
  buttonView: {
    height: dimensions.buttonHeight/3,
    borderRadius: 8,
    marginTop: dimensions.bodyHeight*0.02,
  },
  buttonsText: {
    color: 'white',
    fontSize: normalize(16),
    top: dimensions.buttonHeight/12,
    left: dimensions.bodyWidth*0.4,
  },
  buttonImage: {
    width: dimensions.buttonWidth/5,
    height: dimensions.buttonHeight/5,
    top: (dimensions.buttonHeight/3)*0.2,
    left: dimensions.buttonWidth*1.7,
  }
});


