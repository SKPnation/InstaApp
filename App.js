import React, { Component } from 'react';
import { Text, View, ImageBackground, Image, ScrollView } from 'react-native';
import Dimensions from 'Dimensions';

//Import Custom Components Here
import LoginButton from './src/components/LoginButton';


//this code will give us the height and the width of
const windowSize = Dimensions.get('window');

//size definitions HERE
const standardComponentWidth = (0.82 * windowSize.width);

const colors = {
  facebook: 'rgb(59, 89, 152)',
  text: 'rgba(255, 255, 255, 255, 0.7)',
  socialMediaButtonBorderColor: 'rgba(255, 255, 255, 0.35)'
  //rgb=red,green,blue: facebook standard color
}

const sizes = {
  buttonHeight: 45,
  pageFontSize: 12,
  borderWidth: 0.8,
  borderRadius: 5
}

 class App extends Component {

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
export default App
