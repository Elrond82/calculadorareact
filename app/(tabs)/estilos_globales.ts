import { StyleSheet } from "react-native";
import colores from "./colores";

const estilos = StyleSheet.create({
   view: {
    backgroundColor: colores.negro,
    width: 200,
    height: 75,
    margin: 10,
    padding: 20,
    justifyContent:'flex-start',
    
  },
  view1: {
    backgroundColor: colores.negro,
    width: 200,
    height: 75,
    margin: 10,
    padding: 20,
    
  },
  texto: {
    color:colores.blanco,
    fontSize: 20,
  },
  view2: {
    backgroundColor: colores.negro,
    width: 100,
    height: 150,
    margin: 10,
  },
  view3: {
    backgroundColor: colores.negro,
    width: 360,
    height: 75,
    margin: 10,
    justifyContent: 'space-around', 
    alignItems: 'center',
    flexDirection: 'row', 
  },
  botonRedondo: {
    backgroundColor: 'red',
    width: 75,
    height: 75,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoBotonRedondo: {
    color: 'white',
    fontSize: 34,
    fontWeight: 'bold',
  },
  botonRedondo2: {
    backgroundColor: colores.amarillo,
    width: 75,
    height: 75,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoBotonRedondo2: {
    color: 'white',
    fontSize: 34,
    fontWeight: 'bold',
  },
});

export default estilos;