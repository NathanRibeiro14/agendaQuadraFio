import { StyleSheet, TouchableWithoutFeedback } from "react-native";

export const style = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffaa00ff',
        width: 350,
        height: '100%',
        margin: 60,
        marginLeft: 35,
        marginRight: 35,
        borderRadius: 20,
    },
    containerInterno:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        margin: 50,
    },
    boxTop:{
        alignItems: 'center',
        height: 50,
        width: '100%',
        margin: 20,
    },
    textTop:{
        color: 'white',
        fontWeight: 'bold',
    },
    boxBotoes:{
        alignItems: 'center',
        height: 50,
        width: '100%',
        color: 'white',
        fontWeight: 'bold',
        margin: 20,
    },
    textBotoes:{
        color: 'white',
        fontWeight: 'bold',
    },
    ImageModel:{
        height: 50,
        width: '100%',
        marginTop: 10,
        padding: 50,
    },
    ImageReal:{
        height: 45,
        width: 45,
        marginLeft: 280,
    },
    ImageXv: {
        height: 45,
        width: 45,
        marginRight: 280,
    },
    logoTime: {
        width: 50,
        height: 50,
        marginHorizontal: 10,
    },
    textPlacar: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
        marginHorizontal: 10,
    },
    textNome: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        marginHorizontal: 10,
    },
})