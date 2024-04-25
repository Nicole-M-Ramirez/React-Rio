import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from 'react-native';
import {colors, dimensions} from '../components/constants';
import React, { useState } from 'react';
import { normalize } from '../components/FondNormilize';
import { useNavigation } from '@react-navigation/native';


const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width


function DropDown({Color, Title, Function,Image,DropSize, contText, titleHeigth, downImage}) {
    
  const navigation = useNavigation();
  
  let change = false;
  const [image, setImage] = useState(Image)
  const [Size, setSize] = useState(
    <TouchableOpacity style={[styles.buttonView,{backgroundColor:Color}]} onPress={Resize}>
        <Text style={[styles.buttonsText,{top:(dimensions.buttonHeight/2)*titleHeigth,}]}>{Title}</Text>
        <View style={{position: 'absolute', zIndex: 0,  alignItems: 'flex-end',justifyContent: 'center',}}>
            {Image}
        </View>
    </TouchableOpacity>
  ); 

  function Resize () {
    if (change === false){
        change = true
        setImage(downImage)

        setSize(
            <TouchableOpacity style={[styles.buttonView,{height: DropSize,backgroundColor:Color}]} onPress={Resize}>
                <Text style={[styles.buttonsText,{top:(dimensions.buttonHeight/2)*titleHeigth,}]}>{Title}</Text>
                <View style={{position: 'absolute', zIndex: 0,  alignItems: 'flex-end',justifyContent: 'center',}}>
                    {downImage}
                </View>
                <Text style={{width:dimensions.buttonWidth*1.99,color:'white', fontSize:normalize(14),top:20, left:dimensions.separator, marginTop:dimensions.bodyWidth*0.07}}>{contText}</Text>
            </TouchableOpacity>
        )
    }
    else{
        change = false
        setImage(Image)

        setSize(
            <TouchableOpacity style={[styles.buttonView,{backgroundColor:Color}]} onPress={Resize}>
              <Text style={[styles.buttonsText,{top:(dimensions.buttonHeight/2)*titleHeigth,}]}>{Title}</Text>
              <View style={{position: 'absolute', zIndex: 0,  alignItems: 'flex-end',justifyContent: 'center',}}>
                {image}
              </View>
            </TouchableOpacity>
        )
    }
  }
  
  return (
    <View>
        {Size}
    </View>
  );
}

export default DropDown;

const styles = StyleSheet.create({
  titleImage :{
    left: dimensions.bodyWidth /3,
    width: dimensions.buttonWidth * 0.7,
    height: dimensions.buttonHeight *0.7,
    margin: dimensions.separator,
  },
 titleText: {
  color: "#4eb5a3",
  fontSize: normalize(18),
  fontWeight: '600',
  },
  buttonView: {
    height: dimensions.buttonHeight/3,
    borderRadius: 8,
    marginTop: dimensions.separator,
  },
  buttonsText: {
    // top:(dimensions.buttonHeight/2)*titleHeigth,
    color: 'white',
    fontSize: normalize(13),
    //top: dimensions.buttonHeight/18,
    left: dimensions.separator,
    width: dimensions.bodyWidth*0.8,
    position: 'absolute',
  }
});
