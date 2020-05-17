import React from 'react'
import InputForm from './InputForm'
export default class Round extends React.Component {

    state={
        inputs: { //there's gotta be a better way...
            first: '',
            second: '',
            third: '',
            fourth: '',
            fifth: '',
            sixth: '',
            seventh: '',
            eight: '', 
            ninth: '',
            thenth: '',
            eleventh: '',
            twelfth: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return(
            <div className='round'>
                <h1>Round {this.props.roundNumber} - {this.props.letter}</h1>
                <InputForm enabled={this.props.enabled} handleChange={this.handleChange}/>
            </div>
        )
    }


}