import React from 'react';

import { Switch } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import CharacterView from '../pages/CharacterView';
import ComicView from '../pages/ComicView';
import Route from './Route';

const Routes: React.FC= () => (
    <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/dashboard" isPrivate exact component={Home} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/character/:id" isPrivate exact component={CharacterView} />
        <Route path="/comic/:id" isPrivate exact component={ComicView} />
    </Switch>
)

export default Routes;