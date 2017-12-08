import React, { Component } from 'react';
import { Text, View, ImageBackground, Image, ScrollView, Linking } from 'react-native';
import Dimensions from 'Dimensions';

//Import Custom Components Here
import LoginButton from './src/components/LoginButton';
import TappableText from './src/components/TappableText';

//this code will give us the height and the width of
const windowSize = Dimensions.get('window');

//size definitions HERE
const standardComponentWidth = (0.82 * windowSize.width);

const colors = {
  facebook: 'rgb(59, 89, 152)',
  text: 'rgba(255, 255, 255, 0.7)',
  socialMediaButtonBorderColor: 'rgba(255, 255, 255, 0.35)'
}

const sizes = {
  buttonHeight: 45,
  pageFontSize: 12,
  borderWidth: 0.8,
  borderRadius: 5,
  twitterIcon: 18
}

const urls = {
  forgotInstagramLogin: 'https://www.instagram.com/accounts/password/reset',
  twitterLogin: 'https://twitter.com/login?lang=en',
  instagramSignUp: 'https://www.instagram.com/accounts/emailsignup/?hl=en',
  instagramAuthLogin: 'https://api.instagram.com/oauth/authorize/?client_id=cda6dee7d8164a868150910407962f52&redirect_uri=http://www.kaitechconsulting.com&response_type=token&scope=basic+follower_list+comments+likes',
  instagramLogout: 'https://instagram.com/accounts/logout',
  instagramBase: 'https://www.instagram.com/',
};

 class App extends Component {

  constructor(props){
    super(props);

    this.state = {

    }

  }


buttonTapped = () => {
   console.log('Button successfuly tapped');
}

loginWithTwitterComponent = () => {
   return(
     <View style={viewStyles.twitterLoginContainer}>

      <Image
        resizeMode={'contain'}
        style={viewStyles.twitterIcon}
        source={require('./src/images/icons/twitter_bird.png')}
      />

      <TappableText
        Log In With Twitter
        textStyle={[textStyles.forgotLoginDetails, textStyles.forgotLoginDetailsBold, {fontSize:12}]}
        textTapped={ () => Linking.openURL(urls.twitterLogin)}
      >
        Log In With Twitter
      </TappableText>

     </View>
   );

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

        <LoginButton
          buttonViewStyle={viewStyles.instagramLoginButtonView}
          buttonTextStyle={textStyles.instagramButtonTextStyle}
          buttonTapped={this.buttonTapped}
          touchableHighlightStyle={viewStyles.instagramTouchableHighlightStyle}
          active0pacity={0.75}
        >
          Log In (Via Instagram)
        </LoginButton>

        <LoginButton
          buttonViewStyle={[viewStyles.instagramLoginButtonView, viewStyles.facebookLoginButtonView]}
          buttonTextStyle={textStyles.instagramButtonTextStyle}
          buttonTapped={this.buttonTapped}
          touchableHighlightStyle={[viewStyles.instagramTouchableHighlightStyle, viewStyles.facebookButtonTouchableLoginHighlightStyle]}
          active0pacity={0.75}
          iconSource={require('./src/images/facebook-white-logo.png')}
        >
        acebook
      </LoginButton>

        { this.forgotLoginDetailsComponent('Forgot your login details?', 'Get help signing in.', urls.forgotInstagramLogin)}

        {this.orSeparatorComponent()}

        {this.loginWithTwitterComponent()}

      </ScrollView>

      </ImageBackground>
    );
  }


  forgotLoginDetailsComponent = (normalText, boldText, url) => {
    return(
        <View style={viewStyles.forgotLoginDetailsContainer}>
          <Text style={textStyles.forgotLoginDetails}>{normalText}
          </Text>
          <TappableText
            textStyle={[textStyles.forgotLoginDetails, textStyles.forgotLoginDetailsBold]}
            textTapped={ () => Linking.openURL(url)}
          >

           {boldText}
          </TappableText>
        </View>
    );

  }
  //create a component for don't have an account? Sign up
  dontHaveAnAccountComponent = () => {
    return(
      <View style={viewStyles.dontHaveAnAccountContainer}>
        <Text style={textStyles.dontHaveAnAccountDetails}>Dont have an account?
        </Text>
      <TappableText
        textStyle={[textStyles.dontHaveAnAccountDetails, textStyles.dontHaveAnAccountDetailsBold]}
        textTapped={ () => Linking.openUrl(urls.instagramSignUp)}
      >
        Sign Up

      </TappableText>
      </View>
    );
  }

  orSeparatorComponent = () => {
    return(
      <View style={viewStyles.orSeparatorContainer}>
        <View style={viewStyles.orSeparatorLine}/>
        <Text style={textStyles.orSeparatorTextStyle}>OR</Text>
        <View style={viewStyles.orSeparatorLine}/>
      </View>
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
  },

  instagramLoginButtonView: {
    backgroundColor: 'transparent',
    borderColor: colors.socialMediaButtonBorderColor,
    borderWidth: sizes.borderWidth,
    borderRadius: sizes.borderRadius,
    width: standardComponentWidth,
    height: sizes.buttonHeight
  },

  facebookLoginButtonView: {
    backgroundColor: colors.facebook
  },

  instagramTouchableHighlightStyle: {
    width: standardComponentWidth,
    height: sizes.buttonHeight,
    marginTop:5

  },
  facebookTouchableLoginHighlightStyle:{
    marginTop:20,
    marginBottom:5
  },
  forgotLoginDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginTop: 10
  },
  orSeparatorContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20
  },

  orSeparatorLine: {
    height: 1,
    flex: 5,
    backgroundColor: colors.socialMediaButtonBorderColor,
    borderColor: colors.socialMediaButtonBorderColor,
    borderWidth: 0.5,
    marginHorizontal: 5
  },

  dontHaveAnAccountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },

  twitterLoginContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  twitterIcon: {
    width: sizes.twitterIcon,
    height: sizes.twitterIcon,
    marginRight: 4,
  }

};

const textStyles = {

  instagramButtonTextStyle: {
    color: colors.text,
    fontWeight: '500'
  },

  orSeparatorTextStyle: {
    color: 'white',
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    fontSize: 13
  },

  forgotLoginDetails: {
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: sizes.pageFontSize,
    marginRight: 5
  },

  forgotLoginDetailsBold: {
    fontWeight: 'bold'
  },

  dontHaveAnAccountDetailsBold: {
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: sizes.pageFontSize,
    marginRight: 5
  }


}

//uigradients.com for soft background images
export default App;
