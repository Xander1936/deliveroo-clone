import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './(tabs)/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
          <Stack.Navigator>
              <Stack.Screen name='Home' component={HomeScreen} />
          </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

{/* 
<Text style={{ color: "green"}} >Open up App.js to start working on your app!</Text>
<StatusBar style="auto" /> 
<Stack.Navigator>
          <Stack.Screen name='Home' component={HomeScreen} />
</Stack.Navigator>

<View style={styles.container}>
  <Text style={{ color: "green"}} >Open up App.js to start working on your app!</Text>
  <StatusBar style="auto" />
</View> 
*/}
// <></>