import React, {Component} from 'react';
import {SafeAreaView, BackHandler, ToastAndroid} from 'react-native';
import * as colors from '../styles/colors';
import LinearGradient from 'react-native-linear-gradient';
import {withNavigation} from 'react-navigation';

class ScreenWrapper extends Component {
  constructor(props) {
    super(props);
    if (props.doubleTapExit) {
      try {
        this.backClickCount = 0;
        this.focusListenerDidFocus = props.navigation.addListener(
          'willFocus',
          () => {
            this.backHandler = BackHandler.addEventListener(
              'hardwareBackPress',
              () => {
                if (this.backClickCount == 0) {
                  ToastAndroid.show(
                    'Press back again to exit',
                    ToastAndroid.SHORT,
                  );
                  this.backClickCount = this.backClickCount + 1;
                  setTimeout(() => {
                    this.backClickCount = 0;
                  }, 1000);
                  return true;
                }
              },
            );
          },
        );

        this.focusListenerDidBlur = props.navigation.addListener(
          'willBlur',
          () => {
            if (this.backHandler && this.backHandler.remove)
              this.backHandler.remove();
          },
        );
      } catch (error) {
        console.log(error);
      }
    }
  }

  componentWillUnmount() {
    if (this.backHandler && this.backHandler.remove) this.backHandler.remove();
  }

  render() {
    let props = this.props;
    if (props.colors) {
      return (
        <LinearGradient
          colors={props.colors}
          style={{flex: 1, backgroundColor: 'grey'}}>
          <SafeAreaView
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              ...props.style,
            }}>
            {props.children}
          </SafeAreaView>
        </LinearGradient>
      );
    }
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: props.white_Color ? '#ffffff' : '#F5F5F8',
          ...props.style,
        }}>
        {props.children}
      </SafeAreaView>
    );
  }
}

export default withNavigation(ScreenWrapper);
