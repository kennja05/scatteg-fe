import React from 'react'
import ListView from './ListView'
import Round from './Round'
import Stopwatch from './Stopwatch'

export default class GameContainer extends React.Component {

    state = {
        listArray: undefined, 
        letters: [],
        loaded: false,
        round: '1',
        list: 0
    }

    componentDidMount(){
        fetch('http://localhost:3000/randomlist')
            .then(res => res.json())
            .then(lists=> this.setState({listArray: lists, loaded: true}))
            
        let letterArray = []
        for (let i = 0; i < 3; i++){
            let randLetter = this.generateRandomLetter()
            letterArray.push(randLetter)
        }    
        this.setState({
            letters: letterArray
        })
    }

    createRounds = () => {
        return ['1', '2', '3'].map(num => <Round showLetter={parseInt(num) <= parseInt(this.state.round)} enabled={this.state.round === num} key={num} roundNumber={num} letter={this.state.letters[parseInt(num)-1]}/>) 
    }

    incrementRound = () => {
        const newRound = parseInt(this.state.round) + 1
        this.setState({
            round: newRound.toString(),
            list: this.state.list + 1
        })
    }

    generateRandomLetter = () => {
        const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'W']
        const randIndex = Math.floor(Math.random() * 21)
        return letters[randIndex]
    }

    render(){
        return(
            <div className='game-container'>
                <ListView list={this.state.loaded && this.state.listArray[this.state.list]} loaded={this.state.loaded}/>
                {/* sets up three separate rounds */}
                {this.createRounds()} 
                <Stopwatch incrementRound={this.incrementRound} initialTime={270000}/>
            </div>
        )
    }


}