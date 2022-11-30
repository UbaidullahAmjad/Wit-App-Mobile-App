import React, {Component} from 'react';
import {
  ImageBackground,
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Modal,
} from 'react-native';

import ScreenWrapper from '../components/ScreenWrapper';
import NavigationService from '../navigation/NavigationService';
import Header from '../components/HeaderComponents/Header';

export default class ApplyScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }

  componentDidMount = () => {
    console.log('Mounted Apply Screen');
  };

  componentWillUnmount() {
    console.log('UnMounted Apply Screen');
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
          title=" "
          navigation={this.props.navigation}
        />
        <KeyboardAvoidingView behavior="height">
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                marginBottom: 20,
                paddingBottom: 40,
              }}>
              <View
                style={{
                  padding: 10,
                }}>
                <TouchableOpacity activeOpacity={0.7} style={{margin: 10}}>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      source={require('../Assets/BrandLoogoImages/Google.png')}
                      style={{height: 60, width: 60}}
                    />
                    <View
                      style={{
                        flexDirection: 'column',
                        width: '70%',
                        marginLeft: 10,
                        justifyContent: 'center',
                      }}>
                      <Text
                        style={{
                          fontSize: 16,
                          fontFamily: 'Montserrat-SemiBold',
                        }}>
                        {'Graphic Designer '}
                      </Text>
                      <Text
                        style={{
                          fontSize: 10,
                          color: '#B6B6B6',
                          fontFamily: 'Montserrat-Medium',
                        }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  marginHorizontal: 20,
                  borderRadius: 5,
                  padding: 10,
                }}>
                <Text style={{fontSize: 16, fontFamily: 'Montserrat-Medium'}}>
                  Application
                </Text>

                <View style={{marginTop: 20}}>
                  <Text style={styles.text}>{'Full Name*'}</Text>
                  <TextInput
                    placeholder={'Type here'}
                    placeholderTextColor={'#7E7E7E'}
                    style={styles.textinput}
                  />
                </View>

                <View style={{marginTop: 20}}>
                  <Text style={styles.text}>{'Email*'}</Text>
                  <TextInput
                    placeholder={'Type here'}
                    placeholderTextColor={'#7E7E7E'}
                    style={styles.textinput}
                  />
                </View>

                <View style={{marginTop: 20}}>
                  <Text style={styles.text}>{'Phone Number*'}</Text>
                  <TextInput
                    placeholder={'Type here'}
                    placeholderTextColor={'#7E7E7E'}
                    style={styles.textinput}
                  />
                </View>

                <View style={{marginTop: 20}}>
                  <Text style={styles.text}>{'Resume*'}</Text>
                  <View style={styles.resumeView}>
                    <Image
                      source={require('../Assets/documnet.png')}
                      style={{height: 30, width: 30}}
                    />
                    <Text style={styles.resumeViewText}>Upload Resume</Text>
                  </View>
                </View>
              </View>

              <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.modalVisible}
                onRequestClose={() => {
                  this.setState({modalVisible: !this.state.modalVisible});
                }}>
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <Image
                      style={{height: 150, width: 150}}
                      source={require('../Assets/Applied.png')}
                    />
                    <Text
                      style={[
                        {
                          marginTop: 20,
                          fontSize: 18,
                          fontFamily: 'Montserrat-Medium',
                        },
                      ]}>
                      Successfully Applied
                    </Text>

                    <Text
                      style={[
                        {
                          marginTop: 20,
                          fontSize: 14,
                          color: '#747474',
                          textAlign: 'center',
                          fontFamily: 'Montserrat-Medium',
                        },
                      ]}>
                      Lorem ipsum dolor sit amet consectetur adipiscing elit.
                    </Text>
                    <View>
                      <TouchableOpacity
                        style={[styles.button, {margin: 5, padding: 10}]}
                        onPress={() =>
                          this.setState({
                            modalVisible: !this.state.modalVisible,
                          })
                        }>
                        <Text style={[styles.textStyle]}>Back Home </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </Modal>

              <TouchableOpacity
                onPress={() =>
                  this.setState(this.setState({modalVisible: true}))
                }
                activeOpacity={0.6}
                style={styles.ApplyNowButton}>
                <Text style={styles.ApplyNowButtonText}>Apply Now</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </ScreenWrapper>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 22,
    // backgroundColor: 'rgba(100, 100, 100, 0.7)',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    marginTop: 20,
    padding: 10,
  },
  textStyle: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
  },
  text: {
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
  },
  textinput: {
    backgroundColor: '#F6F7FA',
    height: 40,
    paddingLeft: 20,
    borderRadius: 5,
    color: 'black',
    marginTop: 5,
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
  },
  ApplyNowButton: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: '20%',
    width: '45%',
    backgroundColor: 'black',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
  },
  ApplyNowButtonText: {
    marginLeft: 10,
    color: 'white',
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
  },
  resumeView: {
    marginTop: 5,
    padding: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#C6C9CE',
    borderStyle: 'dotted',
    justifyContent: 'center',
    alignItems: 'center',
  },
  resumeViewText: {
    fontSize: 10,
    marginTop: 5,
    color: '#CFD2D7',
    fontFamily: 'Montserrat-Regular',
  },
});
