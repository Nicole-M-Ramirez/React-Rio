import { act } from "react-test-renderer"
import { JsxEmit } from "typescript"

let htmlCode = `<b>
  <table width="400" cellspacing="0" cellpadding="0" border="0" style="font-family: Arial, sans-serif;">
  `

function Actividadeshtml () {
  const actividades = ["1", "2", "3", "4", "5"]
  htmlCode = htmlCode + `<table width="400" cellspacing="0" cellpadding="0" border="0" style="font-family: Arial, sans-serif;">
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
                                <td width="60">
                                    <div style="height:100px; width:50px; background-color:#8f79b2;"></div>
                                    ${actividades[0]}
                                </td>
                                <td width="60">
                                    <div style="height:150px; width:50px; background-color:#da88b9;"></div>
                                    ${actividades[0]}
                                </td>
                                <td width="60">
                                    <div style="height:200px; width:50px; background-color:#1e76ba;"></div>
                                    ${actividades[0]}
                                </td>
                                <td width="60">
                                    <div style="height:130px; width:50px; background-color:#524566;"></div>
                                    ${actividades[0]}
                                </td>
                                <td width="60">
                                    <div style="height:130px; width:50px; background-color:#4eb5a3;"></div>
                                    ${actividades[0]}
                                </td>
                                <td width="60">
                                    <div style="height:130px; width:50px; background-color:#5b8caf;"></div>
                                    ${actividades[0]}
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>`
}

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
  let cantidad = [0,0,0,0,0,0]

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

    if(emo === 'otros'){
      cantidad[5] = cantidad[5] + 1
    }
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

  console.log(titulosAct)
  console.log(cantidad)
  return [cantidad, titulosAct]
}


  
export const createHTML = function (options, Data) {
  if (options[2] === true){
    let detData = GetDetData(Data[0])
    let emoData = GetEmoData(Data[1])
    let actData = GetActData(Data[2])
  }
  // if (options[0] === true){
  //   Actividadeshtml ()
  // }

  //console.log(options)
  // console.log(htmlCode)
  return 
}