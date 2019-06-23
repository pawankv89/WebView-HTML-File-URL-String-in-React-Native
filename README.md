# WebView HTML File URL String in React Native

=========

## WebView HTML File URL String in React Native.

###  Load Local HTML File or URL in React Native using react-native-webview


------------
Added Some screens here.

![](https://github.com/pawankv89/WebView-HTML-File-URL-String-in-React-Native/blob/master/images/screen_1.png)
![](https://github.com/pawankv89/WebView-HTML-File-URL-String-in-React-Native/blob/master/images/screen_2.png)
![](https://github.com/pawankv89/WebView-HTML-File-URL-String-in-React-Native/blob/master/images/screen_3.png)


## Usage
------------

#### In this example, we will use the WebView component from react-native-webview. We will make a single page where we will have 3 buttons which will load the data in WebView from different resources.

#### Loading of WebPage from URL 


```javascript

<WebView
style={{flex: 1}}
originWhitelist={['*']}
source={{ uri: "https://aboutreact.com" }}
style={{ marginTop: 20 }}
javaScriptEnabled={true}
domStorageEnabled={true}
/>

```

####  Load HTML Page from a variable with HTML String

```javascript

<WebView
style={{flex: 1}}
originWhitelist={['*']}
source={{ html: '<h1>Hello</h1>' }}
style={{ marginTop: 20 }}
javaScriptEnabled={true}
domStorageEnabled={true}
/>

```

#### Load a Local HTML File

```javascript

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
source={'./resources/index.html'}
style={{ marginTop: 20 }}
javaScriptEnabled={true}
domStorageEnabled={true}
/>
);
}

```

#### App.js


```javascript

//This is an example code to Load Local HTML File or URL in React Native WebView//
import React, { Component } from "react";
import { StyleSheet, Text, View, Button,Platform } from "react-native";
import { WebView } from "react-native-webview";
import HTML_FILE from "./resources/index.html";
const isAndroid= Platform.OS==='android';
type Props = {};
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
source={{ uri: "https://aboutreact.com" }}
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


```

`
Terminal Commands 
`
Open Project
`
cd ProjectName
`
This command will copy the dependency into your node_module directory. –save is optional, it is just to update dependencies in your package.json file.
`
npm install react-native-webview --save
`
Linking of Dependency

After installing the dependency you need to link it with your project using
`
react-native link
`

To Run the React Native App

Open the terminal again and jump into your project using.

`cd ProjectName
`
To run the project on an Android Virtual Device or on real debugging device
`
react-native run-android
`
or on the iOS Simulator by running

`react-native run-ios (macOS only).
`

#### Project File Structure
1. Android will load the external HTML from project>android>app>src>main>assets>index.html
![](https://github.com/pawankv89/WebView-HTML-File-URL-String-in-React-Native/blob/master/images/android.png)

2. IOS will load the external HTML from project>resources>index.html
![](https://github.com/pawankv89/WebView-HTML-File-URL-String-in-React-Native/blob/master/images/ios.png)


### Video Demo
[![Watch the video](https://img.youtube.com/vi/4I8Uil2kAvs/0.jpg)](https://youtu.be/4I8Uil2kAvs)


## License

This code is distributed under the terms and conditions of the [MIT license](LICENSE).

## Change-log

A brief summary of each this release can be found in the [CHANGELOG](CHANGELOG.mdown). 
