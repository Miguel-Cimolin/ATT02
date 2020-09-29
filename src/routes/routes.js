import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { Home } from './../pages/Home';
import { Resultado } from './../pages/Resultado';


const Drawer = createDrawerNavigator();

export function Routes() {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home" drawerStyle={{backgroundColor: '#FAFAFA',width: 200,}}
        drawerContentOptions={
          {
            activeTintColor: '#8B4726', 
            activeBackgroundColor: '#CD6839',
            inactiveTintColor: '#DEDEDE',
            inactiveBackgroundColor: '#C2c2c2',
          }}>
          <Drawer.Screen name="Home" component={Home}/>
          <Drawer.Screen name="Resultado" component={Resultado}/>
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
