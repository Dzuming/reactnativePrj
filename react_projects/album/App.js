import React from "react";
import Header from "./src/components/header";
import AlbumList from "./src/components/albumList";
import { View,Image } from "react-native";
import { Button,Banner } from 'react-native-paper';

export default class App extends React.Component {
  state = {
    visible: true,
  };

  render() {
    return (
    <View>
      <Header headerText={"cansu ishak"} />
        <Banner
        visible={this.state.visible}
        actions={[
          {
            label: 'Fix it',
            onPress: () => this.setState({ visible: false }),
          },
          {
            label: 'Learn more',
            onPress: () => this.setState({ visible: false }),
          },
        ]}
        image={({ size }) =>
          <Image
            source={{ uri: 'https://avatars3.githubusercontent.com/u/17571969?s=400&v=4' }}
            style={{
              width: size,
              height: size,
            }}
          />
        }
      >
        There was a problem processing a transaction on your credit card.
      </Banner>
    
      <AlbumList/>
      <Button raised theme={{ roundness: 3 }} icon="add-a-photo">
      Press me
    </Button>
    </View>
    );
  }
}

//AppRegistry.registerComponent('albums',()=>App);
