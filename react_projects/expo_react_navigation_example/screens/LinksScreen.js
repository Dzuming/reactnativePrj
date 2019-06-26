import React, { Component } from 'react';
import { ScrollView, StyleSheet, Button } from 'react-native';

import { ExpoLinksView } from '@expo/samples';
export default class LinksScreen extends Component {

  render() {
    //const { navigation } = this.props;
    return (
     
      <ScrollView style={styles.container}>

              <Button
                    title="Back To books2"
                    onPress={() => alert("gerdt")}
                />


<Button
          title="Add some friends"
          onPress={() =>
            this.props.navigation.navigate('SettingsStack')
          }
        />

<Button
          title="Add some friends"
          onPress={() =>
            this.props.navigation.navigate('ListStack')
          }
        />
       </ScrollView>
    );
  }
}




LinksScreen.navigationOptions = {
  title: 'Links',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
