import React, {useEffect, useRef} from 'react';
import {
  Animated,
  PanResponder,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';

const leftButtons = [''];
const rightButtons = ['btn1'];
const btnWidth = 60;
const offset = [-btnWidth * rightButtons.length, 0];

export default function SwipableItem({data, navigation}) {
  let panValue = {x: 0, y: 0};
  let isOpenState = useRef(false).current;
  const pan = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
  const itemTranslate = pan.x.interpolate({
    inputRange: offset,
    outputRange: offset,
    extrapolate: 'clamp',
  });

  const translateRightBtns = pan.x.interpolate({
    inputRange: [0, rightButtons.length * btnWidth],
    outputRange: [0, rightButtons.length * btnWidth],
    extrapolate: 'clamp',
  });

  useEffect(() => {
    pan.addListener(value => {
      panValue = value;
    });
  }, []);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => false,
      onMoveShouldSetPanResponderCapture: (e, g) => Math.abs(g.dx) > 10,
      onMoveShouldSetPanResponder: (e, g) => false,
      onPanResponderGrant: () => {
        pan.setOffset({x: panValue.x, y: panValue.y});
        pan.setValue({x: 0, y: 0});
      },
      onPanResponderMove: Animated.event([null, {dx: pan.x}], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: (e, g) => {
        pan.flattenOffset();
        // if (g.vx > 0.5 || g.dx > (btnWidth * leftButtons.length) / 2) {
        //   if (isOpenState && g.dx > 0) {
        //     reset();
        //     return;
        //   }
        //   move(false);
        //   return;
        // }
        if (g.vx < -0.5 || g.dx < (-btnWidth * rightButtons.length) / 2) {
          if (isOpenState && g.dx < 0) {
            reset();
            return;
          }
          move(true);
          return;
        }
        reset();
      },
      onPanResponderTerminate: () => {
        reset();
      },
    }),
  ).current;
  const reset = () => {
    isOpenState = false;
    Animated.spring(pan, {
      toValue: {x: 0, y: 0},
      useNativeDriver: true,
      bounciness: 0,
    }).start();
  };
  const move = toLeft => {
    isOpenState = true;
    Animated.spring(pan, {
      toValue: {
        x: toLeft ? -btnWidth * rightButtons.length : null,
        y: 0,
      },
      useNativeDriver: true,
      bounciness: 0,
    }).start();
  };
  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.btnContainer,
          {
            transform: [{translateX: translateRightBtns}],
            alignSelf: 'flex-end',
          },
        ]}>
        <TouchableOpacity onPress={reset} style={[styles.btn]}>
          <Image
            source={require('../Assets/recycleBin.png')}
            style={{height: 30, width: 30}}
          />
        </TouchableOpacity>
      </Animated.View>
      <Animated.View
        style={[styles.item, {transform: [{translateX: itemTranslate}]}]}
        {...panResponder.panHandlers}>
        <View
          style={{
            marginHorizontal: 15,
            paddingVertical: 8,
            marginTop: 10,
            backgroundColor: '#FFFFFF',
            padding: 5,
            borderRadius: 5,
            elevation: 2,
          }}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                style={{
                  borderRadius: 5,
                  height: 80,
                  width: 90,
                  alignSelf: 'center',
                }}
                source={data.image}
              />

              <View
                style={{
                  paddingLeft: 5,
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'Montserrat-SemiBold',
                  }}>
                  {data.name}
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: 'Montserrat-Regular',
                  }}>
                  {data.price}
                </Text>

                <View
                  style={{
                    marginTop: 10,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    elevation: 10,
                    borderRadius: 5,
                  }}>
                  <TouchableOpacity
                    style={{
                      padding: 10,
                      paddingTop: 0,
                      paddingBottom: 0,
                    }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontFamily: 'Montserrat-SemiBold',
                      }}>
                      {'-'}
                    </Text>
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontSize: 12,
                      fontFamily: 'Montserrat-SemiBold',
                    }}>
                    {'1'}
                  </Text>
                  <TouchableOpacity
                    style={{
                      padding: 10,
                      paddingTop: 0,
                      paddingBottom: 0,
                    }}>
                    <Text style={{fontSize: 16}}>{'+'}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
              <Text style={{fontSize: 14, fontFamily: 'Montserrat-Medium'}}>
                {data.rate}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: '100%',
    marginBottom: 3,
  },
  item: {
    height: '100%',
    width: '100%',
    backgroundColor: 'transparent',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  txt: {
    color: '#fff',
    letterSpacing: 1,
  },
  btnContainer: {
    height: '100%',
    position: 'absolute',
    flexDirection: 'row',
  },
  btn: {
    height: '90%',
    marginRight: 15,
    marginTop: 12,
    width: btnWidth,
    backgroundColor: '#7A7A7C',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderRadius: 10,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
