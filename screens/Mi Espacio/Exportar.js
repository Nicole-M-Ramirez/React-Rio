import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, ScrollView,TextInput,KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors, dimensions } from '../../components/constants';
import { normalize } from '../../components/FondNormilize';
import React, { useState , Linking } from 'react';
import { SendEmail } from '../../components/SendEmail';
import email from 'react-native-email'


import HeaderView from '../../components/HeaderView';
import BodyView from '../../components/BodyView';
import EmergencyView from '../../components/EmergencyView';
import FooterView from '../../components/FooterView';
import Emergency from '../../components/Emergency';
import TimeSince from '../../components/TimeSince';
import BackLink from '../../components/BackLink';
import BotonConfig from '../../components/BotonConfig';
import Mailer from 'react-native-mail';
import TurboMailer from '@mattermost/react-native-turbo-mailer';
import MailAttachment from 'react-native-mail-attachment';


import RNHTMLtoPDF from 'react-native-html-to-pdf';


const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback  onPress={Keyboard.dismiss} accessible={false}>
    {children}
  </TouchableWithoutFeedback>
);

function Exportar() {
  const recipient = 'recipient@example.com';
  const subject = 'Subject';
  const body = 'Email body';
  const attachmentUri = '../../assets/html/Export.html';
    const [buttonTipoColors, setButtonTipoColors] = useState(colors.mintGreen);
    const [buttonTiempoColor, setButtonTiempoColor] = useState(colors.mintGreen)
    const [text, onChangeText] = React.useState(' ');

    const [circle1, setcircle1] = useState(colors.purple);
    const [circle2, setcircle2] = useState(colors.purple);
    const [circle3, setcircle3] = useState(colors.purple);
    const [circle4, setcircle4] = useState(colors.purple);
    const [circle5, setcircle5] = useState(colors.purple);
    const [circle6, setcircle6] = useState(colors.purple);
    const [circle7, setcircle7] = useState(colors.purple);

    const [opciones, setOpciones] = useState({'Actividades': false, 'Logros': false, 'Graficas': false, 'Diario': false, 'Calendario': false});
    const [archivo, setarchivo] = useState({'PDF': false, 'CSV': false});

    const xValuesDet = ["Pareja", "Familia", "Amistades", "Perdida", "Estudios", "Trabajo"];
    const xValuesAct = [" ", " ", " ", " ", " "];
    const xValuesEmo = ["Felicidad", "Ansiedad", "Miedo", "Tristeza", "Coraje"];
    const yValueDet = [10, 49, 44, 24, 25,1];
    const yValueAct = [10, 49, 44, 24, 25,1];
    const yValueEmo = [10, 49, 44, 24, 25,1];
    const barColors = ["#8f79b2", "#da88b9","#1e76ba","#524566","#4eb5a3","#5b8caf"];
  
    const navigation = useNavigation();

  //   handleEmail = () => {
  //     const to = ['nicoleds3d@gmail.com'] // string or array of email addresses
  //     email(to, {
  //         // Optional additional arguments
  //         cc: 'nicoleds3d@gmail.com', // string or array of email addresses
  //        bcc: 'nicoleds3d@gmail.com', // string or array of email addresses
  //         subject: 'Practica de envio',
  //         body: 'Mesaje de prueba para envio de email desde la aplicacion RIO',
  //         checkCanOpen: false // Call Linking.canOpenURL prior to Linking.openURL
  //     }).catch(console.error)
  // }

  async function CreatePDF() {
    let options = {
      html: `
      <!DOCTYPE html>
      <html>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js"></script>
        <body>
          <h1>Exportacion de Data de RIO</h1>
          <h2>Graficas de Barras:</h2>

          <canvas id="Detonantes" style="width:100%;max-width:600px"></canvas>

          <script>
            

            new Chart("Detonantes", {
              type: "bar",
              data: {
                labels: xValuesDet,
                datasets: [{
                  backgroundColor: barColors,
                  data: yValueDet
                }]
              },
              options: {
                legend: {display: false},
                title: {
                  display: true,
                  text: "Detonantes"
                }
              }
            }
          );
          </script>
        </body>
      </html>
      `,
      fileName: 'test',
      directory: 'Files',
    };

    let file = await RNHTMLtoPDF.convert(options)
    console.log(file.filePath);
    alert(file.filePath);
  }

    function toggleButton (state, setFunc) {
      if(state === 'white'){
        setFunc(colors.purple)
      }
      else{
        setFunc('white')
      }
    }

    function TipoPressHandle () {
        setButtonTipoColors(colors.darkForest)
        setButtonTiempoColor(colors.mintGreen)
    }
    
    function tiempoPressHandler () {
        setButtonTipoColors(colors.mintGreen)
        setButtonTiempoColor(colors.darkForest)
  }
  
    function nav () {
      navigation.navigate(pantalla)
    }
  
    function firstCircle () {
      if(circle1 === 'white'){
        setcircle1(colors.purple)
      }
      else{
        setcircle1('white')
      }
  
      //nav()
    }
  
    function SecondCircle () {
      if(circle2 === 'white'){
        setcircle2(colors.purple)
      }
      else{
        setcircle2('white')
      }
  
      //nav()
    }
  
    function ThridCircle () {
      if(circle3 === 'white'){
        setcircle3(colors.purple)
      }
      else{
        setcircle3('white')
      }
  
      //nav()
    }
  
    function ForthCircle () {
      if(circle4 === 'white'){
        setcircle4(colors.purple)
      }
      else{
        setcircle4('white')
      }
  
      //nav()
    }
  
    function FifhtCircle () {
      if(circle5 === 'white'){
        setcircle5(colors.purple)
      }
      else{
        setcircle5('white')
      }
  
      //nav()
    }

    function SixCircle () {
      if(circle6 === 'white'){
        setcircle6(colors.purple)
      }
      else{
        setcircle6('white')
      }
  
      //nav()
    }

    function SevenCircle () {
      if(circle7 === 'white'){
        setcircle7(colors.purple)
      }
      else{
        setcircle7('white')
      }
  
      //nav()
    }

  //   function enviarMensaje () {
  //     //console.log(text)
  //     //handleEmail()
  //     //navigation.navigate('ConfirmExport')
  //     SendEmail(
  //       'nicoleds3d@gmail.com',
  //       'Mensaje de Prueba',
  //       'Este mensaje es uno de prueba para probar la funcionalidad de envio de emails desde la aplicacion RIO'
  //   ).then(() => {
  //       console.log('Our email successful provided to device mail ');
  //   });
  //   }

  //   handleEmail = () => {
  //     const to = ['nicoleds3d@gmail.com'] // string or array of email addresses
  //     email(to, {
  //         // Optional additional arguments
  //         cc: ['nicoleds3d@gmail.com'], // string or array of email addresses
  //         bcc: 'nicoleds3d@gmail.com', // string or array of email addresses
  //         subject: 'Show how to use',
  //         body: 'Some body right here',
  //         checkCanOpen: false // Call Linking.canOpenURL prior to Linking.openURL
  //     }).catch(console.error)
  // }

  const file = require('../../assets/html/Export.html');
  handleEmail = async () => {
    MailAttachment.sendEmailWithAttachment(recepient,subject, body,attachmentUri)
  }

    // handleEmail = async () => {
    //   await TurboMailer.sendMail({
    //     subject: "subject here",
    //     recipients: ["nicole.ramirez10@upr.edu", "rafael.arce@upr.edu"],
    //     body: "Verificando si se puede enviar un email con un file",
    //     attachments: [{
    //       path: file,
    //     }]
    //   })
    // }
    //   await TurboMailer.sendMail({
    //     subject: "subject here",
    //     recipients: ["nicole.ramirez10@upr.edu", "rafael.arce@upr.edu"],
    //     body: "Verificando si se puede enviar un email con un file",
    //     attachments: [{
    //         path: require('../../components/Export.html'),
    //     }],
    // });

    // const file = require('../../assets/Export.html')

    // handleEmail = () => {
    //   Mailer.mail({
    //     subject: 'Enviando email con attachments',
    //     recipients: ['nicoleds3d@gmail.com'],
    //     ccRecipients: ['nicole.ramirez10@upr.edu'],
    //     bccRecipients: ['nicolemramirez2001@gmail.com'],
    //     body: '<b>Verificando que puedo enviar email con attacments</b>',
    //     isHTML: true,
    //     attachments: [{
    //       // Specify either `path` or `uri` to indicate where to find the file data.
    //       // The API used to create or locate the file will usually indicate which it returns.
    //       // An absolute path will look like: /cacheDir/photos/some image.jpg
    //       // A URI starts with a protocol and looks like: content://appname/cacheDir/photos/some%20image.jpg
    //       path: file, // The absolute path of the file from which to read data.
    //       uri: '', // The uri of the file from which to read the data.
    //       // Specify either `type` or `mimeType` to indicate the type of data.
    //       type: 'html', // Mime Type: jpg, png, doc, ppt, html, pdf, csv
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
      
      // Mailer.mail({
      //   subject: 'Export.html',
      //   recipients: ['nicoleds3d@gmail.com'],
      //   ccRecipients: ['nicoleds3d@gmail.com'],
      //   bccRecipients: ['nicoleds#d@gmail.com'],
      //   body: '<b>Si pude exportar el file de html!</b>',
      //   customChooserTitle: 'This is my new title', // Android only (defaults to "Send Mail")
      //   isHTML: true,
      //   attachments: [{
      //     path: '/Users/usuario/Desktop/React-Rio/components/Export.html',
      //     name: 'Export.html',
      //     type: 'html',
      //   }]
      //   //   // Specify either `path` or `uri` to indicate where to find the file data.
      //   //   // The API used to create or locate the file will usually indicate which it returns.
      //   //   // An absolute path will look like: /cacheDir/photos/some image.jpg
      //   //   // A URI starts with a protocol and looks like: content://appname/cacheDir/photos/some%20image.jpg
      //   //   //path: '/Users/usuario/Desktop/React-Rio/components/Export.html', // The absolute path of the file from which to read data.
      //   //   //uri: '', // The uri of the file from which to read the data.
      //   //   // Specify either `type` or `mimeType` to indicate the type of data.
      //   //   //type: '', // Mime Type: jpg, png, doc, ppt, html, pdf, csv
      //   //   //mimeType: '', // - use only if you want to use custom type
      //   //   //name: '', // Optional: Custom filename for attachment
      // }, (error, event) => {
      //   Alert.alert(
      //     error,
      //     event,
      //     [
      //       {text: 'Ok', onPress: () => console.log('OK: Email Error Response')},
      //       {text: 'Cancel', onPress: () => console.log('CANCEL: Email Error Response')}
      //     ],
      //     { cancelable: true }
      //   )
      // });
    

  return (
    <DismissKeyboard>
    <View>
      <BotonConfig pantalla = 'Exportar' Back={()=>{navigation.navigate('Exportar')}}/>
      <HeaderView headerButtons = 'yes'>
        <TimeSince  />
      </HeaderView>

      <View style={{left:dimensions.leftMargin, top:dimensions.bodyHeight*0.25}}>
        <KeyboardAvoidingView
          automaticallyAdjustContentInsets={false}
          behavior={null}
          contentContainerStyle={{ flex: 1 }}
          style={{
            backgroundColor: 'backgroundColor',
            flex: 1,
            height: '100%',
          }}>
        
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
                                         top: 1.91*(dimensions.bodyHeight*0.25),
                                         width: dimensions.buttonWidth,
                                         height : ScreenHeight * 0.062,
                                        }]}>
            <Text style={styles.buttonsText}>Graficas</Text>
            <TouchableOpacity style={[styles.innerCircle, {backgroundColor: circle3}]} onPress={()=>{ThridCircle()}}/>
            <View style={styles.outerCircle}></View>
        </View>

        <View style={[styles.buttonView,{
                                         top: (dimensions.bodyHeight*0.25),
                                         width : dimensions.buttonWidth,
                                         height : ScreenHeight * 0.062,
                                         left: dimensions.bodyWidth*0.51
                                        }]}>
            <Text style={styles.buttonsText}>Diario</Text>
            <TouchableOpacity style={[styles.innerCircle, {backgroundColor: circle4}]} onPress={()=>{ForthCircle()}}/>
            <View style={styles.outerCircle}></View>
        </View>

        <View style={[styles.buttonView,{
                                         top: 1.45*(dimensions.bodyHeight*0.25),
                                         width : dimensions.buttonWidth,
                                         height : ScreenHeight * 0.062,
                                         left: dimensions.bodyWidth*0.51
                                        }]}>
            <Text style={styles.buttonsText}>Calendario</Text>
            <TouchableOpacity style={[styles.innerCircle, {backgroundColor: circle5}]} onPress={()=>{FifhtCircle()}}/>
            <View style={styles.outerCircle}/>
        </View>

        <View style={{borderBottomColor: colors.mintGreen, width: dimensions.bodyWidth, borderBottomWidth:3, top: dimensions.bodyHeight*0.4}}/>
        <Text style={styles.titleText}>Correo electrónico</Text>

        <View style={[styles.buttonView,{
                                         top: 2.75*(dimensions.bodyHeight*0.25),
                                         width: dimensions.bodyWidth,
                                         height : ScreenHeight * 0.062,
                                        }]}>
          {/* <Text style={[styles.buttonsText,{left:dimensions.separator*2}]}>example@email.com</Text> */}
          <TextInput style={[styles.buttonsText,{left:dimensions.separator*2}]} autoCapitalize={'none'} placeholder="example@email.com" onChangeText={onChangeText} value={text}/>
        </View>
    
        </KeyboardAvoidingView>
        

        {/* <View style={[styles.buttonView,{
                                         top: 3.5*(dimensions.bodyHeight*0.25),
                                         width : dimensions.buttonWidth,
                                         height : ScreenHeight * 0.062,
                                        }]}>
          <Text style={styles.buttonsText}>PDF</Text>
          <TouchableOpacity style={[styles.innerCircle, {backgroundColor: circle1}]} onPress={()=>{SixCircle()}}/>
          <View style={styles.outerCircle}/>
        </View> */}
        <View style={[styles.buttonView,{
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
        </View>
      </View>

      <FooterView> 
        <View style={{height:'25%', width:'50%', position:'absolute',marginBottom: dimensions.separator}}> 
          <BackLink labelBack={"Regresar"} gotoScreen={'MiEspacio'}/> 
        </View> 

        <View style={{top:dimensions.footerHeight*.25, height:'75%',justifyContent: 'center' , alignItems: 'flex-start'}}> 
          <Text style={styles.titleText}>MiEspacio</Text> 
        </View>

        <TouchableOpacity style={styles.activarButton} onPress={()=>handleEmail()}>
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
    top: dimensions.bodyHeight*0.4
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
