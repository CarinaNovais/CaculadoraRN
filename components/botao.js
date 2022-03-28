import React from 'react';
import { StyleSheet, Text, TouchableHighlight, Dimensions } from 'react-native';

export default (props) => {
  const estilosBotoes = [styles.btn];
  if (props.duplo) {
    estilosBotoes.push(styles.btnDuplo);
  }
  if (props.igual) {
    estilosBotoes.push(styles.btnIgual);
  }
  if (props.operacao) {
    estilosBotoes.push(styles.btnOperacao);
  }
  if (props.ac) {
    estilosBotoes.push(styles.btnAC);
  }
  if (props.bs) {
    estilosBotoes.push(styles.btnBS);
  }

  return( 
    <TouchableHighlight onPress={props.aoClicar}>
    <Text style={estilosBotoes}>{props.label}</Text>
  
    </TouchableHighlight>
  )
};

const styles = StyleSheet.create({
  btn: {
    fontSize: 30,
    height: Dimensions.get('window').width / 4,
    width: Dimensions.get('window').width / 4,
    padding: 20,
    backgroundColor: '#000',
    color: '#fff',
    borderWidth: 1,
    borderColor: '#777',
    textAlign: 'center',
  },
  btnIgual: {
    color: '#f00',
  },
  btnOperacao: {
    color: '#0f0',
  },
  btnAC: {
    color: '#ff0',
  },
  btnBS: {
    color: '#0ff',
  },
  btnDuplo: {
    color: '#',
    height: (Dimensions.get('window').width / 4) * 2,
    width: (Dimensions.get('window').width / 4) * 2,
  },
});
