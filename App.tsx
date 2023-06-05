import React from "react"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Button from './src/components/Button/Button';
import {  Paragraph } from 'react-native-paper';
import Card from './src/components/Card/Crad';
import MyCard from './src/components/Card/MyCard';
import ProfileCard from './src/components/Card/ProfileCard';
import Todo from "./src/components/Todo/Todo";
import TailwindCard from "./src/components/Card/TailwindCard";

export default function App() {
  const [name, setName] = React.useState('');

  const handleNameChange = (text: string) => {
    setName(text);
  };

  const handlePress = () => {
    console.log('Button pressed');
  };
  return (
   <ScrollView >
      <StatusBar
        backgroundColor="white"
      />
    <View style={styles.container}>
      <Card title="My Card Title">
        <Text>This is some card content</Text>
        <Button title="Submit"/> 
      </Card>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TailwindCard
        title="Card Title"
        subtitle="Card Subtitle"
        image="https://picsum.photos/700"
        containerStyle={{ width: 300 }}
      />
    </View>
    
      <Card title="My Card Title">
        <Text>Dummy Data</Text>
      </Card>
    </View>
    <Todo />
    <View>
      <MyCard
        title="My Card Title"
        subtitle="My Card Subtitle"
        image="https://picsum.photos/700"
        onPress={handlePress}
      >
      <Paragraph>This is some card content</Paragraph>
      <Button title="Click"/>
      </MyCard>
    </View>
    <Card title="My Card Title">
        <Text>This is some card content</Text>
      </Card>
      <ProfileCard
        name="John Smith"
        description="Software Developer"
        imageUrl="https://randomuser.me/api/portraits/men/1.jpg"
      />
   </ScrollView >
  );
}

const styles = StyleSheet.create({
  container: {
   marginTop:60
  },
});
