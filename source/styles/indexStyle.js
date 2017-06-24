
import {
	Image,
	StyleSheet,
	Dimensions
} from 'react-native';

const { height, width } = Dimensions.get('window');

let widthOfMargin = Dimensions.get('window').width * 0.05;

export const indexStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#29a73a',
  },
  bigTextPrompt :{
    margin:widthOfMargin,
    backgroundColor:'gray',
    color:'white',
    textAlign:'center',
    fontSize:30
  }
  
});