import { Text, View,  Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, dimensions } from '../components/constants';
import { normalize } from '../components/FondNormilize';
import React, { useState } from 'react';
import {updateContPopUp} from '../redux/slices/counterSlice';


import { gs } from '../components/RioGlobalStrings';
//import { useSelector } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';

const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width

function TextMessage3(){
    const dispatch = useDispatch();
    const contPopUp = useSelector(state => state.counter.contPopUp);
    const lang = useSelector(state => state.counter.language);
    const [popUp, setPopUp] = useState(true)

    function changePopUp (){
        if(popUp){
          setPopUp(false)
          dispatch(updateContPopUp());
        }
      }
    
    return (
        <View style={{position:'absolute', zIndex:1}}>
            {popUp === true && contPopUp === true ?
            <>
                <View style={[styles.triangleCorner]} />
                <View style={styles.rectangle}>
                    <View style={{left:'5%',top:'7%',width:'90%', height:'90%'}} >
                        <Text style={styles.BoxText}>{gs['ExplicacionContacto'][lang]}</Text>
                        <TouchableOpacity onPress={()=>{changePopUp()}}>
                            <Text style={{color: 'white',fontSize: normalize(12),position: "absolute",width: dimensions.bodyWidth*0.3,top:dimensions.buttonHeight*0.7,textDecorationLine:'underline', left:dimensions.bodyWidth*0.68}}>{gs['ConfirmarExplicacion'][lang]}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </>
            :
             <></>}
            
        </View>
    );
}

export default TextMessage3;

const styles = StyleSheet.create({
    rectangle: {
        position: 'absolute',
        borderRadius: 6,
        width: dimensions.bodyWidth,
        height: ScreenHeight * 0.2,
        backgroundColor: colors.purple,
        top: dimensions.bodyHeight*0.3
    },
    triangleCorner: {
        position: 'absolute',
        top: dimensions.bodyHeight * 0.45,
        left: dimensions.bodyWidth * 0.5,
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: ScreenWidth * 0.09,
        borderRightWidth: ScreenWidth * 0.04,
        borderBottomWidth: ScreenHeight * 0.24,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: colors.purple,
        transform: [{ rotate: "200deg" }]
      },
    BoxText: {
        color: 'white',
        fontSize: normalize(12),
        //top: dimensions.buttonHeight*0.13,
        position: "absolute",
        width: dimensions.bodyWidth*0.94
    }
});