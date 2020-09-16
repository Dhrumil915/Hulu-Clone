import React, { useEffect, useState } from 'react';
import "./Result.css";
import VideoCard from './VideoCard';
import axios from "./axios";
import request from './request';
import FlipMove from 'react-flip-move';

function Result({ selectedOption }) {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const req = await axios.get(selectedOption);
            setMovies(req.data.results);
            return req


        }
        fetchData();
    }, [selectedOption]);
    return (
        <div className="result">
            <FlipMove>
                {movies.map((movie) => (
                    <VideoCard movie={movie} />
                ))}
            </FlipMove>

        </div>
    );
}

export default Result;
