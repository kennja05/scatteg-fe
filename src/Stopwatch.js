import Timer from 'react-compound-timer'
import React from 'react'

export default class Stopwatch extends React.Component {

    render() {
        return (
            <div className='timer'>
                <Timer initialTime={55000} direction="backward">
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

