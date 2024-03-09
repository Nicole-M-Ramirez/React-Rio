import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, PixelRatio, Platform, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors, dimensions } from './constants';

function EmergencyView(props) {
  const navigation = useNavigation();

  return (
    <View style={[styles.style, {flexDirection: props.flexDirec}]}>
      {props.children}
    </View>
  );
}

export default EmergencyView;

const styles = StyleSheet.create({
    style: {
        top: dimensions.emergencyTopMargin,
        left: dimensions.leftMargin,
        height: dimensions.footerHeight,
        width: dimensions.bodyWidth,
        position: 'absolute',
        borderTopWidth: dimensions.headerHeight *0.03,
        borderColor: colors.mintGreen,
        //backgroundColor:'green'
    }
});
