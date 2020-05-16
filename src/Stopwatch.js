import Timer from 'react-compound-timer'
import React from 'react'

export default class Stopwatch extends React.Component {

    render() {
        return (
            <div className='timer'>
                <Timer lastUnit={'s'} initialTime={270000} direction="backward">
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

