import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        background: '#ddd',
        border: 0,
        borderRadius: 4,
        color: 'black',
        margin: '8px',
        padding: '12px',
    },
});

export function Message({author, text}) {
    const classes = useStyles();
    return <Typography align={'left'} className={classes.root}>{author}: {text} </Typography>;
}
