import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
  Platform,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import { Header } from 'react-native-elements';
export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.androidSafeArea} />
        <ImageBackground
          source={require('../assets/iss_bg.jpg')}
          style={{ height: '100%' }}>
          <View>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 40,
                color: 'white',
                alignSelf: 'center',
              }}>
              ISS Tracker App
            </Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Location');
              }}
              style={{
                justifyContent: 'center',
                alighItem: 'center',
                flex: 0.2,
                marginLeft: 10,
                marginRight: 10,
                borderRadius: 10,
                marginTop: 20,
                backgroundColor: 'gray',
                paddingTop: 50,
                paddingBottom: 50,
              }}>
              <Image
                source={require('../assets/iss_icon.png')}
                style={{
                  position: 'absolute',
                  height: 150,
                  width: 150,
                  resizeMode: 'contain',
                  top: -20,
                }}></Image>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 20,
                  paddingLeft: 170,
                }}>
                ISS Location
              </Text>
              <Text
                style={{
                  paddingLeft: 170,
                  color: 'blue',
                }}>
                {'Know More--->'}
              </Text>
              <Text
                style={{
                  position: 'absolute',
                  fontSize: 150,
                  color: 'rgba(183, 183, 183, 0.6)',
                  marginTop: -20,
                  right: 5,
                }}>
                1
              </Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Meteor');
              }}
              style={{
                justifyContent: 'center',
                alighItem: 'center',
                flex: 0.2,
                marginLeft: 10,
                marginRight: 10,
                borderRadius: 10,
                marginTop: 5,
                backgroundColor: 'gray',
                paddingTop: 50,
                paddingBottom: 50,
              }}>
              <Image
                source={require('../assets/meteor_icon.png')}
                style={{
                  position: 'absolute',
                  height: 150,
                  width: 150,
                  resizeMode: 'contain',
                  top: -20,
                }}></Image>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 20,
                  paddingLeft: 170,
                }}>
                Meteor
              </Text>
              <Text
                style={{
                  paddingLeft: 170,
                  color: 'blue',
                }}>
                {'Know More--->'}
              </Text>
              <Text
                style={{
                  position: 'absolute',
                  fontSize: 150,
                  color: 'rgba(183, 183, 183, 0.6)',
                  marginTop: -20,
                  right: 5,
                }}>
                2
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  androidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  header: {
    fontWeight: 'bold',
  },
});
