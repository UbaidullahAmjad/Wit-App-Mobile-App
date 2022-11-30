import React, {useState, useCallback, useEffect} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {STATUSBAR_HEIGHT} from '../constants';
import NavigationService from '../navigation/NavigationService';
import {Menu, MenuItem, MenuDivider} from 'react-native-material-menu';

const chat_data = [
  {id: 1, name: 'Hi John, how you'},
  {id: 2, name: 'how you'},
  {id: 3, name: 'how you'},
  {id: 4, name: 'Hi John, how you'},
  {id: 5, name: 'Hi John, how you'},
  {id: 6, name: 'how you'},
  {id: 7, name: 'how you'},
  {id: 8, name: 'Hi John, how you'},
  {id: 9, name: 'how you'},
  {id: 10, name: 'how you'},
  {id: 11, name: 'how you'},
  {id: 12, name: 'Hi John, how you'},
];

export default function Example(props) {
  const [messages, setMessages] = useState([]);
  const [visible, setVisible] = useState(false);

  const hideMenu = () => {
    setVisible(false);
  };

  const showMenu = () => {
    setVisible(true);
  };

  useEffect(() => {
    console.log('Chat_Box Screen');
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          paddingTop: STATUSBAR_HEIGHT,
          paddingHorizontal: 10,
          paddingBottom: 15,
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{padding: 5}}
            onPress={() => props.navigation.goBack()}>
            <Image
              source={require('../Assets/App_Icons/arrow-left.png')}
              style={{height: 20, width: 20}}
            />
          </TouchableOpacity>

          <View style={{flexDirection: 'row', marginLeft: 5}}>
            <Image
              source={require('../Assets/ChatImages/Ellipse1.png')}
              style={{height: 50, width: 50}}
            />
            <View
              style={{
                flexDirection: 'column',
                marginLeft: 10,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: 'Montserrat-Medium',
                }}>
                {'John Smith'}
              </Text>

              <Text
                style={{
                  color: 'black',
                  fontSize: 12,
                  fontFamily: 'Montserrat-Regular',
                }}>
                {'Online'}
              </Text>
            </View>
          </View>
        </View>

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={{padding: 7}}
            onPress={() => NavigationService.navigate('VideoScreen')}>
            <Image
              source={require('../Assets/Video.png')}
              style={{height: 20, width: 20}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{padding: 7}}
            onPress={() => NavigationService.navigate('AudiCallScreen')}>
            <Image
              source={require('../Assets/Audio.png')}
              style={{height: 20, width: 20}}
            />
          </TouchableOpacity>

          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Menu
              visible={visible}
              anchor={
                <TouchableOpacity
                  onPress={() => {
                    showMenu();
                  }}
                  style={{padding: 7}}>
                  <Image
                    source={require('../Assets/More.png')}
                    style={{height: 20, width: 20}}
                  />
                </TouchableOpacity>
              }
              onRequestClose={hideMenu}>
              <MenuItem
                textStyle={{
                  fontSize: 14,
                  fontFamily: 'Montserrat-Medium',
                }}
                onPress={() => {
                  hideMenu();
                }}>
                {'View Contact'}
              </MenuItem>

              <MenuItem
                textStyle={{
                  fontSize: 14,
                  fontFamily: 'Montserrat-Medium',
                }}
                onPress={() => {
                  hideMenu();
                }}>
                {'Search'}
              </MenuItem>

              <MenuItem
                textStyle={{
                  fontSize: 14,
                  fontFamily: 'Montserrat-Medium',
                }}
                onPress={() => {
                  hideMenu();
                }}>
                {'Block'}
              </MenuItem>
            </Menu>
          </View>
        </View>
      </View>

      <GiftedChat
        renderMessage={() => {
          return (
            <ScrollView style={{paddingVertical: 10}}>
              {chat_data.map((item, index) => {
                return (
                  <View key={index}>
                    {index % 2 == 0 ? (
                      <ImageBackground
                        source={require('../Assets/ChatBoxImages/gray_bx_color.png')}
                        style={{
                          height: 60,
                          width: 200,
                          marginHorizontal: 10,
                        }}>
                        <Text
                          style={{
                            margin: 14,
                            fontFamily: 'Montserrat-Regular',
                          }}>
                          Hi John, how you
                        </Text>
                        <Text
                          style={{
                            position: 'absolute',
                            bottom: 20,
                            right: 15,
                            fontSize: 8,
                            fontFamily: 'Montserrat-Regular',
                          }}>
                          {'12:30 pm'}
                        </Text>
                      </ImageBackground>
                    ) : (
                      <ImageBackground
                        source={require('../Assets/ChatBoxImages/White_Box_color.png')}
                        style={{
                          height: 60,
                          width: 220,
                          marginHorizontal: 10,
                          alignSelf: 'flex-end',
                        }}>
                        <Text
                          style={{
                            margin: 10,
                            fontFamily: 'Montserrat-Regular',
                          }}>
                          {item.name}
                        </Text>
                        <Text
                          style={{
                            position: 'absolute',
                            bottom: 20,
                            right: 15,
                            fontSize: 8,
                            fontFamily: 'Montserrat-Regular',
                          }}>
                          {'12:30 pm'}
                        </Text>
                      </ImageBackground>
                    )}
                  </View>
                );
              })}
            </ScrollView>
          );
        }}
        renderComposer={() => {
          return (
            <View
              style={{
                backgroundColor: 'white',
                flexDirection: 'row',
                alignItems: 'center',
                height: 60,
              }}>
              <View
                style={{
                  backgroundColor: '#EAEAEA',
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '72%',
                  marginVertical: 5,
                  marginHorizontal: 10,
                  borderRadius: 10,
                }}>
                <TouchableOpacity style={{marginLeft: 5}}>
                  <Image
                    source={require('../Assets/ChatBoxImages/Smile.png')}
                    style={{tintColor: 'black', height: 25, width: 25}}
                  />
                </TouchableOpacity>
                <TextInput
                  placeholder={'Message'}
                  placeholderTextColor={'black'}
                  style={{
                    width: '70%',
                    height: 40,
                    color: 'black',
                    fontFamily: 'Montserrat-Regular',
                    fontSize: 14,
                  }}
                />
                <TouchableOpacity style={{marginLeft: 10}}>
                  <Image
                    source={require('../Assets/ChatBoxImages/camera.png')}
                    style={{tintColor: 'black', height: 25, width: 25}}
                  />
                </TouchableOpacity>
              </View>

              <TouchableOpacity style={{marginLeft: 5}}>
                <Image
                  source={require('../Assets/ChatBoxImages/Media.png')}
                  style={{tintColor: 'black', height: 26, width: 26}}
                />
              </TouchableOpacity>

              <TouchableOpacity style={{marginLeft: 15}}>
                <Image
                  source={require('../Assets/ChatBoxImages/audio.png')}
                  style={{tintColor: 'black', height: 23, width: 23}}
                />
              </TouchableOpacity>
            </View>
          );
        }}
        placeholder={'Message'}
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    </>
  );
}
