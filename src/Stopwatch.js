import Timer from 'react-compound-timer'
import React from 'react'

export default class Stopwatch extends React.Component {

    render() {
        console.log(this.props)
        return (
            <div className='timer'>
                <Timer 
                    lastUnit={'s'}
                    initialTime={this.props.initialTime}
                    direction="backward"
                    checkpoints={[
                        {
                            time: this.props.initialTime - 90000,
                            callback: () => this.props.incrementRound(),
                        },
                        {
                            time: this.props.initialTime - 180000,
                            callback: () => this.props.incrementRound(),
                        },
                        {
                            time: 0,
                            //will want a function that will post the game
                            callback: () => (console.log('gameOvaaa'))
                        }
                    ]}
                    >
                    {() => (
                        <React.Fragment>
                            <Timer.Seconds /> seconds
                        </React.Fragment>
                    )}
                </Timer>
            </div>
        )
    }
}

