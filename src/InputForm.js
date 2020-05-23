import React from 'react'

export default class InputForm extends React.Component {

    state={
            first: '',
            second: '',
            third: '',
            fourth: '',
            fifth: '',
            sixth: '',
            seventh: '',
            eighth: '', 
            ninth: '',
            thenth: '',
            eleventh: '',
            twelfth: ''
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps.enabled === this.props.enabled) // will use something about this interaction to determine when to post the rounds
        //will also need to consider when to post roundLists - probably immediately following after posting the round
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    //submit round based on timed events
    postRound = () => {
        const {gameId} = this.props
        const roundObj = {...this.state, gameId: gameId, score: 0}
        fetch('http://localhost:3000/rounds', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(roundObj)
        })
    }

    render(){
        const {first, second, third, fourth, fifth, sixth, seventh, eighth, ninth, tenth, eleventh, twelfth} = this.state
        return(
            <form className='input-form'>
                <fieldset disabled={!this.props.enabled}>

                    <div>
                        <label>1)  </label>
                        <input onChange={this.handleChange} value={first} name='first' type='text' />   
                    </div>
                    
                    <div>
                        <label>2) </label>
                        <input onChange={this.handleChange} value={second} name='second' type='text' />
                    </div>
                    
                    <div>
                        <label>3) </label>
                        <input onChange={this.handleChange} value={third} name='third' type='text' />
                    </div>
                    
                    <div>
                        <label>4) </label>
                        <input onChange={this.handleChange} value={fourth} name='fourth' type='text' />
                    </div>
                    
                    <div>
                        <label>5) </label>
                        <input onChange={this.handleChange} value={fifth} name='fifth' type='text' />
                    </div>
                    
                    <div>
                        <label>6) </label>
                        <input onChange={this.handleChange} value={sixth} name='sixth' type='text' />
                    </div>
                    
                    <div>
                        <label>7) </label>
                        <input onChange={this.handleChange} value={seventh} name='seventh' type='text' />
                    </div>
                    
                    <div>
                        <label>8) </label>
                        <input onChange={this.handleChange} value={eighth} name='eighth' type='text' />
                    </div>
                    
                    <div>
                        <label>9) </label>
                        <input onChange={this.handleChange} value={ninth} name='ninth' type='text' />
                    </div>
                    
                    <div>
                        <label>10) </label>
                        <input onChange={this.handleChange} value={tenth} name='tenth' type='text' />
                    </div>
                    
                    <div>
                        <label>11) </label>
                        <input onChange={this.handleChange} value={eleventh} name='eleventh' type='text' />
                    </div>
                    
                    <div>
                        <label>12) </label>
                        <input onChange={this.handleChange} value={twelfth} name='twelfth' type='text' />
                    </div>
                </fieldset>
            </form>
        )
    }
}