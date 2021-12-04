import React, { useState } from 'react';
import ModalTwo from './ModalTwo';

const List = (props) => {
    const [value,setValue] = useState("");
    const [tasks,setTasks] = useState([]);
    const [showEdit,setShowEdit] = useState(false);
    const [currentIdx,setCurrentIdx] = useState(0);

    const handleChange = (e)=>{
        setValue(e.target.value);
    };

    const addTask = ()=>{
        const info = {
            title : value,
            date : '',
            desc : ''
        }
        setTasks((prev)=>{
            return [...prev,info];
        });
        setValue("");
    };

    const handleCheck = (e)=>{
        const chkbtn = e.target;
        if(chkbtn.classList.contains('fa-circle-thin')){
            chkbtn.classList.replace('fa-circle-thin','fa-check-circle');
            chkbtn.nextSibling.style.textDecoration = "line-through";
        }else{
            chkbtn.classList.replace('fa-check-circle', 'fa-circle-thin');
            chkbtn.nextSibling.style.textDecoration = "none";
        }
    };

    const closeEdit = ()=>{
        setShowEdit(false);
    };

    const handleEdit = (e) => {
        setShowEdit(true);
        const index = e.target.getAttribute("id");
        setCurrentIdx(index);
    };

    const handleSave = (data)=>{
        let newTasks = tasks;
        newTasks[currentIdx].date = data.date;
        newTasks[currentIdx].desc = data.desc;
        setTasks(newTasks);
    };

    const handleDelete = ()=>{
        let newTasks = tasks.filter((task,index)=>{
            return(currentIdx!=index)
        });
        setTasks(newTasks);
    }
    return (
        <>
        {showEdit? <ModalTwo  title={tasks[currentIdx].title} close={closeEdit} save = {handleSave} delete={handleDelete}/> : null }
        {showEdit ? <div className="overlay"></div> : null}
        <div className="list-card">
            <h3>{props.text}</h3>
            <div className="input-container">
                <input type="text"  placeholder="New Task" id="task-item" value={value} onChange={handleChange}/>
                <button className="add-task-btn" onClick = {addTask}>
                    <i className="fa fa-plus-circle"></i>
                </button>
            </div>
            <div className="task-container">
                <ul className="task-list">
                    {
                        tasks.map((task,index) => {
                            return (
                                <div>
                                    <div className="task-list-item">
                                        <i className="fa fa-circle-thin" onClick={(e) => handleCheck(e)}></i>
                                        <li>{task.title}</li>
                                        <i className="fa fa-edit" id={index} onClick={handleEdit}></i>
                                    </div>
                                    <div className="task-info">
                                        <p className="task-desc">{task.desc}</p>
                                        <p className="task-date"><em>{task.date}</em></p>
                                    </div>
                                </div>
                            );
                        })
                    }
                </ul>
            </div>
        </div>
        </>
    )
}

export default List
