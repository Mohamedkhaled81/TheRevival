const Movie = ({id, title, releaseYear}) => {
    return (
        <>
        <div>
            <h1>Id: {id}</h1>
            <h1>title: {title}</h1>
            <h1>releaseYear: {releaseYear}</h1>
        </div>
        <br></br>
        <hr></hr>
        </>
    )
}

export default Movie;