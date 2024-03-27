import React, {useState, useEffect, useContext} from 'react';
import {Calendar, CalendarList, LocaleConfig} from './react-native-calendars';
import {Text, View, Box,StyleSheet, Dimensions,TouchableOpacity}  from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import {StoreContext} from '../../store/context/store';
import Diary from './Diary';
// import rioConstants from '../../constants';
// import { database } from '../../db';
import {colors, dimensions} from './constants'
import HeaderView from '../components/HeaderView'
import TimeSince from './TimeSince';
import { useDispatch, useSelector } from 'react-redux';
import Emergency from './Emergency';
import EmergencyView from './EmergencyView';
import FooterView from './FooterView';
import BackLinkWithDate from './BackLinkWithDate';
import BackLink from './BackLink';
import { gs } from './RioGlobalStrings';
//import { useSelector } from 'react-redux';

const screenWidth =  Dimensions.get("window").width;
const centerX = Dimensions.get("window").width / 2;
const squareSide = Dimensions.get("window").height * 0.202;
const margin = Dimensions.get("window").height * 0.008;
const screenHeight = Dimensions.get("window").height;
const tenPercent = Dimensions.get("window").height * 0.1;



const calendarViewWidth  = dimensions.bodyWidth
const calendarViewLeft  = dimensions.leftMargin
const calendarViewTop  = dimensions.bodyTopMargin

const dummy = {key: 'vacation', color: 'red', selectedDotColor: 'blue'};

const ReduxRecordToMarked = (r) => {
  console.log("ReduxRecordToMarked Converting: " + JSON.stringify(r));
  let m = {};
  for (const key in r) {
    console.log("a Redux record: " + key + " "  + r[key].text);
    if (r[key].text !== undefined && r[key].text.length > 0) {
      m[key] = {selected: false, marked: true, dots: [dummy],moodEmoji: 'otro'} ;
    }
    else {
      m[key] = {selected: false, marked: true, dots: [],moodEmoji: 'otro'} ;
    }   
  }
  console.log("ReduxRecordToMarked returning " + JSON.stringify(m));
  return m;
}

const RioCalendar = (props) => {
  const lang = useSelector(state => state.counter.language);
  const navigation = useNavigation();

  const myDateData = useSelector(state => state.counter.dateData);
  console.log("myDateData:" + myDateData);

  const theMarkedDateMap = ReduxRecordToMarked(useSelector(state => state.counter.dateData));


  const diaryEntry = {key: 'vacation', color: 'red', selectedDotColor: 'blue'};

  return (  
<View >

<HeaderView headerButtons = 'yes'>
  <TimeSince/>
</HeaderView>

<View style={{top: dimensions.bodyTopMarginCal, 
   left: calendarViewLeft,width:dimensions.bodyWidth, justifyContent: 'center'}}>
<Calendar
  // Initially visible month. Default = now
  // initialDate={'2023-03-01'}
  // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
  minDate={'2023-03-10'}
  // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
  maxDate={'2024-07-30'}
  // Handler which gets executed on day press. Default = undefined
disableArrowLeft={false}
disableArrowRight={false}
  onDayPress={day => {
    navigation.navigate('Diary', {day:day.day,month:day.month - 1,year:day.year, dateString:day.dateString, key:'vengo de dia', 
       fromScreen: 'RioCalendar'});
  }}

  // Handler which gets executed on day long press. Default = undefined
  onDayLongPress={day => {
    console.log('selected day', day);
  }}
  // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
  monthFormat={'MMM yyyy'}
  // Handler which gets executed when visible month changes in calendar. Default = undefined
  onMonthChange={month => {
    console.log('month changed', month);
  }}
  // Hide month navigation arrows. Default = false
  // Replace default arrows with custom ones (direction can be 'left' or 'right')
  // Do not show days of other months in month page. Default = false
  hideExtraDays={true}
  // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
  // day from another month that is visible in calendar page. Default = false
  // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
  firstDay={1}
  // Hide day names. Default = false
  hideDayNames={true}
  // Show week numbers to the left. Default = false
  showWeekNumbers={false}
  // Handler which gets executed when press arrow icon left. It receive a callback can go back month
  onPressArrowLeft={subtractMonth => subtractMonth()}
  // Handler which gets executed when press arrow icon right. It receive a callback can go next month
  onPressArrowRight={addMonth => addMonth()}
  // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
  disableAllTouchEventsForDisabledDays={true}
  // Replace default month and year title with custom one. the function receive a date as parameter
  // Enable the option to swipe between months. Default = false
  enableSwipeMonths={false}
  markingType={'multi-dot'}
  style={{
    borderWidth: 1,
    borderColor: 'gray',
    height: 350  
  }}

  theme={{
    backgroundColor:colors.backgroudDarkBlue, //#ffffff',
    calendarBackground: colors.backgroudDarkBlue, // '#ffffff',
    textSectionTitleColor: '#b6c1cd',
    textSectionTitleDisabledColor: '#d9e1e8',
    selectedDayBackgroundColor: '#ffffff',
    selectedDayTextColor: '#2d4150',
    todayTextColor: '#00adf5',
    dayTextColor: '#2d4150',
    textDisabledColor: '#d9e1e8',
    dotColor: 'blue',
    selectedDotColor: '#ff0000',
    arrowColor: 'blue',
    disabledArrowColor: '#d9e1e8',
    monthTextColor: 'blue',
    indicatorColor: 'blue',
    // textDayFontFamily: 'Arial',
    // textMonthFontFamily: 'Arial',
    // textDayHeaderFontFamily: 'Arial',
    textDayFontWeight: '300',
    textMonthFontWeight: 'bold',
    textDayHeaderFontWeight: '300',
    textDayFontSize: 16,
    textMonthFontSize: 16,
    textDayHeaderFontSize: 16
  }}

  
  markedDates={theMarkedDateMap}//rafa == null?  recordToMarked(props.route.params.contextDateData)  : recordToMarked(rafa)}

/>
</View>

<FooterView>
  <View style={{width:'50%', position:'absolute',top:dimensions.footerHeight*0.5}}>
    <BackLink labelBack={gs['volver'][lang]} gotoScreen={'MiEspacio'} ></BackLink>
  </View> 
</FooterView>
<EmergencyView>
          <Emergency/>
        </EmergencyView>

</View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    // paddingTop: 100,
    backgroundColor: "black",
    padding: 0,
    position: "relative",
  },
  basicRect: {
    height: tenPercent,
    width: squareSide * 2 + margin,
    zIndex: 99,
    position: "absolute",
  },

  square: {
    height: squareSide/2,
    width: squareSide/3,
    //borderRadius: 5,
    padding: 0,
    marginBottom: -5,
    marginTop:-10,
    zIndex: 0
  },
  rectangle01: {
     borderWidth: 1
  }
});

export default RioCalendar;
