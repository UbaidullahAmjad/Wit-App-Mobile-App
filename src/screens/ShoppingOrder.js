import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import ScreenWrapper from '../components/ScreenWrapper';
import Header from '../components/HeaderComponents/Header';
import NavigationService from '../navigation/NavigationService';

const Category_Data = [
  {
    id: 1,
    image: require('../Assets/CategorySliders/Rectangle98.png'),
    name: 'DILLINGER',
    price: 'Colourblock Crew Shirt',
    rate: '$1,299.00',
  },
  {
    id: 2,
    image: require('../Assets/CategorySliders/Rectangle100.png'),
    name: 'DILLINGER',
    price: 'Colourblock Crew Black Shirt',
    rate: '$149.00',
  },
];

export default class ShoppingOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {index: 0};
  }

  componentDidMount = () => {
    console.log('Mounted Shopping_Order Screen');
  };

  componentWillUnmount() {
    console.log('UnMounted Shopping_Order Screen');
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
          title="Order"
          navigation={this.props.navigation}
        />

        <View
          style={{
            backgroundColor: '#F5F5F8',
            paddingVertical: 10,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              this.setState({index: 0});
            }}
            style={{marginLeft: 20}}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Montserrat-Medium',
                color: this.state.index == '0' ? 'black' : '#9E9E9E',
              }}>
              Order
            </Text>
            {this.state.index == '0' ? (
              <View
                style={{
                  alignSelf: 'center',
                  borderBottomColor: 'black',
                  borderBottomWidth: 3,
                  width: '50%',
                }}></View>
            ) : null}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              {
                this.setState({index: 1});
              }
            }}
            style={{marginLeft: 20}}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Montserrat-Medium',
                color: this.state.index == '1' ? 'black' : '#9E9E9E',
              }}>
              Return
            </Text>
            {this.state.index == '1' ? (
              <View
                style={{
                  alignSelf: 'center',
                  borderBottomColor: 'black',
                  borderBottomWidth: 3,
                  width: '50%',
                }}></View>
            ) : null}
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              paddingVertical: 20,
              marginHorizontal: 10,
            }}>
            {this.state.index == '0' ? (
              <>
                {Category_Data.map((item, index) => {
                  return (
                    <View
                      key={index}
                      style={{
                        marginHorizontal: 15,
                        paddingVertical: 8,
                        marginTop: 10,
                        backgroundColor: '#FFFFFF',
                        padding: 5,
                        borderRadius: 5,
                        elevation: 10,
                      }}>
                      <TouchableOpacity
                        onPress={() =>
                          NavigationService.navigate('CancelOrder')
                        }
                        activeOpacity={0.7}
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <View
                          style={{flexDirection: 'row', alignItems: 'center'}}>
                          <Image
                            style={{
                              borderRadius: 5,
                              height: 80,
                              width: 90,
                              alignSelf: 'center',
                            }}
                            source={require('../Assets/CategorySliders/Rectangle100.png')}
                          />

                          <View
                            style={{
                              paddingLeft: 15,
                              justifyContent: 'center',
                            }}>
                            <Text
                              style={{
                                fontSize: 16,
                                marginBottom: 5,
                                fontFamily: 'Montserrat-SemiBold',
                              }}>
                              {'DILLINGER'}
                            </Text>
                            <Text
                              style={{
                                fontSize: 12,
                                fontFamily: 'Montserrat-Regular',
                              }}>
                              {'Colourblack Crew Black Shirt'}
                            </Text>
                            <Text
                              style={{
                                fontSize: 12,
                                color: 'rgba(0, 0, 0, 0.5)',
                                fontFamily: 'Montserrat-Regular',
                              }}>
                              {'Delivered 22-10-2021'}
                            </Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    </View>
                  );
                })}
              </>
            ) : (
              <>
                {Category_Data.map((item, index) => {
                  return (
                    <View
                      key={index}
                      style={{
                        marginHorizontal: 15,
                        paddingVertical: 8,
                        marginTop: 10,
                        backgroundColor: '#FFFFFF',
                        padding: 5,
                        borderRadius: 5,
                        elevation: 10,
                      }}>
                      <TouchableOpacity
                        onPress={() =>
                          NavigationService.navigate('CancelOrder', {
                            id: 'Return Orders',
                          })
                        }
                        activeOpacity={0.7}
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <View
                          style={{flexDirection: 'row', alignItems: 'center'}}>
                          <Image
                            style={{
                              borderRadius: 5,
                              height: 80,
                              width: 90,
                              alignSelf: 'center',
                            }}
                            source={require('../Assets/CategorySliders/Rectangle100.png')}
                          />

                          <View
                            style={{
                              paddingLeft: 15,
                              justifyContent: 'center',
                            }}>
                            <Text
                              style={{
                                fontSize: 16,
                                marginBottom: 5,
                                fontFamily: 'Montserrat-SemiBold',
                              }}>
                              {'DILLINGER'}
                            </Text>
                            <Text
                              style={{
                                fontSize: 12,
                                fontFamily: 'Montserrat-Regular',
                              }}>
                              {'Colourblack Crew Black Shirt'}
                            </Text>
                            <Text
                              style={{
                                fontSize: 12,
                                color: 'rgba(0, 0, 0, 0.5)',
                                fontFamily: 'Montserrat-Regular',
                              }}>
                              {'Delivered 22-10-2021'}
                            </Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    </View>
                  );
                })}
              </>
            )}
          </View>
        </ScrollView>
      </ScreenWrapper>
    );
  }
}

const styles = StyleSheet.create({});
