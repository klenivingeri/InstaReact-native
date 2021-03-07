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
            nome:'Goku',
            descricao: 'Preciso comer muito para ficar forte, amanhã tenho ...',
            imgPerfil: 'https://observatoriodeseries.uol.com.br/wp-content/uploads/2020/05/Novo-Projeto-65.jpg',
            imgPublicacao:'https://www.einerd.com.br/wp-content/uploads/2016/11/Goku-Come-a-Nuvem.jpg',
            Likeada: false,
            likers: 0,
            quemCurtiu: 'Gohan'
          },
          { id: '2',
            nome:'Piccolo',
            descricao: 'Aquele que é feliz, espalha felicidade. Aquele ...',
            imgPerfil: 'https://i.pinimg.com/originals/13/be/b8/13beb81e78b6f9e625a3b27cf1d1f2f1.jpg',
            imgPublicacao:'https://img.quizur.com/f/img5f2daba74cf2d6.95848933.jpg?lastEdited=1596828587',
            Likeada: false,
            likers: 0,
            quemCurtiu: 'Majin boo'
          },
          { id: '3',
            nome:'Vegeta',
            descricao: 'Nossas dúvidas são traidoras e nos fazem perder ...',
            imgPerfil: 'https://i1.wp.com/oportaln10.com.br/jerimumgeek/wp-content/uploads/2017/12/vegeta-dragon-ball-Z.jpg?resize=1153%2C798&ssl=1',
            imgPublicacao:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaEfmwEcWqSwvuRe-ep3LKF-zZu-Q1xPdIXA&usqp=CAU',
            Likeada: false,
            likers: 0,
            quemCurtiu: 'Gohan'
          },
          { id: '4',
            nome:'Titi',
            descricao: 'Mais um dia de muitos bugs, desse jeito vou pre ...',
            imgPerfil: 'https://www.einerd.com.br/wp-content/uploads/2020/11/Chichi-Dragon-Ball-2.jpg',
            imgPublicacao:'http://pm1.narvii.com/6611/b8804948c26a9c42466d6b2048985c35a72ac185_00.jpg',
            Likeada: false,
            likers: 0,
            quemCurtiu: 'Frezza'
          }
          ,{ id: '5',
          nome:'Kuririn',
          descricao: 'Nossas dúvidas são traidoras e nos fazem perder ...',
          imgPerfil: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaql9hN9RD6SyoEw9Jro0UbeNmuuwWSBjEqA&usqp=CAU',
          imgPublicacao:'https://pm1.narvii.com/6301/022c21070f32e21f0995dfcd4a93fae78ad9e72b_hq.jpg',
          Likeada: false,
          likers: 0,
          quemCurtiu: 'Gohan'
        },
        { id: '6',
            nome:'Bulma',
            descricao: 'Aquele que é feliz, espalha felicidade. Aquele ...',
            imgPerfil: 'https://dropsdejogos.uai.com.br/wp-content/uploads/sites/10/2019/09/bulma-1280x720.jpg',
            imgPublicacao:'https://live.staticflickr.com/6062/6022946614_fc2b8dc978_z.jpg',
            Likeada: false,
            likers: 0,
            quemCurtiu: 'Trunks'
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
        keyExtractor={ (item) => item.id}
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
