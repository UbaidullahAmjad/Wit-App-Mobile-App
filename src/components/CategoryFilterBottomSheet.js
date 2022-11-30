import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const Filter_Brand_Options = [
  {
    id: 1,
    name: 'Adidas',
  },
  {
    id: 2,
    name: 'Nike',
  },
  {
    id: 3,
    name: 'D&G',
  },
  {
    id: 4,
    name: 'Reebok',
  },
];

const Filter_Rating_Options = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
];

const Filter_Size_Options = [
  {
    id: 1,
    name: 'S',
  },
  {
    id: 2,
    name: 'L',
  },
  {
    id: 3,
    name: 'M',
  },
  {
    id: 4,
    name: 'XL',
  },
  {
    id: 5,
    name: '2XL',
  },
  {
    id: 6,
    name: '3XL',
  },
];

const Filter_Color_Options = [
  {
    id: 1,
    color: '#FF0000',
  },
  {
    id: 2,
    color: '#000000',
  },
  {
    id: 3,
    color: '#FFD600',
  },
  {
    id: 4,
    color: '#87B409',
  },
  {
    id: 5,
    color: '#004B90',
  },
  {
    id: 6,
    color: '#A16A6A',
  },
  {
    id: 7,
    color: '#9E1EB2',
  },
  {
    id: 8,
    color: '#7DD9AD',
  },
  {
    id: 9,

    color: '#FFBC36',
  },
];

export default class CategoryDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.refFilterRBSheet = React.createRef();
    this.state = {radioIndexAddress: 0};
  }

  componentDidMount = () => {
    console.log('Mounted Category Filter Bottom Screen');
  };

  componentWillUnmount() {
    console.log('UnMounted Category Filter Bottom Screen');
    this.setState = (state, callback) => {
      return;
    };
  }

  render() {
    return (
      <ScrollView style={{flex: 1, paddingHorizontal: 20}}>
        <Text
          style={{
            fontSize: 18,
            fontFamily: 'Montserrat-Medium',
            textAlign: 'center',
          }}>
          Filter
        </Text>
        <View style={{paddingVertical: 8}}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'Montserrat-Medium',
              margin: 5,
            }}>
            Brand
          </Text>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignSelf: 'center',
            }}>
            {Filter_Brand_Options.map((item, index) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.8}
                  key={index}
                  style={{
                    borderRadius: 5,
                    borderColor: '#EEEEEE',
                    borderWidth: 2,
                    marginLeft: '1%',
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    marginTop: '2%',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      marginLeft: 5,
                      fontSize: 16,
                      fontFamily: 'Montserrat-Regular',
                    }}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        <View style={{paddingVertical: 15}}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'Montserrat-Medium',
              margin: 5,
            }}>
            Rating
          </Text>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignSelf: 'center',
            }}>
            {Filter_Rating_Options.map((item, index) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.8}
                  key={index}
                  style={{
                    marginLeft: '2%',
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    marginTop: '2%',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      marginLeft: 5,
                      fontSize: 18,
                      fontFamily: 'Montserrat-Medium',
                    }}>
                    {item.id}
                    <Text style={{color: '#C4C4C4'}}>{'★'} </Text>
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        <View style={{paddingVertical: 15}}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'Montserrat-Medium',
              margin: 5,
            }}>
            Price
          </Text>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <MultiSlider
              values={[50, 250]}
              min={0}
              max={350}
              step={1}
              touchDimensions={{height: 20, width: 20}}
              //   enableLabel={true}
              isMarkersSeparated={true}
              customMarkerLeft={e => {
                return (
                  <>
                    <View
                      style={{
                        padding: 7,
                        borderRadius: 20,
                        marginTop: 25,
                        backgroundColor: 'black',
                      }}></View>
                    <Text
                      style={{
                        marginTop: 5,
                        fontSize: 16,
                        fontFamily: 'Montserrat-Regular',
                      }}>
                      {'$ '}
                      {e.currentValue}
                    </Text>
                  </>
                );
              }}
              customMarkerRight={e => {
                return (
                  <>
                    <View
                      style={{
                        padding: 7,
                        borderRadius: 20,
                        marginTop: 25,
                        backgroundColor: 'black',
                      }}></View>
                    <Text
                      style={{
                        marginTop: 5,
                        fontSize: 16,
                        fontFamily: 'Montserrat-Regular',
                      }}>
                      {'$ '}
                      {e.currentValue}
                    </Text>
                  </>
                );
              }}
              //   onValuesChange={val => {
              //     console.log('Range Values', val);
              //     this.setState({lowRangeValue: val[0]});
              //     this.setState({highRangeValue: val[1]});
              //   }}
              sliderLength={260}
              selectedStyle={{backgroundColor: '#000000'}}
              trackStyle={{backgroundColor: 'silver'}}
              markerStyle={{
                height: 20,
                width: 20,
                backgroundColor: '#000000',
              }}
            />
          </View>
        </View>

        <View style={{paddingVertical: 15}}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'Montserrat-Medium',
              margin: 5,
            }}>
            Size
          </Text>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignSelf: 'center',
            }}>
            {Filter_Size_Options.map((item, index) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.8}
                  key={index}
                  style={{
                    borderRadius: 5,
                    borderColor: '#EEEEEE',
                    borderWidth: 2,
                    marginLeft: index == '0' ? '2%' : '3%',
                    paddingHorizontal: 8,
                    paddingVertical: 5,
                    marginTop: '2%',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      marginLeft: 5,
                      fontSize: 16,
                      fontFamily: 'Montserrat-Regular',
                    }}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        <View style={{paddingVertical: 15}}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'Montserrat-Medium',
              margin: 5,
            }}>
            Color
          </Text>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignSelf: 'center',
            }}>
            {Filter_Color_Options.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.Color_box,
                    {
                      backgroundColor: item.color,
                      marginLeft: index == '0' ? '2%' : '5%',
                    },
                  ]}></TouchableOpacity>
              );
            })}
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            paddingVertical: '10%',
          }}>
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.ApplyFilterButton}>
            <Text style={[styles.ApplyFilterText, {color: 'black'}]}>
              Reset
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.6}
            style={[styles.ApplyFilterButton, {backgroundColor: 'black'}]}>
            <Text
              style={[
                styles.ApplyFilterText,
                {color: 'white', marginLeft: 10},
              ]}>
              Apply Filter
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  Color_box: {
    padding: 10,
    borderRadius: 10,
    marginTop: '2%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  ApplyFilterText: {
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
  },
  ApplyFilterButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: '46%',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
  },
});
