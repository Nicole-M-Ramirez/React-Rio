import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image} from 'react-native';
import {colors, dimensions} from '../components/constants';
import React, { useState } from 'react';
import { normalize } from '../components/FondNormilize';
import { Switch } from 'react-native-switch';
import constants from './react-native-calendars/src/commons/constants';

const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width


function LongButtonSwitch({Color, Title, Function, switchText1, switchText2, switchColor, initialState}) {
  
  const [isEnabled, setIsEnabled] = useState(initialState);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <TouchableOpacity style={[styles.buttonView,{backgroundColor:Color}]}>
        
        <View style={{ flexDirection: 'row' ,      justifyContent: 'space-between', alignContent: 'center',
    alignItems: 'center', marginRight:'2%'}}>
        <View style= {{ width: '70%', height: '100%'}}> 
        <Text style={styles.buttonsText}>{Title}</Text>
        </View>
        <View style={{height: '100%', alignContent: 'center', justifyContent:'center', alignItems: 'center', flexDirection: 'column'}}>
        <Switch
            activeText={switchText1}
            inActiveText={switchText2}
            backgroundActive={switchColor}
            backgroundInactive={switchColor}
            circleActiveColor={'white'}
            circleInActiveColor={'white'}
            // innerCircleStyle={{ alignItems: 'center', justifyContent: 'flex-start' }}
            onValueChange={() => {toggleSwitch(); Function(isEnabled);}}
            value={isEnabled}
            style={styles.switchStyle}
            circleSize={30}
            barHeight={37}
            circleBorderWidth={0}
            switchWidthMultiplier={2.5}
            switchLeftPx={10}
            switchRightPx={10}
        />
        </View>
        </View>
      

    </TouchableOpacity>
  );
}

export default LongButtonSwitch;

const styles = StyleSheet.create({
  titleImage :{
    left: dimensions.bodyWidth /3,
    width: dimensions.buttonWidth * 0.7,
    height: dimensions.buttonHeight *0.7,
    margin: dimensions.separator,
  },
 titleText: {
  color: "#4eb5a3",
  fontSize: normalize(20),
  fontWeight: '600',

  },
  buttonView: {
    height: dimensions.buttonHeight/4,
    borderRadius: 8,
    marginTop: dimensions.separator,
  },
  buttonsText: {
    color: 'white',
    fontSize: normalize(13),
    top: dimensions.buttonHeight/16,
    left: dimensions.separator,
  },
  switchStyle: {
    //top: dimensions.buttonHeight*-0.06,
    // left: dimensions.buttonWidth*20,
  },
});
