import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  ImageBackground,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
} from 'react-native';
import {
  SignIn_Option_Image,
  SignInOptions_Logo,
  textinput_pencil,
  arrow_Left,
} from '../../constants';
import NavigationService from '../../navigation/NavigationService';

const {width, height} = Dimensions.get('window');

export default class PhoneNumberScreen extends Component {
  componentDidMount() {
    console.log('Mounted Phone Number Screen');
  }

  componentWillUnmount() {
    console.log('UnMounted Phone Number Screen');
    this.setState = (state, callback) => {
      return;
    };
  }
  render() {
    return (
      <ImageBackground
        source={SignIn_Option_Image}
        style={{
          height: '100%',
          width: width,
        }}>
        <KeyboardAvoidingView behavior="height">
          <ScrollView showsVerticalScrollIndicator={false}>
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack()}
              style={styles.BackArrow}>
              <Image source={arrow_Left} />
            </TouchableOpacity>
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
                  marginTop: '30%',
                  width: 175,
                  height: 40,
                  alignSelf: 'center',
                }}
              />
              <View style={{marginTop: '25%'}}>
                <View>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: 'white',
                      fontSize: 18,
                      fontFamily: 'Montserrat-SemiBold',
                    }}>
                    Continue with Phone Number
                  </Text>
                  <View
                    style={{
                      margin: 20,
                      marginTop: 25,
                      flexDirection: 'row',
                      backgroundColor: '#ffffff',
                      alignItems: 'center',
                      borderRadius: 30,
                    }}>
                    <View style={{paddingLeft: 10, padding: 5}}>
                      <Image
                        source={textinput_pencil}
                        style={{height: 20, width: 20}}
                      />
                    </View>
                    <TextInput
                      placeholder={'+65 012 345 6789'}
                      placeholderTextColor={'black'}
                      style={{
                        borderTopRightRadius: 30,
                        borderBottomRightRadius: 30,
                        backgroundColor: '#ffffff',
                        width: '90%',
                        color: 'black',
                        fontFamily: 'Montserrat-Regular',
                        height: 50,
                        fontSize: 18,
                      }}
                    />
                  </View>
                </View>

                <View style={{marginTop: '25%'}}>
                  <Text
                    style={{
                      fontSize: 18,
                      color: '#FFFFFF',
                      textAlign: 'center',
                      fontFamily: 'Montserrat-Medium',
                    }}>
                    We’ll send verification code to
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      color: '#FFFFFF',
                      fontWeight: 'bold',
                      textAlign: 'center',
                    }}>
                    +65 012 345 6789
                  </Text>
                </View>

                <View style={{marginTop: '17%'}}>
                  <TouchableOpacity
                    onPress={() => NavigationService.navigate('OTPScreen')}
                    activeOpacity={0.9}
                    style={styles.sendCode}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontFamily: 'Montserrat-SemiBold',
                      }}>
                      Send Verification Code
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  borderLine: {
    borderWidth: 0.5,
    borderColor: '#FFFFFF',
    width: width * 0.3,
  },
  BackArrow: {
    backgroundColor: 'white',
    position: 'absolute',
    left: 30,
    top: 60,
    borderRadius: 20,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    paddingRight: 8,
  },
  sendCode: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
});
