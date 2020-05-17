import Timer from 'react-compound-timer'
import React from 'react'

export default class Stopwatch extends React.Component {

    render() {
        return (
            <div className='timer'>
                <Timer 
                    lastUnit={'s'}
                    initialTime={this.props.initialTime}
                    direction="backward"
                    checkpoints={[
                        {
                            time: this.props.initialTime - 10000,
                            callback: () => console.log('Checkpoint A'),
                        },
                        {
                            time: this.props.initialTime - 20000,
                            callback: () => console.log('Checkpoint B'),
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

