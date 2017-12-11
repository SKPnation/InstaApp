import React, {Component} from 'react';
import {Text, View, ImageBackground} from 'react-native';
import CellUserDataBar from './CellUserDataBar';
import IconChangeButton from './IconChangeButton';


const iconSize = 22;

class InstaFeedCell extends Component {
  constructor(props){
    super(props);
    this.cellData = props.cellData;
    console.log(this.cellData);
  }

  iconsRowComponent = () => {
    return(
      <View style={viewStyles.iconRowContainer}>
        <IconChangeButton
          highlightedImage={require('../images/icons/like-filled.png')}
          unhighlightedImage={require('../images/icons/like.png')}
          size={iconSize}
          isHighlighted={this.cellData.user_has_liked}
          containerStyle={viewStyles.leftSideIcon}
        />

        <IconChangeButton
          highlightedImage={require('../images/icons/chat.png')}
          unhighlightedImage={require('../images/icons/chat.png')}
          size={(iconSize * 0.9)}
          isHighlighted={this.cellData.user_has_liked}
          containerStyle={viewStyles.leftSideIcon}
        />

        <IconChangeButton
          highlightedImage={require('../images/icons/paper-plane.png')}
          unhighlightedImage={require('../images/icons/paper-plane.png')}
          size={(iconSize * 0.9)}
          isHighlighted={this.cellData.user_has_liked}
          containerStyle={viewStyles.leftSideIcon}
        />

        <IconChangeButton
          highlightedImage={require('../images/icons/bookmark-filled.png')}
          unhighlightedImage={require('../images/icons/bookmark-white.png')}
          size={(iconSize * 0.9)}
          isHighlighted={this.cellData.user_has_liked}
          containerStyle={viewStyles.bookmarkIcon}
        />
      </View>
    );
  }
  render(){
    return(
      <View style={viewStyles.container}>

        <CellUserDataBar
           imageURL={this.cellData.user.profile_picture}
           username={this.cellData.user.username}
        />
        <ImageBackground
          source={{uri: this.cellData.images.standard_resolution.url}}
          resizeMode={'cover'}
          style={{ width: '100%', height: this.cellData.images.standard_resolution.height/2 }}
        >

        </ImageBackground>

        {this.iconsRowComponent()}

         <Text style={textStyles.likes}>{this.cellData.likes.count} Likes </Text>

      </View>
    );
  }


}

const viewStyles = {

 container: {
    flex: 0,
    width: '100%',
  },
  iconRowContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 60,
    alignItems: 'center',
    marginBottom: 3,
    paddingHorizontal: 8
  },
  leftSideIcon: {
    marginRight: iconSize,
  },

  bookmarkIcon: {
    marginLeft: '57%'
  }
};

const textStyles = {

   likes: {
     fontSize: 12,
     fontWeight: '600',
     marginLeft: 10,
     marginBottom: 10
   }
};










export default InstaFeedCell;
