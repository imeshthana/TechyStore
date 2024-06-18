import React from 'react'

const UserOrders = (props) => {    
    
    function handleClick(){
        props.onDelete(props.id);
    }
    
    return (
    <div className='listItem'>
        <h1>{props.item}</h1>
        <h2><i class="fas fa-multiply"></i>{props.count}</h2>
        <p>{props.price}</p>
        <button onClick={handleClick}><i class="fas fa-trash"></i></button>
    </div>
  )
}

export default UserOrders
