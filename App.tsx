import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {colors} from './components/constants';

import SelectorIdioma from './screens/SelectorIdioma';
import Politica from './screens/Politica';
import Bienvenida from './screens/Bienvenida';
import BaseTeorica from './screens/BaseTeorica';
import SobreNosotros from './screens/SobreNosotros';
import Expicacion1 from './screens/Explicacion1';
import Expicacion2 from './screens/Explicacion2';
import NewPassword from './screens/NewPassword';
import Emergencia from './screens/Emergencia';
import Menu from './screens/MenuPrincipal/Menu';
import MiEspacion from './screens/MenuPrincipal/MiEspacio';
import Comunidad from './screens/MenuPrincipal/Comunidad';
import Informacion from './screens/MenuPrincipal/Informacion';
import Configuracion from './screens/MenuPrincipal/Configuracion';
import SelectorEmocion from './screens/Emociones/SelectorEmocion';
import Detonante from './screens/Emociones/Detonante';
import Felicidad from './screens/Emociones/Felicidad';
import Ansiedad from './screens/Emociones/Ansiedad';
import Miedo from './screens/Emociones/Miedo';
import Tristeza from './screens/Emociones/Tristeza';
import Coraje from './screens/Emociones/Coraje';
import Otros from './screens/Emociones/Otros';
import ActividadEnProgreso from './screens/Emociones/ActividadEnProgreso';
//import Contrasena from './screens/Contrasena';
import Metas from './screens/Mi Espacio/Metas';
import EmocionesExpancion from './screens/Emociones/EmocionesExpancion';
import SetMetas from './screens/Mi Espacio/SetMetas';
import Graficas from './screens/Mi Espacio/Graficas';
import Barras from './screens/Mi Espacio/Barras';
import Piechart from './screens/Mi Espacio/PieChart';
import Exportar from './screens/Mi Espacio/Exportar';
import ConfirmExport from './screens/Mi Espacio/ConfirmExport';
import Logros from './screens/Mi Espacio/Logros';
import SeguimientoUrgencia from './screens/SeguimientoUrgencia';
import SegundoSeguimiento from './screens/SegundoSeguimiento';
import RegistroUtilidad from './screens/Emociones/RegistroUtilidad';
import NoFunciono from './screens/Emociones/NoFunciono';
import ActividadDiario from './screens/Actividades/ActividadDiario';
//simport MeditacionEmergencia from './screens/Actividades/MeditacionEmergencia';
import Meditacion from './screens/Actividades/Meditacion';
import Psicoeducacion from './screens/Actividades/Psicoeducacion';
import MeditacionEmergencia from './screens/Actividades/MeditacionEmergencia';
import Gratitud from './screens/Actividades/Gratitud';

import RioCalendar from './components/RioCalendar';
import Diary from './components/Diary';

import Contrasena from './screens/Passwords/Contrasena';
import PasswordMenu from './screens/Passwords/PasswordMenu';
import EditarPassword from './screens/Passwords/EditarPassword';
import ConfirmarBorrar from './screens/Passwords/ConfirmarBorrar';
import ContactoPersona from './screens/Contacto/ContactoPersona'
import StackComp from './components/StackComp';

import store, { persistor } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { useSelector } from 'react-redux';
  
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

export default function App() {
  console.log("PURGING THE PERSISTOR!!!");
  persistor.purge(); 
  persistor.flush();

  // if ( useSelector(state => state.counter.registered? true: false )) {
  //   console.log("User is registered ----> to calendar we go... <=======================")
  //   // navigation.navigate('MenuPrincipal');
  // }

  return (
    <>
  <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <NavigationContainer theme={MyTheme}>
      <StackComp/>
    </NavigationContainer>
    </PersistGate>
    </Provider>
    </>
  );
}



