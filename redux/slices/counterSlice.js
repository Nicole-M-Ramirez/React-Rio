import { createSlice } from '@reduxjs/toolkit';
import { timeNowAsInt } from '../../components/RioGlobalFuncs';
import { toDate } from '../../components/RioGlobalFuncs';
import { getMetaIdx } from '../../components/RioGlobalFuncs';
import { startTransition } from 'react';

export const counterSlice = createSlice({
   name: 'counter',
   initialState: {
      setPassword: false,
      pantallaConfig: '',
      pantallConfigExtras:'',
      password: '12345',
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
         // { id: 1, name: 'John' },
         // { id: 2, name: 'Jane' },
         // { id: 3, name: 'Bob' }
      ],
      emoData: [
         // { id: 1, name: 'John' },
         // { id: 2, name: 'Jane' },
         // { id: 3, name: 'Bob' }
      ],
      autoLecionData: [
         // { id: 1, name: 'John' },
         // { id: 2, name: 'Jane' },
         // { id: 3, name: 'Bob' }
      ],
      actData: [],
      
      intentosActividad: false,

      // 2023-10-11: Formato viejo
      // dateData: {
      //    '2023-10-10':{'text':'una entrada el 10', 'mood': 'coraje', 'auto': '1120', 'act': [['Respiración', '1145'], ['Caminar', '1225']]},
      // '2023-03-15':{'text':'una entrada el 15', 'mood': 'feliz', 'auto': '1345'},
      // '2023-03-23':{'text':'', 'auto': '1345'}
      // },
      dateData: {
         '2023-11-10':{'text':'una entrada el 10 de octubre', 
                       'mood': [ {'type': 'Coraje', 'time': 2334, 
                                  'detonantes': {"pareja":true,"familia":false,"amistades":false,"perdida":false,"estudios":false}}, 
                                 {'type': 'Felicidad', 'time': 1122,
                                 'detonantes': {"pareja":true,"familia":false,"amistades":false,"perdida":false,"estudios":false}}
                              ],
                        'act': [{'type':'Respiración', 'time':1145}, {'type':'Caminar', 'time':1225}],
                        'casis': [1120, 1234] }
      },
      value: 42,
      moodCounter: {'Felicidad':{'cantidad': 0},'Ansiedad':{'cantidad': 0},
                    'Miedo':{'cantidad': 0},'Tristeza':{'cantidad': 0},
                    'Coraje':{'cantidad': 0},'Otros':{'cantidad': 0},
      },
      metas: 
         [{date: 'Wed Oct 11 2023 13:55:07 GMT-0400', meta: '05dias', active: false, lograda: false, dateComplete: 'none'},
         {date: 'Wed Oct 10 2023 13:55:07 GMT-0400', meta: 'caminar07', active: false, lograda: true, dateComplete: 'Wed Oct 10 2023 15:55:07 GMT-0400'},
         {date: 'Wed Oct 4 2023 13:55:07 GMT-0400', meta: '10dias', active: false, lograda: true, dateComplete: 'Wed Oct 6 2023 15:55:07 GMT-0400'}]      ,
      otraCosa: []
   },
   reducers: {
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
         if (m.includes("dia"))
            state.metas.push({date: d, meta: m, active: true, lograda: false});
         else if (daysQty == 1)
            state.metas.push({date: d, meta: m, active: true, lograda: false, check: {'1': false}});
         else if (daysQty == 3)
            state.metas.push({date: d, meta: m, active: true, lograda: false, check: {'1': false, '2': false,'3': false}});
         else if (daysQty == 5)
            state.metas.push({date: d, meta: m, active: true, lograda: false, check: {'1': false, '2': false,'3': false, '4': false, '5': false}});
         else if (daysQty == 7)
            state.metas.push({date: d, meta: m, active: true, lograda: false, check: {'1': false, '2': false,'3': false, '4': false, '5': false, '6': false, '7': false}});
         else 
            state.metas.push({date: d, meta: m, active: true, lograda: false, check: {'1': false, '2': false,'3': false, '4': false, '5': false, '6': false, '7': false,'8': false,'9': false,'10': false}});

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
      addDetonanteData : (state, action)=>{
         console.log("detonante: ", action.payload.det)
         console.log("fecha: ", action.payload.fec)
         //const detData = {detoante: action.payload.det, 'fecha' : action.payload.fec};
         //state.deton.push({detoante: action.payload.det, 'fecha' : action.payload.fec})
         state.detData.push({detonante: action.payload.det, fecha: action.payload.fec})
         //state.detonantesData = 
         console.log("tabla de detonantes" + state.detData);
      },
      addEmocionData : (state, action)=>{
         console.log("emocion: ", action.payload.emo)
         console.log("fecha: ", action.payload.fec)
         //const detData = {detoante: action.payload.det, 'fecha' : action.payload.fec};
         //state.deton.push({detoante: action.payload.det, 'fecha' : action.payload.fec})
         state.emoData.push({emocion: action.payload.emo, fecha: action.payload.fec})
         //state.detonantesData = 
         console.log("tabla de emociones" + state.emoData);
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
   },
});


export const { registerFirstDate,updateDateData, addActivity, updateLastAuto, updateMetaCumplida, updateMetaCheck, updateMood, updateLang, decreaseByOne, register, updatePassword, updatePasswordDelete, reportCASIS, addMeta, updateMeta,updateintentosActividad,updatePantallaConfig, updateContPopUp, updateMetaPopUp, updateContacto, addDetonanteData, addEmocionData,addAutolecionData,addActividadesData} = counterSlice.actions;


export default counterSlice.reducer;
