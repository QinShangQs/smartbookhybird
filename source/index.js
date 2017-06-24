//首页

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
} from 'react-native';
//使用第三方跳转组件react-navigation
import { StackNavigator } from 'react-navigation'; 
//引入CSS
import {indexStyle} from "./styles/indexStyle"

//跳转后页面
import homePage from "./views/home";
import loginPage from "./views/login"

class index extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.timer = setTimeout(
      () => { 
          console.log('把一个定时器的引用挂在this上');
          this.props.navigation.navigate('LoginPage');
      },
      500
    );
  }

  render() {
    return (
      <View style={indexStyle.container}>
        <Text style={indexStyle.bigTextPrompt} > 锐文小说阅读APP </Text>
      </View>
    );
  }

  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }
}

const IndexApp = StackNavigator({  
    Index: {screen: index},  
    HomePage:{screen:homePage},
    LoginPage:{screen:loginPage}
});  

export default IndexApp;

