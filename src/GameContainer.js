import React from 'react'
import ListView from './ListView'
import FirstRound from './FirstRound'
import SecondRound from './SecondRound'
import ThirdRound from './ThirdRound'

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

    render(){
        return(
            <div className='game-container'>
                <ListView lists={this.state.listArray} loaded={this.state.loaded}/>
                <FirstRound />
                <SecondRound />
                <ThirdRound />
            </div>
        )
    }


}