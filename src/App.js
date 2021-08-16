import React from 'react';
import {ChatList, MessageList} from './components';
import {makeStyles} from '@material-ui/core/styles';
import {Paper, Grid} from '@material-ui/core';
import {createTheme, ThemeProvider} from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createTheme({
    palette: {
        primary: {
            main: green[500],
        },
        secondary: {
            main: purple[500],
        },
    },
});

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export function App() {

    const classes = useStyles();

    return (
        <>
            <ThemeProvider theme={theme}>
                <div className={classes.root}>
                    <Grid container spacing={3}>
                        <Grid item xs={2}>
                            <Paper className={classes.paper}>
                                <ChatList/>
                            </Paper>
                        </Grid>
                        <Grid item xs>
                            <Paper className={classes.paper}>
                                <MessageList/>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            </ThemeProvider>
        </>
    );
}






