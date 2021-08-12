import React from 'react';
import {Message} from './Message';
import {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { Send } from "@material-ui/icons"
import { Input,Paper,Grid,InputAdornment,List,ListItem,ListItemAvatar, ListItemText, Divider, Avatar,Typography } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
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

    const [text, setText] = useState('');
    const [author, setAuthor] = useState('Mike');

    const [messages, setMessages] = useState([]);

    const handleSendMessage = () => {
        if (!author || !text) {
            return;
        }
        setMessages((state) => [...state, {id: new Date().getTime(), author: 'Mike', text: text}]);
        setAuthor('Mike');
        setText('');

    };
    useEffect(() => {
        if (messages.length === 0 || messages[messages.length - 1].author === 'Vasily') {
            return;
        }
        setTimeout(() => {
            setMessages([...messages, {
                id: new Date().getTime(),
                author: `Vasily`,
                text: `Hi, i'm bot Vasily`
            }]);

        }, 1500);


    }, [messages]);

    const onFormSubmit = e => {
        e.preventDefault();
        handleSendMessage();
    };

    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    return (
        <>
            <ThemeProvider theme={theme}>
                <div className={classes.root}>

                    <Grid container spacing={3}>

                        <Grid item xs={2}>
                            <Paper className={classes.paper}>
                                <List className={classes.root}>
                                    <ListItem alignItems="flex-start"
                                              button
                                              selected={selectedIndex === 0}
                                              onClick={(event) => handleListItemClick(event, 0)}>
                                        <ListItemAvatar>
                                            <Avatar alt="Vasiliy" src="/static/images/avatar/1.jpg" />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary="Vasiliy"
                                            secondary={
                                                <React.Fragment>
                                                    <Typography
                                                        component="span"
                                                        variant="body2"
                                                        className={classes.inline}
                                                        color="textPrimary"
                                                    >
                                                        Vasiliy
                                                    </Typography>
                                                    {" Hi friend!…"}
                                                </React.Fragment>
                                            }
                                        />
                                    </ListItem>
                                    <Divider variant="inset" component="li" />
                                    <ListItem alignItems="flex-start"
                                              button
                                              selected={selectedIndex === 1}
                                              onClick={(event) => handleListItemClick(event, 1)}>
                                        <ListItemAvatar>
                                            <Avatar alt="Elena" src="/static/images/avatar/2.jpg" />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary="Elena"
                                            secondary={
                                                <React.Fragment>
                                                    <Typography
                                                        component="span"
                                                        variant="body2"
                                                        className={classes.inline}
                                                        color="textPrimary"
                                                    >
                                                        Mike
                                                    </Typography>
                                                    {" Elena, i need…"}
                                                </React.Fragment>
                                            }
                                        />
                                    </ListItem>
                                    <Divider variant="inset" component="li" />
                                    <ListItem alignItems="flex-start"
                                              button
                                              selected={selectedIndex === 2}
                                              onClick={(event) => handleListItemClick(event, 2)}>
                                        <ListItemAvatar>
                                            <Avatar alt="John" src="/static/images/avatar/3.jpg" />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary="John"
                                            secondary={
                                                <React.Fragment>
                                                    <Typography
                                                        component="span"
                                                        variant="body2"
                                                        className={classes.inline}
                                                        color="textPrimary"
                                                    >
                                                        John
                                                    </Typography>
                                                    {' Hello mr N…'}
                                                </React.Fragment>
                                            }
                                        />
                                    </ListItem>
                                </List>
                            </Paper>
                        </Grid>
                        <Grid item xs>
                            <Paper className={classes.paper}>
                                <div>
                                    {messages.map(message =>
                                        <Message key={message.id} text={message.text} author={message.author}/>
                                    )}

                                    <form  onSubmit={onFormSubmit}>
                                        <Input
                                            autoFocus={true}
                                            value={text}
                                            fullWidth={true}
                                            endAdornment={<InputAdornment position="end">
                                                <Send type="submit" onClick={handleSendMessage} />
                                            </InputAdornment>}
                                            type="text"
                                            placeholder='Type message'
                                            onChange={(e) => setText(e.target.value)}/>
                                    </form>

                                </div>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            </ThemeProvider>



        </>

    );

}





