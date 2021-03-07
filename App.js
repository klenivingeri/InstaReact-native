import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList

  } from 'react-native';

  import Lista from './src/Components/Lista'



 class App extends Component{
  constructor(props){
    super(props);
      this.state = {
        feed : [
          { id: '1',
            nome:'Erick',
            descricao: 'Mais um dia de muitos bugs',
            imgPerfil: './src/img/perfil1.png',
            imgPublicacao:'./src/img/public1.jpg',
            Likeada: false,
            likers: 0
          },
          { id: '2',
            nome:'Jenifer',
            descricao: 'Mais um dia de muitos bugs',
            imgPerfil: './src/img/perfil2.png',
            imgPublicacao:'./src/img/public2.jpg',
            Likeada: false,
            likers: 0
          },
          { id: '3',
            nome:'Maria',
            descricao: 'Mais um dia de muitos bugs',
            imgPerfil: './src/img/perfil3.png',
            imgPublicacao:'./src/img/public3.jpg',
            Likeada: false,
            likers: 0
          },
          { id: '4',
            nome:'Gu',
            descricao: 'Mais um dia de muitos bugs',
            imgPerfil: './src/img/perfil4.png',
            imgPublicacao:'./src/img/public4.jpg',
            Likeada: false,
            likers: 0
          }
          ,{ id: '5',
          nome:'Biel',
          descricao: 'Mais um dia de muitos bugs',
          imgPerfil: './src/img/perfil5.png',
          imgPublicacao:'./src/img/public5.jpg',
          Likeada: false,
          likers: 0
        },
        { id: '6',
            nome:'Manu',
            descricao: 'Mais um dia de muitos bugs',
            imgPerfil: './src/img/perfil6.png',
            imgPublicacao:'./src/img/public6.jpg',
            Likeada: false,
            likers: 0
          },
    
        ]
      }
  }
  
  


  render(){


    return(

      <View style={ styles.container}>
       
        <View style={styles.header}> 
          <TouchableOpacity>
            <Image source={require('./src/img/logo.png')}
            style={styles.logo} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('./src/img/send.png')}
            style={styles.send} />
          </TouchableOpacity>
        </View>
        <FlatList 
        showsHorizontalScrollIndicator={false}
        data={ this.state.feed}
        renderItem={ ({item}) => <Lista data={item} /> } />

      








      </View>




    );

  }

}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  header:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding:7,

    borderBottomWidth: 0.2,
    shadowColor: '#000',
    elevation: 1,
    

  },
  logo:{

  },
  send:{
    width: 23,
    height: 23

  }




});


export default App;
