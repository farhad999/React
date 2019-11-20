import React, {Fragment} from 'react'
import {BrowserRouter as Router, NavLink, Switch} from 'react-router-dom'
import SidebarContent from "../../Function/SidebarContent";

class Home extends React.Component {

    render() {
        return (
            <>
                <SidebarContent/>
            </>
        )
    }

}
export default Home;