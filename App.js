import React, { Component } from 'react'
import { StyleSheet, Text, View, Alert } from 'react-native'
import params from './src/params'
import MineField from './src/components/MineField'
import Header from './src/components/Header'
import  LevelSelection from './src/screens/LevelSelection'

import {
  createMinedBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines,
  invertFlag,
  flagsUsed
} from './src/Funcs'


export default class App extends Component {
 
  constructor(props) {
    super(props)
    this.state = this.createState()
  }

  minesAmount = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return Math.ceil(cols * rows * params.difficultLevel)
  }
//cria um novo estado
  createState = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return {
      board: createMinedBoard(rows, cols, this.minesAmount()),
      won: false,
      lost : false,
      showLevelSelection: false,
      condicao : false 
    }
  }

  onOpenField = ( row, column ) =>{
    
    const board = cloneBoard(this.state.board)
    openField(board, row, column)
    const lost = hadExplosion(board)
    const won = wonGame(board)

    if (lost) {
      showMines(board)
      Alert.alert('Perdeeeeuuu ! ..','BOOOMMM ! ')
    }
    if (won) {
      Alert.alert('Parabens.','Você venceu !')
    }
    this.setState({ board, lost, won })
  }

  onSelectField = (row, column ) => {
    const board = cloneBoard(this.state.board)
    invertFlag(board, row, column)
    const won = wonGame(board)

    if (won) {
      Alert.alert('Parabens.','Você venceu !')
    }
    this.setState({ board, won })
  }

  onLevelSelected = level => {
    params.difficultLevel = level
    this.setState(this.createState())
  }

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.containerLabel}>Campo Minado</Text>
      
        <LevelSelection isVisible={this.state.showLevelSelection}
          onLevelSelected={this.onLevelSelected}
          onCancel={() => this.setState({ showLevelSelection: false })} />
          
        <Header flagsLeft={this.minesAmount() - flagsUsed(this.state.board)}
          onNewGame={() => this.setState(this.createState())} 
          onFlagPress={() => this.setState({ showLevelSelection: true })} />
        
        <View style={styles.board}>
          <MineField board={this.state.board} 
            onOpenField={this.onOpenField}
            onSelectField={this.onSelectField} />
      </View>
    
    </View>
    )
  }
}

//usa flex box para stilisar 
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
  },
  containerLabel:{
    fontSize: 14,
    color: '#DCDCDC',
    backgroundColor:'#363636',
    flex:0,
    paddingLeft: 20,
    justifyContent:'center',
  },
  board:{
    alignItems:'center',
    backgroundColor:'#AAA'
  }
})