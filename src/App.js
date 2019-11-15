import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default class App extends Component {

  state = {
    nome1: '',
    nome2: '',
  }

  calclove = () => {
    const { nome1, nome2 } = this.state
    let calc =  (nome1.length + nome2.length) /2;
    Alert.alert(
      'Atenção',
      calc % 2 === 0 ? "Amor Eterno" : " Desiste",
      [
        { text: "OK", onPress: () => this.setState({ nome1: '', nome2: ''}) }
      ],
    )
  }

  render() {
    const { nome1, nome2 } = this.state

    return (
      <View>
        <StatusBar backgroundColor="#9a0007" barStyle="light-content" />
        <View style={styles.header}>
          <Icon name="heart" color="#fff" size={20}/>
          <Text style={styles.title}>Demo Day</Text>
          <Icon name="heart" color="#fff" size={20}/>
        </View>
        <View style={styles.content}>
          <TextInput
            value={nome1}
            style={styles.input}
            onChangeText={ (text) => this.setState({nome1: text})}
            placeholder="Primeiro nome"
            returnKeyType = { "next" }
            onSubmitEditing={() => { this.secondTextInput.focus(); }}      
          />
          <TextInput
            ref={(input) => { this.secondTextInput = input; }}
            value={nome2}
            style={styles.input}
            onChangeText={ (text) => this.setState({nome2: text})}
            placeholder="Segundo nome"
            returnKeyType = { "done" }
            onSubmitEditing={() => { this.calclove() }} 
          />
          <TouchableOpacity
            onPress={() => this.calclove()}
            style={styles.button}>
            <Text style={styles.textButton}>
              Verificar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 60,
    backgroundColor: '#d32f2f',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },

  title: {
    textAlign: 'center',
    fontSize: 20,
    color: '#fff'
  },

  content: {
    paddingVertical: 50,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center'
  },

  input: {
    width: '80%',
    borderBottomWidth:1,
    marginTop: 10,
    borderRadius: 3,
    borderBottomColor: '#d32f2f'
  },

  button: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    marginTop: 20,
    backgroundColor: '#d32f2f',
    height: 50,
  },

  textButton:{
    color: '#fff',
    fontSize: 16
  }
})
