import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import ScreenWrapper from '../components/ScreenWrapper';
import Header from '../components/HeaderComponents/Header';
import NavigationService from '../navigation/NavigationService';

export default class JobSettingScreen extends Component {
  componentDidMount = () => {
    console.log('Mounted Job_Setting Screen');
  };

  componentWillUnmount() {
    console.log('UnMounted Job_Setting Screen');
    this.setState = (state, callback) => {
      return;
    };
  }

  render() {
    return (
      <ScreenWrapper>
        <Header
          withBackArrow
          withLogo
          title="Job Settings"
          navigation={this.props.navigation}
        />

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{flex: 1}}>
            <TouchableOpacity
              onPress={() =>
                NavigationService.navigate('Personal_Detail_Screen')
              }
              activeOpacity={0.5}
              style={{
                backgroundColor: 'white',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 20,
                borderRadius: 5,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: 'Montserrat-Medium',
                  }}>
                  {'Personal Details'}
                </Text>
              </View>
              <AntDesign name="right" size={16} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => NavigationService.navigate('SaveScreen')}
              activeOpacity={0.5}
              style={{
                backgroundColor: 'white',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 20,
                borderRadius: 5,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: 'Montserrat-Medium',
                  }}>
                  {'Save'}
                </Text>
              </View>
              <AntDesign name="right" size={16} color="black" />
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.5}
              style={{
                backgroundColor: 'white',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 20,
                borderRadius: 5,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: 'Montserrat-Medium',
                  }}>
                  {'Apply List'}
                </Text>
              </View>
              <AntDesign name="right" size={16} color="black" />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ScreenWrapper>
    );
  }
}

const styles = StyleSheet.create({});
