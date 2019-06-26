import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";
const AlbumDetail = props => {
  const { textStyle, viewStyle, shadowStyle, ImageCenterStyle, headerContentStyle,leftContainer,rightContainer,navBar } = styles;
  const { title, artist, thumbnail_image, image } = props.album;
  return (
    <Card>
      <CardSection style={navBar}>
     
        <View>
          <Text style={[navBar,textStyle]}>{artist}</Text>
          <Text style={{flexDirection: 'row',   alignItems: 'center',textAlign:'left'}}>{title}</Text>
        </View>
        <View style={rightContainer}>
          <Image
            style={[ImageCenterStyle]}
            source={{ uri: image }}
          />
        </View>

        <View ><Text>dff</Text></View>   

      </CardSection>
     



    </Card>

    
  );
};

export default AlbumDetail;
const styles = StyleSheet.create({

  navBar: {
    height: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  leftContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: 'green'
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  rightIcon: {
    height: 10,
    width: 10,
    resizeMode: 'contain',
    backgroundColor: 'white',
  },

  textStyle: {
    fontSize: 20,
    color: "#000",
  
    flexDirection: 'row',
   
    alignItems: 'center',
    
  },
  ImageCenterStyle: {
    width: 100,
    height: 100
  },

  leftContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: 'white'
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'white',
  },


  viewStyle: {
    backgroundColor: "#F8F8F8",
    height: 60,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    marginTop: 22
  },
  shadowStyle: {
    elevation: 4,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "grey",
    shadowOpacity: 0.5,
    shadowRadius: 10
  }
});
