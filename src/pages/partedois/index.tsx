import React from "react";

import { Text, View, Image } from 'react-native';

import { style } from './styles';
import modelo from '../../assets/WallpaperRegua.jpg';
import { LinearGradient } from "expo-linear-gradient";

export default function Partedois (){
    return (
    <LinearGradient colors={["#1e3c72", "#2a5298", "#6dd5ed"]} // cores do gradiente
    
    >
    <View style={style.container}>
        
        <Image source={modelo} style={style.ImageModel} />
        
        <View style={style.boxTop}>
            <Text style={style.textTop}>MARCAR HORARIO</Text>
        </View>
        <View style={style.boxTop}>
            <Text style={style.textTop}>*ESPAÇO BOTÕES CONFIRMAR*</Text>
        </View>
        <View style={style.boxBotoes}>
            <Text style={style.textBotoes}>BOTOES TAG BAR</Text>
        </View>
    </View>
    </LinearGradient>
    );
}