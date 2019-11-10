import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import './index.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        useNextVariats: true,
        fontFamily: "Noto Sans KR"
    }
})


ReactDOM.render(<MuiThemeProvider theme={theme}><Root/></MuiThemeProvider>, document.getElementById('app'));