import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import estilos from "./estilos_globales";
import { evaluate } from 'mathjs'; // Importa la función evaluate de mathjs

const App = () => {
  const [numeroEnView2, setNumeroEnView2] = useState('');
  const [resultadoEnView1, setResultadoEnView1] = useState('0'); // Nuevo estado para View 1

  // Funciones para agregar números y operadores al View 2
  const handlePressBoton1 = () => {
    setNumeroEnView2(prevState => prevState + '1');
  };
  const handlePressBoton2 = () => {
    setNumeroEnView2(prevState => prevState + '2');
  };
  const handlePressBoton3 = () => {
    setNumeroEnView2(prevState => prevState + '3');
  };
  const handlePressBoton4 = () => {
    setNumeroEnView2(prevState => prevState + '4');
  };
  const handlePressBoton5 = () => {
    setNumeroEnView2(prevState => prevState + '5');
  };
  const handlePressBoton6 = () => {
    setNumeroEnView2(prevState => prevState + '6');
  };
  const handlePressBoton7 = () => {
    setNumeroEnView2(prevState => prevState + '7');
  };
  const handlePressBoton8 = () => {
    setNumeroEnView2(prevState => prevState + '8');
  };
  const handlePressBoton9 = () => {
    setNumeroEnView2(prevState => prevState + '9');
  };
  const handlePressBotonmas = () => {
    setNumeroEnView2(prevState => prevState + '+');
  };
  const handlePressBotonmenos = () => {
    setNumeroEnView2(prevState => prevState + '-');
  };
  const handlePressBotonmult = () => {
    setNumeroEnView2(prevState => prevState + '*');
  };
  const handlePressBotondiv = () => {
    setNumeroEnView2(prevState => prevState + '/');
  };
    const handlePressBoton0 = () => {
    setNumeroEnView2(prevState => prevState + '0');
  };
  const handlePressBotonDecimal = () => {
    setNumeroEnView2(prevState => prevState + '.');
  };
  const handlePressPorcentaje = () => {
  setNumeroEnView2(prevState => prevState + '/100');
};

  const handlePressAC = () => {
    setNumeroEnView2('');
    setResultadoEnView1('0'); // Resetea también el resultado
  };

  const handlePressDel = () => {
    setNumeroEnView2(prevState => prevState.slice(0, -1));
  };

  // Función para realizar la operación
  const handleCalculate = () => {
    try {
      // Utiliza la función evaluate de mathjs para realizar la operación
      const result = evaluate(numeroEnView2);
      setResultadoEnView1(String(result)); // Muestra el resultado en View 1
      setNumeroEnView2(''); // Limpia View 2 para la próxima operación
    } catch (error) {
      // Si hay un error en la expresión (por ejemplo, división por cero, sintaxis incorrecta),
      setResultadoEnView1('Error'); // Muestra "Error" en View 1
      setNumeroEnView2('');
    }
  };

  return (
    <>
      <View style={estilos.viewPrincipal}>
        {/* View 1: Muestra el resultado */}
        <View style={estilos.view1}>
          <Text style={estilos.texto}>{resultadoEnView1}</Text>
        </View>
        {/* View 2: Muestra la entrada del usuario */}
        <View style={estilos.view2}>
          <Text style={estilos.texto}>{numeroEnView2}</Text>
        </View>
        <View style={estilos.view3}>
          <TouchableOpacity style={estilos.botonRedondo2} onPress={handlePressAC}>
            <Text style={estilos.textoBotonRedondo}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity style={estilos.botonRedondo2}>
            <Text style={estilos.textoBotonRedondo}>()</Text>
          </TouchableOpacity>
          <TouchableOpacity style={estilos.botonRedondo2} onPress={handlePressPorcentaje}>
            <Text style={estilos.textoBotonRedondo}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity style={estilos.botonRedondo2} onPress={handlePressBotondiv}>
            <Text style={estilos.textoBotonRedondo2}>÷</Text>
          </TouchableOpacity>
        </View>
        <View style={estilos.view3}>
          <TouchableOpacity style={estilos.botonRedondo} onPress={handlePressBoton7}>
            <Text style={estilos.textoBotonRedondo}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={estilos.botonRedondo} onPress={handlePressBoton8}>
            <Text style={estilos.textoBotonRedondo}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={estilos.botonRedondo} onPress={handlePressBoton9}>
            <Text style={estilos.textoBotonRedondo}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={estilos.botonRedondo2} onPress={handlePressBotonmult}>
            <Text style={estilos.textoBotonRedondo2}>X</Text>
          </TouchableOpacity>
        </View>
        <View style={estilos.view3}>
          <TouchableOpacity style={estilos.botonRedondo} onPress={handlePressBoton4}>
            <Text style={estilos.textoBotonRedondo}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={estilos.botonRedondo} onPress={handlePressBoton5}>
            <Text style={estilos.textoBotonRedondo}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={estilos.botonRedondo} onPress={handlePressBoton6}>
            <Text style={estilos.textoBotonRedondo}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={estilos.botonRedondo2} onPress={handlePressBotonmenos}>
            <Text style={estilos.textoBotonRedondo2}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={estilos.view3}>
          <TouchableOpacity style={estilos.botonRedondo} onPress={handlePressBoton1}>
            <Text style={estilos.textoBotonRedondo}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={estilos.botonRedondo} onPress={handlePressBoton2}>
            <Text style={estilos.textoBotonRedondo}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={estilos.botonRedondo} onPress={handlePressBoton3}>
            <Text style={estilos.textoBotonRedondo}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={estilos.botonRedondo2} onPress={handlePressBotonmas}>
            <Text style={estilos.textoBotonRedondo2}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={estilos.view3}>
          <TouchableOpacity style={estilos.botonRedondo} onPress={handlePressBoton0}>
            <Text style={estilos.textoBotonRedondo}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={estilos.botonRedondo} onPress={handlePressBotonDecimal}>
            <Text style={estilos.textoBotonRedondo}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={estilos.botonRedondo} onPress={handlePressDel}>
            <Text style={estilos.textoBotonRedondo}>DEL</Text>
          </TouchableOpacity>
          <TouchableOpacity style={estilos.botonRedondo2} onPress={handleCalculate}>
            <Text style={estilos.textoBotonRedondo2}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default App;
