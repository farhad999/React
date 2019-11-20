import React, {Fragment} from 'react'

class MyModal extends React.Component {


    openModal = () => {
        this.setState({
            modalStatus: this.props.modalStatus,
        })
    };
    closeModal = () => {
        this.setState({
            modalStatus: false,
        })
    };

    render() {

        let modStatus = this.props.modalStatus;
        let {toggleModal} = this.props;

        if (modStatus) {
            return (

                <div className="my-modal container">
                    <div className="container">
                        <button onClick={toggleModal}>X
                        </button>
                        <h3>Post Title : {this.props.postData.title}</h3>
                        <hr></hr>
                        <p>{this.props.postData.body}</p>
                    </div>
                </div>


            )
        } else
            return (
                <div>

                    {this.props.children}
                </div>
            )
    }

}

export default MyModal;