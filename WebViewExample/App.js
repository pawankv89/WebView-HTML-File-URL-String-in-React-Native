/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, Button, StyleSheet, Text, View} from 'react-native';
import { WebView } from "react-native-webview";
import HTML_FILE from './resources/index.html';
const isAndroid= Platform.OS==='android';
type Props = {};

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = { val: 1 };
  }

  renderElement() {
    if (this.state.val === 1) {
      return (
        <WebView
          style={{flex: 1}}
          originWhitelist={['*']}
          source={{ uri: "https://github.com/pawankv89" }}
          style={{ marginTop: 20 }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
        />
      );
    } else if (this.state.val === 2) {
      return (
        <WebView
          style={{flex: 1}}
          originWhitelist={['*']}
          source={{ html: '<h1>Hello</h1>' }}
          style={{ marginTop: 20 }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
        />
      );
    } else {
      if(isAndroid){
        return (
            <WebView
              style={{flex: 1}}
              originWhitelist={['*']}
              source={{uri:'file:///android_asset/index.html'}}
              style={{ marginTop: 20 }}
              javaScriptEnabled={true}
              domStorageEnabled={true}
            />
        )
      }else{
        return(
          <WebView
            style={{flex: 1}}
            originWhitelist={['*']}
            source={HTML_FILE}
            style={{ marginTop: 20 }}
            javaScriptEnabled={true}
            domStorageEnabled={true}
          />
        );
      }
    }
  }

  render() {
    return (
      <View style={{flex: 1, marginTop:30, backgroundColor:'white'}}>
      <Button title="Load from URL" onPress={() => this.setState({ val: 1 })}/>
      <Button title="Load HTML Text" onPress={() => this.setState({ val: 2 })}/>
      <Button title="Load from Local HTML FIle" onPress={() => this.setState({ val: 3 })}/>
      <View style={{flex: 1}}>
          {this.renderElement()}
        </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
