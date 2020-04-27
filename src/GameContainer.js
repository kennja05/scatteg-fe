import React from 'react'
import ListView from './ListView'

export default class GameContainer extends React.Component {

    state = {
        list: undefined, 
        loaded: false
    }

    componentDidMount(){
        fetch('http://localhost:3000/randomlist')
            .then(res => res.json())
            .then(l => this.setState({list: l, loaded: true}))
    }

    render(){
        return(
            <ListView list={this.state.list} loaded={this.state.loaded}/>
        )
    }


}