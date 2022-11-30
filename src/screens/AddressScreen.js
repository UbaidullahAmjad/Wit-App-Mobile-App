import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Image,
} from 'react-native';

import ScreenWrapper from '../components/ScreenWrapper';
import Header from '../components/HeaderComponents/Header';

export default class AddressScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    console.log('Mounted Address Screen');
  };

  componentWillUnmount() {
    console.log('UnMounted Address Screen');
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
          title="Address"
          Add_new
          navigation={this.props.navigation}
        />
        <ScrollView>
          <View style={{paddingHorizontal: 20}}>
            <View
              style={{
                marginVertical: 20,
                elevation: 10,
                backgroundColor: '#FFFFFF',
                borderRadius: 5,
                padding: 10,
              }}>
              <View>
                <View
                  style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Montserrat-SemiBold',
                      fontSize: 14,
                    }}>
                    Home
                  </Text>
                  <Image
                    style={{height: 15, width: 15}}
                    source={require('../Assets/App_Icons/pencil_textinput.png')}
                  />
                </View>
                <View style={{marginTop: 10}}>
                  <Text
                    style={{
                      fontFamily: 'Montserrat-Medium',
                      fontSize: 14,
                    }}>
                    Sudharsan
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Montserrat-Medium',
                      fontSize: 14,
                    }}>
                    238 Thomson Road 03-06 Novena
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Montserrat-Medium',
                      fontSize: 14,
                    }}>
                    Square, Singapore,
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Montserrat-Medium',
                      fontSize: 14,
                    }}>
                    +63564066,
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Montserrat-Medium',
                      fontSize: 14,
                    }}>
                    307683,
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </ScreenWrapper>
    );
  }
}

const styles = StyleSheet.create({});
