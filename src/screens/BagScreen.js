import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import Header from '../components/HeaderComponents/Header';
import NavigationService from '../navigation/NavigationService';

import BagMapValues from '../components/BagMapValues';

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
  {
    id: 3,
    image: require('../Assets/CategorySliders/Rectangle100.png'),
    name: 'DILLINGER',
    price: 'Colourblock Crew Black Shirt',
    rate: '$149.00',
  },
];

export default class BagScreen extends Component {
  componentDidMount = () => {
    console.log('Mounted Bag Screen');
  };

  componentWillUnmount() {
    console.log('UnMounted Bag Screen');
    this.setState = (state, callback) => {
      return;
    };
  }

  render() {
    return (
      <ScreenWrapper>
        <Header withBackArrow bag withLogo title="Bag" withSearch />

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{marginBottom: 20}}>
            {Category_Data.map((item, index) => {
              return (
                <BagMapValues
                  key={index}
                  data={item}
                  navigation={this.props.navigation}
                />
              );
            })}

            <View
              style={{
                marginVertical: 20,
                marginHorizontal: 15,
                elevation: 10,
                backgroundColor: '#FFFFFF',
                borderRadius: 5,
              }}>
              <View style={{padding: 15}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: '#808080',
                      fontFamily: 'Montserrat-Medium',
                      fontSize: 14,
                    }}>
                    Subtotal
                  </Text>
                  <Text
                    style={{
                      color: '#808080',
                      fontFamily: 'Montserrat-Medium',
                    }}>
                    $1,448.00
                  </Text>
                </View>
                <View
                  style={{
                    marginTop: 7,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: '#808080',
                      fontFamily: 'Montserrat-Medium',
                      fontSize: 14,
                    }}>
                    Shipping
                  </Text>
                  <Text
                    style={{color: '#808080', fontFamily: 'Montserrat-Medium'}}>
                    Free
                  </Text>
                </View>
              </View>

              <View style={{borderColor: '#CCCCCC', borderWidth: 0.5}}></View>

              <View style={{padding: 15}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: '#808080',
                      fontSize: 14,
                      fontFamily: 'Montserrat-Medium',
                    }}>
                    Total
                  </Text>
                  <Text
                    style={{color: '#808080', fontFamily: 'Montserrat-Medium'}}>
                    $1,448.00
                  </Text>
                </View>
                <View
                  style={{
                    marginTop: 7,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: '#808080',
                      fontSize: 14,
                      fontFamily: 'Montserrat-Medium',
                    }}>
                    Add Promo Code
                  </Text>
                  <Text
                    style={{
                      color: '#808080',
                      fontSize: 8,
                      backgroundColor: '#F5F5F8',
                      padding: 5,
                      width: '20%',
                      textAlign: 'center',
                      borderRadius: 5,
                      fontFamily: 'Montserrat-Medium',
                    }}>
                    #1234Psd
                  </Text>
                </View>
              </View>

              <View style={{padding: 15}}>
                <View
                  style={{
                    marginTop: '10%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Montserrat-SemiBold',
                      color: 'black',
                      fontSize: 16,
                    }}>
                    Your Total
                  </Text>
                  <Text
                    style={{
                      color: 'black',
                      fontFamily: 'Montserrat-SemiBold',
                      fontSize: 16,
                    }}>
                    $1,448.00
                  </Text>
                </View>
              </View>
            </View>

            <TouchableOpacity
              onPress={() => NavigationService.navigate('OrderScreen')}
              activeOpacity={0.7}
              style={styles.proceedCheckOutView}>
              <Text style={styles.proceedCheckOutText}>Proceed checkout</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ScreenWrapper>
    );
  }
}

const styles = StyleSheet.create({
  proceedCheckOutView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20%',
  },
  proceedCheckOutText: {
    backgroundColor: 'black',
    color: 'white',
    width: '80%',
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    padding: 5,
    borderRadius: 5,
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
  },
});
