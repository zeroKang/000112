import React,  {useState} from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));


export default function TodoInput() {

    const classes = useStyles();
    const [text, setText] = useState('')
    
    return(
        <div>
        <TextField
            id="standard-required"
            label="Title"
            margin="normal"
            value={text}
            onChange = {(e) => setText(e.target.value)}
        />
        <Button variant="contained" color="primary" className={classes.button}>
            ADD
        </Button>
        </div>
    )
}

