import React, {Fragment} from 'react'
import axios from 'axios'
import {Link} from "react-router-dom";
import MyModal from "./MyModal";
import Loading from "../Function/Loading";

class Posts extends React.Component {

    constructor() {
        super();
        this.state = {
            modalStatus: false,
            postData: {title: 'farhad'},
            posts: [],
            users: [],
        };
    }

    toggleModal = (data) => {
        this.setState(
            {
                modalStatus: !this.state.modalStatus,
                postData: data,
            }
        );

        
        // alert(this.state.postData.title);
    };


    componentDidMount() {

        let getUserAccount = () => {
            return axios.get('https://jsonplaceholder.typicode.com/users');
        };

        let getPosts = () => {
            return axios.get('https://jsonplaceholder.typicode.com/posts');
        };

        axios.all([getUserAccount(), getPosts()])
            .then(axios.spread((user, post) => {
                    this.setState({
                        users: user.data,
                        posts: post.data,
                    })
                }
            ));

    }

    render() {

        let load = this.state.posts.length;

        if (load <= 0) {
            return (
                <Fragment>
                    <Loading/>
                </Fragment>
            )
        } else {
            return (
                <Fragment>
                    <MyModal postData={this.state.postData} modalStatus={this.state.modalStatus}
                             toggleModal={this.toggleModal}>

                        <ul>
                            {this.state.posts.map((item, id) => {
                                return (
                                    <li key={id}>
                                        <div className="card text-center mt-2">
                                            <div className="card-header">
                                                <p>Post No.{item.id}</p>
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title">Special title treatment</h5>
                                                <p className="card-text">With supporting text below as a natural lead-in
                                                    to
                                                    additional content.</p>
                                                <button onClick={() => {
                                                    this.toggleModal(item)
                                                }}
                                                        className="btn btn-primary">Full
                                                    Post
                                                </button>
                                            </div>
                                            <div className="card-footer text-muted">
                                                2 days ago
                                            </div>
                                        </div>

                                    </li>
                                )
                            })}
                        </ul>
                    </MyModal>
                </Fragment>
            )
        }

    }


}

export default Posts;