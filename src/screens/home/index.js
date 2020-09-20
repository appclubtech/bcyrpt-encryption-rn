import React from 'react';
import { Button, TextInput } from 'react-native-paper';
import { Image, SafeAreaView, View, Text, StatusBar } from 'react-native';

import styles from './styles';

const Home = () => {
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
          />
          <Button style={styles.spacingTop} mode="outlined">
            Convert
          </Button>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Home;
