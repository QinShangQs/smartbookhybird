import React, { Component } from 'react';
import {
	AppRegistry,
	View,
	Text
} from 'react-native';

export default class home extends Component {
	constructor(props){
		super(props);
		this.state = {};
	}

	render (){
		return (
			<View>
				<Text>
					我是默认页面
				</Text>
			</View>
			);
	}
}