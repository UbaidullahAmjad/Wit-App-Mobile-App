import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {STATUSBAR_HEIGHT} from '../constants';
import ScreenWrapper from '../components/ScreenWrapper';

const {width} = Dimensions.get('window');

export default class VideoScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    console.log('Mounted Video_Call Screen');
  };

  componentWillUnmount() {
    console.log('UnMounted Video_Call Screen');
    this.setState = (state, callback) => {
      return;
    };
  }

  render() {
    return (
      <ScreenWrapper white_Color>
        <ImageBackground
          source={require('../Assets/VideoScreen/VideocallScreen21.png')}
          style={{width: width, height: '100%'}}>
          <View
            style={{
              flexDirection: 'row',
              paddingTop: STATUSBAR_HEIGHT,
              paddingHorizontal: 15,
              paddingBottom: 15,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{padding: 5}}
              onPress={() => this.props.navigation.goBack()}>
              <Image
                source={require('../Assets/App_Icons/arrow-left.png')}
                style={{height: 20, width: 20, tintColor: 'white'}}
              />
            </TouchableOpacity>

            <Text
              style={{
                fontFamily: 'Montserrat-SemiBold',
                color: 'white',
                fontSize: 18,
              }}>
              {'Melvin Pratt'}
            </Text>
            <TouchableOpacity
              style={{margin: 5}}
              onPress={() => alert('Group Call')}>
              <Image
                source={require('../Assets/AudioGroupCall.png')}
                style={{height: 30, width: 30, tintColor: 'white'}}
              />
            </TouchableOpacity>
          </View>

          <View style={{flex: 1, alignItems: 'center'}}></View>

          <View style={{justifyContent: 'center', alignItems: 'flex-end'}}>
            <Image
              source={require('../Assets/VideoScreen/Rectangle53.png')}
              style={{height: 150, width: 100, margin: 20, borderRadius: 5}}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                padding: 15,
                borderRadius: 40,
                justifyContent: 'center',
                alignSelf: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../Assets/Camera.png')}
                style={{height: 30, width: 30, tintColor: 'white'}}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: '#FA6650',
                padding: 15,
                borderRadius: 40,
                marginBottom: '20%',
                justifyContent: 'center',
                alignSelf: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../Assets/Audio.png')}
                style={{height: 35, width: 35, tintColor: 'white'}}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                padding: 15,
                borderRadius: 40,
                justifyContent: 'center',
                alignSelf: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../Assets/Video.png')}
                style={{
                  height: 30,
                  width: 30,
                  tintColor: 'white',
                }}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ScreenWrapper>
    );
  }
}

const styles = StyleSheet.create({});
