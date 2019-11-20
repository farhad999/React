import React, {Fragment} from 'react'
import SidebarContent from "../Function/SidebarContent";
import MyModal from "./MyModal";


class About extends React.Component {

    constructor() {
        super();
        this.state = {
            modalStatus: false,
        };
        //  this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal = () => {
        this.setState({
            modalStatus: !this.state.modalStatus,
        })
    };


    render() {
        return (
            <React.Fragment>

                <h1>About Section</h1>
                <hr></hr>

            </React.Fragment>
        )
    }

}

export default About;