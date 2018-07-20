import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {Provider} from 'mobx-react';
import {TabNavigator,DrawerNavigator,DrawerItems} from 'react-navigation';
import FontAwesome,{Icons} from 'react-native-fontawesome';
import {Button,Container,Header,Content,Left,Icon,Body} from 'native-base';
import Home from './components/Home';
import Splash from './components/Splash';

export default class Apps extends Component{
render(){
    return(
        <DrawerMenu/>
    )
}
}

const CustomDrawerContentComponent=(props)=>(
    <Container>
    <Header style={{height:150,backgroundColor:'#8BC34A'}}>
    <Body>
    <Text>Lagu Jowo</Text>
    </Body>
    </Header>
    <Content>
    <DrawerItems {...props}/>
    </Content>
    </Container>
);

const DrawerMenu=DrawerNavigator({
Home:{
    screen:Home
}},
{
    initialRouteName:'Home',
    drawerPosition:'left',
    contentComponent:CustomDrawerContentComponent,
    contentOptions:{
        activeTintColor:'red'
    }
})

const TabMenu=TabNavigator({
Home:{
    screen:Home,
    navigationOptions:{
        tabBarLabel:(<FontAwesome style={{color:'white',fontSize:16}}>{Icons.home}</FontAwesome>)
    }
}
},
{
    tabBarPosition:'bottom',
    animationEnabled:true,
    tabBarOptions:{
        activeTintColor:'white',
        labelStyle:{
          fontSize:12,
          fontWeight:'bold'
        },
        style:{
          backgroundColor:'#3b5998'
        },
        indicatorStyle: {
          backgroundColor: 'white',
      },
      }
})
