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

export default class AccountScreen extends Component {
  componentDidMount = () => {
    console.log('Mounted Account Screen');
  };

  componentWillUnmount() {
    console.log('UnMounted Account Screen');
    this.setState = (state, callback) => {
      return;
    };
  }

  render() {
    return (
      <ScreenWrapper doubleTapExit>
        <Header withLogo title="Account" navigation={this.props.navigation} />

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{flex: 1}}>
            <TouchableOpacity
              onPress={() => NavigationService.navigate('Profile_Screen')}
              activeOpacity={0.5}
              style={styles.WholeView}>
              <Text style={styles.text}>{'My Profile'}</Text>
              <AntDesign name="right" size={16} color="black" />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => NavigationService.navigate('ShoppingOrder')}
              activeOpacity={0.5}
              style={styles.WholeView}>
              <Text style={styles.text}>{'Shopping Order'}</Text>
              <AntDesign name="right" size={16} color="black" />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => NavigationService.navigate('AddressScreen')}
              activeOpacity={0.5}
              style={styles.WholeView}>
              <Text style={styles.text}>{'Address'}</Text>
              <AntDesign name="right" size={16} color="black" />
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.5} style={styles.WholeView}>
              <Text style={styles.text}>{'Chat Settings'}</Text>
              <AntDesign name="right" size={16} color="black" />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => NavigationService.navigate('JobSettingScreen')}
              activeOpacity={0.5}
              style={styles.WholeView}>
              <Text style={styles.text}>{'Job Settings'}</Text>
              <AntDesign name="right" size={16} color="black" />
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.5} style={styles.WholeView}>
              <Text style={styles.text}>{'Terms & Condition'}</Text>
              <AntDesign name="right" size={16} color="black" />
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.5} style={styles.WholeView}>
              <Text style={styles.text}>{'Help & Support'}</Text>
              <AntDesign name="right" size={16} color="black" />
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.5} style={styles.WholeView}>
              <Text style={styles.text}>{'About'}</Text>
              <AntDesign name="right" size={16} color="black" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity activeOpacity={0.7} style={styles.LogOut_Button}>
            <Text style={styles.LogOut_Button_Text}>Logout</Text>
          </TouchableOpacity>
        </ScrollView>
      </ScreenWrapper>
    );
  }
}

const styles = StyleSheet.create({
  WholeView: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderRadius: 5,
  },
  text: {
    fontSize: 18,
    fontFamily: 'Montserrat-Medium',
  },
  LogOut_Button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20%',
    marginBottom: '20%',
  },
  LogOut_Button_Text: {
    backgroundColor: 'black',
    color: 'white',
    width: '60%',
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    padding: 5,
    borderRadius: 5,
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
  },
});
