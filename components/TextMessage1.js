import { Text, View,  Dimensions, StyleSheet } from 'react-native';
import { colors, dimensions } from '../components/constants';
import { normalize } from '../components/FondNormilize';

import { gs } from '../components/RioGlobalStrings';
import { useSelector } from 'react-redux';

const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width

function TextMessage2(){
    const lang = useSelector(state => state.counter.language);
    
    return (
        <>
            <View style={[styles.triangleCorner]} />
            <View style={styles.rectangle}>
                <View style={{left:'5%',top:'7%',width:'90%', height:'90%'}} >
                    <Text style={styles.BoxText}>{gs['burbujaUrgencia'][lang]}</Text>
                </View>
            </View>
            
        </>
    );
}

export default TextMessage2;

const styles = StyleSheet.create({
    rectangle: {
        position: 'absolute',
        borderRadius: 6,
        width: dimensions.bodyWidth,
        height: ScreenHeight * 0.16,
        backgroundColor: colors.mintGreen,
        top: dimensions.bodyHeight*0.08
    },
    triangleCorner: {
        position: 'absolute',
        top: dimensions.bodyHeight * 0.2,
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
        borderBottomColor: colors.mintGreen,
        transform: [{ rotate: "125deg" }]
      },
    BoxText: {
        color: 'white',
        fontSize: normalize(14),
        //top: dimensions.buttonHeight*0.13,
        position: "absolute",
        width: dimensions.bodyWidth*0.94
    }
});