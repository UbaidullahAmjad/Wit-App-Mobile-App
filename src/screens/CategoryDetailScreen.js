import React, {Component} from 'react';
import {
  ImageBackground,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import Header from '../components/HeaderComponents/Header';
import NavigationService from '../navigation/NavigationService';
import CategoryFilterBottomSheet from '../components/CategoryFilterBottomSheet';

import {FlatGrid} from 'react-native-super-grid';
import AntDesign from 'react-native-vector-icons/AntDesign';
import RBSheet from 'react-native-raw-bottom-sheet';

const Category_Data = [
  {
    id: 1,
    image: require('../Assets/CategorySliders/Rectangle98.png'),
    name: 'DILLINGER',
    color: 'Colourblock Crew Shirt',
    price: 'S$ 48',
    underline_price: 'S$ 50',
  },
  {
    id: 2,
    image: require('../Assets/CategorySliders/Rectangle99.png'),
    name: 'CROS SHOES',
    color: 'Lite Ride Clogs Slingback',
    price: 'S$ 28',
    underline_price: 'S$ 30',
  },
  {
    id: 3,
    image: require('../Assets/CategorySliders/Rectangle100.png'),
    name: 'DILLINGER',
    color: 'Colourblock Crew Shirt',
    price: 'S$ 48',
    underline_price: 'S$ 50',
  },
  {
    id: 4,
    image: require('../Assets/CategorySliders/Rectangle101.png'),
    name: 'DILLINGER',
    color: 'Colourblock Crew Shirt',
    price: 'S$ 48',
    underline_price: 'S$ 50',
  },
  {
    id: 5,
    image: require('../Assets/CategorySliders/Rectangle99.png'),
    name: 'CROS SHOES',
    color: 'Lite Ride Clogs Slingback',
    price: 'S$ 28',
    underline_price: 'S$ 30',
  },
  {
    id: 6,
    image: require('../Assets/CategorySliders/Rectangle100.png'),
    name: 'DILLINGER',
    color: 'Colourblock Crew Shirt',
    price: 'S$ 48',
    underline_price: 'S$ 50',
  },
  {
    id: 7,
    image: require('../Assets/CategorySliders/Rectangle101.png'),
    name: 'DILLINGER',
    color: 'Colourblock Crew Shirt',
    price: 'S$ 48',
    underline_price: 'S$ 50',
  },
];

const Sort_Options = [
  {id: 1, name: 'New Collection'},
  {id: 2, name: 'Recommended'},
  {id: 3, name: 'Start Lowest Price'},
  {id: 4, name: 'Start Highest Price'},
  {id: 5, name: 'Discount'},
];

export default class CategoryDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.refRBSheet = React.createRef();
    this.refFilterRBSheet = React.createRef();
    this.state = {radioIndexAddress: 0};
  }

  componentDidMount = () => {
    console.log('Mounted Category_Detail Screen');
  };

  componentWillUnmount() {
    console.log('UnMounted Category_Detail Screen');
    this.setState = (state, callback) => {
      return;
    };
  }

  render() {
    return (
      <ScreenWrapper>
        <Header withCategoryIcon withSearch withHeart />
        <FlatGrid
          showsVerticalScrollIndicator={false}
          style={{marginHorizontal: 10}}
          ListHeaderComponent={
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                margin: 10,
                marginTop: 0,
              }}>
              <View>
                <Text style={{fontFamily: 'SourceSansPro-Bold', fontSize: 18}}>
                  Mens
                </Text>
                <Text
                  style={{
                    fontSize: 10,
                    color: 'rgba(0, 0, 0, 0.5)',
                    fontFamily: 'Montserrat-Medium',
                  }}>
                  27633 Products
                </Text>
              </View>

              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity
                  onPress={() => this.refRBSheet.current.open()}
                  style={{marginRight: 10}}>
                  <Image
                    source={require('../Assets/App_Icons/order.png')}
                    style={{height: 20, width: 20}}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.refFilterRBSheet.current.open()}>
                  <Image
                    source={require('../Assets/App_Icons/bi_filter.png')}
                    style={{height: 20, width: 20}}
                  />
                </TouchableOpacity>
              </View>
            </View>
          }
          data={Category_Data}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                key={index}
                activeOpacity={0.9}
                onPress={() => NavigationService.navigate('AddBagScreen')}>
                <ImageBackground
                  borderRadius={10}
                  source={item.image}
                  style={{width: '100%', height: 210}}>
                  <View style={{flex: 1, justifyContent: 'flex-end'}}>
                    <TouchableOpacity
                      style={{
                        position: 'absolute',
                        right: 10,
                        top: 5,
                        backgroundColor: 'white',
                        borderRadius: 20,
                        padding: 5,
                      }}>
                      <AntDesign name="hearto" color="black" size={12} />
                    </TouchableOpacity>

                    <View style={{margin: 10}}>
                      <Text
                        style={{
                          color: 'white',
                          fontSize: 14,
                          fontFamily: 'Montserrat-SemiBold',
                        }}>
                        {item.name}
                      </Text>
                      <Text
                        style={{
                          color: 'white',
                          fontSize: 10,
                          fontFamily: 'Montserrat-Medium',
                        }}>
                        {item.color}
                      </Text>

                      <Text
                        style={{
                          color: 'white',
                          fontSize: 14,
                          fontFamily: 'Montserrat-SemiBold',
                        }}>
                        {item.price}{' '}
                        <Text
                          style={{
                            fontSize: 8,
                            textDecorationLine: 'line-through',
                            fontFamily: 'Montserrat-Medium',
                          }}>
                          {item.underline_price}
                        </Text>
                      </Text>
                    </View>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            );
          }}
        />

        {/* ************************************ Sort Bottom Sheet *********************************** */}
        <RBSheet
          animationType="fade"
          ref={this.refRBSheet}
          closeOnDragDown={true}
          openDuration={200}
          customStyles={{
            container: {
              height: 300,
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              justifyContent: 'center',
              // alignItems: 'center',
            },
            draggableIcon: {
              backgroundColor: '#7F7F7F',
            },
          }}>
          <View style={{flex: 1}}>
            <Text
              style={{
                fontSize: 18,
                fontFamily: 'Montserrat-Medium',
                textAlign: 'center',
              }}>
              Sort By
            </Text>
            {Sort_Options.map((item, index) => {
              return (
                <View
                  key={index}
                  style={{
                    marginVertical: 10,
                    marginTop: index > 0 ? 10 : 20,
                    marginHorizontal: 20,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => this.setState({radioIndexAddress: index})}
                    style={{
                      padding: 2,
                      borderColor: 'black',
                      borderWidth: 1.5,
                      borderRadius: 10,
                    }}>
                    {this.state.radioIndexAddress == index ? (
                      <View
                        style={{
                          backgroundColor: 'black',
                          padding: 5,
                          borderRadius: 5,
                        }}></View>
                    ) : (
                      <View
                        style={{
                          backgroundColor: 'transparent',
                          padding: 5,
                          borderRadius: 5,
                        }}></View>
                    )}
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: 'Montserrat-Medium',
                      marginLeft: 10,
                    }}>
                    {item.name}
                  </Text>
                </View>
              );
            })}
          </View>
        </RBSheet>
        {/* ************************************ Sort Bottom Sheet *********************************** */}

        {/* ************************************ Filter Bottom Sheet *********************************** */}
        <RBSheet
          animationType="fade"
          ref={this.refFilterRBSheet}
          closeOnDragDown={true}
          openDuration={200}
          customStyles={{
            container: {
              height: 700,
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              justifyContent: 'center',
              // alignItems: 'center',
            },
            draggableIcon: {
              backgroundColor: '#7F7F7F',
            },
          }}>
          <CategoryFilterBottomSheet />
        </RBSheet>
        {/* ************************************ Filter Bottom Sheet *********************************** */}
      </ScreenWrapper>
    );
  }
}

const styles = StyleSheet.create({});
