import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, PixelRatio } from 'react-native';

const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');


const scale = SCREEN_WIDTH / 320;

function normalize(size) {
  const newSize = size * scale 
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}

function Comunidad() {
  return (
    <>
    </>
  );
}

export default Comunidad;

const styles = StyleSheet.create({});
