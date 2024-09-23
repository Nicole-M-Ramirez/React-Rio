// // import { StatusBar } from 'expo-status-bar';
// // import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, ScrollView} from 'react-native';
// // import { useNavigation } from '@react-navigation/native';
// // import { colors, dimensions } from '../../components/constants';
// // import { normalize } from '../../components/FondNormilize';
// // import { useDispatch, useSelector } from 'react-redux';
// // import React, { useState } from 'react';
// // import BotonConfig from '../../components/BotonConfig';

// // import HeaderView from '../../components/HeaderView';
// // import BodyView from '../../components/BodyView';
// // import EmergencyView from '../../components/EmergencyView';
// // import FooterView from '../../components/FooterView';
// // import Emergency from '../../components/Emergency';
// // import TimeSince from '../../components/TimeSince';
// // import BackLink from '../../components/BackLink';


// // const ScreenHeight = Dimensions.get("window").height
// // const ScreenWidth = Dimensions.get("window").width



// // function Graficas() {
// //     const [buttonTipoColors, setButtonTipoColors] = useState(colors.mintGreen);
// //     const [buttonTiempoColor, setButtonTiempoColor] = useState(colors.mintGreen)

// //     const [circle1, setcircle1] = useState(colors.mintGreen);
// //     const [circle2, setcircle2] = useState(colors.mintGreen);
// //     const [funtionTipo1, setFuntionTipo1] = useState();
// //     const [funtionTipo2, setFuntionTipo2] = useState();

// //     const [circle3, setcircle3] = useState(colors.mintGreen);
// //     const [circle4, setcircle4] = useState(colors.mintGreen);
// //     const [circle5, setcircle5] = useState(colors.mintGreen);
// //     const [circle6, setcircle6] = useState(colors.mintGreen);
  
// //     const navigation = useNavigation();

// //     function TipoPressHandle () {
// //         setButtonTipoColors(colors.darkForest)
// //         setButtonTiempoColor(colors.mintGreen)
// //     }
    
// //     function tiempoPressHandler () {
// //         setButtonTipoColors(colors.mintGreen)
// //         setButtonTiempoColor(colors.darkForest)
// //   }
  
// //     function nav () {
// //       navigation.navigate(pantalla)
// //     }
  
// //     function firstCircle () {
// //       if(circle1 === 'white'){
// //         setcircle1(colors.mintGreen)
// //       }
// //       else{
// //         setcircle1('white')
// //         setcircle2(colors.mintGreen)
// //         setcircle3(colors.mintGreen)
// //         setcircle4(colors.mintGreen)
// //       }
  
// //       //nav()
// //     }
  
// //     function SecondCircle () {
// //       if(circle2 === 'white'){
// //         setcircle2(colors.mintGreen)
// //       }
// //       else{
// //         setcircle2('white')
// //         setcircle1(colors.mintGreen)
// //         setcircle3(colors.mintGreen)
// //         setcircle4(colors.mintGreen)
// //       }
  
// //       //nav()
// //     }
  
// //     function ThridCircle () {
// //       if(circle3 === 'white'){
// //         setcircle3(colors.mintGreen)
// //       }
// //       else{
// //         setcircle3('white')
// //         setcircle2(colors.mintGreen)
// //         setcircle1(colors.mintGreen)
// //         setcircle4(colors.mintGreen)
// //       }
  
// //       //nav()
// //     }
  
// //     function ForthCircle () {
// //       if(circle4 === 'white'){
// //         setcircle4(colors.mintGreen)
// //       }
// //       else{
// //         setcircle4('white')
// //         setcircle3(colors.mintGreen)
// //         setcircle2(colors.mintGreen)
// //         setcircle1(colors.mintGreen)
// //       }
  
// //       //nav()
// //     }
  
// //     function FifhtCircle () {
// //       if(circle5 === 'white'){
// //         setcircle5(colors.mintGreen)
// //       }
// //       else{
// //         setcircle5('white')
// //         if(circle6 === 'white'){
// //           setcircle6(colors.mintGreen)
// //         }
// //       }
  
// //       //nav()
// //     }

// //     function SixCircle () {
// //       if(circle6 === 'white'){
// //         setcircle6(colors.mintGreen)
// //       }
// //       else{
// //         setcircle6('white')
// //         if(circle5 === 'white'){
// //           setcircle5(colors.mintGreen)
// //         }
// //       }
  
// //       //nav()
// //     }

// //     function ChooseChart () {
// //       if(circle5 === 'white' && circle6 === colors.mintGreen){
// //         navigation.navigate('Barras')
// //       }
// //       else if (circle6 === 'white' && circle5 === colors.mintGreen){
// //         navigation.navigate('PieChart')
// //       }
// //       else{
// //         return
// //       }
// //     }

// //   return (
// //     <View>
// //       <BotonConfig pantalla = 'Graficas' Back={()=>{navigation.navigate('Graficas')}}/>
// //       <HeaderView headerButtons = 'yes'>
// //         <TimeSince  />
// //       </HeaderView>

// //       <BodyView>
// //         <Image source={require('../../assets/graficas2.png')} resizeMode='contain' style={styles.titleImage} />

// //         <View style={[styles.buttonView,{backgroundColor:colors.mintGreen}]}>
// //             <Text style={styles.buttonsText}>Detonantes</Text>
// //             <TouchableOpacity style={[styles.innerCircle, {backgroundColor: circle1}]} onPress={()=>{firstCircle()}}/>
// //             <View style={styles.outerCircle}/>
// //         </View>

// //         <View style={[styles.buttonView,{backgroundColor:colors.mintGreen}]}>
// //             <TouchableOpacity style={[styles.innerCircle, {backgroundColor: circle2}]} onPress={()=>{SecondCircle()}}/>
// //             <View style={styles.outerCircle}></View>
// //             <Text style={styles.buttonsText}>Emociones</Text>
// //         </View>

// //         <View style={[styles.buttonView,{backgroundColor:colors.mintGreen}]}>
// //             <Text style={styles.buttonsText}>Frecuencia de autolesiones</Text>
// //             <TouchableOpacity style={[styles.innerCircle, {backgroundColor: circle3}]} onPress={()=>{ThridCircle()}}/>
// //             <View style={styles.outerCircle}></View>
// //         </View>

// //         <View style={[styles.buttonView,{backgroundColor:colors.mintGreen}]}>
// //             <Text style={styles.buttonsText}>Actividades frecuentes</Text>
// //             <TouchableOpacity style={[styles.innerCircle, {backgroundColor: circle4}]} onPress={()=>{ForthCircle()}}/>
// //             <View style={styles.outerCircle}></View>
// //         </View>

// //         <TouchableOpacity onPress={TipoPressHandle} style={[styles.TopButton, {backgroundColor: buttonTipoColors}]}>
// //             <Text style={styles.TopButtonText}>Escojer Tipo</Text>
// //         </TouchableOpacity>

// //         <TouchableOpacity onPress={tiempoPressHandler} style={[styles.TopButton, {backgroundColor: buttonTiempoColor, left: (dimensions.bodyWidth / 2) + 3}]}>
// //         <Text style={styles.TopButtonText}>Tiempo</Text>
// //         </TouchableOpacity>

// //         <View style={[styles.buttonView,{backgroundColor:colors.mintGreen,  top: dimensions.bodyHeight*0.21}]}>
// //             <Text style={styles.buttonsText}>Tipo 1: Barras</Text>
// //             <TouchableOpacity style={[styles.innerCircle, {backgroundColor: circle5}]} onPress={()=>{FifhtCircle()}}/>
// //             <View style={styles.outerCircle}/>
// //         </View>

// //         <View style={[styles.buttonView,{backgroundColor:colors.mintGreen, top: dimensions.bodyHeight*0.21}]}>
// //             <TouchableOpacity style={[styles.innerCircle, {backgroundColor: circle6}]} onPress={()=>{SixCircle()}}/>
// //             <View style={styles.outerCircle}></View>
// //             <Text style={styles.buttonsText}>Tipo 2: Pie Chart</Text>
// //         </View>
// //       </BodyView>

// //       {/* <FooterView>
// //           <View style={{width:'50%', position:'absolute',marginTop: dimensions.separator}}>
// //             <BackLink labelBack={"Regresar"} gotoScreen={'MiEspacio'}></BackLink>
// //           </View>

// //           <View style={{height:'100%',justifyContent: 'center' , alignItems: 'flex-start'}}>
// //             <Text style={styles.titleText}>Gráficas</Text>
// //           </View>

// //           <TouchableOpacity style={styles.activarButton} onPress={() => navigation.navigate('Barras')}>
// //             <Text style={styles.activarText}>Crear</Text>
// //             <Image source={require('../../assets/ingresar.png')} resizeMode='contain' style={styles.activarImg} />
// //           </TouchableOpacity>
// //       </FooterView> */}
// //       <FooterView> 
// //         <View style={{height:'25%', width:'50%', position:'absolute',marginBottom: dimensions.separator}}> 
// //           <BackLink labelBack={"Regresar"} gotoScreen={'MiEspacio'}/> 
// //         </View> 

// //         <View style={{top:dimensions.footerHeight*.25, height:'75%',justifyContent: 'center' , alignItems: 'flex-start'}}> 
// //           <Text style={styles.titleText}>Configuración</Text> 
// //         </View>

// //         <TouchableOpacity style={styles.activarButton} onPress={()=>{ChooseChart()}}>
// //           <Text style={styles.activarText}>Crear</Text>
// //           <Image source={require('../../assets/ingresar.png')} resizeMode='contain' style={styles.activarImg} />
// //         </TouchableOpacity>
// //       </FooterView>

// //       <EmergencyView>
// //           <Emergency/>
// //       </EmergencyView>
// //     </View>
// //   );
// // }

// // export default Graficas;

// // const styles = StyleSheet.create({
// //     titleText: {
// //         color: colors.mintGreen,
// //         fontSize: normalize(24),
// //         marginTop: dimensions.footerHeight*0.2,
// //         fontWeight: '400'
// //     },
// //     titleImage :{
// //         left: dimensions.bodyWidth /3,
// //         width: dimensions.buttonWidth * 0.6,
// //         height: dimensions.buttonHeight *0.6,
// //         margin: dimensions.separator,
// //     },
// //     activarButton: {
// //       width: dimensions.bodyWidth/4,
// //       height: dimensions.buttonHeight/3,
// //       borderRadius: 5,
// //       marginBottom: 3,
// //       position: 'absolute',
// //       top: dimensions.footerHeight * 0.2,
// //       left: dimensions.bodyWidth *0.7
// //     },
// //     activarText: {
// //       color: 'white',
// //       fontSize: normalize(15),
// //       top: '25%'
// //     },
// //     activarImg: {
// //       //backgroundColor: 'pink',
// //       width: ScreenWidth * 0.13,
// //       height: ScreenHeight * 0.07,
// //       top: dimensions.buttonHeight*-0.14,
// //       left: '60%'
// //     },
// //     buttonView: {
// //         backgroundColor:colors.purple,
// //         height: dimensions.buttonHeight/4,
// //         borderRadius: 8,
// //         marginTop: dimensions.separator,
// //     },
// //     outerCircle: {
// //         color: colors.mintGreen,
// //         borderRadius: 30,
// //         borderColor: 'white',
// //         width: dimensions.bodyWidth * 0.1,
// //         height: (dimensions.buttonHeight/4) * 0.8,
// //         borderWidth: 2,
// //         position: 'absolute',
// //         top: (dimensions.buttonHeight/4) * 0.1,
// //         left: dimensions.separator
// //     },
// //     innerCircle: {
// //         borderRadius: 30,
// //         borderColor: 'white',
// //         width: dimensions.bodyWidth * 0.076,
// //         height: (dimensions.buttonHeight/4) * 0.61,
// //         borderWidth: 2,
// //         position: 'absolute',
// //         top: (dimensions.buttonHeight/4) * 0.2,
// //         left: dimensions.bodyWidth*0.032,
// //         zIndex: 1,
// //     },
// //     buttonsText: {
// //         color: 'white',
// //         fontSize: normalize(13),
// //         top: dimensions.buttonHeight/16,
// //         left: dimensions.buttonWidth*0.3,
// //     },
// //     TopButton: {
// //         width: dimensions.bodyWidth * 0.490,
// //         height: dimensions.buttonHeight * 0.6,
// //         position: 'absolute',
// //         borderRadius: 5,
// //         top: dimensions.bodyHeight * 0.61
// //     },
// //     TopButtonText: {
// //         fontSize: normalize(14),
// //         color: 'white',
// //         marginTop: dimensions.separator*2,
// //         marginLeft: dimensions.separator*2
// //     },
// // });



// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, ScrollView} from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { colors, dimensions } from '../../components/constants';
// import { normalize } from '../../components/FondNormilize';
// import { useDispatch, useSelector } from 'react-redux';
// import React, { useState } from 'react';
// import BotonConfig from '../../components/BotonConfig';
// import {BarChart} from "react-native-chart-kit";

// import HeaderView from '../../components/HeaderView';
// import BodyView from '../../components/BodyView';
// import EmergencyView from '../../components/EmergencyView';
// import FooterView from '../../components/FooterView';
// import Emergency from '../../components/Emergency';
// import TimeSince from '../../components/TimeSince';
// import BackLink from '../../components/BackLink';
// import { gs } from '../../components/RioGlobalStrings';
// import { load } from 'react-native-track-player/lib/src/trackPlayer';

// function BarrasDetonante ({route}) {
//   const navigation = useNavigation();
//   const lang = useSelector(state => state.counter.language);
//   const {tiempo} = route.params;
//   const {data} = route.params;

//   let cantidad = [0,0,0,0,0,0]

//   console.log("Data de detonante: " + JSON.stringify(data))
//   // console.log(data[1].detonante)

//   for(let i = 0; i < data.length; i++) {
//     let det = data[i].detonante
//     console.log(det)

//     if(det === 'pareja'){
//       cantidad[0] = cantidad[0] + 1
//     }

//     if(det === 'familia'){
//       cantidad[1] = cantidad[1] + 1
//     }

//     if(det === 'amistades'){
//       cantidad[2] = cantidad[2] + 1
//     }

//     if(det === 'perdida'){
//       cantidad[3] = cantidad[3] + 1
//     }

//     if(det === 'estudios'){
//       cantidad[4] = cantidad[4] + 1
//     }

//     if(det === 'trabajo'){
//       cantidad[5] = cantidad[5] + 1
//     }

//   }

//   console.log(cantidad)

//   const Data = {
//     labels: [gs['pareja'][lang],gs['familia'][lang],gs['amistades'][lang],gs['perdida'][lang],gs['estUniversitarios'][lang],gs['trabajo'][lang]],
//     datasets: [
//       {
//         data: [cantidad[0],cantidad[1],cantidad[2],cantidad[3],cantidad[4],cantidad[5]]
//       }
//     ]
//   };

//   return(
//     <View>
//       <BotonConfig pantalla = 'Graficas' Back={()=>{navigation.navigate('BarrasDetonante')}}/>
//       <HeaderView headerButtons = 'yes'>
//         <TimeSince  />
//       </HeaderView>

//       <BodyView>
//       <BarChart
//         // style={graphStyle}
//         data={Data}
//         width={dimensions.bodyWidth}
//         height={300}
//         yAxisLabel=""
//         chartConfig={{backgroundColor: '#ffffff',
//           backgroundGradientFrom: '#ffffff',
//           backgroundGradientTo: '#ffffff',
//           color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`}}
//         verticalLabelRotation={30}
//       />
//       </BodyView>

//       <FooterView></FooterView>

//       <EmergencyView>
//           <Emergency/>
//       </EmergencyView>
//     </View>
//   )

// }

// export default BarrasDetonante;

// const styles = StyleSheet.create({});


import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors, dimensions } from '../../components/constants';
import { normalize } from '../../components/FondNormilize';
import React, { useState } from 'react';
import BarChart from '../../components/react-native-chart-kit/BarChart';
import { useDispatch, useSelector } from 'react-redux';

import HeaderView from '../../components/HeaderView';
import BodyView from '../../components/BodyView';
import EmergencyView from '../../components/EmergencyView';
import FooterView from '../../components/FooterView';
import Emergency from '../../components/Emergency';
import TimeSince from '../../components/TimeSince';
import LongButton from '../../components/LongButton';
import BackLink from '../../components/BackLink';
import { gs } from '../../components/RioGlobalStrings';
import moment from 'moment';



const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width



function BarrasEmociones({route}) {
  const MoodCount = useSelector(state => state.counter.moodCounter);
  console.log(MoodCount)
  const {tiempo} = route.params;
  const {Data} = route.params;
  const lang = useSelector(state => state.counter.language);

  let cantidad = [0,0,0,0,0,0]

  console.log("Data de detonante: " + JSON.stringify(Data))
  // console.log(data[1].detonante)

  for(let i = 0; i < Data.length; i++) {
    let emo = Data[i].emocion
    let fecha = Data[i].fecha
    //let originalString = fec;
    //let newString = originalString.split("-").join("");
    //fec = fec.replace('-', "");
    //fec = fec.replace('-', "");
    var fechs = fec
    fecha = Array.from(new Set(fecha.split('-'))).toString();
    console.log(fecha)
    console.log(emo)

    let fec = fecha

    let dateBetween = moment(fec, "YYYYMMDD").fromNow()
    console.log(dateBetween)
    let dateNum = dateBetween.slice(0, 2);
    console.log(dateNum)

    if(dateBetween.includes('hours') || dateNum <= tiempo){
      if(emo === 'felicidad'){
        cantidad[0] = cantidad[0] + 1
      }
  
      if(emo === 'ansiedad'){
        cantidad[1] = cantidad[1] + 1
      }
  
      if(emo === 'miedo'){
        cantidad[2] = cantidad[2] + 1
      }
  
      if(emo === 'tristeza'){
        cantidad[3] = cantidad[3] + 1
      }
  
      if(emo === 'coraje'){
        cantidad[4] = cantidad[4] + 1
      }
  
      if(emo === 'otros'){
        cantidad[5] = cantidad[5] + 1
      }
    }

    // if(emo === 'felicidad'){
    //   cantidad[0] = cantidad[0] + 1
    // }

    // if(emo === 'ansiedad'){
    //   cantidad[1] = cantidad[1] + 1
    // }

    // if(emo === 'miedo'){
    //   cantidad[2] = cantidad[2] + 1
    // }

    // if(emo === 'tristeza'){
    //   cantidad[3] = cantidad[3] + 1
    // }

    // if(emo === 'coraje'){
    //   cantidad[4] = cantidad[4] + 1
    // }

    // if(emo === 'otros'){
    //   cantidad[5] = cantidad[5] + 1
    // }

  }

  console.log(cantidad)

  const Images = [
    <Image source={require('../../assets/Felicidad.png')} resizeMode='contain' style={[styles.buttonImage, {top: dimensions.buttonHeight /7}]} />,
    <Image source={require('../../assets/Ansiedad.png')} resizeMode='contain' style={[styles.buttonImage, {top: dimensions.buttonHeight*1.15}]} />,
    <Image source={require('../../assets/Miedo.png')} resizeMode='contain' style={[styles.buttonImage, {top: dimensions.buttonHeight*2.2}]} />,
    <Image source={require('../../assets/Tristeza.png')} resizeMode='contain' style={[styles.buttonImage, {top: dimensions.buttonHeight*3.2}]} />,
    <Image source={require('../../assets/Coraje.png')} resizeMode='contain' style={[styles.buttonImage, {top: dimensions.buttonHeight*4.2}]} />
  ]

  const data= {
    labels: [" ", " ", " ", " ", " "],
    photos :[
      require("../../assets/Coraje.png"),
      require("../../assets/Felicidad.png"),
      require("../../assets/Tristeza.png"),
      require("../../assets/Miedo.png"),
      require("../../assets/Ansiedad.png"),
      require("../../assets/Otros.png"),
    ],
    datasets:[
      {
        data: [
          cantidad[0],
          cantidad[1],
          cantidad[2],
          cantidad[3],
          cantidad[4],
        ],
        colors: [
          (opacity =1) => `#da88b9`,
          (opacity =1) => `#5b8caf`,
          (opacity =1) => `#8f79b2`,
          (opacity =1) => `#1e76ba`,
          (opacity =1) => `#524566`,

          
        ],

      }
    ]
  };

  return (
    <View>
      <HeaderView headerButtons = 'yes'>
        <TimeSince  />
      </HeaderView>

      <BodyView>
        {/* <View style={{borderLeftColor:colors.mintGreen,borderLeftWidth:3, height:dimensions.bodyHeight*0.54,position:'absolute',zIndex:3, borderRadius:6, top:dimensions.bodyHeight*0.018 }}></View> */}
        <Text style={{color:colors.mintGreen, fontSize:normalize(50),top:dimensions.bodyHeight*0.43, position:'absolute', zIndex:3, left: dimensions.bodyWidth*-0.015}}>.    .    .    .     .</Text>
        <BarChart
          style={{
            //transform: [{ rotate: '90deg'}]
            //zIndex: 4,
            position:'absolute',
            left: ScreenWidth*-0.19,
            //left: (dimensions.bodyWidth*0.75)*-0.24,
            top: dimensions.bodyHeight *0.01
          }}
          data={data}
          width={dimensions.bodyHeight}
          height={dimensions.bodyWidth*0.8}
          chartConfig={{
            backgroundColor: "transparent",
            backgroundGradientTo: colors.backgroudDarkBlue,
            backgroundGradientToOpacity: 5,
            backgroundGradientFrom: colors.backgroudDarkBlue,
            backgroundGradientFromOpacity: 0,
            color: (opacity = 1) => `#ffffff`,
            barPercentage: 1,
            barRadius: 5,
            decimalPlaces: 0,
            labelColor: (opacity =1) => `#4eb5a3`,
          }}
          withHorizontalLabels={false}
          fromZero={true}
          withCustomBarColorFromData={true}
          flatColor={true}
          withInnerLines={false}
          showBarTops={false}
          showValuesOnTopOfBars={true}
          horizontalLabelRotation={270}
        />

        

        {/* <View style={styles.rectangle} /> */}
        {/* <View style={{height: dimensions.bodyHeight*0.05}}></View> */}
        <View style={{position:'absolute', top:dimensions.bodyHeight*0.6}}>

          <View style={{flexDirection:'row', marginBottom:dimensions.bodyHeight*0.01}}>
            <View style={{backgroundColor:colors.pink, height:dimensions.bodyHeight*0.05, width:dimensions.bodyWidth*0.1, borderRadius:6}}></View>
            <Text style={{color:colors.mintGreen, left:dimensions.bodyWidth*0.04, fontSize:normalize(13), fontWeight:'700', top:dimensions.bodyHeight*0.005}}>{gs['Felicidad'][lang]}</Text>
          </View>
          
          <View style={{flexDirection:'row', marginBottom:dimensions.bodyHeight*0.01}}>
            <View style={{backgroundColor:colors.mintGreen, height:dimensions.bodyHeight*0.05, width:dimensions.bodyWidth*0.1, borderRadius:6}}></View>
            <Text style={{color:colors.mintGreen, left:dimensions.bodyWidth*0.04, fontSize:normalize(13), fontWeight:'700', top:dimensions.bodyHeight*0.005}}>{gs['Ansiedad'][lang]}</Text>
          </View>

          <View style={{flexDirection:'row', marginBottom:dimensions.bodyHeight*0.01}}>
            <View style={{backgroundColor:colors.purple, height:dimensions.bodyHeight*0.05, width:dimensions.bodyWidth*0.1, borderRadius:6}}></View>
            <Text style={{color:colors.mintGreen, left:dimensions.bodyWidth*0.04, fontSize:normalize(13), fontWeight:'700', top:dimensions.bodyHeight*0.005}}>{gs['Miedo'][lang]}</Text>
          </View>

          <View style={{flexDirection:'row', marginBottom:dimensions.bodyHeight*0.01}}>
            <View style={{backgroundColor:colors.blue, height:dimensions.bodyHeight*0.05, width:dimensions.bodyWidth*0.1, borderRadius:6}}></View>
            <Text style={{color:colors.mintGreen, left:dimensions.bodyWidth*0.04, fontSize:normalize(13), fontWeight:'700', top:dimensions.bodyHeight*0.005}}>{gs['Tristeza'][lang]}</Text>
          </View>

          <View style={{flexDirection:'row', marginBottom:dimensions.bodyHeight*0.01}}>
            <View style={{backgroundColor:colors.deepPurple, height:dimensions.bodyHeight*0.05, width:dimensions.bodyWidth*0.1, borderRadius:6}}></View>
            <Text style={{color:colors.mintGreen, left:dimensions.bodyWidth*0.04, fontSize:normalize(13), fontWeight:'700', top:dimensions.bodyHeight*0.005}}>{gs['Coraje'][lang]}</Text>
          </View>

        </View>

        {/* <View style={{flexDirection:'row', marginBottom:dimensions.bodyHeight*0.01}}>
          <View style={{backgroundColor:colors.greyBlue, height:dimensions.bodyHeight*0.05, width:dimensions.bodyWidth*0.1, borderRadius:6}}></View>
          <Text style={{color:colors.mintGreen, left:dimensions.bodyWidth*0.04, fontSize:normalize(13), fontWeight:'700', top:dimensions.bodyHeight*0.005}}>{gs['Otros'][lang]}</Text>
        </View> */}

        
      </BodyView>

      <FooterView>
          <View style={{width:'50%', position:'absolute',marginTop: dimensions.separator}}>
            <BackLink labelBack={"Regresar"} gotoScreen={'Graficas'}></BackLink>
          </View>
      </FooterView>

      <EmergencyView>
          <Emergency/>
      </EmergencyView>
    </View>
  );
}

export default BarrasEmociones;

const styles = StyleSheet.create({
    buttonImage :{
      width: ScreenWidth * 0.14,
      height: ScreenHeight * 0.04,
      alignSelf: 'center',
      zIndex: 1,
      position: 'absolute',
      // left: dimensions.bodyWidth *0.63
    },
    rectangle: {
      top: dimensions.bodyHeight*0.2,
      left: dimensions.bodyWidth*0.03,
      zIndex: 1,
      position: 'absolute',
      width: dimensions.bodyWidth*0.01,
      height: dimensions.bodyHeight*0.41,
      backgroundColor: colors.mintGreen,
    },
});