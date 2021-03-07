import React, { Component } from "react";

import {View, Text, Image, TouchableOpacitya, StyleSheet, TouchableOpacity} from 'react-native'

class Lista extends Component{
    constructor(props){
        super(props);
        this.state = {
            feed : this.props.data
        }
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
                    <TouchableOpacity>
                        <Image 
                            style={styles.iconeLike}
                            source={require('../img/cvazio.png')} />
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
                    <TouchableOpacity style={styles.btnSend}>
                        <Image 
                        style={styles.iconeLike}
                        source={require('../img/salva.png')} />
                    </TouchableOpacity>
                    </View>
                </View>
                <Text style={styles.quemCurtiu}>Curtido por {this.state.feed.quemCurtiu} e outros personagem</Text>
                    
                <View style={styles.viewRodape}>
                    <Text style={styles.nomeRodape}>
                        {this.state.feed.nome} 
                    </Text>
                    <Text style={styles.descRodape}>
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
        fontSize: 22,
        textAlign:'left',
        color: '#000'
    },
    fotoPerfil:{
        width:50,
        height:50,
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
        paddingLeft:3,
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
        paddingLeft:5,
        fontSize: 15,
        color: '#000',

    },
    nomeRodape:{
        fontWeight: 'bold',
        fontSize:17
 
    }
 

})

export default Lista;