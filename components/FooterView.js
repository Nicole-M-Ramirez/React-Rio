import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, PixelRatio, Platform, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors, dimensions } from './constants';

function FooterView(props) {
  const navigation = useNavigation();

  return (
    <View style={[styles.style]}>
      {props.children}
    </View>
  );
}

export default FooterView;

const styles = StyleSheet.create({
    style: {
        top: dimensions.footerTopMargin,
        left: dimensions.leftMargin,
        height: dimensions.footerHeight,
        width: dimensions.bodyWidth,
        position: 'absolute',

    }
});
