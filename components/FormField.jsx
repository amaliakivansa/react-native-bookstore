import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const FormField = ({ name, value, onChangeText, otherStyles }) => {
  return (
    <View>
      <TextInput
        style={[styles.input, otherStyles]}
        placeholder={name}
        secureTextEntry={name.toLowerCase() === 'password'}
        value={value}
        onChangeText={onChangeText}
        autoCapitalize='none'
      />
    </View>
  );
};

export default FormField;

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#828282',
    paddingTop: 10,
    paddingBottom: 10,
  },
});
