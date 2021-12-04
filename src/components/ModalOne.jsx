import React from 'react'
import '../styles/ModalOne.css';
const ModalOne = (props) => {
    const passText = ()=>{
        const text = document.querySelector('#list-name').value;
        props.getData(text);
        props.close();
    }
    return (
        <div className="modal-one">
            <button id="close-btn" onClick={props.close}><i class="fa fa-close"></i></button>
            <div className="input-container">
                <input type="text" placeholder="Enter list name.." id="list-name" />
            </div>
            <button id="save-btn" onClick = {passText}>save</button>
        </div>
    )
}

export default ModalOne;
