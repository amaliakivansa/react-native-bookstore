import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const CustomButton = ({ type, text, customStyles, handlePress }) => {
  return (
    <TouchableOpacity
      style={[
        customStyles,
        type === 'primary' ? styles.buttonPrimary : styles.buttonSecondary,
      ]}
      activeOpacity={0.7}
      onPress={handlePress}
    >
      <Text
        style={type === 'primary' ? styles.textPrimary : styles.textSecondary}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonPrimary: {
    backgroundColor: '#FD4D4D',
    padding: 10,
    borderRadius: '15px',
    color: '#fff',
  },
  buttonSecondary: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#FD4D4D',
  },
  textPrimary: {
    color: '#fff',
    textAlign: 'center',
  },
  textSecondary: {
    color: '#FD4D4D',
    textAlign: 'center',
  },
});
