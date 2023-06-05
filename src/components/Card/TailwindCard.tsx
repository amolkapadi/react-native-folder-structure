import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';

interface CardProps {
    title: string;
    subtitle: string;
    image: string;
    containerStyle?: StyleProp<ViewStyle>;
  }
  const TailwindCard = ({ title, subtitle, image, containerStyle }: CardProps) => {
    return (
      <View style={[styles.container, containerStyle]}>
        <Image source={{ uri: image }} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </View>
    );
  };

  export default TailwindCard;
  const styles = StyleSheet.create({
    container: 'p-4 bg-white rounded-lg shadow-md',
    image: 'w-full h-48 object-cover rounded-t-lg',
    content: 'p-4',
    title: 'text-lg font-bold mb-2',
    subtitle: 'text-gray-500',
  });