import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Add from './pages/Add';
import Detail from './pages/Detail';
import Edit from './pages/Edit';
import NotoFound from './pages/NotoFound';
import { ErrorBoundary } from 'react-error-boundary';
import Error from './pages/Error';

function App() {
    return (
        <ErrorBoundary FallbackComponent={Error}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/signin" component={Signin} />
                    <Route exact path="/add" component={Add} />
                    <Route exact path="/book/:id" component={Detail} />
                    <Route exact path="/edit/:id" component={Edit} />
                    <Route component={NotoFound} />
                </Switch>
            </BrowserRouter>
        </ErrorBoundary>
    );
}

export default App;
