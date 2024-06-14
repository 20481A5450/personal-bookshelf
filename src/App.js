import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import BookSearch from './components/BookSearch';
import PersonalBookshelf from './components/PersonalBookshelf';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={BookSearch} />
                <Route path="/bookshelf" component={PersonalBookshelf} />
            </Switch>
        </Router>
    );
}

export default App;
