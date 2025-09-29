import React from "react";

import { Text, View, Image } from 'react-native';

import { style } from './styles';
import unifio from '../../assets/UnifioLogo.png';
import realMadrid from '../../assets/Real_Madrid.png';
import XvPiracicaba from '../../assets/xvPiracicaba.png';
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
        <View style={style.containerInterno}>
            <View style={style.boxTop}>
                <Text style={style.textTop}>*RESULTADO DOS JOGOS*</Text>

                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
                <Image source={realMadrid} style={style.logoTime} />
                <Text style={style.textPlacar}>0 x 72</Text>
                <Image source={XvPiracicaba} style={style.logoTime} />
            </View>
            </View>
        </View>
        <Text style={style.textNome}>Real Madrid x XV de Piracicaba</Text>
        <View style={style.boxBotoes}>
            <Text style={style.textBotoes}>BOTOES TAG BAR</Text>
        </View>
    </View>
    </LinearGradient>
    );
}