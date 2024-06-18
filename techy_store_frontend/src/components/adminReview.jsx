import React from 'react'

const AdminReview = (props) => {
    function handleClick(){
        props.onDelete(props.id);
    }

    return (
        <div className='listItem'>
            <div className='content'>
                <h1>{props.name}</h1>
                <p>{props.reviewBody}</p>
            </div>
            <div className='delete'>
                <button onClick={handleClick} ><i class="fas fa-trash"></i></button> 
            </div> 
        </div>
    )
}

export default AdminReview
