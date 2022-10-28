import React from 'react';
import './ProModal.css';


const ProModal = ({closeModal}) => {
  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
            <div className='titleCloseBtn'>
                <button onClick={() => closeModal(false)}> X </button>
            </div>
            
            <div className="title">
                <h1>Profile pic</h1>
            </div>
            <div className="body">
                <p> Admin <br/> Name <br/> Title <br/> e-mail </p>
            </div>
            <div className="footer">
                <button>View Details</button>
            </div>
        </div>
    </div>
  )
}

export default ProModal