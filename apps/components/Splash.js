import Rect,{Component} from 'react';
import {View,Text,ImageBackground} from 'react-native';

export default class Splash extends Component{
render(){
    return(
        <View>
        <ImageBackground style={{width:'100%'}} source={require('../assets/img/splash.png')}>
        </ImageBackground>
        </View>
    )
}
}