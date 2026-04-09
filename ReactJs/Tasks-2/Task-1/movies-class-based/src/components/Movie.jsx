import { Component } from "react";

export default class Movie extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {original_title, poster_path, release_date} = this.props;
        const ogPath = "https://image.tmdb.org/t/p/w500/"
        const imgPath = ogPath + poster_path;
        return(
            <>
                <div className="card">
                    <img src={imgPath}></img>
                    <div className="card-text">
                        <p><b>Title:</b> {original_title}</p>
                        <p><b>release_date:</b> {release_date}</p>
                    </div>
                </div>
            </>
        )
    }
}