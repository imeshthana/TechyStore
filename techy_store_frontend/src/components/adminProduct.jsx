import React from 'react'

const AdminProduct = (props) => {
    
    function handleEdit(){
        props.onEdit(props.product);
    }

    function handleDelete(){
        props.onDelete(props.id);
    }

    return (
        <div className='listItem'>
            <h1>{props.productName}</h1>
            <p>{props.price}</p>
            <button onClick={handleEdit}><i class="fas fa-pen"></i></button>
            <button onClick={handleDelete}><i class="fas fa-trash"></i></button>
        </div>
    )
}

export default AdminProduct
