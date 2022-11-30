import React from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';

const HeaderProfileIcon = props => {
  return (
    <>
      <TouchableOpacity
        onPress={
          props.screen
            ? () => {
                props.navigation.navigate(props.screen);
              }
            : () => alert('Search')
        }>
        <Image
          source={props.image}
          style={{
            marginLeft: 20,
            tintColor: 'black',
            height: props.image == 'SEARCH_ICON' ? 16 : 20,
            width: 18.9,
          }}
        />
      </TouchableOpacity>
    </>
  );
};

export default withNavigation(HeaderProfileIcon);
