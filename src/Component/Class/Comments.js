import React from 'react'

class Comments extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            load: false,
        }
    }


    componentDidMount() {
        this.setState({
            load: true,
        })
    }

    render() {
        return (
            <div>
                {this.state.load ? 'completed' : 'loading'}
            </div>
        )
    }

}

export default Comments;