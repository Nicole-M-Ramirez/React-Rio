import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, PixelRatio, TouchableOpacity, Image} from 'react-native';
import { colors } from '../components/constants';
import { dimensions } from '../components/constants';
import { normalize } from '../components/FondNormilize';
import { useNavigation } from '@react-navigation/native';

import TimeSince from '../components/TimeSince';
import HeaderView from '../components/HeaderView';
import BodyView from '../components/BodyView';
import FooterView from '../components/FooterView';
import EmergencyView from '../components/EmergencyView';
import Emergency from '../components/Emergency';

const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width


function ShortButton({Top, Color, Nav, Title}) {
  const navigation = useNavigation();

  return (
    <View>
        <TouchableOpacity onPress={Nav} style={[styles.button, {
                                                  backgroundColor:Color,
                                                  //top: Top*(dimensions.buttonHeight + dimensions.separator),
                                                  left: 0,
                                                  width : dimensions.buttonWidth,
                                                  height : dimensions.buttonHeight/5,
                                                  marginBottom: 8
                                                  //position: 'absolute' 
                                                }]}>
          <Text style={styles.buttonText}>{Title}</Text>
        </TouchableOpacity>
  </View>
  );
}

export default ShortButton;

const styles = StyleSheet.create({
      button:{
        borderRadius:5,
      },
      buttonText:{
        color:'white',
        fontSize: normalize(13),
        top: (dimensions.buttonHeight/5)*0.2,
        left: dimensions.separator,
        width: dimensions.bodyWidth*0.4 
      }
});