import { StyleSheet, Text, View, TouchableOpacity, Dimensions, PixelRatio, Platform, Image} from 'react-native';
import {colors, dimensions} from '../components/constants';
import { normalize } from './FondNormilize';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { updateTimeAceleration} from '../redux/slices/counterSlice';

function AcelerarTiempo (){
    const dispatch = useDispatch();
    const navigation = useNavigation();
    return(
        <View>
            <Text style={styles.textStyle}>Para acelerar el tiempo, oprima la velocidad que desea. Para volver al tiempo original, toque el boton para cancelar. Para salir de la pantalla, oprima salir.</Text>
            <TouchableOpacity style={[styles.buttonView,{backgroundColor:colors.blue,top:dimensions.bodyHeight*0.3 ,}]} onPress={()=>{dispatch(updateTimeAceleration({"time" : 300}));}}>
                <Text style={styles.buttonsText}>300 segundos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.buttonView,{backgroundColor:colors.blue,top:dimensions.bodyHeight*0.3 ,}]} onPress={()=>{dispatch(updateTimeAceleration({"time" : 400}));}}>
                <Text style={styles.buttonsText}>400 segundos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.buttonView,{backgroundColor:colors.blue,top:dimensions.bodyHeight*0.3 ,}]} onPress={()=>{dispatch(updateTimeAceleration({"time" : 500}));}}>
                <Text style={styles.buttonsText}>500 segundos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.buttonView,{backgroundColor:colors.emergencyRed,top:dimensions.bodyHeight*0.3 ,}]} onPress={()=>{dispatch(updateTimeAceleration({"time" : 3600}))}}>
                <Text style={styles.buttonsText}>cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.buttonView,{backgroundColor:colors.mintGreen,top:dimensions.bodyHeight*0.3 ,}]} onPress={()=>{navigation.navigate("MenuPrincipal")}}>
                <Text style={styles.buttonsText}>salir</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AcelerarTiempo;

const styles = StyleSheet.create({
    textStyle :{
        color: 'white',
        fontSize: normalize(15),
        top: dimensions.bodyHeight*0.2,
        width: dimensions.bodyWidth,
        left:dimensions.leftMargin,
    },
    buttonView: {
        height: dimensions.buttonHeight/4,
        width: dimensions.bodyWidth,
        borderRadius: 8,
        marginTop: dimensions.separator,
        left: dimensions.leftMargin
      },
      buttonsText: {
        color: 'white',
        fontSize: normalize(11),
        top: dimensions.buttonHeight/16,
        left: dimensions.separator,
      }
})