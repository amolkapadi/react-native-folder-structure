import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

interface InputBoxProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
}

const InputBox: React.FC<InputBoxProps> = ({ label, value, onChangeText }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={label}
        placeholderTextColor="#ccc"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  input: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    fontSize: 18,
    paddingVertical: 5,
  },
});

export default InputBox;
