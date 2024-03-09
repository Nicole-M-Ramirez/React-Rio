import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors, dimensions } from '../../components/constants';
import { normalize } from '../../components/FondNormilize';
import React, { useState } from 'react';

import HeaderView from '../../components/HeaderView';
import BodyView from '../../components/BodyView';
import EmergencyView from '../../components/EmergencyView';
import FooterView from '../../components/FooterView';
import Emergency from '../../components/Emergency';
import TimeSince from '../../components/TimeSince';
import BackLink from '../../components/BackLink';


const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width



function ConfirmExport() {

  return (
    <View>
      <HeaderView headerButtons = 'yes'>
        <TimeSince  />
      </HeaderView>

      <BodyView>
        <View style={[styles.TextView,{backgroundColor:colors.purple}]}>
            <Text style={styles.text}>Se ha enviado con éxito al siguiente correo: example@email.com</Text>
        </View>
      </BodyView>

      <FooterView> 
        <View style={{height:'25%', width:'50%', position:'absolute',marginBottom: dimensions.separator}}> 
          <BackLink labelBack={"Regresar"} gotoScreen={'MiEspacio'}/> 
        </View> 

      </FooterView>

      <EmergencyView>
          <Emergency/>
      </EmergencyView>
    </View>
  );
}

export default ConfirmExport;

const styles = StyleSheet.create({
    TextView: {
        width: dimensions.bodyWidth,
        height: dimensions.buttonHeight/1.2,
        marginTop: dimensions.bodyHeight *0.3,
        borderRadius:5
      },
      text:{
        color:'white',
        fontSize: normalize(13),
        width: dimensions.bodyWidth *0.97,
        left: dimensions.bodyWidth*0.07,
        top: dimensions.buttonHeight*0.25
      }
});
