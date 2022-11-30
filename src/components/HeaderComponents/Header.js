import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, NativeModules} from 'react-native';
import {
  SEARCH_ICON,
  NOTIFICATION_ICON,
  STATUSBAR_HEIGHT,
} from '../../constants';
import {withNavigation} from 'react-navigation';
import HeaderProfileIcon from './HeaderProfileIcon';
import NavigationService from '../../navigation/NavigationService';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {Menu, MenuItem, MenuDivider} from 'react-native-material-menu';

const {UIManager} = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {visible: false};
  }

  hideMenu = () => {
    this.setState({visible: false});
  };

  showMenu = () => this.setState({visible: true});

  render() {
    const {
      bag,
      withBackArrow,
      withSearch,
      withcrossIcon,
      onBackPress,
      withLogo,
      navigation,
      withNotification,
      withCategoryIcon,
      title,
      Reset,
      withCategoryIconFilter,
      withHeart,
      withShare,
      withMore,
      Add_new,
    } = this.props;
    return (
      <View
        style={{
          flexDirection: 'row',
          paddingTop: STATUSBAR_HEIGHT,
          paddingHorizontal: 20,
          paddingBottom: 15,
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'white',
          borderBottomColor: '#F5F5F8',
          borderBottomWidth: 2,
        }}>
        {withCategoryIcon ? (
          <TouchableOpacity
            onPress={() => NavigationService.navigate('CategoryScreen')}>
            <Image
              source={require('../../Assets/HeaderImages/bx_bx-menu-alt-left.png')}
              style={{height: 25, width: 25}}
            />
          </TouchableOpacity>
        ) : withCategoryIconFilter ? (
          <TouchableOpacity
            onPress={() => NavigationService.navigate('JobDetailScreen')}>
            <Image
              source={require('../../Assets/HeaderImages/bx_bx-menu-alt-left.png')}
              style={{height: 25, width: 25}}
            />
          </TouchableOpacity>
        ) : withcrossIcon ? (
          <Entypo
            onPress={() => navigation.goBack()}
            name="cross"
            color="black"
            size={20}
          />
        ) : withBackArrow ? (
          <TouchableOpacity
            onPress={
              bag
                ? () => NavigationService.navigate('HomeScreen')
                : () => navigation.goBack()
            }>
            <Image
              source={require('../../Assets/App_Icons/arrow-left.png')}
              style={{height: 25, width: 25}}
            />
          </TouchableOpacity>
        ) : (
          <View></View>
        )}

        {withLogo ? (
          <Text
            style={{
              alignSelf: 'center',
              marginLeft: 10,
              fontSize: 20,
              color: 'black',
              fontFamily: 'Montserrat-SemiBold',
            }}>
            {title}
          </Text>
        ) : null}

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {withSearch && (
            <View>
              <HeaderProfileIcon image={SEARCH_ICON} navigation={navigation} />
            </View>
          )}
          {withNotification ? (
            <HeaderProfileIcon
              image={NOTIFICATION_ICON}
              screen={'NotificationScreen'}
              navigation={navigation}
            />
          ) : withHeart ? (
            <TouchableOpacity style={{marginLeft: 20}}>
              <AntDesign name="hearto" color="black" size={20} />
            </TouchableOpacity>
          ) : null}

          {withShare && (
            <TouchableOpacity style={{marginLeft: 20}}>
              <Fontisto name="share-a" color="black" size={16} />
            </TouchableOpacity>
          )}

          {Reset && (
            <TouchableOpacity>
              <Text style={{fontSize: 14, fontFamily: 'Montserrat-Medium'}}>
                Reset
              </Text>
            </TouchableOpacity>
          )}

          {Add_new && (
            <TouchableOpacity>
              <Text style={{fontSize: 14, fontFamily: 'Montserrat-Medium'}}>
                Add new
              </Text>
            </TouchableOpacity>
          )}

          {withMore && (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Menu
                visible={this.state.visible}
                anchor={
                  <TouchableOpacity
                    onPress={() => {
                      this.showMenu();
                    }}>
                    <Fontisto name="more-v-a" color="black" size={16} />
                  </TouchableOpacity>
                }
                onRequestClose={this.hideMenu}>
                <MenuItem
                  textStyle={{
                    fontSize: 14,
                    fontFamily: 'Montserrat-Regular',
                  }}
                  onPress={() => {
                    this.hideMenu();
                  }}>
                  {'Share Via Chat'}
                </MenuItem>

                <MenuItem
                  textStyle={{
                    fontSize: 14,
                    fontFamily: 'Montserrat-Regular',
                  }}
                  onPress={() => {
                    this.hideMenu();
                  }}>
                  {'Share Job'}
                </MenuItem>
              </Menu>
            </View>
          )}
        </View>
      </View>
    );
  }
}

export default withNavigation(Header);
