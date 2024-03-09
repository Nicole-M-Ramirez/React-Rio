import { useDispatch, useSelector } from 'react-redux';

export const getLatestMood = (data) => {
  return data.reduce((acc, curr) => {
    return curr.time > acc.time ? curr : acc;
  });
};

// Given an integer that represents time as HHMM in military time
// return a string HH:MM P/AM

export const formatToTimeInt= (time) => {
  let tokens = time.split(':');
  return parseInt(tokens[0] + tokens[1]);
};

// Given an integer that represents time as HHMM in military time
// return a string HH:MM P/AM

export const formatTime = (time) => {
  const hours = Math.floor(time / 100);
  const minutes = time % 100;
  const period = hours >= 12 ? "PM" : "AM";
  return `${hours % 12 === 0 ? 12 : hours % 12}:${minutes.toString().padStart(2, "0")} ${period}`;
};



export const timeNowAsInt = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  
  return parseInt(`${hours.toString().padStart(2, "0")}${minutes.toString().padStart(2, "0")}`);
};


export const getYYYYMMMDD = (d) => {
  return new Date(d).toISOString().split('T')[0];
}

// Given "2023-11-12  1134", returns an actual JS date

export const toDate = (date, time) => {
  const dateArray = date.split("-");
  const year = parseInt(dateArray[0]);
  const month = parseInt(dateArray[1]) - 1;
  const day = parseInt(dateArray[2]);
  const hour = parseInt(time/100);
  const min = time % 100;

  return new Date(year, month, day, hour, min);
} 

export const getActiveMeta = (metas) => {

  // console.log("metas en logros:" + JSON.stringify(metas));
  let activeMeta = undefined;
  if (metas !== undefined) {
    for (let i = metas.length - 1; i >=0 && activeMeta === undefined ; i--) {
      if (metas[i].active) activeMeta = metas[i];
    }
  }
  return activeMeta;
}

export const getAccomplishedMetas = (metas) => {

  // console.log("metas en logros:" + JSON.stringify(metas));
  // let activeMeta = undefined;
  let accomp = []
  if (metas !== undefined) {
    for (let i = 0; i < metas.length  ; i++) {
      if (metas[i].lograda )  accomp.push(metas[i]);
    }
  }
  return accomp;
}

export const getMetaIdx = (metas, activeMeta) => {
  let found = -1;
  let d =  activeMeta.date;
  for (let i = metas.length -1; i >= 0 && found < 0; i--) {
     console.log(i)
     if (metas[i].date == d) found = i;
  }
  return found;
}


export const formatDateYYMMDD = (date) => {
  // Get the year, month, and day from the date object
  const year = date.getFullYear().toString().slice(-2);
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  // Format the date as YY.MM.DD
  const formattedDate = `${year}.${month}.${day}`;

  return formattedDate;
};

export const allDaysDone = (days) => {
  return days.every(value => value === true);
}

export const metaToImageMap = {'01dias':require('../assets/01-2.png'),
'02dias':require('../assets/02-2.png'),
'05dias':require('../assets/05-2.png'),
'10dias':require('../assets/10-2.png'),
'meditar01':require('../assets/meditacion2.png'),
'meditar03':require('../assets/meditacion2.png'),
'meditar05':require('../assets/meditacion2.png'),
'meditar07':require('../assets/meditacion2.png'),
'meditar10':require('../assets/meditacion2.png'),
'caminar01':require('../assets/caminar2.png'),
'caminar03':require('../assets/caminar2.png'),
'caminar05':require('../assets/caminar2.png'),
'caminar07':require('../assets/caminar2.png'),
'caminar10':require('../assets/caminar2.png'),
'diario01':require('../assets/diario2.png'),
'diario03':require('../assets/diario2.png'),
'diario05':require('../assets/diario2.png'),
'diario07':require('../assets/diario2.png'),
'diario10':require('../assets/diario2.png'),
'dibujar01':require('../assets/dibujo2.png'),
'dibujar03':require('../assets/dibujo2.png'),
'dibujar05':require('../assets/dibujo2.png'),
'dibujar07':require('../assets/dibujo2.png'),
'dibujar10':require('../assets/dibujo2.png'),
'descansar01':require('../assets/aceptacion.png'),
'descansar03':require('../assets/aceptacion.png'),
'descansar05':require('../assets/aceptacion.png'),
'descansar07':require('../assets/aceptacion.png'),
'descansar10':require('../assets/aceptacion.png')
}


