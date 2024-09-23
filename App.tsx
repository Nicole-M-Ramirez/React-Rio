// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, AppState } from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native'
// import {createStackNavigator} from '@react-navigation/stack'
import {colors} from './components/constants';


// import Contrasena from './screens/Passwords/Contrasena';
// import PasswordMenu from './screens/Passwords/PasswordMenu';
// import EditarPassword from './screens/Passwords/EditarPassword';
// import ConfirmarBorrar from './screens/Passwords/ConfirmarBorrar';
// import ContactoPersona from './screens/Contacto/ContactoPersona'

import StackComp from './components/StackComp';

import store, { persistor } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { useSelector, useDispatch } from 'react-redux';
  
import { useEffect, createContext, useContext, useState } from 'react';

import { updateMetaCumplida } from './redux/slices/counterSlice';
import { getActiveMeta } from './components/RioGlobalFuncs';
import { DAY_IN_MS } from './components/constants';


import {
  TimestampTrigger,
  TriggerType,
} from '@notifee/react-native';

import notifee from '@notifee/react-native';
import BackgroundFetch from "react-native-background-fetch";

import BackgroundService from 'react-native-background-actions';

// const sleep = (time) => new Promise((resolve) => setTimeout(() => resolve(), time));

// You can do anything in your task such as network requests, timers and so on,
// as long as it doesn't touch UI. Once your task completes (i.e. the promise is resolved),
// React Native will go into "paused" mode (unless there are other tasks running,
// or there is a foreground app).
// const veryIntensiveTask = async (taskDataArguments) => {
//     // Example of an infinite loop task
//     const { delay } = taskDataArguments;
//     await new Promise( async (resolve) => {
//         for (let i = 0; BackgroundService.isRunning(); i++) {
//             console.log('tick ' + i);
//             await sleep(delay);
//         }
//     });
// };

BackgroundService.on('expiration', () => {
  console.log('I am being closed :(');
  console.log("Current State: " +  AppState.currentState);
});


const options = {
    taskName: 'Example',
    taskTitle: 'ExampleTask title',
    taskDesc: 'ExampleTask description',
    taskIcon: {
        name: 'ic_launcher',
        type: 'mipmap',
    },
    color: '#ff00ff',
    linkingURI: 'yourSchemeHere://chat/jane', // See Deep Linking for more info
    parameters: {
        delay: 1000,
    },
};








// import BackgroundTimer from 'react-native-background-timer';

// const Stack = createStackNavigator(); 


const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.backgroudDarkBlue
  },
}; 


const config = {
  animation: "spring",
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01
  }
};

const MINUTE_MS = 10000;


// Create a context
const TimeContext = createContext();

// Create a provider component
export const TimeProvider = ({ children }) => {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime((prevTime) => prevTime + 1);
      // console.log("Soy el más nuevo timer");
      // let gdateLastArray = useSelector(state => state.counter.lastAuto);



    }, 3000); // Update every minute (60000 ms)

    return () => clearInterval(interval);
  }, []);


  return (
    <TimeContext.Provider value={elapsedTime}>
      {children}
    </TimeContext.Provider>
  );
};


// // Start a timer that runs continuous after X milliseconds
// const intervalId = BackgroundTimer.setInterval(() => {
//   // this will be executed every 200 ms
//   // even when app is the background
//   console.log('tic');
// }, 2000);


// BackgroundTask.define(() => {
//   console.log('Hello from a background task')
//   BackgroundTask.finish()
// })

// Custom hook to use the TimeContext
export const useElapsedTime = () => {
  return useContext(TimeContext);
};

//==========
const getMostRecentDate = (dictionary) => {
  let mostRecentDate = null;

  for (let key in dictionary) {
    if (dictionary.hasOwnProperty(key)) {
      let value = dictionary[key];
      if (value instanceof Date && !isNaN(value)) { // Check if value is a valid date
        if (mostRecentDate === null || value > mostRecentDate) {
          mostRecentDate = value;
        }
      }
    }
  }

  return mostRecentDate;
}


export const Tmp = () => {
  const elapsedTime = useElapsedTime();
  const metas = useSelector(state => state.counter.metas);
  let activeMeta = getActiveMeta(metas);
  const dispatch = useDispatch();

  async function onDisplayNotification(message) {
    // Request permissions (required for iOS)
    await notifee.requestPermission()

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    // Display a notification
    await notifee.displayNotification({
      title: 'Notification FROM TEMP!!!',
      body: message,
      android: {
        channelId,
        smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
        // pressAction is needed if you want the notification to open the app when pressed
        pressAction: {
          id: 'default',
        },
      },
    });

    
  }


  /* 

  async function onSchedNotification(message, dateForNotification ) {
    // Request permissions (required for iOS)
    await notifee.requestPermission();

    let date = new Date();
    // date.setSeconds(date.getSeconds() + 60);
    const milliseconds = 5 * 60 * 1000; // 10 seconds = 10000 milliseconds
    date = dateForNotification; //new Date(date.getTime() + milliseconds);
    console.log("----------------- setting a sched alamr..... ------ for " + date);

    const trigger: TimestampTrigger = {
      type: TriggerType.TIMESTAMP, // This is the type of trigger, we have other types of triggers as well
      timestamp: +date, // +date converts the date to timestamp
    };

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    // Display a notification
    await notifee.createTriggerNotification({
      
        id: dateForNotification.toString(),
        title: `🔔 You asked for this reminder -  ${message}`,
        body: 'Tap on it to check',
        android: {
          channelId: 'reminder',
          pressAction: {
            id: 'default',
          },
        },
        data: {
          id: '1',
          action: 'reminder',
          details: {
            name: "caca",
            date: dateForNotification.toString(),
          },
        },
      }, trigger);
    

    
  }
  */
  

  if (activeMeta !== undefined) console.log("Active meta: " + activeMeta);


  // 2024-07-25: Si la meta es de una cantidad de DIAS, entonces si ha transcurrido 
  //             esa cantidad de dias, podemos declarar que la meta fue cumplida

  if (activeMeta !== undefined && activeMeta.meta.includes('dia')) {
    
    // Calcular cuando se supone que se cumpla la meta.
    let targetDate = new Date(activeMeta.date);
    targetDate = new Date(targetDate.getTime() + DAY_IN_MS * parseInt(activeMeta.meta.substring(0,2)));
    
    console.log("targetDate: " + targetDate);

    const currentDate = new Date();
    
    if (targetDate <= currentDate) {
      console.log("SE CUMPLIO LA META, FELICIDADES!!!!!!!!!");      
      dispatch(updateMetaCumplida({ activeMeta: activeMeta}));  //necesitamos saber cual es la meta!
    }
  }

  else if (activeMeta !== undefined && !activeMeta.meta.includes('dia')) { 
    // Tenemos activada una de las metas de marcar manualmente. Calcular si debemos avisarle al usuario.
    // ¿Cuantos días hace que la activó?
    let targetDate = new Date(activeMeta.date);

    const mostRecentDate = getMostRecentDate(activeMeta.check);
    const currentTime = new Date();
    const timeSinceCreation = currentTime.getTime() - targetDate.getTime();
    const timeSinceCheck = mostRecentDate == null ? timeSinceCreation : currentTime.getTime() - mostRecentDate.getTime();
  

    
    const remider =  timeSinceCheck - 10000 > 0 && timeSinceCheck - 10000 < 3000;  

    console.log("meta Date: " + activeMeta.date);
    console.log("timeSinceCheck: " + timeSinceCheck);
    console.log("reminder: " + remider);
    
    let now = new Date();
    console.log("Hay una meta de marcar activa desde: " + targetDate + " son las : " + now);
    console.log("-------");

    // if (remider) onDisplayNotification("TIENES UNA META PENDIENTE HAZLA!!");
  }


  return <View style={{ height: 0, width: 0}}></View>
};


export default function App() {
  console.log("PURGING THE PERSISTOR!!!");
  //persistor.purge(); 
  //persistor.flush();

  // BackgroundTask.schedule();


  // 2024-07-25: Este useEffect es util para saber en que estado se encuentra el app
  useEffect(() => {
    const handleChange = AppState.addEventListener("change", changedState => {
        console.log("===================chaged state:" + changedState);
    });
    return () => {
        handleChange.remove();
    };
  }, []);



  // const rafa = async () => { await BackgroundService.start(veryIntensiveTask, options);}

  // rafa();
  

/*
  const initBackgroundFetch = async () => {
    // BackgroundFetch event handler.
    const onEvent = async (taskId) => {
      console.log('[BackgroundFetch] task: ', taskId);
      // Do your background work...
      await this.addEvent(taskId);
      // IMPORTANT:  You must signal to the OS that your task is complete.
      BackgroundFetch.finish(taskId);
    }

    // Timeout callback is executed when your Task has exceeded its allowed running-time.
    // You must stop what you're doing immediately BackgroundFetch.finish(taskId)
    const onTimeout = async (taskId) => {
      console.warn('[BackgroundFetch] TIMEOUT task: ', taskId);
      BackgroundFetch.finish(taskId);
    }

    // Initialize BackgroundFetch only once when component mounts.
    let status = await BackgroundFetch.configure({minimumFetchInterval: 15}, onEvent, onTimeout);

    console.log('[BackgroundFetch] configure status: ', status);
  }

  useEffect(() => {
    console.log("I will init the Backgoung Fetch.....");
    initBackgroundFetch();
    
  }, []);

  */

  return (
    <>
  <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <NavigationContainer theme={MyTheme}>
      <TimeProvider>
        <Tmp></Tmp>
      <StackComp/>
      </TimeProvider>
    </NavigationContainer>
    </PersistGate>
    </Provider>
    </>
  );
}



