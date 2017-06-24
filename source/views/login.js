//登录页面

//http://www.cnblogs.com/zhangdw/p/6194345.html
//http://www.cnblogs.com/zhangdw/p/6194345.html
//https://github.com/yorkie/react-native-wechat

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from 'react-native';
//使用第三方跳转组件react-navigation
import { StackNavigator } from 'react-navigation'; 
//引入CSS
import {loginStyle} from "../styles/loginStyle"
//跳转后页面
import homePage from "./home";

import * as loginService from "../services/loginService";


class loginComponent extends  Component {
  constructor(props){
    super(props);
    this.state = {
      inputedNum :'10000',
      inputedPW:'10000'
    };
    this.updatePW = this.updatePW.bind(this);
  }
  /**
  * 实时同步输入号码
  * @summery
  */
  updateNum(newText){
    this.setState((state) => {
      return {
        inputedNum: newText
      };
    });
  }

  updatePW(newText){
    this.setState((state) => {
      return {
        inputedPW :newText
      }
    });
  }

  _pressButton(){
    alert(this.state.inputedNum);
    loginService.doLogin(this.state.inputedNum, this.state.inputedPW,(responseText)=>{
      alert(JSON.stringify(responseText));
      this.props.navigation.navigate('HomePage');
    });

    
  }


  render() {
    const { navigate } = this.props.navigation; 
    return (
      <View style={loginStyle.container}>
        <TextInput style={loginStyle.textInputStyle} 
          placeholder={'请输入手机号'}
          onChangeText = {(newText) => this.updateNum(newText)}
         />
        <Text style={loginStyle.textPromptStyle}> 您输入的手机号： {this.state.inputedNum}</Text>
        <TextInput style={loginStyle.textInputStyle} 
          placeholder={'请输入密码'}  
          password={true}
          onChangeText={this.updatePW}
          />
        <Text style={loginStyle.bigTextPrompt}  onPress={()=>this._pressButton()}> 确定 </Text>
      </View>
    );
  }

}

const login = StackNavigator({  
    Home: {screen: loginComponent},  
    HomePage:{screen:homePage},  
});  

export default login;
