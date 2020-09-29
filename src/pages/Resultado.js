import React from 'react';
import { StyleSheet, View , Text, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';


export function Resultado(props) {
  
  const {IMCconversao} = props.route.params;

  if (IMCconversao<=18.5) {
    var result = "BAIXO PESO";
  }else if (IMCconversao>18.5 && IMCconversao<=24.9) {
    var result = "SAUDÁVEL";
  } else if (IMCconversao>=25 && IMCconversao<=29.9) {
    var result = "SOBREPESO";
  } else if (IMCconversao>30) {
    var result = "OBESIDADE";
  }

    return (
     <View style={styles.container}>
       <View style={styles.biruleibe}><StatusBar style="auto" />
         <ImageBackground style={styles.imagemFundo} source={require("./../assets/imagemfundo.jpg")} >
         <Text style={styles.titulo}>{"\n\t\t\t"}  ACADEMIA{"\n\t\t\t\t\t"}FIGHT</Text>
         <Text style={styles.subtitulo}>! Meça seu índice de massa corporal !</Text>
         </ImageBackground>
       </View>

     <View style={styles.biruleibe2}>
       <Text style={styles.superior}>Seu IMC são de incriveis:</Text>
       <Text style={styles.imc}>{IMCconversao.toFixed(2)}</Text>
       <Text style={styles.inferior}>kg/m2{"\n"}</Text>
      <Text style={styles.resultadinho}>{result}</Text>
     </View>

     <View style={styles.biruleibe3}>
        <Text style={styles.tabelaSup}>IMG(kg/m2){"\t\t"}Classificação</Text>
        <Text style={styles.tabelaInf}>
          {"\t"}{"<"} 18,5{"\t\t\t\t"}Baixo{"\n\n"}
          {"\t"}18,5 - 24,9{"\t\t\t"}Saudável{"\n\n"}
          {"\t"}25,0 - 29,9{"\t\t\t"}Sobrepeso{"\n\n"}
          {"\t"}{">"} 30,0{"\t\t\t\t"}Obesidade{"\n\n"}
        </Text>
      </View>
    </View>
   )
  }

 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EED5B7',
    alignItems: 'center',
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
    width: '70%',
    height: '31%',
    marginTop:20,
    paddingHorizontal:40,
    paddingVertical:30,
    justifyContent: 'flex-start',
    alignItems:'center',
    shadowOffset:{width:1,height:-5},
    shadowOpacity:0.4,
    shadowColor:"#f333",
    shadowRadius:4,
    elevation: 5,
    borderRadius: 10,
  },
  biruleibe3:{
    backgroundColor: '#8B7D6B',
    width: '90%',
    height: '40%',
    marginTop:20,
    marginBottom: 10,
    borderTopEndRadius:30,
    borderTopStartRadius:30,
    padding:10,
    paddingBottom:10,
  },
  tabelaSup:{
    fontSize:22,
    alignSelf:'center',
    fontStyle:'italic',
    backgroundColor:'#8B7D6B',
    padding:10,
  },
  tabelaInf:{
    fontSize:22,
    alignSelf:'center',
    backgroundColor:'#CDB79E', 
    paddingBottom:2
  },
  resultadinho:{
    color: "#f33",
    fontSize:25,
    alignSelf:'center',
    fontWeight:"bold",
  },
  superior:{
    fontSize:15,
    fontStyle:"normal",
    alignSelf:'flex-start',
  },
  imc:{
    alignSelf:'center',
    fontSize:65,
  },
  inferior:{
    fontSize:15,
    fontStyle:"normal",
    alignSelf:'center',
  },
});