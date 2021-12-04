import React,{useEffect} from 'react';
import { Route, Switch} from "react-router-dom";
import Homepage from './Homepage';
import Board from './Board'

const App = () => {

    useEffect(()=>{
        let Users = localStorage.getItem('Users');
        if(!Users){
            Users = [];
            localStorage.setItem('Users',JSON.stringify(Users));
        }

    },[]);

    return (
        <Switch>
            <Route path="/" component={Homepage} exact />
            <Route path="/board" component={Board} />
        </Switch>

    )
}

export default App
