import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, PixelRatio, Image } from 'react-native';
import { colors, dimensions } from './constants';

import { normalize } from './FondNormilize';

const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width

function Encabezado() {
  return (
    <>
        {/* <View style={{zIndex:3, position: 'absolute'}}>
          <Image source={require('../assets/hogar2.png')} resizeMode='contain' style={styles.headerHouseButton} />
        </View>

        <View style={{zIndex:3, position: 'absolute'}}>
          <Image source={require('../assets/actionMenu.png')} resizeMode='contain' style={[styles.headerHouseButton, {left: ScreenWidth * 0.87,}]} />
        </View> */}

        {/* <View style={styles.topLine}/> */}
        <Text style={styles.text}>Libre de CASIS</Text>
        <View style={styles.middleLine}/>
        <Text style={styles.number}>06.12.20</Text>
        <Text style={styles.dateText}>    D             H          M</Text>
        {/* <View style={styles.bottomLine}/> */}
    </>
  );
}

export default Encabezado;

const styles = StyleSheet.create({
    headerHouseButton:{
      width: ScreenWidth * 0.06,
      height: ScreenHeight * 0.06,
      top: ScreenHeight * 0.03,
      left: ScreenWidth * 0.08,
    },
      middleLine:{
        borderBottomColor: colors.mintGreen,
        borderBottomWidth: ScreenWidth * 0.005,
        width: ScreenWidth * 0.31,
        left: ScreenWidth * 0.25,
        top: ScreenWidth* 0.06,
      },
      dateText:{
        color: colors.mintGreen,
        fontSize: normalize(8),
        top: ScreenHeight * -0.05,
        left: ScreenWidth * 0.58
      },
      text: {
        color: colors.mintGreen,
        fontSize: normalize(12),
        top: ScreenHeight*0.04,
      },
      number:{
        color: colors.mintGreen,
        fontSize: normalize(25),
        top: ScreenHeight * 0.005,
        left: ScreenWidth * 0.57
      },

});
