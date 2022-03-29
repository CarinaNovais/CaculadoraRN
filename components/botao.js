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
    fontSize: 40,
    height: Dimensions.get('window').width / 4,
    width: Dimensions.get('window').width / 4,
    padding: 20,
    backgroundColor: '#2ec4b6',
    color: '#cbf3f0',
    textAlign: 'center',
  },
  btnIgual: {
    color: '#cbf3f0',
    textAlign:'center',
    backgroundColor:'#218380',
    height: (Dimensions.get('window').width / 4),
    width: (Dimensions.get('window').width / 4) * 3

  },
  btnOperacao: {
    color: '#38a3a5',
  },
  btnAC: {
    color: '#38a3a5',
  },
  btnBS: {
    color: '#38a3a5',
  },
  btnDuplo: {
    color: '#',
    height: (Dimensions.get('window').width / 4) * 2,
    width: (Dimensions.get('window').width / 4) * 2,
  },
});
