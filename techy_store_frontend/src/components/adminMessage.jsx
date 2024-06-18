import React from 'react'

const subject = {
    'fontSize': '2.5rem',
    'color': '#fff',
    'text-decoration': 'underline'
}

const AdminMessage = (props) => {
  function handleClick(){
    props.onDelete(props.id);
  }

  return (
    <div className='listItem'>
        <div className='content'>
            <h1>From, {props.name}</h1>
            <h1 style={subject}>{props.subject}</h1>
            <p>{props.messageBody}</p>
        </div>
        <div className='delete'>
            <button onClick={handleClick}><i class="fas fa-trash"></i></button> 
        </div> 
    </div>
  )
}

export default AdminMessage
