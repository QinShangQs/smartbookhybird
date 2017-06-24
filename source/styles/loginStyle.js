
import {
	Image,
	StyleSheet,
	Dimensions
} from 'react-native';

const { height, width } = Dimensions.get('window');

let widthOfMargin = Dimensions.get('window').width * 0.05;

export const loginStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
  },
  textInputStyle:{
    margin:widthOfMargin,
    backgroundColor:'gray',
    fontSize : 20
  },
  textPromptStyle: {
    margin: widthOfMargin,
    fontSize:20
  },
  bigTextPrompt :{
    margin:widthOfMargin,
    backgroundColor:'gray',
    color:'white',
    textAlign:'center',
    fontSize:30
  }
});