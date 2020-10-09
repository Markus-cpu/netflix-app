import React, {useEffect, useState} from "react";
import "./Row.css";
import instance from "../../axios";

const base_url = 'https://image.tmdb.org/t/p/original/'

const Row = ({ title, fetchUrl, isLargeRow }) => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await instance.get(fetchUrl)
            setMovies(request.data.results)
            return request
        }
        fetchData()
    }, [fetchUrl])
    console.table(movies)
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map(movie => (
                    <img
                        key={movie.id}
                        className="row__poster"
                        src={`${base_url}${isLargeRow 
                            ? movie.poster_path 
                            : movie.backdrop_path}`}
                        alt={movie.name}
                    />
                ))}
            </div>
        </div>
    )
}

export default Row