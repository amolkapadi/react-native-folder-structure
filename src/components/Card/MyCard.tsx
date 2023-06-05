import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

interface CardProps {
  title?: string;
  subtitle?: string;
  image?: string;
  children?: React.ReactNode;
  onPress?: () => void;
}

const MyCard: React.FC<CardProps> = ({
  title,
  subtitle,
  image,
  children,
  onPress,
}) => {
  return (
    <Card style={styles.card} onPress={onPress}>
      {image && <Card.Cover source={{ uri: image }} />}
      <Card.Content>
        {title && <Title>{title}</Title>}
        {subtitle && <Paragraph>{subtitle}</Paragraph>}
        {children}
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 14,
    borderRadius: 10,
    elevation: 2,
  },
});

export default MyCard;
