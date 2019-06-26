import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";
const AlbumDetail = props => {
  const { textStyle, viewStyle, shadowStyle, ImageCenterStyle,headerContentStyle } = styles;
  const { title,artist,thumbnail_image,image } = props.album;
  return (
    <Card>
      <CardSection>
        <View>
          <Image
            style={[{ width: 100, height: 100 }]}
            source={{ uri: image }}
          />
        </View>
        <View style={headerContentStyle}>
          <Text>{artist}</Text>
          <Text>{title}</Text>
        </View>
        
      </CardSection>

      
    </Card>
  );
};

export default AlbumDetail;
const styles = StyleSheet.create({
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around"
  },

  textStyle: {
    fontSize: 20,
    color: "#000"
  },
  ImageCenterStyle: {
    justifyContent: "center",
    alignItems: "center"
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
