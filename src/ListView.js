import React from 'react'

export default class ListView extends React.Component {

    state = {
        list: undefined,
        loaded: false
    }

    componentDidMount(){
        fetch('http://localhost:3000/randomlist')
            .then(res => res.json())
            .then(l => this.setState({list: l, loaded: true}))
    }

    render(){
        return(
            this.state.loaded ? 
            <div>
                <h1>List: {this.state.list.title}</h1>
                <ul>
                    {this.state.list.categories.map(cat => <li key={cat.id}>{cat.name}</li>)}
                </ul>


            </div>
            :
            <div>byebye</div>
        )
    }



}