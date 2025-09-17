import React from "react";

import { Text, View, Image } from 'react-native';

import { style } from './styles';
import unifio from '../../assets/UnifioLogo.png'
import { LinearGradient } from "expo-linear-gradient";

export default function Inicio (){
    return (
    <LinearGradient colors={["#1e3c72", "#2a5298", "#6dd5ed"]} // cores do gradiente
    
    >
    <View style={style.container}>
        
        <Image source={unifio} style={style.ImageModel} />
        
        <View style={style.boxTop}>
            <Text style={style.textTop}>Próximos jogos</Text>
        </View>
        <View style={style.boxTop}>
            <Text style={style.textTop}>*CAIXA DE PERGUNTA*</Text>
        </View>
        <View style={style.boxBotoes}>
            <Text style={style.textBotoes}>BOTOES TAG BAR</Text>
        </View>
    </View>
    </LinearGradient>
    );
}