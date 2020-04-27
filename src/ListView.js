import React from 'react'

const ListView = (props) => {
    
    console.log(props)
    return(
        
        props.loaded ? 
        <div className='list-view'>
            <h1>List: {props.lists[0].number}</h1>
            <ul className='categories-list'>
                {props.lists[0].categories.map((c, index) => <li key={c.id}>{index + 1}) {c.name}</li>)}
            </ul>



        </div>
        : 
        <div>
            Loading...
        </div>
    )
}

export default ListView