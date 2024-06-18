import React from 'react'

const AdminOrder = (props) => {

    function handleClick(){
        props.onDelete(props.id);
    }

    return (
        <div className='listItem'>
            <div className='content'>
                <h1>{props.userName}</h1>
                <div classname='orderflex'>
                    <p>Rs.{props.totalPrice}</p>
                    <p>Address: {props.address}</p>
                    <p>Card Number: {props.cardNumber}</p>
                </div>
            </div>
            <div className='delete'>
                <button onClick={handleClick}><i class="fas fa-trash"></i></button>
            </div> 
        </div>
    )
}

export default AdminOrder