import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Get_Started_Image, SignInOptions_Logo} from '../../constants';
import NavigationService from '../../navigation/NavigationService';
import SplashScreen from 'react-native-splash-screen';

const {width, height} = Dimensions.get('window');

export default class GetStartedScreen extends Component {
  componentDidMount() {
    SplashScreen.hide();

    console.log('Mounted Get_Started Screen');
  }

  componentWillUnmount() {
    console.log('UnMounted Get_Started Screen');
    this.setState = (state, callback) => {
      return;
    };
  }
  render() {
    return (
      <>
        <ImageBackground
          source={Get_Started_Image}
          style={{height: '100%', width: width}}>
          <View style={{flex: 1, justifyContent: 'flex-end', margin: 20}}>
            <Image
              source={SignInOptions_Logo}
              style={{
                marginBottom: '40%',
                width: 175,
                height: 40,
                alignSelf: 'center',
              }}
            />

            <View style={{marginLeft: 7, marginBottom: '10%'}}>
              <View style={{width: '80%'}}>
                <Text style={styles.OuterText}>Welcome To Our Community</Text>
              </View>
              <View
                style={{
                  width: '85%',
                  marginTop: 10,
                  marginLeft: 5,
                }}>
                <Text style={styles.innerText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
              </View>
            </View>

            <View style={{marginTop: 50, marginBottom: 20}}>
              <TouchableOpacity
                onPress={() =>
                  NavigationService.navigate('SignInOptionScreens')
                }
                activeOpacity={0.8}
                style={styles.getStartedbUTTON}>
                <Text style={styles.getStartedbUTTONText}>Get Started</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </>
    );
  }
}

const styles = StyleSheet.create({
  OuterText: {
    color: '#FFFFFF',
    fontSize: 36,
    fontFamily: 'Montserrat-Bold',
  },
  innerText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Montserrat-Medium',
  },
  getStartedbUTTON: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 10,
    height: 45,
  },
  getStartedbUTTONText: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
  },
});
