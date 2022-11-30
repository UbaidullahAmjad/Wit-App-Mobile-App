import React, {Component} from 'react';
import {ImageBackground, StyleSheet, Dimensions} from 'react-native';
import NavigationService from '../navigation/NavigationService';
import SplashScreen from 'react-native-splash-screen';

const {width, height} = Dimensions.get('window');

export default class Splash extends Component {
  componentDidMount() {
    SplashScreen.hide();

    setTimeout(() => {
      NavigationService.navigate('GetStartedScreen');
    }, 2000);
    console.log('Mounted Splash Screen');
  }

  componentWillUnmount() {
    console.log('UnMounted Splash Screen');
  }
  render() {
    return (
      <ImageBackground
        style={{
          flex: 1,
          width: width,
          height: '100%',
        }}
        source={require('../Assets/SplashScreen/SplashScreen2.jpg')}></ImageBackground>
    );
  }
}

const styles = StyleSheet.create({});
