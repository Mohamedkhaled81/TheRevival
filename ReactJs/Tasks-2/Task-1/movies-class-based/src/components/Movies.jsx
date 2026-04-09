import { Component } from "react";
import Movie from "./Movie";
import {v4 as uuid} from "uuid"


export default class Movies extends Component {
    constructor() {
        super()
        this.state = {movies: [], loadingStatus: true}
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7")
            .then((response) => response.json())
            .then((data) => this.setState({movies: [...data["results"]], loadingStatus: false}))
            .catch((err) => console.log(err));
    }

    render() {
        return (
            <div className="card-container">
                {this.state.loadingStatus ? <h1>Loading...</h1> : this.state.movies.map((movie) => {return <Movie key={uuid()} {...movie} ></Movie>})}
            </div>
        )
    }
}