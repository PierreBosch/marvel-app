import React, { useCallback, useRef, useState } from 'react';

import { Container, ResultList, ListItem } from './styles';
import { Form } from "@unform/web";
import { FormHandles } from '@unform/core';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';
import api from '../../services/api';
import { Link } from 'react-router-dom';

const options = [
    { value: 'comic', label: 'Comic' },
    { value: 'character', label: 'Personagem' },
  ]

const Home: React.FC = () => {
    const [characters, setCharacters] = useState([]);
    const [comics, setComics] = useState([]);

    const formRef = useRef<FormHandles>(null);

    const handleSearch = useCallback(async ({ term, type }) => {
        setComics([])
        setCharacters([]);

        if(type === 'character') {
            const { data } = await api.get(`http://gateway.marvel.com/v1/public/characters?nameStartsWith=${term}&apikey=a1bb7f16a2caefe0395e0b8c9e2d5b96&hash=835b17daf9917c3506dc8804b27b5520&ts=1610991631435`)
            
            if(data.data.results.length > 0) {
                setCharacters(data.data.results);
            }
        }else {
            const { data } = await api.get(`http://gateway.marvel.com/v1/public/comics?titleStartsWith=${term}&apikey=a1bb7f16a2caefe0395e0b8c9e2d5b96&hash=835b17daf9917c3506dc8804b27b5520&ts=1610991631435`)
            
            if(data.data.results.length > 0) {
                setComics(data.data.results);
            }
        }
    }, []);

    return (
        <Container>
            <Form ref={formRef} onSubmit={handleSearch}>
                    <Select 
                        name="type" 
                        options={options} 
                        defaultValue={options[1]}
                        className="basic-single"
                        classNamePrefix="select"
                    />
                    <Input placeholder="Pesquisar..." name="term" type="search" />
                <Button type="submit">Buscar</Button>
            </Form>

            {characters.length > 0 && (
                <ResultList>
                {characters && characters.map((character:any) => (
                    <ListItem>
                        <Link to={`character/${character.id}`}>
                        <span>{character.name}</span>
                        <img src={character.thumbnail.path + '.'+ character.thumbnail.extension} alt={character.name}/>
                        </Link>
                    </ListItem>
                ))}
            </ResultList>
            )}

            {comics.length > 0 && (
                <ResultList>
                {comics && comics.map((comic:any) => (
                    <ListItem>
                        <Link to={`comic/${comic.id}`}>
                            <span>{comic.title}</span>
                            <img src={comic.thumbnail.path + '.'+ comic.thumbnail.extension} alt={comic.title}/>
                        </Link>
                    </ListItem>
                ))}
            </ResultList>
            )}
        </Container>
    );
}

export default Home;