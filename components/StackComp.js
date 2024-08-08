import SelectorIdioma from "../screens/SelectorIdioma";
import Politica from '../screens/Politica';
import Bienvenida from '../screens/Bienvenida';
import BaseTeorica from '../screens/BaseTeorica';
import SobreNosotros from '../screens/SobreNosotros';
import Expicacion1 from '../screens/Explicacion1';
import Expicacion2 from '../screens/Explicacion2';
import NewPassword from '../screens/NewPassword';
import Emergencia from '../screens/Emergencia';
import Menu from '../screens/MenuPrincipal/Menu';
import MiEspacion from '../screens/MenuPrincipal/MiEspacio';
import Comunidad from '../screens/MenuPrincipal/Comunidad';
import Informacion from '../screens/MenuPrincipal/Informacion';
import Configuracion from '../screens/MenuPrincipal/Configuracion';
import SelectorEmocion from '../screens/Emociones/SelectorEmocion';
import Detonante from '../screens/Emociones/Detonante';
import Felicidad from '../screens/Emociones/Felicidad';
import Ansiedad from '../screens/Emociones/Ansiedad';
import Miedo from '../screens/Emociones/Miedo';
import Tristeza from '../screens/Emociones/Tristeza';
import Coraje from '../screens/Emociones/Coraje';
import Otros from '../screens/Emociones/Otros';
import SeguimientoUrgencia from "../screens/SeguimientoUrgencia";
import SegundoSeguimiento from "../screens/SegundoSeguimiento";
import PasswordMenu from "../screens/Passwords/PasswordMenu";
import Contrasena from "../screens/Contrasena";
import EditarPassword from "../screens/Passwords/EditarPassword";
import ConfirmarBorrar from "../screens/Passwords/ConfirmarBorrar";
import RioCalendar from "./RioCalendar";
import Diary from "./Diary";
import Metas from "../screens/Mi Espacio/Metas";
import SetMetas from "../screens/Mi Espacio/SetMetas";
import Logros from "../screens/Mi Espacio/Logros";
import Graficas from "../screens/Mi Espacio/Graficas";
//import Barras from "../screens/Mi Espacio/Barras";
import Piechart from "../screens/Mi Espacio/PieChart";
import Exportar from "../screens/Mi Espacio/Exportar";
import ActividadEnProgreso from "../screens/Emociones/ActividadEnProgreso";
import Meditacion from "../screens/Actividades/Meditacion";
import Psicoeducacion from "../screens/Actividades/Psicoeducacion";
import Gratitud from "../screens/Actividades/Gratitud";
import MeditacionEmergencia from "../screens/Actividades/MeditacionEmergencia";
import RegistroUtilidad from "../screens/Emociones/RegistroUtilidad";
import NoFunciono from "../screens/Emociones/NoFunciono";
import EmocionesExpancion from "../screens/Emociones/EmocionesExpancion";
import ActividadDiario from "../screens/Actividades/ActividadDiario";
import ConfirmExport from "../screens/Mi Espacio/ConfirmExport";
import ContactoPersona from "../screens/Contacto/ContactoPersona";
import CrearContacto from "../screens/Contacto/CrearContacto";
import BorrarContacto from "../screens/Contacto/BorrarContacto";
import Respiracion from "../screens/Actividades/Respiracion";
import RespiracionInst from "../screens/Actividades/RespiracionInst";
import MeditacionTristeza from "../screens/Actividades/MeditacionTristeza";
import BarrasDetonante from "../screens/Graficas/BarrasDetonante";
import RespiracionUrgencia from "../screens/Actividades/RespiracionUrgencias";
import { createStackNavigator } from "@react-navigation/stack";
import PaginaBienvenida from "../screens/PaginaBienvenida";
import { useSelector } from "react-redux";
import BarrasEmociones from "../screens/Graficas/BarrasEmociones";
import BarrasActividades from "../screens/Graficas/BarrasActividades";
import PieDetonantes from "../screens/Graficas/PieDetonantes";
import PieActividades from "../screens/Graficas/PieActividades";
import PieEmociones from "../screens/Graficas/PieEmociones";
import Barras from "../screens/Mi Espacio/Barras";
import LineaAutoLesion from "../screens/Graficas/LineaAutoLesion";

const Stack = createStackNavigator();

const StackComp = (props) => {

  const registered = useSelector(state => state.counter.registered);
  console.log("Registered-----: " + registered);
  return (
    <Stack.Navigator
    initialRouteName = {registered? 'MenuPrincipal': 'SelectorIdioma'}
    screenOptions={{
      headerShown: false, // Optionally hide the header
      animationEnabled: true, // Enable animations globally
      animationTypeForReplace: 'pop', // Animation type for screen replacement
      cardStyleInterpolator: ({ current }) => ({
        cardStyle: {
          opacity: current.progress, // Opacity animation
        },
      }),
      transitionSpec: {
        open: { animation: 'timing', config: { duration: 400 } }, // Opening animation config
        close: { animation: 'timing', config: { duration: 400 } }, // Closing animation config
      },
    }}
  >
    
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
        name='PasswordMenu'
        component={PasswordMenu}
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
        name='EditarPassword'
        component={EditarPassword}
        independent ={true}
        options={{
          headerTitle: "",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='ConfirmarBorrar'
        component={ConfirmarBorrar}
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
      <Stack.Screen
        name='ActividadDiario'
        component={ActividadDiario}
        independent ={true}
        options={{
          headerTitle: "",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='ContactoPersona'
        component={ContactoPersona}
        independent ={true}
        options={{
          headerTitle: "",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='CrearContacto'
        component={CrearContacto}
        independent ={true}
        options={{
          headerTitle: "",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='BorrarContacto'
        component={BorrarContacto}
        independent ={true}
        options={{
          headerTitle: "",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='Respiracion'
        component={Respiracion}
        independent ={true}
        options={{
          headerTitle: "",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='RespiracionInst'
        component={RespiracionInst}
        independent ={true}
        options={{
          headerTitle: "",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='MeditacionTristeza'
        component={MeditacionTristeza}
        independent ={true}
        options={{
          headerTitle: "",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='RespiracionUrgencia'
        component={RespiracionUrgencia}
        independent ={true}
        options={{
          headerTitle: "",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='PaginaBienvenida'
        component={PaginaBienvenida}
        independent ={true}
        options={{
          headerTitle: "",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='BarrasDetonante'
        component={BarrasDetonante}
        independent ={true}
        options={{
          headerTitle: "",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='BarrasEmociones'
        component={BarrasEmociones}
        independent ={true}
        options={{
          headerTitle: "",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='BarrasActividades'
        component={BarrasActividades}
        independent ={true}
        options={{
          headerTitle: "",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='PieDetonantes'
        component={PieDetonantes}
        independent ={true}
        options={{
          headerTitle: "",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='PieEmociones'
        component={PieEmociones}
        independent ={true}
        options={{
          headerTitle: "",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='PieActividades'
        component={PieActividades}
        independent ={true}
        options={{
          headerTitle: "",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='LineasAutoLesion'
        component={LineaAutoLesion}
        independent ={true}
        options={{
          headerTitle: "",
          headerShown: false,
        }}
      />
  </Stack.Navigator>
)

};


export default StackComp;
