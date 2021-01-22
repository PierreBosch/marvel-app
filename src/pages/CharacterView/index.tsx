import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api'


interface Character {
    [key: string]: string;
}

const CharacterView: React.FC = () => {
    const { id } = useParams<{id: string}>();
    const [ character, setCharacter ] = useState<Character>({} as Character);
  
    useEffect(() => {
        api.get(`http://gateway.marvel.com/v1/public/characters/${id}?apikey=a1bb7f16a2caefe0395e0b8c9e2d5b96&hash=835b17daf9917c3506dc8804b27b5520&ts=1610991631435`)
        .then(response => {
            setCharacter(response.data.data.results[0])
        })
    }, [])

    return (
        <>
            <h1>{character && character.name + character.description}</h1>
        </>
    );
}

export default CharacterView;