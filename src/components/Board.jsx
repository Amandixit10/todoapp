import React, { useEffect, useState } from 'react';
import axios from "axios";
import List from './List';
import ModalOne from './ModalOne';
import '../styles/Board.css';

const Board = () => {
    const [Cards, setCards] = useState([]);
    const [showModal,setShowModal] = useState(false);
    const[imgUrl,setImgUrl] = useState('');
    useEffect(() => {
        axios.get('https://picsum.photos/id/77/info')
            .then((res) => setImgUrl(res.data.download_url));
    }, []);
    const closeModal = ()=>{
        setShowModal(false);
    };

    const openModal = ()=>{
        setShowModal(true);
    };

    const addListCard = (text) => {
        setCards((prev)=>{
            return [...prev,text]
        })
    };

    const getListName = (text)=>{
        addListCard(text);
    };
    return (
        <>
            {showModal?<ModalOne close = {closeModal} show = {showModal} getData = {getListName} /> : null}
            {showModal?<div className="overlay"></div> : null}
            <div id="board">
                <header className="board-header">
                    <h2>TasksBoard</h2>
                    <img id='profile-img' src={imgUrl} alt="pic" />
                </header>
                <main className="board-container">
                    {
                        Cards.map((name,index) => {
                            return (
                                <List key={index} text = {name} />
                            )
                        })
                    }
                </main>
                <button className="add-list-btn" onClick={openModal}>
                    <i className="fa fa-plus-circle"></i>
                </button>
            </div>
        </>
    )
}

export default Board;
