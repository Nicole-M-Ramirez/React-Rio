import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, PixelRatio, Platform, SafeAreaView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors, dimensions } from '../components/constants';

import Emergency from '../components/Emergency';
import HeaderView from '../components/HeaderView';
import BodyView from '../components/BodyView';
import EmergencyView from '../components/EmergencyView';
import FootherInicio from '../components/FootherInicio';

import BackLink from '../components/BackLink';
import NextLink from '../components/NextLink';
import FooterView from '../components/FooterView'
import { normalize } from '../components/FondNormilize';
import HeaderInicio from '../components/HeaderInicio';

const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width

import { useDispatch, useSelector } from 'react-redux';
import { updateLang } from '../redux/slices/counterSlice';

import { registerFirstDate } from '../redux/slices/counterSlice';
import { Notifications } from 'react-native-notifications';
import PushNotificationIOS from "@react-native-community/push-notification-ios";
import PushNotification from "react-native-push-notification";

import notifee from '@notifee/react-native';
function SelectorIdioma() {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  function buttonHandler (lang) {
    PushNotificationIOS.requestPermissions();
    

    dispatch(updateLang({"lang": lang}));
    //navigation.navigate('Politica',{pantalla: 'SelectorDeLenguage', regresarTitulo:'noAcepto'})
    navigation.navigate('PaginaBienvenida')
  }
  

  
  
  dispatch(registerFirstDate());


  async function onDisplayNotification() {
    // Request permissions (required for iOS)
    await notifee.requestPermission()

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    // Display a notification
    await notifee.displayNotification({
      title: 'Notification Title',
      body: 'Main body content of the notification',
      android: {
        channelId,
        smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
        // pressAction is needed if you want the notification to open the app when pressed
        pressAction: {
          id: 'default',
        },
      },
    });
  }

  return (
    <View>
        <HeaderInicio>
          <Text style={styles.title}>Seleccionar idioma de preferencia / Select preferred language</Text>
        </HeaderInicio>

        <BodyView flexDirec = 'row'>
          <TouchableOpacity style={[styles.button, {backgroundColor: colors.blue}]} onPress={() => buttonHandler('es')}>
            <View style={styles.buttonTextView} >
            <Text style={styles.buttonText}>Español</Text>
            </View>
            <View style={styles.buttonImgView}>
              <Image source={require('../assets/ingresar.png')} resizeMode='contain' style={styles.buttonImage} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, {backgroundColor: colors.pink}]} onPress={() => buttonHandler('en')}>
          <View style={styles.buttonTextView} >
            <Text style={styles.buttonText}>English</Text>
            </View>
            <View style={styles.buttonImgView}>
              <Image source={require('../assets/ingresar.png')} resizeMode='contain' style={styles.buttonImage} />
            </View>
          </TouchableOpacity>


        </BodyView>
        


        <EmergencyView>
          {/* <Emergency/> */}
          <FootherInicio/>
        </EmergencyView>
{/* 
        <View style={{zIndex:3, position: 'absolute'}}>
          <Emergency/>
        </View> */}
    </View>
  );
}

export default SelectorIdioma;

const styles = StyleSheet.create({
  title: {
    fontSize: normalize(17),
    color: colors.mintGreen,
    width : dimensions.bodyWidth,
    //backgroundColor: 'grey',
    height: dimensions.headerHeight*2
    //color: colors.mintGreen,
    // fontSize:normalize(17),
    // width: dimensions.bodyWidth *1,
    // paddingTop: dimensions.emergencyHeight  * 0.1,

  },
  button:{
    top: dimensions.bodyHeight*0.45 ,
    width: dimensions.buttonWidth,
    height: dimensions.shortButtonHeight,
    borderRadius:3,
    margin: dimensions.separator / 2,
  },
  buttonText:{
    color:'white',
    fontSize: normalize(13),
    top: dimensions.shortButtonHeight/1.5,
    left: ScreenWidth * 0.04,
    fontFamily: 'HelveticaNeue-Medium'
  },
  buttonImage :{
    width: dimensions.shortButtonHeight /2,
    height: dimensions.shortButtonHeight /2,
    // top: ScreenHeight * 0.0,
    // left: ScreenWidth * 0.25
    position: 'absolute'
  },
  buttonTextView : {
    height: dimensions.shortButtonHeight
  },
  buttonImgView : {
    height: dimensions.shortButtonHeight,
    left: dimensions.buttonWidth / 2,
    width: dimensions.buttonWidth / 2,
    position: 'absolute',
    justifyContent: "center",
    alignItems: "center",
    verticalAlign: "middle"
    
  }
});


