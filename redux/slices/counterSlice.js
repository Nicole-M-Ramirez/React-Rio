import { createSlice } from '@reduxjs/toolkit';
import { timeNowAsInt } from '../../components/RioGlobalFuncs';
import { toDate } from '../../components/RioGlobalFuncs';
import { getMetaIdx } from '../../components/RioGlobalFuncs';
import { startTransition } from 'react';

export const counterSlice = createSlice({
   name: 'counter',
   initialState: {
      timeAceleration:3600,
      setPassword: false,
      pantallaConfig: '',
      pantallConfigExtras:'',
      password: '1234',
      setContacto: false,
      contacto : '7870000000',
      contPopUp: true,
      metaPopUp: true,
      language: 'es',
      registered: false,
      dateReg: undefined,
      lastAuto: undefined ,//"Sun Nov 12 2023 10:52:04 GMT-0400", 
      //detonantesData : [{detonante:'dummy', fecha:'dummy'}],
      detData: [
         // {detonante: 'trabajo', fecha: '2025-01-13'},
         // {detonante: 'trabajo', fecha: '2025-01-13'},
         // {detonante: 'trabajo', fecha: '2025-01-13'},
         // {detonante: 'trabajo', fecha: '2025-01-13'},
         // {detonante: 'trabajo', fecha: '2025-01-13'},
         // {detonante: 'trabajo', fecha: '2025-01-13'},
         // {detonante: 'trabajo', fecha: '2025-01-13'},
         // {detonante: 'trabajo', fecha: '2025-01-13'},
         // {detonante: 'trabajo', fecha: '2025-01-13'},
      ],
      emoData: [
         // {emocion: 'felicidad', fecha: '2024-07-23'},
         // {emocion: 'felicidad', fecha: '2024-07-31'},
         // {emocion: 'felicidad', fecha: '2024-08-01'},
         // {emocion: 'felicidad', fecha: '2024-08-02'},
         // {emocion: 'felicidad', fecha: '2024-08-03'},
         // {emocion: 'felicidad', fecha: '2024-08-04'},
         // {emocion: 'felicidad', fecha: '2024-08-05'},
         // {emocion: 'felicidad', fecha: '2024-08-06'},
         // {emocion: 'felicidad', fecha: '2024-08-07'},
      ],
      autoLecionData: [
         // {fecha: '2024-07-23'},
         // {fecha: '2024-07-31'},
         // {fecha: '2024-08-01'},
         // {fecha: '2024-08-02'},
         // {fecha: '2024-08-03'},
         // {fecha: '2024-08-04'},
         // {fecha: '2024-08-05'},
         // {fecha: '2024-08-06'},
         // {fecha: '2024-08-07'},
      ],
      actData: [
         // {actividades: 'Diary' , fecha: '2024-07-23'},
         // {actividades: 'Diary' , fecha: '2024-07-01'},
         // {actividades: 'Diary' , fecha: '2024-08-01'},
         // {actividades: 'Diary' , fecha: '2024-08-02'},
         // {actividades: 'Diary' , fecha: '2024-08-03'},
         // {actividades: 'Diary' , fecha: '2024-08-04'},
         // {actividades: 'Diary' , fecha: '2024-08-05'},
         // {actividades: 'Diary' , fecha: '2024-08-06'},
         // {actividades: 'Diary' , fecha: '2024-08-07'},
      ],
      logroData: [
         // {logro: 'mediar1', fecha: "24-08-07"},
         // {logro: 'mediar5', fecha: "24-08-12"},
      ],
      
      intentosActividad: false,

      // 2023-10-11: Formato viejo
      // dateData: {
      //    '2023-10-10':{'text':'una entrada el 10', 'mood': 'coraje', 'auto': '1120', 'act': [['Respiración', '1145'], ['Caminar', '1225']]},
      // '2023-03-15':{'text':'una entrada el 15', 'mood': 'feliz', 'auto': '1345'},
      // '2023-03-23':{'text':'', 'auto': '1345'}
      // },
      dateData: {
         // '2023-11-10':{'text':'una entrada el 10 de octubre', 
         //               'mood': [ {'type': 'Coraje', 'time': 2334, 
         //                          'detonantes': {"pareja":true,"familia":false,"amistades":false,"perdida":false,"estudios":false}}, 
         //                         {'type': 'Felicidad', 'time': 1122,
         //                         'detonantes': {"pareja":true,"familia":false,"amistades":false,"perdida":false,"estudios":false}}
         //                      ],
         //                'act': [{'type':'Respiración', 'time':1145}, {'type':'Caminar', 'time':1225}],
         //                'casis': [1120, 1234] }
      },
      diarioData:[
         // {fecha: '2024-01-24', texto:'Hoy bañe a mi tortuga'},
         // {fecha: '2024-01-26', texto:'Hoy bañe a mi tortuga'},
      ],
      actDataPlus: [
         {actividad: "Diario", vecesUtilizada: 0, funciono: 0, nofunciono:0},
         {actividad: "Dibujo", vecesUtilizada: 0, funciono: 0, nofunciono:0},
         {actividad: "Musica", vecesUtilizada: 0, funciono: 0, nofunciono:0},
         {actividad: "Psicoeducacion", vecesUtilizada: 0, funciono: 0, nofunciono:0},
         {actividad: "Gratitud", vecesUtilizada: 0, funciono: 0, nofunciono:0},
         {actividad: "Meditacion", vecesUtilizada: 0, funciono: 0, nofunciono:0},
         {actividad: "Gratitud", vecesUtilizada: 0, funciono: 0, nofunciono:0},
         {actividad: "Meditacion", vecesUtilizada: 0, funciono: 0, nofunciono:0},
         {actividad: "Respiracion", vecesUtilizada: 0, funciono: 0, nofunciono:0},
         {actividad: "Atencion Plena", vecesUtilizada: 0, funciono: 0, nofunciono:0},
         {actividad: "Mascota", vecesUtilizada: 0, funciono: 0, nofunciono:0},
         {actividad: "Caminar", vecesUtilizada: 0, funciono: 0, nofunciono:0},
         {actividad: "Baño", vecesUtilizada: 0, funciono: 0, nofunciono:0},
         {actividad: "Ejercicio", vecesUtilizada: 0, funciono: 0, nofunciono:0},
         {actividad: "Cocinar", vecesUtilizada: 0, funciono: 0, nofunciono:0},
         {actividad: "Hablar", vecesUtilizada: 0, funciono: 0, nofunciono:0},
         {actividad: "Espiritualidad", vecesUtilizada: 0, funciono: 0, nofunciono:0},
         {actividad: "Descanso", vecesUtilizada: 0, funciono: 0, nofunciono:0},
         {actividad: "Aceptacion", vecesUtilizada: 0, funciono: 0, nofunciono:0},
      ],
      value: 42,
      moodCounter: {'Felicidad':{'cantidad': 0},'Ansiedad':{'cantidad': 0},
                    'Miedo':{'cantidad': 0},'Tristeza':{'cantidad': 0},
                    'Coraje':{'cantidad': 0},'Otros':{'cantidad': 0},
      },
      metas: 
         // [{date: 'Wed Oct 11 2023 13:55:07 GMT-0400', meta: '05dias', active: false, lograda: false, dateComplete: 'none'},
         // {date: 'Wed Oct 10 2023 13:55:07 GMT-0400', meta: 'caminar07', active: false, lograda: true, dateComplete: 'Wed Oct 10 2023 15:55:07 GMT-0400'},
         // {date: 'Wed Oct 4 2023 13:55:07 GMT-0400', meta: '10dias', active: false, lograda: true, dateComplete: 'Wed Oct 6 2023 15:55:07 GMT-0400'}]      ,
         [],
         otraCosa: []
   },
   reducers: {
      updateTimeAceleration: (state,action)=>{
         state.timeAceleration = action.payload.time
      },
      updateDateData: (state,action) => {
         state.value++;
         if (state.dateData[action.payload.theDate] !== undefined) {
            state.dateData[action.payload.theDate].text = action.payload.text;
         }
         else {
            state.dateData[action.payload.theDate] = {'text':action.payload.text};
         }
      },
      updateLastAuto: (state,action) => {
         console.log('current metas:' + state.metas);
      },
      
      updateMeta: (state,action) => {
         console.log('current metas:' + state.metas);
      },
      updateMetaCumplida: (state,action) => {
         console.log('META CIUMPLIDA metas:' + action.payload.activeMeta);
         const idx = getMetaIdx(state.metas, action.payload.activeMeta);
         console.log("idx:" + idx);
         if (idx >= 0) {
            state.metas[idx].lograda = true;
            state.metas[idx].active = false;
            const d = new Date();
            state.metas[idx].dateComplete = d.toString(); 
         }
      },
      updateLang: (state,action) => {
         state.language = action.payload.lang;
         console.log("changed slice lang to: " + action.payload.lang);
      },
      reportCASIS: (state,action) => {
         if (state.dateData[action.payload.theDate] === undefined) {
            state.dateData[action.payload.theDate] = {'text':action.payload.text, casis:[]};
         }
         else if (state.dateData[action.payload.theDate].casis === undefined) state.dateData[action.payload.theDate].casis = [];

         state.dateData[action.payload.theDate].casis.push(timeNowAsInt());

         const casisThisDate = state.dateData[action.payload.theDate].casis;
         // console.log("in reportCasis (store): " + action.payload.theDate + " " +  JSON.stringify(casisThisDate));
         const dateAsInt = casisThisDate[casisThisDate.length-1];
         const stringForThisCASIS =  action.payload.theDate + " " + parseInt(dateAsInt/100) + ":" + dateAsInt % 100 + " GMT-0400";
         // console.log(" stringForThisCASIS: " + stringForThisCASIS);

         const dateForThisCASIS = toDate(action.payload.theDate, casisThisDate[casisThisDate.length-1] )
         const dateForLastCASIS = new Date(state.lastAuto);
         // console.log(" LastCASIS: " + dateForLastCASIS.toString());
         // console.log(" ThisCASIS: " + dateForThisCASIS.toString());
         
          if (state.lastAuto === undefined || dateForLastCASIS < dateForThisCASIS ) {
            console.log("UPDATEING CASIS!!!");
            state.lastAuto = dateForThisCASIS.toString();
            // state.firstAutoReg = true;
          }


      },
      addMeta: (state,action) => {
         const m = action.payload.meta;
         const d = action.payload.theDate;
         const nid = action.payload.nid;
         console.log("in addMeta: " + d + " " + m);

         // poner en logrado falso, el resto de las metas que están activas y no han sido logradas
         state.metas.map((object, index) => { 
            if (object.active) { 
               object.lograda = false;
               object.active = false;
            };
         });

         // add the new meta
         let daysQty = parseInt(m.slice(-2));
         console.log("The amount of days is: " + daysQty);

         // Que clase de charrería!! Pero estaba arroyao así que ....
         if (m.includes("dia")) {
            state.metas.push({date: d, meta: m, active: true, lograda: false, notifID: nid});
         }
         else if (daysQty == 1)
            state.metas.push({date: d, meta: m, active: true, lograda: false, notifID: nid, check: {'1': false}});
         else if (daysQty == 3)
            state.metas.push({date: d, meta: m, active: true, lograda: false, notifID: nid, check: {'1': false, '2': false,'3': false}});
         else if (daysQty == 5)
            state.metas.push({date: d, meta: m, active: true, lograda: false, notifID: nid, check: {'1': false, '2': false,'3': false, '4': false, '5': false}});
         else if (daysQty == 7)
            state.metas.push({date: d, meta: m, active: true, lograda: false, notifID: nid,  check: {'1': false, '2': false,'3': false, '4': false, '5': false, '6': false, '7': false}});
         else 
            state.metas.push({date: d, meta: m, active: true, lograda: false, notifID: nid,  check: {'1': false, '2': false,'3': false, '4': false, '5': false, '6': false, '7': false,'8': false,'9': false,'10': false}});

      },
      updateMetaCheck: (state,action) => {
         idx = action.payload.idx;
         let d =  action.payload.activeMeta.date;
         let checkState =  action.payload.checkState;
         console.log("updating meta check: "  + idx + " to: " + checkState);
         console.log("Looking for: " + d );
         let found = -1;
         for (let i = state.metas.length -1; i >= 0 && found < 0; i--) {
            console.log(i)
            if (state.metas[i].date == d) found = i;
         }
         
         if (found >= 0) {
            console.log("will update: " + JSON.stringify(state.metas[found]) );
            state.metas[found].check[idx] = checkState;
         }
      },

      cancelMeta: (state,action) => {
         console.log("========= in CANCEL CANCEL meta my payload: " + JSON.stringify(action.payload));
         let nid = action.payload.nid;
         console.log("I am supposed to find the meta with : "  + nid );
         console.log("And kill it" );
         let found = -1;
         for (let i = state.metas.length -1; i >= 0 && found < 0; i--) {
            console.log(i)
            if (state.metas[i].nid == nid) found = i;
         }
         
         if (found >= 0) {
            console.log("will cancel: " + JSON.stringify(state.metas[found]) );
            state.metas[found].active = false;
         }
      },

      /*
      2023-10-11: Cambio para nueva estructura de mood
      */
      updateMood: (state, action) => {
         console.log("Updating mood for date: " + action.payload.theDate +  " to: " + action.payload.mood);
         // console.log("Detonantes en counter slice: " + JSON.stringify(action.payload.detonantes));
         console.log(action.payload.detonantes);
         const d = action.payload.theDate;

         if (state.dateData[d] === undefined) state.dateData[d] = {'text':'', mood : []}
         else if (state.dateData[d].mood === undefined) state.dateData[d].mood = [];
         
         // state.dateData[d].mood = action.payload.mood;
         // state.dateData[d].detonantes = action.payload.detonantes;

         const mood = action.payload.mood;
         const detonantes = action.payload.detonantes;
         const time = timeNowAsInt();

         const moodObject = {'type':  mood, 'time': time, 'detonantes': detonantes};
         state.dateData[d].mood.push(moodObject);

         // Descomenta cuando hallas decido si puedes acceder mood desde dias que no sean el presente
         // state.dateData[action.payload.theDate].mood = action.payload.mood;
         // state.dateData[action.payload.theDate].detonantes = action.payload.detonantes;

         // if(action.payload.mood === 'Felicidad'){
         //    state.moodCounter[]
         // }
         console.log("updating mood counter for mood: " + action.payload.mood)
         //state.moodCounter[action.payload.mood].cantidad = state.moodCounter[action.payload.mood].cantidad + 1;
         //console.log("Now moodCounter for mood " + action.payload.mood + " is: "+ state.moodCounter[action.payload.mood].cantidad)
      },
      addActivity: (state, action) => {

          console.log("in STORE addActivity: " + action.payload.act +  " date: " + action.payload.theDate);
          console.log("toDate:" + timeNowAsInt());
          const d = action.payload.theDate;

         let newAct = {'type':action.payload.act, 'time':timeNowAsInt()};

         console.log("Ill try to insert this: " + JSON.stringify(newAct));

         if (state.dateData[d] === undefined ) state.dateData[d] = {'text':'', act : [newAct]};
         else if (state.dateData[d].act === undefined)  state.dateData[d].act = [newAct];
         else  state.dateData[d].act.push(newAct);

         //  console.log(action.payload.detonantes);
         //  const d = action.payload.theDate;
 
         //  if (state.dateData[d] === undefined) state.dateData[d] = {'text':'', mood : []}
         //  else if (state.dateData[d].mood === undefined) state.dateData[d].mood = [];
          
 
 
         //  const mood = action.payload.mood;
         //  const detonantes = action.payload.detonantes;
         //  const time = timeNowAsInt();
 
         //  const moodObject = {'type':  mood, 'time': time, 'detonantes': detonantes};
         //  state.dateData[d].mood.push(moodObject);
 
 
         //  console.log("updating mood counter for mood: " + action.payload.mood);
       },

      decreaseByOne: (state, action ) => {
         state.value--;
         // state.otraCosa.splice(state.otraCosa.indexOf(action.payload.id),1);
      },
      registerFirstDate: (state)  => {
         const d = new Date();
         state.dateReg = d.toString();
         console.log("This app has begun operation on: " + d.toString());
      },
      register: (state, actiion) => {
         state.registered = true;
         console.log("REGISTERING!!!! =============================================");
      },
      updatePassword: (state, action)=>{
         state.password = action.payload.pass;
         console.log('password:'+state.password)
         state.setPassword = true;
      },
      updateContacto: (state, action)=>{
         state.contacto = action.payload.cont;
         console.log('contacto:'+state.contacto)
         state.setContacto = true;
      },
      updatePasswordDelete: (state, action)=>{
         state.setPassword = false;
         state.password = action.payload.pass;
         console.log('password borrado')
      },
      updateContactDelete: (state, action)=>{
         state.setContacto = false;
         state.contacto = action.payload.cont;
         console.log('contacto borrado')
      },
      updatePantallaConfig: (state, action)=>{
         state.pantallaConfig = action.payload.pan;
         state.pantallConfigExtras = action.payload.ex;
         console.log('pantalla:'+state.pantallaConfig)
         console.log('Extras:'+state.pantallConfigExtras)
      },
      updateintentosActividad: (state, action)=>{
         state.intentosActividad = action.payload.intento;
      },
      updateContPopUp: (state, action)=>{
         state.contPopUp = false;
         console.log('contacto popup:'+state.contPopUp)
      },
      updateMetaPopUp: (state, action)=>{
         state.metaPopUp = false;
         console.log('meta popup:'+state.metaPopUp)
      },
      updateActUso: (state, action)=>{
         data = state.actDataPlus

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

         let index = nombres.indexOf(action.payload.nombre)

         if (action.payload.opcion === "si"){
            state.actDataPlus[index] = {actividad: nombres[index], vecesUtilizada: vecesUsada[index]+1, funciono: funciono[index]+1, nofunciono:nofunciono[index]}
         }
         else{
            state.actDataPlus[index] = {actividad: nombres[index], vecesUtilizada: vecesUsada[index]+1, funciono: funciono[index], nofunciono:nofunciono[index]+1}
         }

         console.log("actividad actualizada: ", state.actDataPlus)

      },
      addDetonanteData : (state, action)=>{
         console.log("detonante: ", action.payload.det)
         console.log("fecha: ", action.payload.fec)
         //const detData = {detoante: action.payload.det, 'fecha' : action.payload.fec};
         //state.deton.push({detoante: action.payload.det, 'fecha' : action.payload.fec})
         state.detData.push({detonante: action.payload.det, fecha: action.payload.fec})
         //state.detonantesData = 
         console.log("tabla de detonantes:", state.detData);
      },
      addEmocionData : (state, action)=>{
         console.log("emocion: ", action.payload.emo)
         console.log("fecha: ", action.payload.fec)
         //const detData = {detoante: action.payload.det, 'fecha' : action.payload.fec};
         //state.deton.push({detoante: action.payload.det, 'fecha' : action.payload.fec})
         state.emoData.push({emocion: action.payload.emo, fecha: action.payload.fec})
         //state.detonantesData = 
         console.log("tabla de emociones:",state.emoData);
      },
      addAutolecionData : (state, action)=>{
         //console.log("fech")
         //const fecha = action.payload.fec
         state.autoLecionData.push({fecha: action.payload.fec});
         console.log("tabla de autoleciones" + state.autoLecionData);
      },
      addActividadesData : (state, action)=>{
         console.log("actividad: ", action.payload.act)
         console.log("fecha: ", action.payload.fec)
         //const detData = {detoante: action.payload.det, 'fecha' : action.payload.fec};
         //state.deton.push({detoante: action.payload.det, 'fecha' : action.payload.fec})
         state.actData.push({actividades: action.payload.act, fecha: action.payload.fec})
         //state.detonantesData = 
         console.log("tabla de actividades" + state.actData);
      },
      addDiaryEntry : (state, action)=>{
         console.log("fecha: ", action.payload.fecha)
         console.log("texto: ", action.payload.texto)

         let diario = state.diarioData
         let fechas = []

         for (i = 0; i < diario.length; i++){
            fechas.push(diario[i].fecha)
          }

          if (fechas.includes(action.payload.fecha)){
            let index = fechas.indexOf(action.payload.fecha)
            console.log("incluido")
             //console.log(diario)
            //diario[index] = {fecha : '2025-01-04', texto: 'adios' }
            state.diarioData[index] = {fecha : action.payload.fecha, texto : action.payload.texto};
            //console.log(diario)
            //diario.splice(2, 0, "lene");
          }
          else{
            state.diarioData.push({fecha: action.payload.fecha, texto: action.payload.texto})
          }


         // let data = state.diarioData

         // if (data.fecha.includes(action.payload.fecha)){
         //    let index = data.fecha.
         // }
         // state.diarioData.push({fecha: action.payload.fecha, texto: action.payload.texto})
         console.log("lista de entradas en el diario: ", state.diarioData)
      },
      addLogro : (state, action)=>{
         console.log("logro: ", action.payload.logro)
         console.log("fecha: ", action.payload.fecha)
         //const detData = {detoante: action.payload.det, 'fecha' : action.payload.fec};
         //state.deton.push({detoante: action.payload.det, 'fecha' : action.payload.fec})
         state.actData.push({logro: action.payload.logro, fecha: action.payload.fecha})
         //state.detonantesData = 
         console.log("tabla de logros cumplidos" + state.logroData);
      },
   },
});


export const { addLogro, cancelMeta, registerFirstDate,updateDateData, addActivity, updateLastAuto, updateMetaCumplida, updateMetaCheck, updateMood, updateLang, decreaseByOne, register, updatePassword, updatePasswordDelete, reportCASIS, addMeta, updateMeta,updateintentosActividad,updatePantallaConfig, updateContPopUp, updateMetaPopUp, updateContacto, addDetonanteData, addEmocionData,addAutolecionData,addActividadesData, updateContactDelete, addDiaryEntry, updateActUso,updateTimeAceleration} = counterSlice.actions;


export default counterSlice.reducer;
