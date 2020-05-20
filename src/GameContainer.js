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
        list: 0,
        gameId: undefined
    }

    componentDidMount(){
        fetch('http://localhost:3000/randomlist')
            .then(res => res.json())
            .then(lists=> this.setState({listArray: lists, loaded: true})
        )   
        this.setState({
            letters: this.generateRandomLetters()
        })
        this.startGame()
    }

    startGame = () => {
        const gameObj = {username: 'anonymous'}
        fetch('http://localhost:3000/games', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(gameObj)
        })
        .then(res => res.json())
        .then(game => this.setState({gameId: game.id})) //will use this line to place the new game ID into state - hardcoding for now
    }

    createRounds = () => {
        //show letter tells the component to display that rounds letter if we're in the middle of that round or if the round has already been completed
        //enabled ensures that only the form for the current round is editable
        return ['1', '2', '3'].map(num => <Round showLetter={parseInt(num) <= parseInt(this.state.round)} enabled={this.state.round === num} key={num} roundNumber={num} letter={this.state.letters[parseInt(num)-1]}/>) 
    }

    incrementRound = () => {
        const newRound = parseInt(this.state.round) + 1
        this.setState({
            round: newRound.toString(),
            list: this.state.list + 1
        })
    }

    generateRandomLetters = () => {
        const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'W'];
        const myArr = [];
        for (let i = 0; i < 3; i++) {
            let randIndex = Math.floor(Math.random() * 21);
            myArr.push(letters[randIndex])
        }
        return myArr
    }

    render(){
        console.log(this.state.gameId)
        return(
            <div className='game-container'>
                <ListView list={this.state.loaded && this.state.listArray[this.state.list]} loaded={this.state.loaded}/>
                {/* sets up three separate rounds */}
                {this.createRounds()} 
                {this.state.gameId !== undefined && <Stopwatch incrementRound={this.incrementRound} initialTime={270000}/>}
            </div>
        )
    }


}