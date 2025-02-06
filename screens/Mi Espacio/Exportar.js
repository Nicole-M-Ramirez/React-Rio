import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, ScrollView,TextInput,KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors, dimensions } from '../../components/constants';
import { normalize } from '../../components/FondNormilize';
import { createHTML } from '../../components/CreateHTML';
import React, { useState , Linking } from 'react';
//import { SendEmail } from '../../components/SendEmail';
//import email from 'react-native-email'
//import RNFS, { DocumentDirectoryPath, DownloadDirectoryPath } from 'react-native-fs';
//import { useEffect} from 'react';
//import { CreateHTML } from '../../components/CreateHTML';
import { useDispatch, useSelector } from 'react-redux';
import { getActiveMeta, getAccomplishedMetas } from '../../components/RioGlobalFuncs';




import HeaderView from '../../components/HeaderView';
//import BodyView from '../../components/BodyView';
import EmergencyView from '../../components/EmergencyView';
import FooterView from '../../components/FooterView';
import Emergency from '../../components/Emergency';
import TimeSince from '../../components/TimeSince';
import BackLink from '../../components/BackLink';
import BotonConfig from '../../components/BotonConfig';
import Mailer from 'react-native-mail';
//import TurboMailer from '@mattermost/react-native-turbo-mailer';
//import MailAttachment from 'react-native-mail-attachment';




//import RNHTMLtoPDF from 'react-native-html-to-pdf';


const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback  onPress={Keyboard.dismiss} accessible={false}>
    {children}
  </TouchableWithoutFeedback>
);

let options = [false, false, false, false, false]
function Exportar() {
  // const detData = useSelector(state => state.counter.detData);
  // const emoData = useSelector(state => state.counter.emoData);
  // const autoLecionData = useSelector(state => state.counter.autoLecionData);
  // const actData = useSelector(state => state.counter.actData);
 
    //let options = [false,false,false,false,false]
    const [text, onChangeText] = React.useState('');
    const [circle1, setcircle1] = useState(colors.purple);
    const [circle2, setcircle2] = useState(colors.purple);
    const [circle3, setcircle3] = useState(colors.purple);
    const [circle4, setcircle4] = useState(colors.purple);
    //const [circle5, setcircle5] = useState(colors.purple);
    const [altura, setAltura] = useState(0);
    //const [options, setOptions] = useState()
    const navigation = useNavigation([false,false,false,false,false]);

  
    function firstCircle () {
      console.log('primero')
      if(circle1 === 'white'){
        setcircle1(colors.purple)
        //setOptions([false,false,false,false,false])
        options[0] = false
      }
      else{
        setcircle1('white')
        options[0] = true
      }
  
      //nav()
    }
  
    function SecondCircle () {
      console.log('segundo')
      if(circle2 === 'white'){
        //setOptions([false,false,false,false,false])
        setcircle2(colors.purple)
        options[1] = false
      }
      else{
        setcircle2('white')
        options[1] = true
      }
  
      //nav()
    }
  
    function ThridCircle () {
      console.log('tercero')
      if(circle3 === 'white'){
        //setOptions([false,false,false,false,false])
        setcircle3(colors.purple)
        options[2] = false
      }
      else{
        setcircle3('white')
        options[2] = true
      }
  
      //nav()
    }
  
    function ForthCircle () {
      console.log('cuarto')
      if(circle4 === 'white'){
        //setOptions([false,false,false,false,false])
        setcircle4(colors.purple)
        options[3] = false
      }
      else{
        setcircle4('white')
        options[3] = true
      }
  
      //nav()
    }
  
    // function FifhtCircle () {
    //   console.log('quinto')
    //   if(circle5 === 'white'){
    //     //setOptions([false,false,false,false,false])
    //     setcircle5(colors.purple)
    //     options[4] = false
    //   }
    //   else{
    //     setcircle5('white')
    //     options[4] = true
    //   }
  
    //   //nav()
    // }


    // handleEmail = () => {
    //   console.log("En handleEmail")
    //   Mailer.mail({
    //     subject: 'need help',
    //     recipients: ['support@example.com'],
    //     ccRecipients: ['supportCC@example.com'],
    //     bccRecipients: ['supportBCC@example.com'],
    //     body: '<b>A Bold Body</b>',
    //     customChooserTitle: 'This is my new title', // Android only (defaults to "Send Mail")
    //     isHTML: true,
    //     attachments: [{
    //       // Specify either `path` or `uri` to indicate where to find the file data.
    //       // The API used to create or locate the file will usually indicate which it returns.
    //       // An absolute path will look like: /cacheDir/photos/some image.jpg
    //       // A URI starts with a protocol and looks like: content://appname/cacheDir/photos/some%20image.jpg
    //       path: '', // The absolute path of the file from which to read data.
    //       uri: '', // The uri of the file from which to read the data.
    //       // Specify either `type` or `mimeType` to indicate the type of data.
    //       type: '', // Mime Type: jpg, png, doc, ppt, html, pdf, csv
    //       mimeType: '', // - use only if you want to use custom type
    //       name: '', // Optional: Custom filename for attachment
    //     }]
    //   }, (error, event) => {
    //     Alert.alert(
    //       error,
    //       event,
    //       [
    //         {text: 'Ok', onPress: () => console.log('OK: Email Error Response')},
    //         {text: 'Cancel', onPress: () => console.log('CANCEL: Email Error Response')}
    //       ],
    //       { cancelable: true }
    //     )
    //   });
    // }

    const detData = useSelector(state => state.counter.detData);
    const emoData = useSelector(state => state.counter.emoData);
    const actData = useSelector(state => state.counter.actData);
    const diarioData = useSelector(state => state.counter.diarioData);
    const metas = useSelector(state => state.counter.metas);
    let logroData = getAccomplishedMetas(metas);
    const actividadUsoData = useSelector(state => state.counter.actDataPlus);
    let html = ``

    function CreateHtml (){
      let Data = [detData,emoData,actData,diarioData, logroData, actividadUsoData]
      // if (options[2] === true){
      //   Data = [detData, emoData, actData]
      // }
      

      // console.log(JSON.stringify(detData))
      // console.log(detData[0].detonante)

      // let det = detData[0].detonante
      
      // console.log("det: "+det)
      // console.log(options)
      html = createHTML(options, Data)
      console.log(html)

      // if(text != ''){
      //   //CreateEmail()
      // }
      // else{
      //   console.log("Not email found")
      // }
      //CreateEmail()
      
      html = ``
      options = [false, false, false, false, false]
      setcircle1(colors.purple)
      setcircle2(colors.purple)
      setcircle3(colors.purple)
      setcircle4(colors.purple)

    }

    function CreateEmail () {
      console.log("En handleEmail")
          Mailer.mail({
            subject: 'Resumen Grafico de Aplicacion Rio',
            recipients: [text],
            ccRecipients: [],
            bccRecipients: [],
            body: html,
//             body: `
//             <b>
//     <table width="400" cellspacing="0" cellpadding="0" border="0" style="font-family: Arial, sans-serif;">
//     <tr>
//         <td align="center" style="padding-bottom: 10px;">
//             <strong>Detonantes</strong>
//         </td>
//     </tr>
//     <tr>
//         <td>
//             <table width="100%" cellspacing="0" cellpadding="0" border="0">
//                 <tr>
//                     <td align="center">
//                         <table cellspacing="5" cellpadding="0" border="0" height="250">
//                             <tr valign="bottom" align="center">
//                                 <td width="60">
//                                     <div style="height:100px; width:50px; background-color:#8f79b2;"></div>
//                                     Pareja
//                                 </td>
//                                 <td width="60">
//                                     <div style="height:150px; width:50px; background-color:#da88b9;"></div>
//                                     Familia
//                                 </td>
//                                 <td width="60">
//                                     <div style="height:200px; width:50px; background-color:#1e76ba;"></div>
//                                     Amistades
//                                 </td>
//                                 <td width="60">
//                                     <div style="height:130px; width:50px; background-color:#524566;"></div>
//                                     Perdida
//                                 </td>
//                                 <td width="60">
//                                     <div style="height:130px; width:50px; background-color:#4eb5a3;"></div>
//                                     Estudios
//                                 </td>
//                                 <td width="60">
//                                     <div style="height:130px; width:50px; background-color:#5b8caf;"></div>
//                                     Trabajo
//                                 </td>
//                             </tr>
//                         </table>
//                     </td>
//                 </tr>
//             </table>
//         </td>
//     </tr>
// </table>

// <table width="400" cellspacing="0" cellpadding="0" border="0" style="font-family: Arial, sans-serif;">
//     <tr>
//         <td align="center" style="padding-bottom: 10px;">
//             <strong>Emociones</strong>
//         </td>
//     </tr>
//     <tr>
//         <td>
//             <table width="100%" cellspacing="0" cellpadding="0" border="0">
//                 <tr>
//                     <td align="center">
//                         <table cellspacing="5" cellpadding="0" border="0" height="250">
//                             <tr valign="bottom" align="center">
//                                 <td width="60">
//                                     <div style="height:100px; width:50px; background-color:#8f79b2;"></div>
//                                     Felicidad
//                                 </td>
//                                 <td width="60">
//                                     <div style="height:150px; width:50px; background-color:#da88b9;"></div>
//                                     Ansiedad
//                                 </td>
//                                 <td width="60">
//                                     <div style="height:200px; width:50px; background-color:#1e76ba;"></div>
//                                     Miedo
//                                 </td>
//                                 <td width="60">
//                                     <div style="height:130px; width:50px; background-color:#524566;"></div>
//                                     Tristeza
//                                 </td>
//                                 <td width="60">
//                                     <div style="height:130px; width:50px; background-color:#4eb5a3;"></div>
//                                     Coraje
//                                 </td>
//                             </tr>
//                         </table>
//                     </td>
//                 </tr>
//             </table>
//         </td>
//     </tr>
// </table>

// <table width="400" cellspacing="0" cellpadding="0" border="0" style="font-family: Arial, sans-serif;">
//     <tr>
//         <td align="center" style="padding-bottom: 10px;">
//             <strong>Actividades</strong>
//         </td>
//     </tr>
//     <tr>
//         <td>
//             <table width="100%" cellspacing="0" cellpadding="0" border="0">
//                 <tr>
//                     <td align="center">
//                         <table cellspacing="5" cellpadding="0" border="0" height="250">
//                             <tr valign="bottom" align="center">
//                                 <td width="60">
//                                     <div style="height:100px; width:50px; background-color:#8f79b2;"></div>
//                                     Musica
//                                 </td>
//                                 <td width="60">
//                                     <div style="height:150px; width:50px; background-color:#da88b9;"></div>
//                                     Meditacion
//                                 </td>
//                                 <td width="60">
//                                     <div style="height:200px; width:50px; background-color:#1e76ba;"></div>
//                                     Mascota
//                                 </td>
//                                 <td width="60">
//                                     <div style="height:130px; width:50px; background-color:#524566;"></div>
//                                     Ducha
//                                 </td>
//                                 <td width="60">
//                                     <div style="height:130px; width:50px; background-color:#4eb5a3;"></div>
//                                     Ejercicio
//                                 </td>
//                                 <td width="60">
//                                     <div style="height:130px; width:50px; background-color:#5b8caf;"></div>
//                                     Correr
//                                 </td>
//                             </tr>
//                         </table>
//                     </td>
//                 </tr>
//             </table>
//         </td>
//     </tr>
// </table>
// </b>
//             `,
            customChooserTitle: 'This is my new title', // Android only (defaults to "Send Mail")
            isHTML: true,
            // attachments: [{
            //   // Specify either `path` or `uri` to indicate where to find the file data.
            //   // The API used to create or locate the file will usually indicate which it returns.
            //   // An absolute path will look like: /cacheDir/photos/some image.jpg
            //   // A URI starts with a protocol and looks like: content://appname/cacheDir/photos/some%20image.jpg
            //   path: '', // The absolute path of the file from which to read data.
            //   uri: '', // The uri of the file from which to read the data.
            //   // Specify either `type` or `mimeType` to indicate the type of data.
            //   type: '', // Mime Type: jpg, png, doc, ppt, html, pdf, csv
            //   mimeType: '', // - use only if you want to use custom type
            //   name: '', // Optional: Custom filename for attachment
            // }]
          }, (error, event) => {
            Alert.alert(
              error,
              event,
              [
                {text: 'Ok', onPress: () => console.log('OK: Email Error Response')},
                {text: 'Cancel', onPress: () => console.log('CANCEL: Email Error Response')}
              ],
              { cancelable: true }
            )
          });
    }

  

  return (
    
    <DismissKeyboard>
    <View style={{top:dimensions.bodyHeight*-(altura)}}>
    <View>
      <BotonConfig pantalla = 'Exportar' Back={()=>{navigation.navigate('Exportar')}}/>
      <HeaderView headerButtons = 'yes'>
        <TimeSince  />
      </HeaderView>

      <View style={{left:dimensions.leftMargin, top:dimensions.bodyHeight*0.25}}>
        {/* <KeyboardAvoidingView
          automaticallyAdjustContentInsets={false}
          behavior={null}
          contentContainerStyle={{ flex: 1 }}
          style={{
            backgroundColor: 'backgroundColor',
            flex: 1,
            height: '100%',
          }}> */}
        
        <Image source={require('../../assets/exportar2.png')} resizeMode='contain' style={styles.titleImage} />

        <View style={[styles.buttonView,{
                                         top: dimensions.bodyHeight*0.25,
                                         width : dimensions.buttonWidth,
                                         height : ScreenHeight * 0.062,
                                        }]}>
            <Text style={styles.buttonsText}>Actividades</Text>
            <TouchableOpacity style={[styles.innerCircle, {backgroundColor: circle1}]} onPress={()=>{firstCircle()}}/>
            <View style={styles.outerCircle}/>
        </View>

        <View style={[styles.buttonView,{
                                         top: 1.45*(dimensions.bodyHeight*0.25),
                                         width : dimensions.buttonWidth,
                                         height : ScreenHeight * 0.062,
                                         //marginBottom: dimensions.separator,
                                        }]}>
            <TouchableOpacity style={[styles.innerCircle, {backgroundColor: circle2}]} onPress={()=>{SecondCircle()}}/>
            <View style={styles.outerCircle}></View>

            <Text style={styles.buttonsText}>Logros</Text>
        </View>

        <View style={[styles.buttonView,{
                                         top:(dimensions.bodyHeight*0.25),
                                         width: dimensions.buttonWidth,
                                         height : ScreenHeight * 0.062,
                                         left: dimensions.bodyWidth*0.51
                                        }]}>
            <Text style={styles.buttonsText}>Graficas</Text>
            <TouchableOpacity style={[styles.innerCircle, {backgroundColor: circle3}]} onPress={()=>{ThridCircle()}}/>
            <View style={styles.outerCircle}></View>
        </View>

        <View style={[styles.buttonView,{
                                         top:1.45*(dimensions.bodyHeight*0.25),
                                         width : dimensions.buttonWidth,
                                         height : ScreenHeight * 0.062,
                                         left: dimensions.bodyWidth*0.51
                                        }]}>
            <Text style={styles.buttonsText}>Diario</Text>
            <TouchableOpacity style={[styles.innerCircle, {backgroundColor: circle4}]} onPress={()=>{ForthCircle()}}/>
            <View style={styles.outerCircle}></View>
        </View>

        {/* <View style={[styles.buttonView,{
                                         top: 1.45*(dimensions.bodyHeight*0.25),
                                         width : dimensions.buttonWidth,
                                         height : ScreenHeight * 0.062,
                                         left: dimensions.bodyWidth*0.51
                                        }]}>
            <Text style={styles.buttonsText}>Calendario</Text>
            <TouchableOpacity style={[styles.innerCircle, {backgroundColor: circle5}]} onPress={()=>{FifhtCircle()}}/>
            <View style={styles.outerCircle}/>
        </View> */}

        <View style={{borderBottomColor: colors.mintGreen, width: dimensions.bodyWidth, borderBottomWidth:3, top: dimensions.bodyHeight*0.29}}/>
        <Text style={styles.titleText}>Correo electrónico</Text>

        <View style={[styles.buttonView,{
                                         top: 2.4*(dimensions.bodyHeight*0.25),
                                         width: dimensions.bodyWidth,
                                         height : ScreenHeight * 0.062,
                                        }]}>
          {/* <Text style={[styles.buttonsText,{left:dimensions.separator*2}]}>example@email.com</Text> */}
          <TextInput style={[styles.buttonsText,{left:dimensions.separator*2}]} autoCapitalize={'none'} placeholder="example@email.com" onChangeText={onChangeText} value={text} onBlur = {()=>{setAltura(0) }} onFocus = {()=>{setAltura(0.45)}}/>
        </View>
        </View>
    
        {/* </KeyboardAvoidingView> */}
        

        {/* <View style={[styles.buttonView,{
                                         top: 3.5*(dimensions.bodyHeight*0.25),
                                         width : dimensions.buttonWidth,
                                         height : ScreenHeight * 0.062,
                                        }]}>
          <Text style={styles.buttonsText}>PDF</Text>
          <TouchableOpacity style={[styles.innerCircle, {backgroundColor: circle1}]} onPress={()=>{SixCircle()}}/>
          <View style={styles.outerCircle}/>
        </View> */}
        {/* <View style={[styles.buttonView,{
                                         top: 3.5*(dimensions.bodyHeight*0.25),
                                         width : dimensions.buttonWidth,
                                         height : ScreenHeight * 0.062,
                                         left: dimensions.bodyWidth*0
                                        }]}>
            <Text style={styles.buttonsText}>PDF</Text>
            <TouchableOpacity style={[styles.innerCircle, {backgroundColor: circle6}]} onPress={()=>{SixCircle()}}/>
            <View style={styles.outerCircle}/>
        </View>

        <View style={[styles.buttonView,{
                                         top: 3.5*(dimensions.bodyHeight*0.25),
                                         width : dimensions.buttonWidth,
                                         height : ScreenHeight * 0.062,
                                         left: dimensions.bodyWidth*0.51
                                        }]}>
          <Text style={styles.buttonsText}>CSV</Text>
          <TouchableOpacity style={[styles.innerCircle, {backgroundColor: circle7}]} onPress={()=>{SevenCircle()}}/>
          <View style={styles.outerCircle}></View>
        </View> */}
      </View>

      <FooterView> 
        <View style={{height:'25%', width:'50%', position:'absolute',marginBottom: dimensions.separator}}> 
          <BackLink labelBack={"Regresar"} gotoScreen={'MiEspacio'}/> 
        </View> 

        <View style={{top:dimensions.footerHeight*.25, height:'75%',justifyContent: 'center' , alignItems: 'flex-start'}}> 
          <Text style={styles.titleText}>MiEspacio</Text> 
        </View>

        <TouchableOpacity style={styles.activarButton} onPress={()=>{CreateHtml()}}>
          <Text style={styles.activarText}>Enviar</Text>
          <Image source={require('../../assets/ingresar.png')} resizeMode='contain' style={styles.activarImg} />
        </TouchableOpacity>
      </FooterView>

      <EmergencyView>
          <Emergency/>
      </EmergencyView>
    </View>
    </DismissKeyboard>
  );
}

export default Exportar;

const styles = StyleSheet.create({
  titleText: {
    color: "#4eb5a3",
    fontSize: normalize(19),
    top: dimensions.bodyHeight*0.3
  },
    titleImage :{
        left: dimensions.bodyWidth /3,
        width: dimensions.buttonWidth * 0.6,
        height: dimensions.buttonHeight *0.6,
        margin: dimensions.separator,
    },
    activarButton: {
      width: dimensions.bodyWidth/4,
      height: dimensions.buttonHeight/3,
      borderRadius: 5,
      marginBottom: 3,
      position: 'absolute',
      top: dimensions.footerHeight * 0.2,
      left: dimensions.bodyWidth *0.7
    },
    activarText: {
      color: 'white',
      fontSize: normalize(15),
      top: '25%'
    },
    activarImg: {
      //backgroundColor: 'pink',
      width: ScreenWidth * 0.13,
      height: ScreenHeight * 0.07,
      top: dimensions.buttonHeight*-0.14,
      left: '60%'
    },
    buttonView: {
        backgroundColor:colors.purple,
        height: dimensions.buttonHeight/4,
        borderRadius: 8,
        marginTop: dimensions.separator,
        position: 'absolute',
        left: 0,
        backgroundColor:colors.purple
    },
    outerCircle: {
        color: colors.mintGreen,
        borderRadius: 30,
        borderColor: 'white',
        width: dimensions.bodyWidth * 0.1,
        height: (dimensions.buttonHeight/4) * 0.8,
        borderWidth: 2,
        position: 'absolute',
        top: (dimensions.buttonHeight/4) * 0.1,
        left: dimensions.separator
    },
    innerCircle: {
        borderRadius: 30,
        borderColor: 'white',
        width: dimensions.bodyWidth * 0.076,
        height: (dimensions.buttonHeight/4) * 0.61,
        borderWidth: 2,
        position: 'absolute',
        top: (dimensions.buttonHeight/4) * 0.2,
        left: dimensions.bodyWidth*0.032,
        zIndex: 1,
    },
    buttonsText: {
        color: 'white',
        fontSize: normalize(13),
        top: dimensions.buttonHeight/16,
        left: dimensions.buttonWidth*0.3,
    },
    TopButton: {
        width: dimensions.bodyWidth * 0.490,
        height: dimensions.buttonHeight * 0.6,
        position: 'absolute',
        borderRadius: 5,
        top: dimensions.bodyHeight * 0.61
    },
    TopButtonText: {
        fontSize: normalize(14),
        color: 'white',
        marginTop: dimensions.separator*2,
        marginLeft: dimensions.separator*2
    },
});
