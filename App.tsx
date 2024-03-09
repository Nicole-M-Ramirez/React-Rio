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
import Contrasena from './screens/Contrasena';
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
//simport MeditacionEmergencia from './screens/Actividades/MeditacionEmergencia';
import Meditacion from './screens/Actividades/Meditacion';
import Psicoeducacion from './screens/Actividades/Psicoeducacion';
import MeditacionEmergencia from './screens/Actividades/MeditacionEmergencia';
import Gratitud from './screens/Actividades/Gratitud';

import RioCalendar from './components/RioCalendar';
import Diary from './components/Diary';
 

import store, { persistor } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

  
const Stack = createStackNavigator(); 


const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.backgroudDarkBlue
  },
}; 

export default function App() {
  console.log("PURGING THE PERSISTOR!!!");
  persistor.purge(); 
  

  persistor.flush();
  return (
    <>
  <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <NavigationContainer theme={MyTheme}>
        <Stack.Navigator>
            <Stack.Screen
              name='SelectorDeLenguage'
              component={SelectorIdioma}
              // independent ={true}
              options={{
                headerTitle: "",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='Politica'
              component={Politica}
              independent ={true}
              options={{
                headerTitle: "",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='Bienvenida'
              component={Bienvenida}
              independent ={true}
              options={{
                headerTitle: "",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='BaseTeorica'
              component={BaseTeorica}
              independent ={true}
              options={{
                headerTitle: "",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='SobreNosotros'
              component={SobreNosotros}
              independent ={true}
              options={{
                headerTitle: "",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='Explicacion1'
              component={Expicacion1}
              independent ={true}
              options={{  
                headerTitle: "",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='Explicacion2'
              component={Expicacion2} 
              independent ={true}
              options={{
                headerTitle: "",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='NewPassword'
              component={NewPassword}
              independent ={true}
              options={{
                headerTitle: "",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='Emergencia'
              component={Emergencia}
              independent ={true}
              options={{
                headerTitle: "",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='SeguimientoUrgencia'
              component={SeguimientoUrgencia}
              independent ={true}
              options={{
                headerTitle: "",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='SegundoSeguimiento'
              component={SegundoSeguimiento}
              independent ={true}
              options={{
                headerTitle: "",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='MenuPrincipal'
              component={Menu}
              independent ={true}
              options={{
                headerTitle: "",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='MiEspacio'
              component={MiEspacion}
              independent ={true}
              options={{
                headerTitle: "",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='Informacion'
              component={Informacion}
              independent ={true}
              options={{
                headerTitle: "",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='Contrasena'
              component={Contrasena}
              independent ={true}
              options={{
                headerTitle: "",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='RioCalendar'
              component={RioCalendar}
              independent ={true}
              options={{
                headerTitle: "",
                headerShown: false,
              }}
            />
        <Stack.Screen
              name='Diary'
              component={Diary}
              independent ={true}
              options={{
                headerTitle: "",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='Metas'
              component={Metas}
              independent ={true}
              options={{
                headerTitle: "",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='Logros'
              component={Logros}
              independent ={true}
              options={{
                headerTitle: "",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='SetMetas'
              component={SetMetas}
              independent ={true}
              options={{
                headerTitle: "",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='Graficas'
              component={Graficas}
              independent ={true}
              options={{
                headerTitle: "",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='Barras'
              component={Barras}
              independent ={true}
              options={{
                headerTitle: "",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='PieChart'
              component={Piechart}
              independent ={true}
              options={{
                headerTitle: "",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='Exportar'
              component={Exportar}
              independent ={true}
              options={{
                headerTitle: "",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='ConfirmExport'
              component={ConfirmExport}
              independent ={true}
              options={{
                headerTitle: "",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='Comunidad'
              component={Comunidad}
              independent ={true}
              options={{
                headerTitle: "",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='Configuracion'
              component={Configuracion}
              independent ={true}
              options={{
                headerTitle: "",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='SelectorEmocion'
              component={SelectorEmocion}
              independent ={true}
              options={{
                headerTitle: "",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='Detonante'
              component={Detonante}
              independent ={true}
              options={{
                headerTitle: "",
                headerShown: false,
              }} 
            />
            <Stack.Screen
              name='Felicidad'
              component={Felicidad}
              independent ={true}
              options={{
                headerTitle: "",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='Ansiedad'
              component={Ansiedad}
              independent ={true}
              options={{
                headerTitle: "",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='Miedo'
              component={Miedo}
              independent ={true}
              options={{
                headerTitle: "",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='Tristeza'
              component={Tristeza}
              independent ={true}
              options={{
                headerTitle: "",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='Coraje'
              component={Coraje}
              independent ={true}
              options={{
                headerTitle: "",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='Otros'
              component={Otros}
              independent ={true}
              options={{
                headerTitle: "",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='ActividadEnProgreso'
              component={ActividadEnProgreso}
              independent ={true}
              options={{
                headerTitle: "",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='Meditacion'
              component={Meditacion}
              independent ={true}
              options={{
                headerTitle: "",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='Psicoeducacion'
              component={Psicoeducacion}
              independent ={true}
              options={{
                headerTitle: "",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='Gratitud'
              component={Gratitud}
              independent ={true}
              options={{
                headerTitle: "",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='MeditacionEmergencia'
              component={MeditacionEmergencia}
              independent ={true}
              options={{
                headerTitle: "",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='RegistroUtilidad'
              component={RegistroUtilidad}
              independent ={true}
              options={{
                headerTitle: "",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='NoFunciono'
              component={NoFunciono}
              independent ={true}
              options={{
                headerTitle: "",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='EmocionExpancion'
              component={EmocionesExpancion}
              independent ={true}
              options={{
                headerTitle: "",
                headerShown: false,
              }}
            />
        </Stack.Navigator>
    </NavigationContainer>
    </PersistGate>
    </Provider>
    </>
  );
}



