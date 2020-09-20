import React, { useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
import { Image, SafeAreaView, View, Text, StatusBar } from 'react-native';

import styles from './styles';

const Home = () => {
  const [text, setText] = useState('');
  const [hashed, setHashed] = useState('');
  const [isHashed, setIsHashed] = useState(false);

  const handleChange = (value) => {
    // TODO: Handle changes by the text input
  };

  const handleSubmit = () => {
    // TODO: Handle the convert button by
    // converting text into hash using bcrypt
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Image
          style={styles.image}
          source={require('../../assets/images/logo.png')}
        />
        <Text style={styles.sectionTitle}>App Club</Text>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            Using bcrypt with React Native
          </Text>
          <TextInput
            style={styles.spacingTop}
            label="String to be hashed"
            mode="outlined"
            value={text}
            onChangeText={handleChange}
          />
          <Button
            style={styles.spacingTop}
            mode="outlined"
            onPress={handleSubmit}>
            Convert
          </Button>
          {isHashed ? <Text style={styles.hashed}>{hashed}</Text> : null}
        </View>
      </SafeAreaView>
    </>
  );
};

export default Home;
