import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, PixelRatio, Platform, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors, dimensions } from './constants';

function BodyView(props) {
  const navigation = useNavigation();

  return (
    <View style={[styles.style, {flexDirection: props.flexDirec}]}>
      {props.children}
    </View>
  );
}

export default BodyView;

const styles = StyleSheet.create({
    style: {
        top: dimensions.bodyTopMargin,
        left: dimensions.leftMargin,
        height: dimensions.bodyHeight,
        width: dimensions.bodyWidth,
        position: 'absolute' ,
        //backgroundColor:'grey'
    }
});
