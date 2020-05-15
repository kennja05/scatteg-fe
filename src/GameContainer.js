import React from 'react'
import ListView from './ListView'
import Round from './Round'

export default class GameContainer extends React.Component {

    state = {
        listArray: undefined, 
        loaded: false
    }

    componentDidMount(){
        fetch('http://localhost:3000/randomlist')
            .then(res => res.json())
            .then(lists=> this.setState({listArray: lists, loaded: true}))
    }

    generateRandomLetter = () => {
        const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'W']
        const randIndex = Math.floor(Math.random() * 21)
        return letters[randIndex]
    }

    render(){
        return(
            <div className='game-container'>
                <ListView lists={this.state.listArray} loaded={this.state.loaded}/>
                <Round roundNumber={'1'} generateRandomLetter={this.generateRandomLetter}/>
                <Round roundNumber={'2'} generateRandomLetter={this.generateRandomLetter}/>
                <Round roundNumber={'3'} generateRandomLetter={this.generateRandomLetter}/>
            </div>
        )
    }


}