import React from 'react'

const ListView = (props) => {
    
    return(
        
        props.loaded ? 
        <div className='list-view'>
            <h1>List: {props.list.number}</h1>
            <ul className='categories-list'>
                {props.list.categories.map((c, index) => <li key={c.id}>{index + 1}) {c.name}</li>)}
            </ul>
        </div>
        : 
        <div>
            Loading...
        </div>
    )
}

export default ListView