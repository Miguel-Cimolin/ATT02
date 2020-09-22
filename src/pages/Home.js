import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View , TextInput , Button, Image, ImageBackground } from 'react-native';
import IconCom from 'react-native-vector-icons/Ionicons';


export function Home({ navigation }) {
  return (
    <View style={styles.container}>
      
      <View style={styles.biruleibe}><StatusBar style="auto"/>
          <ImageBackground style={styles.imagemFundo} source={require("./../assets/imagemfundo.jpg")} >
          <Text style={styles.titulo}>{"\n\t\t\t"}  ACADEMIA{"\n\t\t\t\t\t"}4137</Text>
          <Text style={styles.subtitulo}>! Meça seu índice de massa corporal !</Text>
          </ImageBackground>
      </View>

        <Image style={{ width:200, height:50, borderRadius:30, marginTop: 20}} source={require("./../assets/musculacao.gif")} />

      <View style={styles.biruleibe2}>
        <Text style={styles.corpoTexto}>Insira seus dados:</Text>
        <TextInput style={styles.input} onChangeText={text => onChangeText("?")} value={"\tPeso"}/>
        <TextInput style={styles.input} onChangeText={text => onChangeText("?")} value={"\tAltura"}/>
        <TextInput style={styles.input} onChangeText={text => onChangeText("?")} value={"\tIdade"}/>
        <Button title="Calcular IMC" color="#000"/>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EED5B7',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  biruleibe:{
    backgroundColor: '#FAFAFA',
    width: '100%',
    height: '25%',
    margin: 0,
    padding:35,
    paddingTop:-10,
    justifyContent: 'center',
    alignItems:'center',
    shadowOffset:{width:4,height:4},
    shadowOpacity:0.5,
    shadowColor:"#CDB79E",
    shadowRadius:3,
    marginBottom:10
  },
  biruleibe2:{
    backgroundColor: '#FAFAFA',
    width: '89%',
    height: '50%',
    marginTop:30,
    paddingHorizontal:40,
    paddingVertical:40,
    justifyContent: 'flex-start',
    alignItems:'center',
    shadowOffset:{width:1,height:-5},
    shadowOpacity:0.4,
    shadowColor:"#DEDEDE",
    shadowRadius:4,
    elevation: 5,
    borderRadius: 10
  },
  titulo:{
    fontSize:35,
    fontWeight:'bold',
    fontStyle:'normal',
    alignItems: 'center',
    justifyContent: 'center'
  },
  subtitulo:{
    fontSize:15,
    alignSelf:'center',
    color:"#f33",
    fontWeight:'bold'
  },
  imagemFundo:{
    flex:1,
    resizeMode: "cover",
    height: 167,
    width: 380,
  },
  corpoTexto:{
    fontSize:20,
    alignSelf:'center'
  },
  input:{ 
    height: 50,
    width: 290,
    borderColor:'#f333', 
    borderWidth: 1,
    borderRadius:3,
    marginVertical:12,
    fontSize:20,
    color:"#8f8f8f",
    fontStyle:"italic",
    backgroundColor:"#EED5B7",
    borderColor:"#CDB79E"
  }
});
