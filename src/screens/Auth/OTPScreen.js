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
} from 'react-native';
import {
  SignIn_Option_Image,
  SignInOptions_Logo,
  arrow_Left,
} from '../../constants';
import CodeInput from 'react-native-confirmation-code-input';
import NavigationService from '../../navigation/NavigationService';

const {width, height} = Dimensions.get('window');

export default class OTPScreen extends Component {
  componentDidMount() {
    console.log('Mounted OTP Screen');
  }

  componentWillUnmount() {
    console.log('UnMounted OTP Screen');
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
              <View style={{marginTop: '20%'}}>
                <View>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: 'white',
                      fontSize: 18,
                      fontFamily: 'Montserrat-SemiBold',
                    }}>
                    Enter Verification Code
                  </Text>

                  <View style={{marginTop: 20}}>
                    <CodeInput
                      ref="codeInputRef2"
                      compareWithCode={'1234'}
                      placeholder={'1'}
                      placeholderTextColor={'black'}
                      keyboardType="numeric"
                      codeLength={4}
                      inputPosition="center"
                      autoFocus={false}
                      size={40}
                      onFulfill={isValid => alert(isValid)}
                      containerStyle={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 0,
                      }}
                      codeInputStyle={{
                        backgroundColor: '#F2F2F2',
                        borderRadius: 5,
                        color: 'black',
                        fontFamily: 'Montserrat-Bold',
                        fontSize: 18,
                        marginLeft: 10,
                      }}
                    />
                  </View>
                </View>

                <View style={{marginTop: '17%'}}>
                  <TouchableOpacity
                    onPress={() => NavigationService.navigate('HomeScreen')}
                    activeOpacity={0.9}
                    style={styles.confirmCode}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: 'Montserrat-SemiBold',
                      }}>
                      Confirm Code
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
  confirmCode: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
});
