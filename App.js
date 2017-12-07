import React, { Component } from 'react';
import { Text, View, ImageBackground, Image, ScrollView } from 'react-native';
import Dimensions from 'Dimensions';

//this code will give us the height and the width of
const windowSize = Dimensions.get('window');

export default class App extends Component {

  constructor(props){
    super(props);

    this.state = {

    }

  }

  loginScreenComponent = () => {
    return(
      <ImageBackground
        style={viewStyles.container}
        resizeMode={'cover'}
        source={require('./src/images/Miaka.jpg')}
      >

      <ScrollView style={viewStyles.scrollViewStyle}>
        <Text></Text>

        <Image
          style={viewStyles.instagramLogo}
          resizeMode={'contain'}
          source={require('./src/images/instagram-text-logo.png')}
        />

      </ScrollView>

      </ImageBackground>
    );
  }



  render() {
    return (
      this.loginScreenComponent()
    );
  }
}

const viewStyles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  instagramLogo: {
    width: (0.45 * windowSize.width),
    height: (0.15 * windowSize.height),
    marginBottom: 25,
    alignSelf: 'center'
  },

  scrollViewStyle: {
    paddingTop: '35%'
  }
};

//uigradients.com for soft background images
