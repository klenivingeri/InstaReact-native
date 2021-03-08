import React, { Component } from "react";

import {View, Text, Image, StyleSheet, TouchableOpacity,ImageBackground,Modal} from 'react-native'
// source={{}}
class Storys extends Component{
        constructor(props){
            super(props);
            this.state = {
                feed : this.props.data,
                modalStory: false
            }
            this.carregafundo = this.carregafundo.bind(this);
            this.modalEnter = this.modalEnter.bind(this);
            this.modalSair = this.modalSair.bind(this);

       
        }
        modalEnter(){
            this.setState({
                modalStory: true
            })
        }
        modalSair(){
            this.setState({
                modalStory: false
            })
        }
   
   
        carregafundo(){
            let feed = this.state.feed
            if(feed.nome == 'Goku ' ){
                this.setState({
                    feed:{
                        ...feed,
                        nome: 'Seu Story'
                    }
                });
                return {uri: "http://engtrust.com.br/wp-content/uploads/2016/08/fundo-cinza-02.jpg"}

                

            }else{
                return {uri: "https://img.freepik.com/vetores-gratis/instagram-fundo-em-cores-gradientes_23-2147835128.jpg?size=338&ext=jpg"}

            }
        }

    render(){
        return(
            <View >
                <TouchableOpacity style={styles.areaStorys} onPress={this.modalEnter} >
                <ImageBackground 
                imageStyle={{ borderRadius: 50}}
                source={this.carregafundo()}
                style={styles.fotoStoryfundo}>
                <Image style={styles.fotoStory} source={{uri: this.state.feed.imgPerfil}} />
            
                </ImageBackground>
                
                <Text>{this.state.feed.nome}</Text>
                </TouchableOpacity>
                <Modal  animationType="slide" visible={this.state.modalStory}>
                    <View>
                    <TouchableOpacity onPress={this.modalSair} >
                    <ImageBackground 
                        imageStyle={{ flex:1}}
                        source={{uri: this.state.feed.imgStory}}
                        style={styles.modalStore}>
                       
                    </ImageBackground>
                        
                           
                        </TouchableOpacity>
                    </View>
                </Modal>
            </View>
        )
    }
}

    const styles = StyleSheet.create({
        areaStorys:{
            flex:1,
            padding: 10,
            
            alignItems:"center"

        },
        fotoStory:{

            height:63,
            width:63,
            borderRadius:30,
            borderWidth: 2.5,
            borderColor :'white'

        }
        ,
        fotoStoryfundo:{
            justifyContent: 'center',
            alignItems:'center',
            height:69,
            width:69,
            borderRadius:30,
            marginRight:4,
            marginLeft:4,

        },
        modalStore:{

            height:660,
            alignItems: 'center'

        }

        
    })
    
export default Storys;