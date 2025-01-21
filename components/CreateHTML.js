import { act } from "react-test-renderer"
import { JsxEmit } from "typescript"

// let htmlCode = `<b>
//   <table width="400" cellspacing="0" cellpadding="0" border="0" style="font-family: Arial, sans-serif;">
//   `

let html =`<b>`

// function Actividadeshtml () {
//   const actividades = ["1", "2", "3", "4", "5"]
//   htmlCode = htmlCode + `<table width="400" cellspacing="0" cellpadding="0" border="0" style="font-family: Arial, sans-serif;">
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
//                                     ${actividades[0]}
//                                 </td>
//                                 <td width="60">
//                                     <div style="height:150px; width:50px; background-color:#da88b9;"></div>
//                                     ${actividades[0]}
//                                 </td>
//                                 <td width="60">
//                                     <div style="height:200px; width:50px; background-color:#1e76ba;"></div>
//                                     ${actividades[0]}
//                                 </td>
//                                 <td width="60">
//                                     <div style="height:130px; width:50px; background-color:#524566;"></div>
//                                     ${actividades[0]}
//                                 </td>
//                                 <td width="60">
//                                     <div style="height:130px; width:50px; background-color:#4eb5a3;"></div>
//                                     ${actividades[0]}
//                                 </td>
//                                 <td width="60">
//                                     <div style="height:130px; width:50px; background-color:#5b8caf;"></div>
//                                     ${actividades[0]}
//                                 </td>
//                             </tr>
//                         </table>
//                     </td>
//                 </tr>
//             </table>
//         </td>
//     </tr>
// </table>`
// }

function GetDetData(detData){
  let cantidad = [0,0,0,0,0,0]

  for(let i = 0; i < detData.length; i++) {
    let det = detData[i].detonante

    if(det === 'pareja'){
      cantidad[0] = cantidad[0] + 1
    }

    if(det === 'familia'){
      cantidad[1] = cantidad[1] + 1
    }

    if(det === 'amistades'){
      cantidad[2] = cantidad[2] + 1
    }

    if(det === 'perdida'){
      cantidad[3] = cantidad[3] + 1
    }

    if(det === 'estudios'){
      cantidad[4] = cantidad[4] + 1
    }

    if(det === 'trabajo'){
      cantidad[5] = cantidad[5] + 1
    }
  }

  //console.log(cantidad)

  return cantidad
}

function GetEmoData(emoData){
  let cantidad = [0,0,0,0,0]

  for(let i = 0; i < emoData.length; i++) {
    let emo = emoData[i].emocion

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

    // if(emo === 'otros'){
    //   cantidad[5] = cantidad[5] + 1
    // }
  }

  //console.log(cantidad)
  return cantidad
}

function GetActData(actData){
  let cantidad = [0,0,0,0,0]
  let titulosAct = []

  for(let i = 0; i < actData.length; i++){
    let act = actData[i].actividades
    
    if(titulosAct.length < 5){
        if(!titulosAct.includes(act)){
            titulosAct.push(act)
        }
    }
  }

  for(let i = 0; i < actData.length; i++){
    let act = actData[i].actividades

    if(act === titulosAct[0]){
      cantidad[0] += 1
    }

    if(act === titulosAct[1]){
      cantidad[1] = cantidad[1] + 1
    }

    if(act === titulosAct[2]){
      cantidad[2] = cantidad[2] + 1
    }

    if(act === titulosAct[3]){
      cantidad[3] = cantidad[3] + 1
    }

    if(act === titulosAct[4]){
      cantidad[4] = cantidad[4] + 1
    }
  }

  //console.log(titulosAct)
  //console.log(cantidad)
  return [cantidad, titulosAct]
}

function CreateDetBarChart (data) {
  let total = 0
  for (i = 0; i < data.length; i++){
    total = total + data[i]
  }

  //console.log(total)

  let finalData = [0,0,0,0,0,0]
  for (i = 0; i < data.length; i++){
    dum = data[i]
    dum = dum / total
    dum = dum * 100
    dum = dum * 2
    finalData[i] = dum
  }

  // console.log(finalData)



 html = html + `
<table width="400" cellspacing="0" cellpadding="0" border="0" style="font-family: Arial, sans-serif;">
    <tr>
        <td align="center" style="padding-bottom: 10px;">
            <strong>Detonantes</strong>
        </td>
    </tr>
    <tr>
        <td>
            <table width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                    <td align="center">
                        <table cellspacing="5" cellpadding="0" border="0" height="250">
                            <tr valign="bottom" align="center">
                                <td width="60">
                                    <div style="height:${finalData[0]}px; width:50px; background-color:#8f79b2;"></div>
                                    Pareja
                                </td>
                                <td width="60">
                                    <div style="height:${finalData[1]}px; width:50px; background-color:#da88b9;"></div>
                                    Familia
                                </td>
                                <td width="60">
                                    <div style="height:${finalData[2]}px; width:50px; background-color:#1e76ba;"></div>
                                    Amistades
                                </td>
                                <td width="60">
                                    <div style="height:${finalData[3]}px; width:50px; background-color:#524566;"></div>
                                    Perdida
                                </td>
                                <td width="60">
                                    <div style="height:${finalData[4]}px; width:50px; background-color:#4eb5a3;"></div>
                                    Estudios
                                </td>
                                <td width="60">
                                    <div style="height:${finalData[5]}px; width:50px; background-color:#5b8caf;"></div>
                                    Trabajo
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>`

//return html

}

function CreateEmoBarChart (data) {
  console.log(data)
  let total = 0
  for (i = 0; i < data.length; i++){
    total = total + data[i]
  }

  //console.log(total)

  let finalData = [0,0,0,0,0,0]
  for (i = 0; i < data.length; i++){
    dum = data[i]
    dum = dum / total
    dum = dum * 100
    dum = dum * 2
    finalData[i] = dum
  }

  // console.log(finalData)



 html = html + `
<table width="400" cellspacing="0" cellpadding="0" border="0" style="font-family: Arial, sans-serif;">
    <tr>
        <td align="center" style="padding-bottom: 10px;">
            <strong>Emociones</strong>
        </td>
    </tr>
    <tr>
        <td>
            <table width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                    <td align="center">
                        <table cellspacing="5" cellpadding="0" border="0" height="250">
                            <tr valign="bottom" align="center">
                                <td width="60">
                                    <div style="height:${finalData[0]}px; width:50px; background-color:#8f79b2;"></div>
                                    Felicidad
                                </td>
                                <td width="60">
                                    <div style="height:${finalData[1]}px; width:50px; background-color:#da88b9;"></div>
                                    Ansiedad
                                </td>
                                <td width="60">
                                    <div style="height:${finalData[2]}px; width:50px; background-color:#1e76ba;"></div>
                                    Miedo
                                </td>
                                <td width="60">
                                    <div style="height:${finalData[3]}px; width:50px; background-color:#524566;"></div>
                                    Tristeza
                                </td>
                                <td width="60">
                                    <div style="height:${finalData[4]}px; width:50px; background-color:#4eb5a3;"></div>
                                    Coraje
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>`

//return html

}

function CreateActBarChart (data, titulo) {
  console.log(data)
  let total = 0
  for (i = 0; i < data.length; i++){
    total = total + data[i]
  }

  //console.log(total)

  let finalData = [0,0,0,0,0,0]
  for (i = 0; i < data.length; i++){
    dum = data[i]
    dum = dum / total
    dum = dum * 100
    dum = dum * 2
    finalData[i] = dum
  }

  // console.log(finalData)
  html = html + `
  <table width="400" cellspacing="0" cellpadding="0" border="0" style="font-family: Arial, sans-serif;">
     <tr>
         <td align="center" style="padding-bottom: 10px;">
             <strong>Actividades</strong>
         </td>
     </tr>
     <tr>
        <td>
            <table width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                    <td align="center">
                        <table cellspacing="5" cellpadding="0" border="0" height="250">
                            <tr valign="bottom" align="center">
     `
  
  for (i = 0; i < titulo.length; i++){
    html = html + `<td width="60">
                    <div style="height:${finalData[i]}px; width:50px; background-color:#8f79b2;"></div>
                    ${titulo[i]}
                  </td>`
  }

  html = html + `</tr>
                        </table>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>`

    



//  html = html + `
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
//                                     <div style="height:${finalData[0]}px; width:50px; background-color:#8f79b2;"></div>
//                                     ${titulo[0]}
//                                 </td>
//                                 <td width="60">
//                                     <div style="height:${finalData[1]}px; width:50px; background-color:#da88b9;"></div>
//                                     ${titulo[0]}
//                                 </td>
//                                 <td width="60">
//                                     <div style="height:${finalData[2]}px; width:50px; background-color:#1e76ba;"></div>
//                                     ${titulo[0]}
//                                 </td>
//                                 <td width="60">
//                                     <div style="height:${finalData[3]}px; width:50px; background-color:#524566;"></div>
//                                     ${titulo[0]}
//                                 </td>
//                                 <td width="60">
//                                     <div style="height:${finalData[4]}px; width:50px; background-color:#4eb5a3;"></div>
//                                     ${titulo[0]}
//                                 </td>
//                                 <td width="60">
//                                     <div style="height:${finalData[4]}px; width:50px; background-color:#4eb5a3;"></div>
//                                     ${finalData[0]}
//                                 </td>
//                             </tr>
//                         </table>
//                     </td>
//                 </tr>
//             </table>
//         </td>
//     </tr>
// </table>`

//return html

}


  
export const createHTML = function (options, Data) {
  let detData 
  let emoData
  let actData

  if (options[2] === true){
    detData = GetDetData(Data[0])
    emoData = GetEmoData(Data[1])
    actData = GetActData(Data[2])
  }




  CreateDetBarChart(detData)
  CreateEmoBarChart(emoData)
  CreateActBarChart(actData[0], actData[1])
  html = html + `</b>`

  //console.log(html)


  // if (options[0] === true){
  //   Actividadeshtml ()
  // }

  //console.log(options)
  // console.log(htmlCode)
  return html
}