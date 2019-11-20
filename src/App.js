import React from 'react';
import './App.css';
import Navbar from "./Component/Class/Navbar";
import {BrowserRouter, Route, Switch,} from "react-router-dom";
import About from "./Component/Class/About";
import Home from "./Component/Class/Home/Home";
import './css/my.css'
import Posts from "./Component/Class/Posts";
import Photos from "./Component/Class/Photos";

function App() {


    return (
        <BrowserRouter>

            <div className="container-fluid">

                <Navbar/>
                <hr>

                </hr>
                <div className="container">
                    <Switch>

                        <Route exact path="/about">
                            <About/>
                        </Route>
                        <Route path="/photos">
                            <Photos/>
                        </Route>
                        <Route path="/contact">
                            <div>
                                <h1>Contact section</h1>
                                <hr></hr>
                            </div>
                        </Route>
                        <Route exact path="/">
                            <Posts/>

                        </Route>


                    </Switch>
                </div>

            </div>
        </BrowserRouter>
    );


}

export default App;
