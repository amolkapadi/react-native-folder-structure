import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import ButtonGroup from '../Button/ButtonGroup';
interface ProfileCardProps {
  name: string;
  description: string;
  imageUrl: string;
}
const handleLeftButtonPress = () => {
    console.log('Left button pressed');
  };

  const handleRightButtonPress = () => {
    console.log('Right button pressed');
  };

const ProfileCard: React.FC<ProfileCardProps> = ({ name, description, imageUrl }) => {
  return (
    <Card style={styles.card}>
      <Card.Content style={styles.cardContent}>
        <Avatar.Image source={{ uri: imageUrl }} size={80} />
       <View style={styles.profileInfo}>
       <Title>{name}</Title>
        <Paragraph>{description}</Paragraph>
       </View>
      
      </Card.Content>
      <ButtonGroup
        onPressLeft={handleLeftButtonPress}
        onPressRight={handleRightButtonPress}
        leftButtonText="Edit"
        rightButtonText="Update"
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 12,
    backgroundColor:"white"
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileInfo:{
    marginLeft:10
  }
});

export default ProfileCard;
