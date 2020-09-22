
/*import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';


export function Sobre() {
    const [peso, setPeso] = React.useState(0.00);
    const [altura, setAltura] = React.useState();
    const [imc, setIMC] = React.useState();
    
    function calculaIMC(peso, altura){
        var resultado = peso / (altura * altura)
        setIMC(resultado)
        console.log("valor do imc". imc)
    }

    return
    (
        <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
            <TextInput style={{borderColor: 'gray', width:200, height:40, borderWidth:1, borderRadius:30, color: '#f333', paddingLeft:10}}>
                placeholder="Digite seu peso"
                onChangeText={texto =>setPeso(texto)}
                value=(peso)
            </TextInput>
            <TextInput style={{borderColor: 'gray', width:200, height:40, borderWidth:1, borderRadius:30, color: '#f333', paddingLeft:10}}>
                placeholder="Digite sua altura"
                onChangeText={texto =>setAltura(texto)}
                value=(altura)
            </TextInput>
            <Button title="CALCULAR"></Button>
        </View>
    );
}*/