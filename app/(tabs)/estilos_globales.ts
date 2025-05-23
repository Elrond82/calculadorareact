import { StyleSheet } from "react-native";
import colores from "./colores";

const estilos = StyleSheet.create({

  viewPrincipal: { 
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
    },
   
    
  
  view1: {
    backgroundColor: colores.negro,
    width: 360,
    height: 175,
    margin: 10,
    padding: 20,
    flex:1,
    justifyContent:'flex-end',
    alignItems:'flex-end',
    
  },
  texto: {
    color:colores.blanco,
    fontSize: 50,
  },
  view2: {
    backgroundColor: colores.negro,
    width: 360,
    height: 50,
    margin: 10,
    flex:1,
    justifyContent:'flex-end',
    alignItems:'flex-end',
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