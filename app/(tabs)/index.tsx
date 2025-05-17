import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import estilos from "./estilos_globales"; 
const App = () => {
  return (
    <>
      
        
        <View style={estilos.view1}>
        <Text style={estilos.texto}>pepo</Text>
      </View>
      <View style={estilos.view2}></View>
      <View style={estilos.view3}>
        <TouchableOpacity style={estilos.botonRedondo}>
          <Text style={estilos.textoBotonRedondo}>AC</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.botonRedondo}>
          <Text style={estilos.textoBotonRedondo}>()</Text>
        </TouchableOpacity>
         <TouchableOpacity style={estilos.botonRedondo}>
          <Text style={estilos.textoBotonRedondo}>%</Text>
        </TouchableOpacity>
         <TouchableOpacity style={estilos.botonRedondo2}>
          <Text style={estilos.textoBotonRedondo2}>÷</Text>
        </TouchableOpacity>
        
      </View>
      <View style={estilos.view3}>
        <TouchableOpacity style={estilos.botonRedondo}>
          <Text style={estilos.textoBotonRedondo}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.botonRedondo}>
          <Text style={estilos.textoBotonRedondo}>8</Text>
        </TouchableOpacity>
         <TouchableOpacity style={estilos.botonRedondo}>
          <Text style={estilos.textoBotonRedondo}>9</Text>
        </TouchableOpacity>
         <TouchableOpacity style={estilos.botonRedondo2}>
          <Text style={estilos.textoBotonRedondo2}>X</Text>
        </TouchableOpacity>
        
      </View>
      <View style={estilos.view3}>
        <TouchableOpacity style={estilos.botonRedondo}>
          <Text style={estilos.textoBotonRedondo}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.botonRedondo}>
          <Text style={estilos.textoBotonRedondo}>5</Text>
        </TouchableOpacity>
         <TouchableOpacity style={estilos.botonRedondo}>
          <Text style={estilos.textoBotonRedondo}>6</Text>
        </TouchableOpacity>
         <TouchableOpacity style={estilos.botonRedondo2}>
          <Text style={estilos.textoBotonRedondo2}>-</Text>
        </TouchableOpacity>
        
      </View>
      <View style={estilos.view3}>
        <TouchableOpacity style={estilos.botonRedondo}>
          <Text style={estilos.textoBotonRedondo}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.botonRedondo}>
          <Text style={estilos.textoBotonRedondo}>2</Text>
        </TouchableOpacity>
         <TouchableOpacity style={estilos.botonRedondo}>
          <Text style={estilos.textoBotonRedondo}>3</Text>
        </TouchableOpacity>
         <TouchableOpacity style={estilos.botonRedondo2}>
          <Text style={estilos.textoBotonRedondo2}>+</Text>
        </TouchableOpacity>
        
      </View>
      <View style={estilos.view3}>
        <TouchableOpacity style={estilos.botonRedondo}>
          <Text style={estilos.textoBotonRedondo}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.botonRedondo}>
          <Text style={estilos.textoBotonRedondo}>.</Text>
        </TouchableOpacity>
         <TouchableOpacity style={estilos.botonRedondo}>
          <Text style={estilos.textoBotonRedondo}>DEL</Text>
        </TouchableOpacity>
         <TouchableOpacity style={estilos.botonRedondo2}>
          <Text style={estilos.textoBotonRedondo2}>=</Text>
        </TouchableOpacity>
        
      </View>
      
      

      
    </>
  );
};

export default App;