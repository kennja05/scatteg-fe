import React from 'react'
import InputForm from './InputForm'
export default class Round extends React.Component {

    

    render(){
        return(
            <div className='round'>
                <h1>Round {this.props.roundNumber} - {this.props.showLetter ? this.props.letter : "N/A"}</h1>
                <InputForm gameId={this.props.gameId} enabled={this.props.enabled}/>
            </div>
        )
    }


}