import React from 'react'
import axios from 'axios'
import Loading from "../Function/Loading";
import {Link} from "react-router-dom";

class Photos extends React.Component {

    constructor() {
        super();
        this.state = {
            photos: [],
        }

    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then((response) => {
                this.setState({
                    photos: response.data,
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        const {photos} = this.state;

        if (photos.length <= 0) {
            return (
                <Loading/>
            )
        } else

            return (
                <div>
                    <ul>
                        {photos.map((item) => {
                            return (
                                <li style={{display: 'inline'}} key={item.id}>
                                    <img src={item.thumbnailUrl}/>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )
    }

}

export default Photos