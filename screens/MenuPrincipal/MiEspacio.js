import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, PixelRatio,Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors, dimensions } from '../../components/constants';

import SixGrid from '../../components/SixGrid';
import Emergency from '../../components/Emergency';
import EmergencyView from '../../components/EmergencyView';
import Encabezado from '../../components/Encabezado';
import BodyView from '../../components/BodyView';
import FooterView from '../../components/FooterView';
import HeaderView from '../../components/HeaderView'
import { normalize } from '../../components/FondNormilize';
import TimeSince from '../../components/TimeSince';
import { useSelector } from 'react-redux';
import { gs } from '../../components/RioGlobalStrings';
import BackLink from '../../components/BackLink';
import BotonConfig from '../../components/BotonConfig';
import TwoThirdsButton from '../../components/TwoThirdsButton';
import { useDispatch } from 'react-redux';
import { updateDateData, decreaseByOne, reportCASIS, addAutolecionData } from '../../redux/slices/counterSlice';

const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width

function MiEspacio({route}) {
  //const { theDate } = route.params;
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const lang = useSelector(state => state.counter.language);
  //const Colors = [colors.deepPurple, colors.pink, colors.blue, colors.greyBlue, colors.purple,colors.mintGreen]
  const Colors = [colors.deepPurple, colors.pink, colors.blue, colors.greyBlue, colors.purple,null]

  //const title = [gs['calendario'][lang], gs['diario'][lang], gs['metas'][lang], gs['logros'][lang],gs['graficas'][lang],gs['exportar'][lang]]
  const title = [gs['calendario'][lang], gs['diario'][lang], gs['metas'][lang], gs['logros'][lang],gs['graficas'][lang],null]

  //const today = new Date();
  const today = new Date();
  const theDate = today.toISOString().substring(0,10);

  console.log(today)

  const showAlert = (dispatch, meta, oldMeta) => {

    let msg;
    msg = gs['reportarAL'][lang];
    if ( meta !==undefined ) msg = msg + ". Hay una meta activa!";
    Alert.alert(
      gs['confirmacion'][lang],
      msg,
      [
        {
          text: 'No',
          style: 'cancel',
        },
        {
          text: gs['si'][lang],
          _onPress: () => {
            //console.log("Confirmed autolesion!!: " + met);
            
            dispatch(reportCASIS({"theDate":theDate}));
            dispatch(addAutolecionData({"fec": theDate}));

            // 2024-07-24 

            // If there is an active Meta and the CASIS falls before the scheduled deadline we 
            // must cancel the congratulations alarm
            //console.log("IN Diary: reporting CASIS at: " + theDate);
            //console.log("IN Diary: reporting CASIS at: " + new Date(today));
            
            if (meta !== undefined) {
              
              if (meta.active) { 
                console.log("IN DIARY Canceling the trigget notification: " + meta.notifID);
                notifee.cancelTriggerNotification(meta.notifID);
              }
            }


            // dispatch(addMeta({ "theDate": new Date().toString().split("(")[0], meta: meta }));
          },
          get onPress() {
            return this._onPress;
          },
          set onPress(value) {
            this._onPress = value;
          },
        },
      ],
      { cancelable: false }
    );
  };

  console.log("MiEspaciox");
  const functions = [
    () => navigation.navigate('RioCalendar', {initialDate: today.toISOString().substr(0,10)}),
    // () => navigation.navigate('Diary'),
    () => navigation.navigate('Diary', {day:today.getDate(),month:today.getMonth(),year:today.getFullYear(), 
      dateString:today.toISOString().substr(0,10), fromScreen:'MiEspacio'}),
    () => navigation.navigate('Metas'),
    () => navigation.navigate('Logros'),
    () => navigation.navigate('Graficas'),
    //() => navigation.navigate('Exportar'),
    ()=>{null},
  ]
  const images = [
    <Image source={require('../../assets/calendario2.png')} resizeMode='contain' style={styles.buttonImage} />,
    <Image source={require('../../assets/diario2.png')} resizeMode='contain' style={styles.buttonImage} />,
    <Image source={require('../../assets/metas2.png')} resizeMode='contain' style={styles.buttonImage} />,
    <Image source={require('../../assets/logros2.png')} resizeMode='contain' style={styles.buttonImage} />,
    <Image source={require('../../assets/graficas2.png')} resizeMode='contain' style={styles.buttonImage} />,
    //<Image source={require('../../assets/exportar2.png')} resizeMode='contain' style={styles.buttonImage} />,
    
    <Image source={null} resizeMode='contain' style={styles.buttonImage} />,
  ]


  return (
    <View>
      <BotonConfig pantalla = 'MenuPrincipal' Back={()=>navigation.navigate('MiEspacio')}/>
      <HeaderView>
      <TimeSince/>
      </HeaderView>

      <BodyView>
      <View style={{top: dimensions.bodyHeight*0.02}}>

        <SixGrid colors={Colors} title={title} functions={functions} images={images}/>
      </View>
      </BodyView>

      <FooterView>
        <View style={{top:dimensions.footerHeight*0.55,width:'50%', position:'absolute',top:dimensions.footerHeight*0.2, }}>
          <BackLink labelBack={gs['volver'][lang]} gotoScreen={"MenuPrincipal"}></BackLink>
        </View>
        <View style={{height:dimensions.footerHeight*0.4,justifyContent: 'center' , alignItems: 'flex-start',top:dimensions.footerHeight*0.5}}>
          <Text style={styles.titleText}>{gs['miEspacio'][lang]}</Text>
        </View>

        {/* 2023-10-11: Valerie me dijo que el botón de Reportar Incidente ya no va en
                    esta pantalla */}

        {/* <TouchableOpacity style={styles.reportView}>
          <Text style={styles.reportText} >Reportar Incidente</Text>

          <Image source={require('../../assets/continuar3.png')}  style={styles.reportArrow} />
        </TouchableOpacity> */}
         {/* <View style={{top:dimensions.footerHeight*0.55,width:'50%', position:'absolute',marginTop: dimensions.separator}}>
            <BackLink labelBack={gs['volver'][lang]} gotoScreen={}></BackLink>
          </View> */}
          <View style={{top:0, left: dimensions.bodyWidth/2, position: 'absolute'}}>
        <TwoThirdsButton label ={gs['reportarAL'][lang]} topMargin = {16} 
          bg = {colors.emergencyRed} row = {0} col = {0} img={require('../../assets/ingresar.png')} active={new Date(today) < new Date()}
          onPress={ () =>{showAlert(dispatch); dispatch(addAutolecionData({"fec": theDate}));} }
          />
  
        </View>
        
      </FooterView>

      <EmergencyView>
          <Emergency/>
        </EmergencyView>
    </View>
  );
}

export default MiEspacio;



const styles = StyleSheet.create({
  titleText: {
    color: "#4eb5a3",
    fontSize: normalize(20),
    fontWeight: '600',
    //top: dimensions.footerHeight*0.2,
    // left: ScreenWidth * 0.08,
  },
  buttonImage :{
    width: ScreenWidth * 0.23,
    height: ScreenHeight * 0.13,
    alignSelf: 'center',
    top: dimensions.buttonHeight /7
  },
  reportView: {
    backgroundColor: colors.emergencyRed,
    borderRadius: 6,
    marginTop: dimensions.separator,
    height:'75%',
    justifyContent: 'center', 
    alignItems: 'flex-start'
  },
  reportText: {
    marginLeft: dimensions.separator+5,
    color: 'white',
    fontWeight: '600',
    fontSize: normalize(13),
    width: '30%',
  },
  reportArrow: {
    width: dimensions.bodyWidth * 0.048,
    height: dimensions.footerHeight * 0.28,
    position: 'absolute',
    left: dimensions.bodyWidth *0.9,
  }
});

