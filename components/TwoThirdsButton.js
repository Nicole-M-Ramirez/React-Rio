import React from 'react';
import {Text, View,Image, TouchableOpacity, StyleSheet} from 'react-native';
import { normalize } from './FondNormilize'
import { dimensions } from './constants';
const TwoThirdsButton = ({img, label, bg, topMargin, onPress, row, col, active}) => {
  const buttonHeight = dimensions.buttonHeight * 1 / 3; 
  const rowHeight = buttonHeight + dimensions.separator;
  const colWidth = dimensions.buttonWidth + dimensions.separator;
  
  if (active === undefined) active = true; 

  if (!active) bg = 'gray';

  // console.log("Two THirds: active: " + active);

  return (
    <TouchableOpacity onPress={onPress} disabled={!active}
      style={[styles.normal, {backgroundColor: bg,
        top:  topMargin + row * rowHeight , left: col * colWidth }
    ]}>

      <View style={styles.textView}>
        <Text style={styles.text}>{label}</Text>
      </View>
      <View style={styles.imageView}>
        <Image source={img}  style={styles.image}  />
      </View>
    </TouchableOpacity>
  );
};

export default TwoThirdsButton;

const styles = StyleSheet.create({

  normal: {
    height: dimensions.buttonHeight * 1/ 3, 
    width: dimensions.buttonWidth,
    flexDirection: 'row',
    borderRadius: 5,
    position: 'absolute'
  },
  imageView: {
    height: '100%', 
    width: '20%',
    justifyContent: 'flex-start',
    alignItems: 'center', 
    alignContent: 'center', 
    // backgroundColor: 'yellow'
  },
  textView: {
    height: '100%', 
    justifyContent: 'flex-start',
    width: '75%', 
    marginLeft:'5%', 
    alignItems: 'flex-start', 
    alignContent: 'center'
  },
  text: {
    fontSize: normalize(12),
    color: "white"
  },
  image: {
    height: dimensions.buttonHeight * .66 * .20,
    width: dimensions.buttonHeight * .66 * .20,
    margin: '5%',
  }
});