import React, {useEffect, useState} from "react";
import instance from "./../../axios";
import "./Banner.css";
import requests from "../../requests";

const Banner = () => {
    const [movie, setMovie] = useState([])
    useEffect(() => {
        async function fetchData() {
            const request = await instance.get(requests.fetchNetflixOriginals)
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)])
            return request
        }
        fetchData()
        // eslint-disable-next-line
    },[])
    console.log(movie)

    //функция для сокращения длины описания фильма
    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + ", ..." : str
    }
    return (
        <header className="banner" style={{
            backgroundSize: 'cover',
            backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
            backgroundPosition: 'center center',
        }} >
            <div className="banner__contents">
                <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h2 className="banner__description">{truncate(movie?.overview, 150)}</h2>
            </div>
            <div className="banner--fadeBottom" />
        </header>
    )
}

export default Banner