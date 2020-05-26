import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { BottomNavigation, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import Auth from './src/Screens/Auth/Auth';
import Listing from './src/Screens/Main/Listing';
import Profile from './src/Screens/Main/Profile';
import Signup from './src/Screens/Auth/Signup';
import Edit from './src/Screens/Main/Edit';
import ListingDetail from './src/Screens/Main/ListingDetail';

const Tab = createBottomTabNavigator();
const ProfileStack = new createStackNavigator();
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#4147D9',
    accent: '#f1c40f',
  },
};

class App extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'listing', title: 'Listing', icon: 'cards', color: '#3F51B5' },
      { key: 'profile', title: 'Profile', icon: 'face-profile', color: '#009688' },
    ],
  };
  
  _handleIndexChange = index => this.setState({ index });
  
  _renderScene = (profile) => BottomNavigation.SceneMap({
    listing: () => <Listing navigation={useNavigation()} profile={profile}/>,
    profile: () => <Profile navigation={useNavigation()} profile={profile}/>
  })

  render() {
    const Main = ({route}) => {
      let profile = route.params.profile;
      console.log(profile)
      return(
        <BottomNavigation
          navigationState={this.state}
          onIndexChange={this._handleIndexChange}
          renderScene={this._renderScene(profile)}
          shifting={true}
          sceneAnimationEnabled={true}
        />
      )
    }

    return (
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme}>
          <StatusBar barStyle = "dark-content" />
            <Tab.Navigator
            initialRouteName = "Auth"  
          >
            <Tab.Screen
              name = "Auth" 
              component = {Auth} 
              options = {{ tabBarVisible: false }}  
            />
            <Tab.Screen
              name = "Signup" 
              component = {Signup} 
              options = {{ tabBarVisible: false }}  
            />
            <Tab.Screen
              name = "Main" 
              component = {Main} 
              options = {{ tabBarVisible: false }}  
            />
            <Tab.Screen
              name = "Edit" 
              component = {Edit} 
              options = {{ tabBarVisible: false }}  
            />
            <Tab.Screen
              name = "ListingDetail" 
              component = {ListingDetail} 
              options = {{ tabBarVisible: false }}  
            />
          </Tab.Navigator>
        </NavigationContainer>
      </PaperProvider>
    );
  }
};

const styles = StyleSheet.create({
  
});

export default App;
