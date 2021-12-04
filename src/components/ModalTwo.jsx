import React from 'react';
import '../styles/ModalTwo.css';

const ModalTwo = (props) => {
    const saveInfo = () => {
        const desc = document.querySelector("#desc").value;
        const date = document.querySelector("#date").value;
        const data = {
            desc: desc,
            date: date
        };
        props.save(data);
        props.close();
    }

    const deleteTask = ()=>{
        props.delete()
        props.close();
    }
    return (
            <div className="modal-two">
                <button id="close-btn" onClick={props.close}><i class="fa fa-close"></i></button>
                <button id="delete-btn" onClick={deleteTask}><i class="fa fa-trash-o"></i></button>
                <h3>{props.title}</h3>
                <textarea name="description" id="desc" cols="35" rows="5" placeholder="Description"></textarea>
                <div className="input-container">
                    <input name="date" type="text" placeholder="date" id="date" />
                </div>
                <button id="save-btn" onClick = {saveInfo}>save</button>
            </div>
    )
}

export default ModalTwo
