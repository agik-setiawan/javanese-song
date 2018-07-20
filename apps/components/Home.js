import React,{Component} from 'react';
import {View,Text,StyleSheet,TouchableHighlight} from 'react-native';
import {Provider} from 'mobx-react';
import FontAwesome,{Icons} from 'react-native-fontawesome';
import {Button,Container,Header,Content,Left,Right} from 'native-base';

export default class Home extends Component{
    constructor(props){
        super(props);
    }

    static navigationOptions={
        title:'Semua Lagu',
        // drawerIcon:()=>{
        //   return(
        //     <FontAwesome>{Icons.home}</FontAwesome>
        //   );
        // }
      }
render(){
    return(
        <Container >
      <Header style={styleSc1.header}>
      <Left>
      <TouchableHighlight onPress={()=>this.props.navigation.navigate('DrawerOpen')}>
     <FontAwesome style={{color:'white',paddingLeft:10}}>{Icons.bars}</FontAwesome>
     </TouchableHighlight>
     </Left>
      <Right></Right>
      </Header>
      <Content contentContainerStyle={{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
      }}>
      <Text>SEMUA KATEGORI</Text>
      </Content>
      </Container>
    )
}
}

const styleSc1=StyleSheet.create({
    header:{
      backgroundColor:'#8BC34A',
      paddingLeft:3
    },
    icon:{
      fontSize:25,
      color:'white',
      paddingLeft:0
    },
    backgroudImg:{
      width:'100%',
      height:'100%'
    }
  })
