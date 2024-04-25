import { Text, View,  Dimensions, StyleSheet } from 'react-native';
import { colors, dimensions } from '../components/constants';
import { normalize } from '../components/FondNormilize';
import { backgroundColor } from './react-native-calendars/src/style';

import { gs } from '../components/RioGlobalStrings';
import { useSelector } from 'react-redux';
import FootherTextBox from './FootherTextBox';

const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width

function TextMessage2(){
    const lang = useSelector(state => state.counter.language);

    return (
        <>
            <View style={[styles.triangleCorner]} />
            <View style={styles.rectangle}>
                <View style={{left:'5%',width:dimensions.bodyWidth*0.9, height:dimensions.bodyHeight*0.23}} >
                    <Text style={styles.BoxText}>{gs['burbujaContador'][lang]}</Text>
                </View>
            </View>
        </>
    );
}

export default TextMessage2;

const styles = StyleSheet.create({
    rectangle: {
        borderRadius: 6,
        top:dimensions.bodyHeight*0.02,
        width: dimensions.bodyWidth,
        height: dimensions.bodyHeight*0.25,
        backgroundColor: colors.mintGreen,
    },
    triangleCorner: {
        width: 0,
        height: 0,
        top:dimensions.dayHeight*0.35,
        left: dimensions.bodyWidth * 0.76,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: ScreenWidth * 0.11,
        borderRightWidth: ScreenWidth * 0.0,
        borderBottomWidth: ScreenHeight * 0.1,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: colors.mintGreen,
        transform: [{ rotate: "0deg" }]
      },
    BoxText: {
        position: 'absolute',
        color: 'white',
        fontSize: normalize(15),
        top: dimensions.buttonHeight*0.15
    }
});