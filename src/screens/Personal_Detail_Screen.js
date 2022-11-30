import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import ScreenWrapper from '../components/ScreenWrapper';
import Header from '../components/HeaderComponents/Header';

export default class Personal_Detail_Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    console.log('Mounted Personal_Detail Screen');
  };

  componentWillUnmount() {
    console.log('UnMounted Personal_Detail Screen');
    this.setState = (state, callback) => {
      return;
    };
  }

  render() {
    return (
      <ScreenWrapper white_Color>
        <Header
          withBackArrow
          withLogo
          title="Personal Details"
          navigation={this.props.navigation}
        />

        <ScrollView showsVerticalScrollIndicator={false}>
          <KeyboardAvoidingView behavior="height">
            <ScrollView showsVerticalScrollIndicator={false}>
              <View
                style={{
                  marginHorizontal: 20,
                  borderRadius: 5,
                  paddingVertical: 20,
                  padding: 10,
                }}>
                <View>
                  <Text style={styles.text}>{'Name'}</Text>
                  <TextInput
                    placeholder={'Type here'}
                    placeholderTextColor={'#7E7E7E'}
                    style={styles.textInput}
                  />
                </View>

                <View style={{marginTop: 15}}>
                  <Text style={styles.text}>{'Last Name'}</Text>
                  <TextInput
                    placeholder={'Type here'}
                    placeholderTextColor={'#7E7E7E'}
                    style={styles.textInput}
                  />
                </View>

                <View style={{marginTop: 15}}>
                  <Text style={styles.text}>{'DOB'}</Text>
                  <TextInput
                    placeholder={'DD/MM/YYYY'}
                    placeholderTextColor={'#7E7E7E'}
                    style={styles.textInput}
                  />
                </View>

                <View style={{marginTop: 15}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Text style={styles.text}>{'Education'}</Text>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                      }}>
                      <Text style={styles.addtext}>{'Add'}</Text>
                      <AntDesign name="plus" size={10} color="black" />
                    </View>
                  </View>

                  <TextInput
                    placeholder={'Type here'}
                    placeholderTextColor={'#7E7E7E'}
                    style={styles.textInput}
                  />
                </View>

                <View style={{marginTop: 15}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Text style={styles.text}>{'Work Status'}</Text>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                      }}>
                      <Text style={styles.addtext}>{'Add'}</Text>
                      <AntDesign name="plus" size={10} color="black" />
                    </View>
                  </View>
                  <TextInput
                    placeholder={'Type here'}
                    placeholderTextColor={'#7E7E7E'}
                    style={styles.textInput}
                  />
                </View>

                <View style={{marginTop: 15}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Text style={styles.text}>{'Skills'}</Text>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                      }}>
                      <Text style={styles.addtext}>{'Add'}</Text>
                      <AntDesign name="plus" size={10} color="black" />
                    </View>
                  </View>
                  <TextInput
                    placeholder={'Type here'}
                    placeholderTextColor={'#7E7E7E'}
                    style={styles.textInput}
                  />
                </View>

                <View style={{marginTop: 15}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Text style={styles.text}>{'Languages'}</Text>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                      }}>
                      <Text style={styles.addtext}>{'Add'}</Text>
                      <AntDesign name="plus" size={10} color="black" />
                    </View>
                  </View>
                  <TextInput
                    placeholder={'Type here'}
                    placeholderTextColor={'#7E7E7E'}
                    style={styles.textInput}
                  />
                </View>

                <View style={{marginTop: 15}}>
                  <Text style={styles.text}>{'Resume*'}</Text>
                  <View style={styles.UploadResume}>
                    <Image
                      source={require('../Assets/documnet.png')}
                      style={{height: 30, width: 30}}
                    />
                    <Text style={styles.UploadResumeText}>Upload Resume</Text>
                  </View>
                </View>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </ScrollView>
      </ScreenWrapper>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: '#F6F7FA',
    height: 40,
    paddingLeft: 20,
    borderRadius: 5,
    color: 'black',
    fontSize: 14,
    marginTop: 5,
    fontFamily: 'Montserrat-Regular',
  },
  text: {
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    color: '#8F8F8F',
  },
  addtext: {
    fontSize: 10,
    fontFamily: 'Montserrat-Regular',
  },
  UploadResume: {
    marginTop: 5,
    padding: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#C6C9CE',
    borderStyle: 'dotted',
    justifyContent: 'center',
    alignItems: 'center',
  },
  UploadResumeText: {
    fontSize: 10,
    marginTop: 5,
    color: '#CFD2D7',
    fontFamily: 'Montserrat-Regular',
  },
});
