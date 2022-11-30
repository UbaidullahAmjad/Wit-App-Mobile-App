import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';

import ScreenWrapper from '../components/ScreenWrapper';
import Header from '../components/HeaderComponents/Header';

const Bookmark_Data = [
  {
    id: 1,
    image: require('../Assets/BrandLoogoImages/Google.png'),
    name: 'Graphic Designer',
    author: 'By Ayesha kiani',
    time: '5 week ago',
  },
  {
    id: 2,
    image: require('../Assets/BrandLoogoImages/facebbok.png'),
    name: 'UI UX Designer',
    author: 'By Ayesha kiani',
    time: '1 week ago',
  },
  {
    id: 3,
    image: require('../Assets/BrandLoogoImages/Apple.png'),
    name: 'Designer',
    author: 'By Ayesha kiani',
    time: '90 day ago',
  },
  {
    id: 4,
    image: require('../Assets/BrandLoogoImages/Group19748.png'),
    name: 'UI UX Designer',
    author: 'By Ayesha kiani',
    time: '7 weeks ago',
  },
  {
    id: 5,
    image: require('../Assets/BrandLoogoImages/Apple.png'),
    name: 'Graphic Designer',
    author: 'By Ayesha kiani',
    time: '1 week ago',
  },
];

export default class SaveScreen extends Component {
  componentDidMount = () => {
    console.log('Mounted Save Screen');
  };

  componentWillUnmount() {
    console.log('UnMounted Save Screen');
    this.setState = (state, callback) => {
      return;
    };
  }

  Bookmark = (item, index) => {
    return (
      <View
        key={index}
        style={{
          backgroundColor: 'white',
          elevation: 5,
          marginTop: 10,
          borderRadius: 5,
        }}>
        <TouchableOpacity key={index} activeOpacity={0.7} style={{margin: 10}}>
          <Entypo
            onPress={() => alert('delete')}
            style={{
              alignSelf: 'flex-end',
              position: 'absolute',
              right: -5,
              padding: 5,
              top: -5,
            }}
            name="cross"
            color="black"
            size={14}
          />
          <View style={{flexDirection: 'row'}}>
            <Image source={item.image} style={{height: 25, width: 25}} />
            <View
              style={{
                flexDirection: 'column',
                width: '73%',
                marginLeft: 10,
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 16, fontFamily: 'Montserrat-Medium'}}>
                {item.name}
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  color: '#B6B6B6',
                  fontFamily: 'Montserrat-Medium',
                }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: 'black',
                  fontFamily: 'Montserrat-Medium',
                }}>
                After Effect, Illustration ,XD , Invision
              </Text>
              <View
                style={{
                  marginTop: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <EvilIcons name="location" size={14} color={'#808080'} />
                <Text
                  style={{
                    fontSize: 8,
                    color: '#808080',
                    fontFamily: 'Montserrat-Medium',
                  }}>
                  {'India'}
                </Text>
              </View>
            </View>
            <View style={{justifyContent: 'flex-end', alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 8,
                  color: '#808080',
                  fontFamily: 'Montserrat-Medium',
                }}>
                {item.time}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <ScreenWrapper>
        <Header
          withBackArrow
          withLogo
          title="Save"
          navigation={this.props.navigation}
        />

        <FlatList
          style={{paddingHorizontal: 20}}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          data={Bookmark_Data}
          renderItem={({item}, index) => this.Bookmark(item, index)}
        />
      </ScreenWrapper>
    );
  }
}

const styles = StyleSheet.create({});
