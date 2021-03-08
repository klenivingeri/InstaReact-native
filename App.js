import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView

  } from 'react-native';

  import Lista from './src/Components/Lista'
  import Storys from './src/Components/Storys.js'



 class App extends Component{
  constructor(props){
    super(props);
      this.state = {
        feed : [
          { id: '1',
            nome:'Goku ',
            descricao: 'É preciso ser protagonista. Não dá para ficar só ouvindo a banda passar, temos de ser parte da banda...',
            imgPerfil: 'https://observatoriodeseries.uol.com.br/wp-content/uploads/2020/05/Novo-Projeto-65.jpg',
            imgPublicacao:'https://www.einerd.com.br/wp-content/uploads/2016/11/Goku-Come-a-Nuvem.jpg',
            imgStory: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxaHwLhK0Qzf7rhGMKusImjnlOLfhV__xpWg&usqp=CAU',
            Likeada: false,
            save: false,
            likers: 11,
            quemCurtiu: 'Gohan'
          },
          { id: '2',
            nome:'Piccolo ',
            descricao: 'Aquele que é feliz, espalha felicidade. Aquele ...',
            imgPerfil: 'https://i.pinimg.com/originals/13/be/b8/13beb81e78b6f9e625a3b27cf1d1f2f1.jpg',
            imgPublicacao:'https://img.quizur.com/f/img5f2daba74cf2d6.95848933.jpg?lastEdited=1596828587',
            imgStory: 'https://cdn.hipwallpaper.com/i/49/50/udNTW1.jpg',
            Likeada: false,
            save: false,
            likers: 1,
            quemCurtiu: 'Majin boo'
          },
          { id: '3',
            nome:'Vegeta ',
            descricao: 'Nossas dúvidas são traidoras e nos fazem perder ...',
            imgPerfil: 'https://i1.wp.com/oportaln10.com.br/jerimumgeek/wp-content/uploads/2017/12/vegeta-dragon-ball-Z.jpg?resize=1153%2C798&ssl=1',
            imgPublicacao:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaEfmwEcWqSwvuRe-ep3LKF-zZu-Q1xPdIXA&usqp=CAU',
            imgStory: 'https://wallpapercave.com/wp/wp5323924.jpg',
            Likeada: false,
            save: false,
            likers: 5,
            quemCurtiu: 'Gohan'
          },
          { id: '4',
            nome:'Titi ',
            descricao: 'Mais um dia de muitos bugs, desse jeito vou pre ...',
            imgPerfil: 'https://www.einerd.com.br/wp-content/uploads/2020/11/Chichi-Dragon-Ball-2.jpg',
            imgPublicacao:'http://pm1.narvii.com/6611/b8804948c26a9c42466d6b2048985c35a72ac185_00.jpg',
            imgStory: 'https://i.pinimg.com/564x/25/43/ed/2543ed3f1c59ad0f2b9c8182339bd12c.jpg',
            Likeada: false,
            save: false,
            likers: 10,
            quemCurtiu: 'Frezza'
          }
          ,{ id: '5',
          nome:'Kuririn ',
          descricao: 'Nossas dúvidas são traidoras e nos fazem  ...',
          imgPerfil: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaql9hN9RD6SyoEw9Jro0UbeNmuuwWSBjEqA&usqp=CAU',
          imgPublicacao:'https://pm1.narvii.com/6301/022c21070f32e21f0995dfcd4a93fae78ad9e72b_hq.jpg',
          imgStory: 'https://cdn.hipwallpaper.com/i/5/96/GCLKFn.jpg',
          Likeada: false,
          save: false,
          likers: 8,
          quemCurtiu: 'Gohan'
        },
        { id: '6',
            nome:'Bulma ',
            descricao: 'Aquele que é feliz, espalha felicidade. Aquele ...',
            imgPerfil: 'https://dropsdejogos.uai.com.br/wp-content/uploads/sites/10/2019/09/bulma-1280x720.jpg',
            imgPublicacao:'https://live.staticflickr.com/6062/6022946614_fc2b8dc978_z.jpg',
            imgStory: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxaHwLhK0Qzf7rhGMKusImjnlOLfhV__xpWg&usqp=CAU',
            Likeada: false,
            save: false,
            likers: 2,
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

        <ScrollView>
            
            <FlatList  horizontal={true}
            showsHorizontalScrollIndicator={false}
            
            data={ this.state.feed}
            renderItem={ ({item}) => <Storys data={item} /> } />

          <FlatList 
          showsHorizontalScrollIndicator={false}
          keyExtractor={ (item) => item.id}
          data={ this.state.feed}
          renderItem={ ({item}) => <Lista data={item} /> } />

        </ScrollView>
        <View style={styles.bottom}> 
          <TouchableOpacity>
          <Image source={require('./src/img/home.png')}
            style={styles.bbtn} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('./src/img/shared.png')}
            style={styles.bbtn} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('./src/img/new.png')}
            style={styles.bbtn} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('./src/img/cvazio.png')}
            style={styles.bbtn} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={{uri: 'https://observatoriodeseries.uol.com.br/wp-content/uploads/2020/05/Novo-Projeto-65.jpg' }}
            style={styles.perfil} />
          </TouchableOpacity>

        </View>







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

  },
  bottom:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding:7,

    borderBottomWidth: 0.2,
    shadowColor: '#000',
    elevation: 1,
  },
  bbtn:{
    width: 23,
    height: 23

  },
  perfil:{
    width: 23,
    height: 23,
    borderRadius: 20
  }




});


export default App;
