import React, { Component } from "react";

import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'

class Lista extends Component{
    constructor(props){
        super(props);
        this.state = {
            feed : this.props.data
        }

        this.mostraLikes = this.mostraLikes.bind(this);
        this.like = this.like.bind(this);
        this.save = this.save.bind(this);
        this.carregaItem = this.carregaItem.bind(this)
        this.carregaItemSalva = this.carregaItemSalva.bind(this)

    }
    carregaItemSalva(save){
        return  save ? require('../img/salvac.png') : require('../img/salva.png')

    }
    carregaItem(likers){


            return  likers ? require('../img/ccheio.png') : require('../img/cvazio.png')
        
    }

    save(){
        let feed = this.state.feed;
        if(feed.save === true){
            this.setState({
                feed:{
                    ...feed,
                    save: false,
                }
            })
        }else{
            this.setState({
                feed:{
                    ...feed,
                    save: true,
                }
            })
        }

    }
    like(){
        let feed = this.state.feed;
        if(feed.Likeada === true){
            this.setState({
                feed:{
                    ...feed,
                    Likeada: false,
                    likers: feed.likers - 1
                }
            })
        }else{
            this.setState({
                feed:{
                    ...feed,
                    Likeada: true,
                    likers: feed.likers + 1
                }
            })
        }
    }
    mostraLikes(likers){
        let feed = this.state.feed;

        if(feed.likers <= 0){
            return;
        }
        return(
            <Text style={styles.curtidas}>
                {feed.likers} { feed.likers > 1 ? ` Curtidas, ${feed.quemCurtiu} e outros personagens` : `Curtiu ${feed.quemCurtiu}`}
            </Text>
        )
    }

    render(){
        return(
            <View style ={ styles.areaFeed}>
                <View style={styles.viewPerfil}>
                    <Image source={{uri : this.state.feed.imgPerfil}}
                    style={styles.fotoPerfil} />
                    <Text style={styles.nomeUsuario}>{ this.state.feed.nome}</Text>
                </View>
                

                <Image 
                resizeMode="cover"
                style={styles.fotoPublic}
                source={{uri : this.state.feed.imgPublicacao}} />

                
                <View style={styles.cRodape}>
                    <View style={styles.areaBtn}>
                        <TouchableOpacity onPress={this.like}>
                            <Image 
                                style={styles.iconeLike}
                                source={this.carregaItem(this.state.feed.Likeada)}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnSend}>
                            <Image 
                                style={styles.iconeLike}
                                source={require('../img/msg.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnSend}>
                            <Image 
                                style={styles.iconeLike}
                                source={require('../img/send2.png')} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.areaBtn}>
                        <TouchableOpacity style={styles.btnSend} onPress={this.save}>
                            <Image 
                                style={styles.iconeLike}
                                
                                source={this.carregaItemSalva(this.state.feed.save)} />
                        </TouchableOpacity>
                    </View>
                </View>


                <Text style={styles.quemCurtiu}> 
                { this.mostraLikes(this.state.feed.likers)}
                 </Text>
                   

                <View style={styles.viewRodape}>
                    <Text style={styles.descRodape}>
                        <Text style={styles.nomeRodape}>
                            {this.state.feed.nome}
                        </Text>
                    
                        {this.state.feed.descricao} 
                    </Text>
                </View>
                    
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    areaFeed:{

    },
    viewPerfil:{
        flexDirection: 'row',
        flex:1,
        alignItems: 'center',
        padding: 8

    },
    nomeUsuario:{
        fontSize: 20,
        textAlign:'left',
        color: '#000',
        paddingLeft: 6
    },
    fotoPerfil:{
        width:35,
        height:35,
        borderRadius:25
    },
    fotoPublic:{
        flex:1,
        height:350,
        alignItems: 'center'
    },
    areaBtn:{
        flexDirection: 'row',

        
    },
    iconeLike:{
        width:33,
        height:33
    },
    btnSend:{
        paddingLeft:5
    },
    quemCurtiu:{
        paddingLeft:5,
        fontSize: 13,
        
    },
    cRodape:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 5,
        paddingRight:2,
        paddingTop: 2
    },
    viewRodape:{
        flexDirection:'row',
        alignItems: 'center',
        paddingLeft: 2
    },
    descRodape:{
   
        fontSize: 15,
        color: '#000',
        paddingLeft:3

    },
    nomeRodape:{
        fontWeight: 'bold',
        fontSize:17,
        margin: 6,
        padding:4
 
    },
    curtidas:{
        fontWeight:'bold'
    }
 

})

export default Lista;