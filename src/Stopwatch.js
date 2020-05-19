import Timer from 'react-compound-timer'
import React from 'react'

export default class Stopwatch extends React.Component {

    render() {
        return (
            <div className='timer'>
                <Timer 
                    lastUnit={'s'}
                    //initialTime={this.props.initialTime} - will change it back to this later
                    initialTime={30000}
                    direction="backward"
                    checkpoints={[
                        {
                            time: 20000,
                            //time: this.props.initialTime - 90000, - will change it back to this later
                            callback: () => this.props.incrementRound(),
                        },
                        {
                            time: 10000,
                            //time: this.props.initialTime - 180000, -- will change it back to this later
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

