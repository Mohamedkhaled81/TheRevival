import { useState } from "react";
import DUMMY_DATA from "../DUMMY_DATA";
import { v4 as uuid } from "uuid";
import Movie from "./Movie";


const Movies = () => {
    const [moviesData] = useState(DUMMY_DATA);
    return (
        <>
        <div>
            {moviesData.map((movie) => {return <Movie key={uuid()} {...movie}></Movie>})}
        </div>
        </>
    )
}

export default Movies;