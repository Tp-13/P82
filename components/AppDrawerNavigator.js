import React, { Component } from 'react';
import { Settings } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import SettingScreen from '../screens/SettingsScreen';
import { AppTabNavigator } from './AppTabNavigator';
import CustomSideBarMenu from './CustomSideBarMenu';

export const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: { screen: AppTabNavigator },
    Settings: { screen: SettingScreen },
  },
  { contentComponent: CustomSideBarMenu },
  { initialRouteName: 'Home' }
);
