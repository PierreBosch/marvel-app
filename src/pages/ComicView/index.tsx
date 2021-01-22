import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import api from '../../services/api'

interface Comic {
    title: string;
}

const ComicView: React.FC = () => {
    const { id } = useParams<{id: string}>();
    const [ comic, setComic ] = useState<Comic>({} as Comic);
  
    useEffect(() => {
        api.get(`http://gateway.marvel.com/v1/public/comics/${id}?apikey=a1bb7f16a2caefe0395e0b8c9e2d5b96&hash=835b17daf9917c3506dc8804b27b5520&ts=1610991631435`)
        .then(response => {
            setComic(response.data.data.results[0])
        })
    }, [])

    return (
        <>
            <h1>{comic && comic.title}</h1>
        </>
    );
}

export default ComicView;