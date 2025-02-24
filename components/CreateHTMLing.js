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

function GetDetData(detData,lang){
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

function GetEmoData(emoData,lang){
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

function GetActData(actData,lang){
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

function CreateDetBarChart (data,lang) {
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



 html = html + 
 `<strong>Graphs:</strong>
<table width="400" cellspacing="0" cellpadding="0" border="0" style="font-family: Arial, sans-serif;">
    <tr>
        <td align="center" style="padding-bottom: 10px;">
            <strong>Triggers</strong>
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
                                    Relationship
                                </td>
                                <td width="60">
                                    <div style="height:${finalData[1]}px; width:50px; background-color:#da88b9;"></div>
                                    Family
                                </td>
                                <td width="60">
                                    <div style="height:${finalData[2]}px; width:50px; background-color:#1e76ba;"></div>
                                    Friendship
                                </td>
                                <td width="60">
                                    <div style="height:${finalData[3]}px; width:50px; background-color:#524566;"></div>
                                    Loss or grief
                                </td>
                                <td width="60">
                                    <div style="height:${finalData[4]}px; width:50px; background-color:#4eb5a3;"></div>
                                    University
                                </td>
                                <td width="60">
                                    <div style="height:${finalData[5]}px; width:50px; background-color:#5b8caf;"></div>
                                    Work
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

function CreateEmoBarChart (data,lang) {
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
            <strong>Emotions</strong>
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
                                    Happiness
                                </td>
                                <td width="60">
                                    <div style="height:${finalData[1]}px; width:50px; background-color:#da88b9;"></div>
                                    Anxiety
                                </td>
                                <td width="60">
                                    <div style="height:${finalData[2]}px; width:50px; background-color:#1e76ba;"></div>
                                    Fear
                                </td>
                                <td width="60">
                                    <div style="height:${finalData[3]}px; width:50px; background-color:#524566;"></div>
                                    Sadness
                                </td>
                                <td width="60">
                                    <div style="height:${finalData[4]}px; width:50px; background-color:#4eb5a3;"></div>
                                    Anger
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

function CreateActBarChart (data, titulo, lang) {
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
             <strong>Activities</strong>
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


function CreateActividadUsoHTML (data,lang) {
  let nombres = []
  let vecesUsada = []
  let funciono = []
  let nofunciono = []

  for (i = 0; i < data.length; i++){
    nombres.push(data[i].actividad)
    vecesUsada.push(data[i].vecesUtilizada)
    funciono.push(data[i].funciono)
    nofunciono.push(data[i].nofunciono)
  }

  html = html + `<table style="width:100%; border:1px solid black;">
      <tr style="border:1px solid black;">
        <th style="border:1px solid black;">Activities</th>
        <th style="border:1px solid black;">Times Used</th>
        <th style="border:1px solid black;">Worked</th>
        <th style="border:1px solid black;">Not Worked</th>
      </tr>
      <tr>
         <td style="border:1px solid black;">Diary</td>
         <td style="border:1px solid black;">${vecesUsada[0]}</td>
         <td style="border:1px solid black;">${funciono[0]}</td>
         <td style="border:1px solid black;">${nofunciono[0]}</td>
       </tr>
       <tr>
         <td style="border:1px solid black;">Drawing</td>
         <td style="border:1px solid black;">${vecesUsada[1]}</td>
         <td style="border:1px solid black;">${funciono[1]}</td>
         <td style="border:1px solid black;">${nofunciono[1]}</td>
       </tr>
       <tr>
         <td style="border:1px solid black;">Music</td>
         <td style="border:1px solid black;">${vecesUsada[2]}</td>
         <td style="border:1px solid black;">${funciono[2]}</td>
         <td style="border:1px solid black;">${nofunciono[2]}</td>
       </tr>
       <tr>
         <td style="border:1px solid black;">Psychoeducation</td>
         <td style="border:1px solid black;">${vecesUsada[3]}</td>
         <td style="border:1px solid black;">${funciono[3]}</td>
         <td style="border:1px solid black;">${nofunciono[3]}</td>
       </tr>
       <tr>
         <td style="border:1px solid black;">Gratitude</td>
         <td style="border:1px solid black;">${vecesUsada[4]}</td>
         <td style="border:1px solid black;">${funciono[4]}</td>
         <td style="border:1px solid black;">${nofunciono[4]}</td>
       </tr>
       <tr>
         <td style="border:1px solid black;">Meditation</td>
         <td style="border:1px solid black;">${vecesUsada[5]}</td>
         <td style="border:1px solid black;">${funciono[5]}</td>
         <td style="border:1px solid black;">${nofunciono[5]}</td>
       </tr>
       <tr>
         <td style="border:1px solid black;">Breathing</td>
         <td style="border:1px solid black;">${vecesUsada[6]}</td>
         <td style="border:1px solid black;">${funciono[6]}</td>
         <td style="border:1px solid black;">${nofunciono[6]}</td>
       </tr>
       <tr>
         <td style="border:1px solid black;">Mindfulness</td>
         <td style="border:1px solid black;">${vecesUsada[7]}</td>
         <td style="border:1px solid black;">${funciono[7]}</td>
         <td style="border:1px solid black;">${nofunciono[7]}</td>
       </tr>
       <tr>
         <td style="border:1px solid black;">Pet</td>
         <td style="border:1px solid black;">${vecesUsada[8]}</td>
         <td style="border:1px solid black;">${funciono[8]}</td>
         <td style="border:1px solid black;">${nofunciono[8]}</td>
       </tr>
       <tr>
         <td style="border:1px solid black;">Walking</td>
         <td style="border:1px solid black;">${vecesUsada[9]}</td>
         <td style="border:1px solid black;">${funciono[9]}</td>
         <td style="border:1px solid black;">${nofunciono[9]}</td>
       </tr>
       <tr>
         <td style="border:1px solid black;">Shower</td>
         <td style="border:1px solid black;">${vecesUsada[10]}</td>
         <td style="border:1px solid black;">${funciono[10]}</td>
         <td style="border:1px solid black;">${nofunciono[10]}</td>
       </tr>
       <tr>
         <td style="border:1px solid black;">Exercise</td>
         <td style="border:1px solid black;">${vecesUsada[11]}</td>
         <td style="border:1px solid black;">${funciono[11]}</td>
         <td style="border:1px solid black;">${nofunciono[11]}</td>
       </tr>
       <tr>
         <td style="border:1px solid black;">Cooking</td>
         <td style="border:1px solid black;">${vecesUsada[12]}</td>
         <td style="border:1px solid black;">${funciono[12]}</td>
         <td style="border:1px solid black;">${nofunciono[12]}</td>
       </tr>
       <tr>
         <td style="border:1px solid black;">Talking</td>
         <td style="border:1px solid black;">${vecesUsada[13]}</td>
         <td style="border:1px solid black;">${funciono[13]}</td>
         <td style="border:1px solid black;">${nofunciono[13]}</td>
       </tr>
       <tr>
         <td style="border:1px solid black;">Spirituality</td>
         <td style="border:1px solid black;">${vecesUsada[14]}</td>
         <td style="border:1px solid black;">${funciono[14]}</td>
         <td style="border:1px solid black;">${nofunciono[14]}</td>
       </tr>
       <tr>
         <td style="border:1px solid black;">Resting</td>
         <td style="border:1px solid black;">${vecesUsada[15]}</td>
         <td style="border:1px solid black;">${funciono[15]}</td>
         <td style="border:1px solid black;">${nofunciono[15]}</td>
       </tr>
       <tr>
         <td style="border:1px solid black;">Acceptance</td>
         <td style="border:1px solid black;">${vecesUsada[16]}</td>
         <td style="border:1px solid black;">${funciono[16]}</td>
         <td style="border:1px solid black;">${nofunciono[16]}</td>
       </tr>
      `

//   for (i = 0; i < data.length; i++){
//     html = html + `<tr>
//         <td style="border:1px solid black;">${nombres[i]}</td>
//         <td style="border:1px solid black;">${vecesUsada[i]}</td>
//         <td style="border:1px solid black;">${funciono[i]}</td>
//         <td style="border:1px solid black;">${nofunciono[i]}</td>
//       </tr>`
//   }

  html = html + `</table>`


}

function CreateLogroHTML (data,lang) {
  //console.log(data)

  metas = []
  fechas = []

  for(i = 0; i < data.length; i++){
    metas.push(data[i].meta)
    fechas.push(data[i].date)
  }

  for(i = 0; i < fechas.length; i++){
    let fec = fechas[i]
    fechas[i] = fec.slice(0,15)
  }

  // html = html + `</b><strong align="center" style="font-family: Arial, sans-serif;">Logros:</strong>`
  html = html + `<table style="width:100%; border:1px solid black;">
      <tr style="border:1px solid black;">
        <th style="border:1px solid black;">Date Obtained</th>
        <th style="border:1px solid black;">Achievement Obtained</th>
      </tr>`

  for (i = 0; i < data.length; i++){
    html = html + `<tr>
        <td style="border:1px solid black;">${fechas[i]}</td>
        <td style="border:1px solid black;">${metas[i]}</td>
      </tr>`
    // html = html + `<p>${fechas[i]}:</p>`
    // html = html + `<p>${metas[i]}</p>`
  }
  html = html + `</table>`

}

function GetDiarioData (data,lang) {
  
  html = html + `<table style="width:100%; border:1px solid black;">
      <tr style="border:1px solid black;">
        <th style="border:1px solid black;">Date</th>
        <th style="border:1px solid black;">Diary Entry</th>
      </tr>`

  for (i = 0; i < data.length; i++){
    let fecha = data[i].fecha
    let texto = data[i].texto

    // html = html + `<p>${fecha}:</p>`
    // html = html + `<p>${texto}</p>`
    html = html + `<tr>
        <td style="border:1px solid black;">${data[i].fecha}</td>
        <td style="border:1px solid black;">${data[i].texto}</td>
      </tr>`
  }

  html = html + `</table>`

}


  
export const createHTMLing = function (options, Data) {
  let detData 
  let emoData
  let actData
  // let diarioData
  //let logroData
  let lang = Data[6]

  if(options[0]===true){
    html = html + `<strong>Activities:</strong>`
    CreateActividadUsoHTML(Data[5],lang)
  }
  if (options[1] === true){
    html = html +`<strong>Accomplishments:</strong>`
    CreateLogroHTML(Data[4],lang)
  }
  if(options[3] === true){
    html = html +`<strong>Diary:</strong>`
    diarioData = GetDiarioData(Data[3],lang)
  }
  if (options[2] === true){
    detData = GetDetData(Data[0],lang)
    emoData = GetEmoData(Data[1],lang)
    actData = GetActData(Data[2],lang)

    CreateDetBarChart(detData,lang)
    CreateEmoBarChart(emoData,lang)
    CreateActBarChart(actData[0], actData[1],lang)
  }




  // CreateDetBarChart(detData)
  // CreateEmoBarChart(emoData)
  // CreateActBarChart(actData[0], actData[1])
  html = html + `</b>`

  //console.log(html)


  // if (options[0] === true){
  //   Actividadeshtml ()
  // }

  //console.log(options)
  console.log(html)
  return html
}