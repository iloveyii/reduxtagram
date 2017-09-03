import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import css from './styles/style.styl';

import Connected from './components/Connected';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';
import VideoGrid from './components/VideoGrid';
import SingleVideo from './components/SingleVideo';

import store, { history } from './store';

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={Connected}>
                <IndexRoute component={PhotoGrid}></IndexRoute>
                <Route path="/view/:postId" component={Single}></Route>
                <Route path="/video" component={VideoGrid}></Route>
                <Route path="/video/:fileName" component={SingleVideo}></Route>
            </Route>
        </Router>
    </Provider>
)
render(router, document.getElementById('root'));