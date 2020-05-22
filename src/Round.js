import React from 'react'
import InputForm from './InputForm'
export default class Round extends React.Component {

    postRound = () => {
        fetch('http://localhost:3000/rounds', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(this.state.inputs)
        })
    }

    render(){
        return(
            <div className='round'>
                <h1>Round {this.props.roundNumber} - {this.props.showLetter ? this.props.letter : "N/A"}</h1>
                <InputForm enabled={this.props.enabled} handleChange={this.handleChange}/>
            </div>
        )
    }


}