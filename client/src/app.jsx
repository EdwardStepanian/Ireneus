import React from 'react';
import ReactDom from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { browserHistory, Router } from 'react-router';
import routes from './routes.js';

const root = document.getElementById('root');



ReactDom.render((
    <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Router history={browserHistory} routes={routes} />
    </MuiThemeProvider>),
    root,
);