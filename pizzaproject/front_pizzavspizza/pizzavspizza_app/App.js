import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListView from './src/screens/components/list_view';
import DetailView from './src/screens/components/detail_view';
import ScreenA from './src/screens/drawer/screenA.js';
import ScreenB from './src/screens/drawer/screenB.js';
import ScreenC from './src/screens/drawer/screenC.js';
import TabOne from './src/screens/tabs/tab1.js';
import TabTwo from './src/screens/tabs/tab2.js';

//  Количество экранов
const Stack = createStackNavigator();
//  Боковая панель
const Drawer = createDrawerNavigator();
//  Нижние вкладки
const Tab = createBottomTabNavigator();

renderTabComponents = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Tab 1' component={TabOne} />
      <Tab.Screen name='Tab 2' component={TabTwo} />
    </Tab.Navigator>
  );
};

renderScreenComponents = () => (
  <Stack.Navigator>
    <Stack.Screen name='Home' component={ListView} />
    <Stack.Screen name='Detail' component={DetailView} />
    <Stack.Screen name='Tabs' children={this.renderTabComponents} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Home' children={this.renderScreenComponents} />
        <Drawer.Screen name='Screen A' component={ScreenA} />
        <Drawer.Screen name='Screen B' component={ScreenB} />
        <Drawer.Screen name='Screen C' component={ScreenC} />
      </Drawer.Navigator>
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
wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
