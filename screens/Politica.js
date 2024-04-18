import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, PixelRatio, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors, dimensions } from '../components/constants';

import { titles } from '../Diccionario/español';
import { buttons } from '../Diccionario/español';
import Encabezado from '../components/Encabezado';
import Emergency from '../components/Emergency';
import HeaderView from '../components/HeaderView';
import BodyView from '../components/BodyView';
import EmergencyView from '../components/EmergencyView';
import FooterView from '../components/FooterView';
import AceptoNoAcepto from '../components/AceptoNoAcepto';

import BackLink from '../components/BackLink';
import NextLink from '../components/NextLink';

import { normalize } from '../components/FondNormilize';

import { gs } from '../components/RioGlobalStrings';
// const ScreenHeight = Dimensions.get("window").height
// const ScreenWidth = Dimensions.get("window").width

import { useSelector } from 'react-redux';
function Politica({route}) {

    const navigation = useNavigation();
    const { pantalla} = route.params;
    const { regresarTitulo} = route.params;

    const lang = useSelector(state => state.counter.language);

  return (
    <View>
      {/* <View style={{zIndex:3, position: 'absolute'}}>
        <Image source={require('../assets/hogar2.png')} resizeMode='contain' style={styles.headerHouseButton} />
      </View>

      <View style={{zIndex:3, position: 'absolute'}}>
        <Image source={require('../assets/actionMenu.png')} resizeMode='contain' style={[styles.headerHouseButton, {left: ScreenWidth * 0.87,}]} />
      </View> */}
      <HeaderView>
        <Text style={styles.title}>{gs['politicaDePrivacidad'][lang]}</Text>
      </HeaderView>

      <View style={{position:'relative', 
        marginTop: dimensions.bodyTopMargin - dimensions.headerHeight + dimensions.separator*2, 
        marginLeft: dimensions.leftMargin,
        height: dimensions.bodyHeight,
        width: dimensions.bodyWidth}}>
      <View style={styles.textBox}>
          <ScrollView>
            <Text style={styles.boxTexts}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce congue dolor velit, vitae convallis eros fringilla id. Etiam finibus scelerisque lorem laoreet viverra. Duis justo purus, hendrerit sed venenatis ut, consequat nec massa. Donec varius dictum odio, sollicitudin accumsan enim faucibus at. Aliquam vel dictum leo, sit amet varius elit. Cras sagittis elit et mattis placerat. Donec quis tortor in augue luctus semper eget nec lorem. Sed iaculis pharetra lacus eget laoreet. Aliquam finibus, orci nec egestas vehicula, lectus mi sodales augue, at semper lorem neque molestie tellus. Ut molestie tincidunt molestie. Suspendisse tincidunt nulla ac porta egestas. Integer sit amet sem commodo, eleifend lacus quis, facilisis nisl. Proin interdum, velit quis fermentum vulputate, est ante volutpat ante, vitae aliquet risus nulla commodo turpis. Integer at felis vitae turpis dictum sodales venenatis vitae magna.

Sed egestas sem eget egestas suscipit. Nunc a dui quis diam vulputate imperdiet sit amet nec mauris. Integer felis mi, rutrum non enim id, bibendum tristique sem. Etiam non convallis velit. Sed laoreet congue tellus. Nullam fermentum elit quis erat euismod consequat. Aliquam ut libero tempor, sollicitudin nisl eget, bibendum eros.

Aliquam vel auctor urna. Pellentesque varius in quam accumsan dapibus. Phasellus imperdiet tortor at consectetur ullamcorper. Pellentesque convallis tellus eu ipsum venenatis, quis facilisis augue finibus. Nulla id volutpat dolor, eget ultrices eros. Donec egestas eget lacus a lacinia. Fusce enim lacus, congue sed vulputate in, ultricies non velit. Mauris viverra iaculis urna at accumsan. Suspendisse vel sapien in elit euismod auctor. Vivamus mattis lacus eu nunc auctor, nec iaculis nisl dignissim. Nullam at lorem posuere, blandit ipsum in, venenatis massa. Nunc porta nunc ac magna placerat, sit amet placerat lectus lobortis. Nam eu mollis ipsum.

Morbi in fringilla lacus. In ullamcorper elit ac ligula tincidunt pulvinar. Maecenas at ullamcorper sem. Nulla pretium maximus magna, sed maximus mauris maximus blandit. Vivamus commodo volutpat lorem quis euismod. Nullam vitae urna iaculis, fermentum tortor nec, posuere nulla. Morbi cursus tincidunt mi, in accumsan enim gravida ut. Quisque mollis tortor libero, eu rhoncus ipsum tincidunt eget. Vivamus accumsan tortor at turpis vulputate, ac ullamcorper erat gravida.

Integer posuere efficitur nulla non eleifend. Praesent in venenatis enim. Phasellus vitae pretium nunc. Suspendisse facilisis eget nibh et porttitor. Nulla maximus porta risus fermentum bibendum. Praesent porttitor elementum mattis. Proin dapibus nunc sem, sed iaculis ligula dignissim in.
            </Text>
          </ScrollView>
        </View>

      </View>
      {/* <FooterView>
        <AceptoNoAcepto/>
      </FooterView> */}

      <FooterView>
          <View style={{width:'50%', position:'absolute',top: dimensions.footerHeight*0.7}}>
            <BackLink labelBack={gs[regresarTitulo][lang]} gotoScreen={pantalla}></BackLink>
          </View>
          {/* <View style={{left: '50%', width:'50%', position:'absolute',marginTop: dimensions.separator}}>
            <NextLink labelNoAcepto={"Acepto"} gotoScreen={'Bienvenida'}></NextLink>
          </View>           */}
          { pantalla === 'SelectorDeLenguage' ? <View style={{left: '50%', width:'50%', position:'absolute',top: dimensions.footerHeight*0.7}}>
                                            <NextLink labelNoAcepto={gs['acepto'][lang]} gotoScreen={'Bienvenida'}></NextLink>
                                           </View> 
          : null }
      </FooterView>

      <EmergencyView>
          <Emergency/>
        </EmergencyView>
    </View>
  );
}

export default Politica;

const styles = StyleSheet.create({
  title: {
    //top: dimensions.headerTopTextMargin,
    fontSize: normalize(20),
    color: colors.mintGreen
  },
  leftColImg: {
    width: dimensions.bodyWidth / 2,
    // justifyContent: "flex-start",
    top:0,
    left:0,
    // position: 'absolute' ,
    // height: dimensions.footerHeight
  },
  leftColNavigation: {
    width: dimensions.bodyWidth / 2,
    // justifyContent: "flex-start",
    top:0,
    position: 'absolute' ,
    height: dimensions.footerHeight
  },
  rightColNavigation: {
    width: dimensions.bodyWidth / 2,
    // justifyContent: "flex-start",
    top:0,
    left: dimensions.bodyWidth/2,
    position: 'absolute' ,
    height: dimensions.footerHeight,
    alignItems: "flex-end",
  },

  textBox: {
    top: dimensions.bodyHeight*0.015,
    backgroundColor: colors.mintGreen,
    width: dimensions.bodyWidth,
    height: "100%",
    borderRadius: 8
  },
  boxTexts: {
    color: 'white',
    margin: dimensions.bodyHeight * 0.04,
    fontSize: normalize(11)
  },
  button:{
    
  },
  buttonText:{
    color:'white',
    fontSize: normalize(12),
    fontWeight:'bold',
    //top: ScreenHeight * 0.01,
    //left: ScreenWidth * 0.04
  },
  buttonImage :{

    width: dimensions.footerHeight * 0.2,
    position: 'absolute'
  }
});


/*
    emergencyButtonView: {
      top: dimensions.footerHeight  * 0.2,
      position: 'absolute',
      left: dimensions.bodyWidth / 2, 
      justifyContent: 'flex-end',
      width: dimensions.bodyWidth / 2,
      alignItems: "flex-end",
    }, */