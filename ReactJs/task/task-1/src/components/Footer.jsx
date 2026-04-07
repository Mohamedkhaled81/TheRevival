import { Component } from "react";

export default class Footer extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        const {userName} = this.props;
        return(
            <div>
                <h1>Hello Footer</h1>
                <h2>My Name is: {userName}</h2>
            </div>
        )
    }
}