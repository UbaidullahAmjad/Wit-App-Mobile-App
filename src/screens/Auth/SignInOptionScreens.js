import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  SignIn_Option_Image,
  google_icon,
  facebook_icon,
  SignInOptions_Logo,
} from '../../constants';
import NavigationService from '../../navigation/NavigationService';

const {width, height} = Dimensions.get('window');

export default class SignInOptionScreens extends Component {
  componentDidMount() {
    console.log('Mounted SignIn Option Screen');
  }

  componentWillUnmount() {
    console.log('UnMounted SignIn Option Screens');
    this.setState = (state, callback) => {
      return;
    };
  }
  render() {
    return (
      <>
        <ImageBackground
          source={SignIn_Option_Image}
          style={{height: '100%', width: width}}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              margin: 20,
              marginTop: '50%',
            }}>
            <Image
              source={SignInOptions_Logo}
              style={{
                marginTop: '7%',
                width: 175,
                height: 40,
                alignSelf: 'center',
              }}
            />
            <View style={{marginTop: '30%'}}>
              <View style={{marginTop: 10}}>
                <TouchableOpacity
                  activeOpacity={0.9}
                  style={[styles.ButtonsView, {flexDirection: 'row'}]}>
                  <View style={styles.ButtonIconView}>
                    <Image
                      source={google_icon}
                      style={{width: 20, height: 20}}
                    />
                  </View>
                  <Text style={[styles.ButtonIconViewText, {marginLeft: 20}]}>
                    Sign in with Google
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={{marginTop: 10}}>
                <TouchableOpacity
                  activeOpacity={0.9}
                  style={[styles.ButtonsView, {flexDirection: 'row'}]}>
                  <View style={[styles.ButtonIconView, {marginLeft: 20}]}>
                    <Image
                      source={facebook_icon}
                      style={{width: 20, height: 20}}
                    />
                  </View>
                  <Text style={[styles.ButtonIconViewText, {marginLeft: 20}]}>
                    Sign in with Facebook
                  </Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                  marginVertical: '10%',
                }}>
                <View style={styles.borderLine} />
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '300',
                    color: '#FFFFFF',
                    fontFamily: 'Montserrat-Medium',
                  }}>
                  OR
                </Text>
                <View style={styles.borderLine} />
              </View>

              <View>
                <TouchableOpacity
                  onPress={() =>
                    NavigationService.navigate('PhoneNumberScreen')
                  }
                  activeOpacity={0.9}
                  style={styles.ButtonsView}>
                  <Text style={styles.ButtonIconViewText}>
                    Sign in with Phone Number
                  </Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 20,
                }}>
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      marginLeft: 20,
                      color: '#FFFFFF',
                      fontFamily: 'Montserrat-Regular',
                    }}>
                    Already have an account ?
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.6}
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 5,
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      marginLeft: 20,
                      color: 'white',
                      fontWeight: 'bold',
                      fontFamily: 'Montserrat-Bold',
                    }}>
                    Login
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
      </>
    );
  }
}

const styles = StyleSheet.create({
  borderLine: {
    borderWidth: 0.5,
    borderColor: '#FFFFFF',
    width: width * 0.3,
  },
  ButtonsView: {
    backgroundColor: 'white',
    padding: 10,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonIconView: {
    backgroundColor: 'white',
    elevation: 20,
    borderRadius: 20,
    height: 25,
    width: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonIconViewText: {
    fontSize: 16,
    fontFamily: 'Montserrat-Medium',
  },
});
