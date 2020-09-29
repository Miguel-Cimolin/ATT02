import { Picker } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View , TextInput , Button, Image, ImageBackground } from 'react-native';
import IconCom from 'react-native-vector-icons/Ionicons';


export function Home({ navigation }) {

  const[peso, setPeso]= React.useState(0.0);
  const[altura, setAltura]= React.useState(0.0);
  const[idade, setIdade]= React.useState(0);
  const[IMC, setIMC]= React.useState(0.0);

  function calcularIMC(peso,altura){
    var IMCconversao = (peso/(altura*altura));

    setIMC(IMCconversao);

    if(IMC != 0){
      navigation.navigate('Resultado',{IMCconversao});
    }
  }


  return (
    <View style={styles.container}>
      
      <View style={styles.biruleibe}><StatusBar style="auto"/>
          <ImageBackground style={styles.imagemFundo} source={require("./../assets/imagemfundo.jpg")} >
          <Text style={styles.titulo}>{"\n\t\t\t"}  ACADEMIA{"\n\t\t\t\t\t"}FIGHT</Text>
          <Text style={styles.subtitulo}>! Meça seu índice de massa corporal !</Text>
          </ImageBackground>
      </View>

        <Image style={{ width:200, height:50, borderRadius:30, marginTop: 20}} source={require("./../assets/musculacao.gif")} />

      <View style={styles.biruleibe2}>
        <Text style={styles.textoMeio}>Insira seus dados:</Text>

        <TextInput placeholder={"\t\t\t\t Peso"} style={styles.input} onChangeText={texto1 => setPeso(texto1)} value={peso}/>
        <TextInput placeholder={"\t\t\t\t Altura"} style={styles.input} onChangeText={texto2 => setAltura(texto2)} value={altura}/>

        <View>
         <Picker
            selectedValue={idade}
            onValueChange={selected => setIdade(selected)}
            itemStyle={styles.desgraca}
            value={idade}>
           <Picker.Item label="Selecione a idade" value="0" />
           <Picker.Item label="Criança" value="Criança" />
           <Picker.Item label="Adulto" value="Adulto" />
           <Picker.Item label="Idoso" value="Idoso" />
          </Picker>
        </View>

         <Button title="Calcular IMC" color="#000" onPress={() => calcularIMC(peso, altura)}/>
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
    borderRadius: 10,
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
  textoMeio:{
    fontSize:20,
    alignSelf:'center'
  },
  input:{ 
    height: 50,
    width: 290, 
    borderWidth: 1,
    borderRadius:3,
    marginVertical:12,
    fontSize:20,
    color:"#8f8f8f",
    fontStyle:"italic",
    backgroundColor:"#EED5B7",
    borderColor:"#CDB79E",
  },
  desgraca:{
    height: 44,
    width: 290,
    borderWidth: 1,
    borderRadius:3,
    backgroundColor:"#EED5B7",
    borderColor:"#CDB79E",
    marginVertical: 12,
    color:'#8f8f8f',
  },
});
