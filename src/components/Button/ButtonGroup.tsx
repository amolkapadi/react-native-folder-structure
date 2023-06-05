import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';

interface ButtonGroup {
  onPressLeft: () => void;
  onPressRight: () => void;
  leftButtonText: string;
  rightButtonText: string;
}

const ButtonGroup: React.FC<ButtonGroup> = ({
  onPressLeft,
  onPressRight,
  leftButtonText,
  rightButtonText,
}) => {
  return (
    <View style={styles.container}>
      <Button mode="contained" onPress={onPressLeft} style={styles.button}>
        {leftButtonText}
      </Button>
      <Button mode="contained" onPress={onPressRight} style={styles.button}>
        {rightButtonText}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  button: {
    flex: 1,
    borderRadius:5,
    backgroundColor:"#4caf50",
    marginHorizontal: 8,
  },
});

export default ButtonGroup;
