import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import { Mainpage, Createpage, Loginpage } from './pages';
import  Mainpage from './pages/Mainpage';
import  Createpage from './pages/Createpage';
import  Loginpage from './pages/Loginpage';

const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={Mainpage} />
        <Stack.Screen name="CreateAccount" component={Createpage} />
        <Stack.Screen name="Loginpage" component={Loginpage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;