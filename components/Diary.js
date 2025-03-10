import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,Keyboard,  TouchableWithoutFeedback,TextInput,Pressable , Alert, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect, useCallback, useContext } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Espanol, English } from './Idiomas'
import {colors, dimensions, moodImgMap} from './constants'
import HeaderView from './HeaderView';
import TimeSince from './TimeSince';
import BodyView from './BodyView';
import BackLink from './BackLink';
import FooterView from './FooterView';
import Emergency from './Emergency';
import EmergencyView from './EmergencyView';
import TwoThirdsButton from './TwoThirdsButton';
import { normalize } from './FondNormilize'
import Registro from './Registro';
import BackLinkForDiario from './BackLinkForDiario';
import { getLatestMood, timeNowAsInt } from './RioGlobalFuncs';

import { gs } from '../components/RioGlobalStrings';
import BotonConfig from './BotonConfig';

import { useDispatch, useSelector } from 'react-redux';
import { updateDateData, decreaseByOne, reportCASIS, addAutolecionData,  addDiaryEntry,updateActUso } from '../redux/slices/counterSlice';
import notifee from '@notifee/react-native';
import { ScrollView } from 'react-native-gesture-handler';

//import BotonConfig from './BotonConfig';

// const DismissKeyboard = ({ children }) => (
//   <TouchableWithoutFeedback  onPress={() => Keyboard.dismiss()}>
//     {children}
//   </TouchableWithoutFeedback>
// );

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback  onPress={Keyboard.dismiss} accessible={false}>
    {children}
  </TouchableWithoutFeedback>
);



const getMetaActivaObj = (metas) => {
  for (let i = metas.length - 1; i >=0; i--) {
    // console.log(metas[i].meta);
    if (metas[i].active == true) return metas[i];
  }
  return undefined;
} 

function Diary( props) {
  const lang = useSelector(state => state.counter.language);
  const navigation = useNavigation();
  const [altura, setAltura] = useState(0);

  
  


  const {day} = props.route.params;
  const {month} = props.route.params;
  const {year} = props.route.params;
  const {dateString} = props.route.params;

  const {fromScreen} = props.route.params;

  // RAAN - 2024-04-25
  // Estas hubo que añadir para cuando llegamos al Diario a través de la actividad en los Estados de Ánimo
  const { forDate } = props.route.params;
  const {pantalla} = props.route.params;
  const {img} = props.route.params;

  


  
  const showAlert = (dispatch, meta, oldMeta) => {

    let msg;
    msg = gs['reportarAL'][lang];
    //if ( meta !==undefined ) {msg = msg + ". Hay una meta activa!"} else {msg = msg};
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
            console.log("Confirmed autolesion!!: " + meta);
            
            dispatch(reportCASIS({"theDate":dateString}));
            dispatch(addAutolecionData({"fec": dateString}));

            // 2024-07-24 

            // If there is an active Meta and the CASIS falls before the scheduled deadline we 
            // must cancel the congratulations alarm
            console.log("IN Diary: reporting CASIS at: " + dateString);
            console.log("IN Diary: reporting CASIS at: " + new Date(dateString));
            
            // if (meta !== undefined) {
              
            //   if (meta.active) { 
            //     console.log("IN DIARY Canceling the trigget notification: " + meta.notifID);
            //     notifee.cancelTriggerNotification(meta.notifID);
            //   }
            // }


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

  // console.log("Let it be known that I arrived to this screen from: " + fromScreen);
  console.log("===========Diaro with date string: " + dateString);

  const diarioMap = useSelector(state => state.counter.dateData);
  console.log("===>diarioMap: " +  JSON.stringify(diarioMap));
  // console.log("===>" + day + "---" + month + "---" + year + "====" + dateString);
  const texto = useSelector(state => state.counter.dateData.hasOwnProperty(dateString) ? state.counter.dateData[dateString].text: '' );
  
  let mood = null; 
  
  if (diarioMap !== undefined && diarioMap[dateString] !== undefined && diarioMap[dateString].mood !== undefined) { 
     mood = getLatestMood(diarioMap[dateString].mood).type; 
  }

  // console.log( "AAAAAAAA: " + texto);

  // console.log( "texto: "+ texto  +  "  vs: " +  text) ;
  const [text, setText] = useState(texto);

  const [diarioSelected, setDiarioSelected] = useState(true);



  // console.log("DATEDATE: " + year +  "  ")


  const dispatch = useDispatch();
  useEffect(
    () =>
      navigation.addListener('beforeRemove', (e) => {
        // Prevent default behavior of leaving the screen
        e.preventDefault();
        // console.log("The text: " + text);
        dispatch(updateDateData({"theDate":dateString, "text": text}));
        // tmpDate = month + "/" + day + "/" + year;
        navigation.dispatch(e.data.action);
      }),
    [text, month, day, year] 
  );


  const formatedDate = day.toString().padStart(2, '0')  + '.' + month.toString().padStart(2, '0') + '.' + year % 100;
  const imageSource = require('../assets/back.png');

  const metasFromStore = useSelector(state => state.counter.metas);
  // console.log("All the metas in the store:")
  // for (let i = 0; i < metasFromStore.length; i++)
  //   console.log(metasFromStore[i]);
  const metaActiva = getMetaActivaObj(metasFromStore);
  console.log("IN DIARY, META ACTIVA: " + JSON.stringify(metaActiva));

  // {day => {
  //   navigation.navigate('Diary', {day:day.day,month:day.month,year:day.year, dateString:day.dateString, key:'vengo de dia', 
  //     onGoBack: () => console.log('Will go back from nextComponent')});
  // }}

  function AddDiaryEntree () {
    dispatch(addDiaryEntry({"fecha":dateString, "texto": text}));
  }

  // if (fromScreen === "RegistroUtilidad") {
  //   dispatch(updateActUso({"opcion" : "si", "nombre": nombre}));
  // }
  
  return (
    <>
    <DismissKeyboard>
    <View>
      <View style={{top:dimensions.bodyHeight*-(altura)}}>
      <BotonConfig pantalla = 'Diary' Back={()=>{navigation.navigate('Diary',{day:day,month:month,year:year, dateString:dateString, fromScreen:fromScreen, forDate:forDate, pantalla:pantalla, img:img})}}/>
      <HeaderView>
        <TimeSince/>
      </HeaderView>
      {/* <View style={{top:dimensions.bodyHeight*-(altura)}}> */}
      

      <View style={{left:dimensions.leftMargin, top:dimensions.bodyHeight*0.23}} >


      <View style={{ top:0, height: dimensions.bodyHeight/8, flexDirection: 'row', width: dimensions.bodyWidth,  position:  'absolute'
    }}>
        <View style={{ width: '33%', height: '100%',alignContent: 'center', alignItems: 'flex-start', justifyContent: 'center'}}>
        <TouchableOpacity  style={{height:'100%', width: '100%'}}
        onPress={() => {
          theDate =  new Date(year,month,day);
          theDate = theDate.toISOString().substring(0,10);
          // console.log("THE DATE: " + theDate);
          navigation.navigate('SelectorEmocion', {theDate: theDate})}
        } 
        >
          {mood!= null &&
          <Image
            style={styles.tinyLogo}
            source={moodImgMap[mood]} 
          />}
        </TouchableOpacity>
        </View>


        <View style={{width: '66%',
              flexDirection:'row', height: '100%',alignContent: 'center', alignItems: 'center'}}>


          <TouchableOpacity  style={{height:'100%', width: '25%'}}  
          onPress={() => { 
            dispatch(updateDateData({"theDate":dateString, "text": text}));
            let prevDay = new Date(year,month,day);
            prevDay.setDate(prevDay.getDate()-1);
            let prevDaySt = prevDay.toISOString().substr(0,10);
            setDiarioSelected(true);
            navigation.navigate('Diary', {day:prevDay.getDate(),month:prevDay.getMonth(),
              year:prevDay.getYear() + 1900, dateString:prevDaySt, fromScreen: fromScreen });
            let newText = diarioMap.hasOwnProperty(prevDaySt) ? diarioMap[prevDaySt].text: '';
            // let newMood = diarioMap.hasOwnProperty(prevDaySt) ? diarioMap[prevDaySt].mood: '';
            // console.log(" ==========> The mood now should be: " + newMood);
            setText(newText );
          }
          }>

          <View style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'flex-start',}}>
            <Image source={require('../assets/back.png')}  style={{width: 20, height: 30}} />

          </View>

          </TouchableOpacity>

          <View style={{width: '50%', alignItems: 'center'}}>
            <Text style={styles.date}>{day}/{month + 1}/{year}</Text> 
          </View>


          <TouchableOpacity  style={{height:'100%', width: '25%'}}  
          onPress={() => { 

            dispatch(updateDateData({"theDate":dateString, "text": text}));
            
            let prevDay = new Date(year,month,day);
            prevDay.setDate(prevDay.getDate()+1);
            prevDaySt = prevDay.toISOString().substr(0,10);
            console.log("The next day is ============> " + prevDay);  
            let newText = diarioMap.hasOwnProperty(prevDaySt) ? diarioMap[prevDaySt].text: '';
            setDiarioSelected(true);
            navigation.navigate('Diary', {day:prevDay.getDate(),month:prevDay.getMonth(), fromScreen: fromScreen,
              year:prevDay.getYear() + 1900, dateString:prevDaySt });
            setText(newText );
            
          }
          }>
          <View style={{width: '100%',height: '100%', alignItems: 'flex-end', justifyContent: 'center'}}>
            <Image source={require('../assets/continuar.png')}  style={{width: 20, height: 30}} />
          </View>
          </TouchableOpacity>
          {/* <Text style={styles.date}>{day}/{month}/{year}</Text> */}
          {/* <View style={styles.bottomLine2}/> */}
        </View>
      </View>


      <TwoThirdsButton label ={gs['diario'][lang]} topMargin = {dimensions.bodyHeight/8} 
          bg = {colors.grapeJuice} row = {0} col = {0} img={require('../assets/ingresar.png')} 
          onPress={ () => setDiarioSelected(true)}
      />
      <TwoThirdsButton label ={gs['registro'][lang]} topMargin = {dimensions.bodyHeight/8} 
          bg = {colors.navyBlue} row = {0} col = {1} img={require('../assets/ingresar.png')}
          onPress={ () => setDiarioSelected(false)}  />

      <View style={{ top: dimensions.bodyHeight/8 + dimensions.buttonHeight/3 , 
          height: dimensions.bodyHeight * .60, flexDirection: 'row', width: dimensions.bodyWidth,  
      }}>


      { diarioSelected && <DismissKeyboard>
         <View style={styles.container} >
        <Text style={styles.textContainer}>{gs['comoTeSientes'][lang]}</Text>
        <TextInput
            onBlur = {()=>{setAltura(0);  AddDiaryEntree() }}
            onFocus = {()=>{setAltura(0.45)}}
            multiline={true}
            autoCapitalize={'sentences'}
            style={styles.inputText}
            onChangeText={setText}
            value={text}
            defaultValue={texto}
            textAlignVertical= 'top'
            maxLength={1000}
        />
        </View> 
      </DismissKeyboard> }


      { !diarioSelected && 
      <View style={{width:'100%', height: '100%'}}>
      <Text style={styles.textContainer}>{gs['registro'][lang]}</Text>
        <Registro dateString={dateString}></Registro>
      </View>
      }


{/* () => navigation.navigate('RegistroUtilidad',{img:img, forDate: forDate, pantalla : pantalla}), */}

        </View>
        </View>
        </View>
        {/* </View> */}
        <FooterView>
        <View style={{top:0}}>
        <View style={{top:0, position: 'absolute'}}>
          {fromScreen === "RegistroUtilidad" ? 
        <BackLinkForDiario labelBack={gs['volver'][lang]} gotoScreen={fromScreen} pantalla={pantalla} forDate={forDate} img={img} />    
        : <BackLink labelBack={gs['volver'][lang]} gotoScreen={fromScreen}/>    }

        </View> 
        <View style={{top:0, left: dimensions.bodyWidth/2, position: 'absolute'}}>
        {/* <TwoThirdsButton label ={gs['reportarAL'][lang]} topMargin = {0} 
          bg = {colors.emergencyRed} row = {0} col = {0} img={require('../assets/ingresar.png')} active={new Date(dateString) < new Date()}
          onPress={ () =>{showAlert(dispatch, metaActiva); dispatch(addAutolecionData({"fec": dateString}));} }
          /> */}
          <TouchableOpacity style={emergencyCasisStyle.emergencyCasis} onPress={ () =>{showAlert(dispatch); dispatch(addAutolecionData({"fec": today}));}}>
            <View style={emergencyCasisStyle.imageView}>
              <Image source={require('../assets/ingresar.png')}  style={emergencyCasisStyle.image}  />
            </View>
            <View style={emergencyCasisStyle.textView}>
              <Text style={emergencyCasisStyle.text}>{gs['reportarAL'][lang]}</Text>
            </View>
          </TouchableOpacity>
  
        </View>
        </View> 
        
        
        </FooterView>
        <EmergencyView>
          <Emergency/>
        </EmergencyView>
      
      
      </View>
      </DismissKeyboard>
    </>
  );
}

export default Diary;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    width: dimensions.width,
    height: dimensions.bodyHeight
  },
  topLine:{
    borderBottomColor:"black",
    borderBottomWidth: 2.5,
    width: "83%",
    left: "8%",
    top: '10%',
  },
  middleLine:{
    borderBottomColor:"black",
    borderBottomWidth: 2.5,
    width: "35%",
    left: "32%",
    top: '12%',
  },
  bottomLine:{
    borderBottomColor:"black",
    borderBottomWidth: 2.5,
    // width: "83%",
    // left: "8%",
    // top: '12%',
  },
  dateText:{
    fontSize: normalize(9),
    // top: "6%",
    // left:"69%",
    color: colors.mintGreen
  },
  text: {
    fontSize: normalize(13),
    // top: "13%",
    // left:"8%",
    color: colors.mintGreen
  },
  number:{
    fontSize: normalize(25),
    top: "10.2%",
    left:"69%"
  },


  tinyLogo: {
    width: dimensions.bodyHeight/8 * .8,
    height: dimensions.bodyHeight/8 * .8,
    // left: '8%'
  },
  dateArrows:{
    zIndex:1,
    position: 'absolute',
    // top: '210%',
    fontWeight:'800',
    fontSize: normalize(40),
    color: '#4eb5a3'
  },
  date:{
    // zIndex:1,5
    // position: 'absolute',
    fontSize: normalize(15),
    // top: '235%',
    // left: '57%',
    color: colors.mintGreen
  },
  bottomLine2:{
    zIndex:1,
    position:'relative',
    borderBottomColor: 'yellow',
    borderBottomWidth: 2.5,
    width: "100%",
    // left: "8%",
    // top: '320%',
  },

  inputText: {
    top: 50, //dimensions.bodyTopMargin,
    height: dimensions.bodyHeight * .65,
    width: dimensions.bodyWidth,
    left: 0,
    borderWidth: 2,
    borderColor: colors.mintGreen,
    borderRadius:5,
    position: 'absolute',
    color: 'white',
    padding: '3%',
    //backgroundColor:'grey',
    //padding: 10,
  },
  container: {
    flex: 1,
    // marginTop: 145,
    //justifyContent: "center",
    // marginLeft: "7%",  
    marginRight: 30,
    //alignItems: "center"
  },
  textContainer:{
    fontSize: normalize(16),
    fontWeight:'600',
    left: "1%",
    top: 10,
    textAlignVertical: 'top',
    color: colors.mintGreen,
    borderColor: colors.mintGreen
  },
  buttonText: {
    fontSize: normalize(18),
    fontWeight:'600',
    left: 0,
    // left: "1%"
    // top: 0,
    // position: 'absolute',
    color: colors.mintGreen
  },
  scrollView: {
    top: dimensions.bodyHeight*0,
    height: dimensions.bodyHeight*0.6,
    //backgroundColor: 'grey',
  },
});

const emergencyCasisStyle = StyleSheet.create({
  emergencyCasis:{
    borderRadius: 6,
    width:dimensions.bodyWidth*0.49,
    height:dimensions.footerHeight*0.7,
    backgroundColor:colors.emergencyRed,
    top: dimensions.footerHeight*0,
    left:dimensions.bodyWidth*0.01
  },
  normal: {
    height: dimensions.buttonHeight * 1/ 3, 
    width: dimensions.buttonWidth,
    flexDirection: 'row',
    borderRadius: 5,
    position: 'absolute',
  },
  imageView: {
    height: '100%', 
    width: '20%',
    justifyContent: 'flex-start',
    alignItems: 'center', 
    alignContent: 'center',
    left: (dimensions.bodyWidth*0.49)*0.1,
    top: (dimensions.footerHeight*0.2)*0.2
    // backgroundColor: 'yellow'
  },
  textView: {
    height: '100%', 
    justifyContent: 'flex-start',
    width: '75%', 
    //marginLeft:'6%', 
    left: (dimensions.bodyWidth*0.49)*0.5,
    top: (dimensions.footerHeight*0.2)*-2.7,
    alignItems: 'flex-start', 
    alignContent: 'center'
  },
  text: {
    fontSize: normalize(12),
    color: "white"
  },
  image: {
    height: dimensions.buttonHeight * .81 * .35,
    width: dimensions.buttonHeight * .81 * .35,
    margin: '5%',
  }
})