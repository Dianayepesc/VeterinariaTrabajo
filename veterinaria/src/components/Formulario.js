import React from 'react';
import { Modal, Text, TextInput, StyleSheet, View } from 'react-native';

const Formulario = ({ modalVisible }) => {
  return (
    <Modal animationType='slide' visible={modalVisible}>
      <View style={styles.contenido}>
        <Text style={styles.tituloBold}>AGENDACION</Text>
      </View>

      <View style={styles.campo}>
        <Text style={styles.label}>Nombrepaciente:</Text>
        <TextInput
          style={styles.input}
          placeholder='Escriba nombre del paciente'
          placeholderTextColor={'#000000'}
        />
      </View>

      <View style={styles.campo}>
        <Text style={styles.label}>Nombrepropietario:</Text>
        <TextInput
          style={styles.input}
          placeholder='Digite nombre del propietario'
          placeholderTextColor={'#000000'}
        />
      </View>

      <View style={styles.campo}>
        <Text style={styles.label}>Emaildelpropietario:</Text>
        <TextInput
          style={styles.input}
          placeholder='Digite email del propietario'
          placeholderTextColor={'#000000'}
          keyboardType='email-address'
        />
      </View>

      <View style={styles.campo}>
        <Text style={styles.label}>Telefonopropietario:</Text>
        <TextInput
          style={styles.input}
          placeholder='Digite telefono del propietario'
          placeholderTextColor={'#000000'}
          keyboardType='number-pad'
        />
      </View>

      <View style={styles.campo}>
        <Text style={styles.label}>Sintomas:</Text>
        <TextInput
          style={styles.input}
          placeholder='Digite los síntomas'
          placeholderTextColor={'#000000'}
          keyboardType='default'
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  contenido: {
    backgroundColor: '#FFF',
    flex: 1,
  },
  titulo: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    color: '#EE6DAD',
    marginTop: 30,
  },
  tituloBold: {
    fontWeight: '900',
  },
  campo: {
    marginTop: 10,
    marginHorizontal: 30,
  },
  label: {
    color: '#9C184E', 
    marginBottom: 5, 
    marginTop: 10, 
    fontSize: 16, 
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
  },
  infoTexto: {
    color: '#000',
    fontSize: 12,
    marginTop: 5,
  },
});

export default Formulario;
