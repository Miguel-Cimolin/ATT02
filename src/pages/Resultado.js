import React, { Component } from 'react';
import { StyleSheet, View , Text, ImageBackground } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import { StatusBar } from 'expo-status-bar';

export default class ExampleOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['IMC', 'CLASSIFICAÇÃO'],
      tableData: [
        ['< 18,5', 'Baixo Peso'],
        ['18,5 - 24,9', 'Peso Saudável'],
        ['25,0 - 29,9', 'Sobrepeso'],
        ['> 30,0', 'Obesidade']
      ]
    }
  }
 
  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.biruleibe}><StatusBar style="auto" />
          <ImageBackground style={styles.imagemFundo} source={require("./../assets/imagemfundo.jpg")} >
          <Text style={styles.titulo}>{"\n\t\t\t"}  ACADEMIA{"\n\t\t\t\t\t"}4137</Text>
          <Text style={styles.subtitulo}>! Meça seu índice de massa corporal !</Text>
          </ImageBackground>
        </View>

      <View style={styles.biruleibe2}>
        <Text style={styles.superior}>Seu IMC são de incriveis:</Text>
        <Text style={styles.imc}>XX</Text>
        <Text style={styles.inferior}>kg/m2</Text>
      </View>

        <View style={styles.tabeladoida}>
          <Table borderStyle={{borderWidth: 2, borderColor: '#CDB79E'}}>
            <Row data={state.tableHead} style={styles.tabelaHead} textStyle={styles.tabelaText}/>
            <Rows data={state.tableData} textStyle={styles.tabelaText}/>
          </Table>
        </View>
      </View>
    )
  }
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
    borderRadius: 10
  },
  tabeladoida:{ 
    flex: 1, 
    padding: 20, 
    paddingTop: 8, 
    backgroundColor: '#FAFAFA',
    width: 333,
    margin:'6%',
    borderRadius:10
  },
  tabelaHead:{ 
    height: 40, 
    backgroundColor: '#EED5B7' 
  },
  tabelaText:{ 
    margin: 10,
    fontStyle:"italic",
    alignSelf:'center',
    fontSize:15
  },  
  superior:{
    fontSize:15,
    fontStyle:"normal",
    alignSelf:'flex-start',
  },
  imc:{
    alignSelf:'center',
    fontSize:100
  },
  inferior:{
    fontSize:15,
    fontStyle:"normal",
    alignSelf:'center',
  },
});