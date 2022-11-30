import React, {Component} from 'react';
import {
  ImageBackground,
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import Header from '../components/HeaderComponents/Header';

const {width} = Dimensions.get('window');
const itemWidth = (width / 3) * 2.5;
const gap = (width - itemWidth) / 4;

const Category_Data = [
  {id: 1, image: require('../Assets/HomeImages/Rectangle1.png'), name: 'MEN'},
  {id: 2, image: require('../Assets/HomeImages/Rectangle2.png'), name: 'WOMEN'},
  {id: 3, image: require('../Assets/HomeImages/Rectangle3.png'), name: 'KIDS'},
  {
    id: 4,
    image: require('../Assets/HomeImages/Rectangl4.png'),
    name: 'FOOTWEAR',
  },
  {
    id: 5,
    image: require('../Assets/HomeImages/Rectangle5.png'),
    name: 'GLASSES',
  },
];

const Category_Data1 = [
  {id: 1, image: require('../Assets/HomeImages/reactangle7.png')},
  {id: 2, image: require('../Assets/HomeImages/reactangle6.png')},
];

const Category_Data2 = [
  {id: 1, image: require('../Assets/HomeImages/Rectangle8.png')},
  {id: 2, image: require('../Assets/HomeImages/Rectangle9.png')},
  {id: 3, image: require('../Assets/HomeImages/Rectangle10.png')},
];
export default class HomeScreen extends Component {
  componentDidMount = () => {
    console.log('Mounted Home Screen');
  };

  componentWillUnmount() {
    console.log('UnMounted Home Screen');
    this.setState = (state, callback) => {
      return;
    };
  }
  render() {
    return (
      <ScreenWrapper doubleTapExit>
        <Header
          withCategoryIcon
          withLogo
          title="Wit App"
          withSearch
          withNotification
        />

        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              marginBottom: 20,
              paddingBottom: 30,
            }}>
            {/* ****************** First View ****************** */}

            <TouchableOpacity activeOpacity={0.9} style={{margin: 12}}>
              <ImageBackground
                borderRadius={10}
                source={require('../Assets/HomeImages/homeslider.png')}
                style={{height: 180, width: '100%'}}>
                <View style={{flex: 1, justifyContent: 'flex-end'}}>
                  <Text
                    style={{
                      position: 'absolute',
                      right: 10,
                      top: 5,
                      fontFamily: 'Montserrat-SemiBold',
                    }}>
                    ZARA
                  </Text>

                  <View style={{margin: 10}}>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 24,
                        fontFamily: 'Montserrat-Bold',
                      }}>
                      30% OFF
                    </Text>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 24,
                        fontFamily: 'Montserrat-Bold',
                      }}>
                      FLAT DISCOUNT
                    </Text>
                  </View>
                </View>
              </ImageBackground>
            </TouchableOpacity>

            <ScrollView
              nestedScrollEnabled
              horizontal
              pagingEnabled
              decelerationRate="fast"
              showsHorizontalScrollIndicator={false}
              snapToInterval={itemWidth + gap}>
              {Category_Data.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  activeOpacity={0.9}
                  style={{marginLeft: 12, borderRadius: 10}}>
                  <ImageBackground
                    borderRadius={10}
                    source={item.image}
                    style={{
                      height: 85,
                      width: 95,
                    }}>
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'flex-end',
                        margin: 10,
                        marginBottom: 5,
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          color: 'white',
                          fontSize: 10,
                          fontFamily: 'Montserrat-Bold',
                        }}>
                        {item.name}
                      </Text>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              ))}
            </ScrollView>

            <ScrollView
              nestedScrollEnabled
              horizontal
              pagingEnabled
              decelerationRate="fast"
              style={{alignSelf: 'center', paddingTop: 10}}
              showsHorizontalScrollIndicator={false}
              snapToInterval={itemWidth + gap}>
              {Category_Data1.map((item, index) => {
                return (
                  <TouchableOpacity
                    style={{margin: 5}}
                    key={index}
                    activeOpacity={0.9}>
                    <ImageBackground
                      borderRadius={10}
                      source={item.image}
                      style={{
                        height: 150,
                        width: (width - 3) / 2.2,
                      }}></ImageBackground>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>

            <ScrollView
              nestedScrollEnabled
              horizontal
              pagingEnabled
              decelerationRate="fast"
              style={{alignSelf: 'center', paddingTop: 10}}
              showsHorizontalScrollIndicator={false}
              snapToInterval={itemWidth + gap}>
              {Category_Data2.map((item, index) => {
                return (
                  <TouchableOpacity
                    style={{margin: 5}}
                    key={index}
                    activeOpacity={0.9}>
                    <ImageBackground
                      borderRadius={10}
                      source={item.image}
                      style={{
                        height: 100,
                        width: (width - 4) / 3.35,
                      }}></ImageBackground>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>

            <TouchableOpacity
              activeOpacity={0.9}
              style={{margin: 12, marginTop: 16}}>
              <ImageBackground
                borderRadius={10}
                source={require('../Assets/HomeImages/Rectangle11.png')}
                style={{height: 160, width: '100%'}}></ImageBackground>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ScreenWrapper>
    );
  }
}

const styles = StyleSheet.create({});
