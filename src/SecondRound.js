import React from 'react'
import InputForm from './InputForm'
export default class SecondRound extends React.Component {

    state={
        inputs: {
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
                <h1>Round 2</h1>
                <InputForm handleChange={this.handleChange}/>
            </div>
        )
    }


}