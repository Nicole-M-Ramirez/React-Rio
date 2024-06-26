import { Text, View,  Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, dimensions } from './constants';
import { normalize } from './FondNormilize';
import React, { useState } from 'react';
import {updateMetaPopUp} from '../redux/slices/counterSlice';


import { gs } from './RioGlobalStrings';
//import { useSelector } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';

const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width

function TextMessageMetas(){
    const dispatch = useDispatch();
    const metaPopUp = useSelector(state => state.counter.metaPopUp);
    const lang = useSelector(state => state.counter.language);
    const [popUp, setPopUp] = useState(true)

    function changePopUp (){
        if(popUp){
          setPopUp(false)
          dispatch(updateMetaPopUp());
        }
      }
    
    return (
        <View style={{position:'absolute', zIndex:1}}>
            {popUp === true && metaPopUp === true ?
            <>
                <View style={{left:dimensions.leftMargin ,width:dimensions.bodyWidth, height:dimensions.bodyHeight*0.35, backgroundColor:'rgba(24, 54, 74, 0.8)'}}/>
                <View style={{top: dimensions.bodyHeight*0.48,left:dimensions.leftMargin ,width:dimensions.bodyWidth, height:dimensions.bodyHeight*0.8, backgroundColor:'rgba(24, 54, 74, 0.8)'}}/>
                <View style={[styles.triangleCorner]} />
                <View style={styles.rectangle}>
                    <View style={{left:'5%',top:'7%',width:'90%', height:'90%'}} >
                        <Text style={styles.BoxText}>{gs['MetaspopUp'][lang]}</Text>
                        <TouchableOpacity onPress={()=>{changePopUp()}}>
                            <Text style={{color: 'white',fontSize: normalize(12),position: "absolute",width: dimensions.bodyWidth*0.3,top:dimensions.buttonHeight*0.44,textDecorationLine:'underline', left:dimensions.bodyWidth*0.68}}>{gs['ConfirmarExplicacion'][lang]}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </>
            :
             <></>}
            
        </View>
    );
}

export default TextMessageMetas;

const styles = StyleSheet.create({
    rectangle: {
        position: 'absolute',
        borderRadius: 6,
        width: dimensions.bodyWidth,
        height: ScreenHeight * 0.15,
        backgroundColor: colors.purple,
        top: dimensions.bodyHeight*0.38,
        left: dimensions.leftMargin
    },
    triangleCorner: {
        position: 'absolute',
        top: dimensions.bodyHeight * 0.4,
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