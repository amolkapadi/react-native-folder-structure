import React from 'react';
import { View, StyleSheet, ViewStyle, TextStyle ,Text} from 'react-native';

interface CardProps {
  style?: ViewStyle;
  children: React.ReactNode;
  title?: string;
  titleStyle?: TextStyle;
}

const Card: React.FC<CardProps> = ({ style, children, title, titleStyle }) => {
  return (
    <View style={[styles.card, style]}>
      {title && <Text style={[styles.title, titleStyle]}>{title}</Text>}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 12,
    margin: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default Card;
