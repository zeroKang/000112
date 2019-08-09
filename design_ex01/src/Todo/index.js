import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { List } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';

export default class Todo extends Component {

  constructor() {
    super()
    this.state = {
      text:'',
      todos:[ 
          {tno:1, title:'AAA'},
          {tno:2, title:'BBB'},
          {tno:3, title:'CCC'},
        ]
    }
  }


  render(){

    const {text, todos} = this.state

    const list = todos.map( ({tno, title}, idx) => {
      return(
          <ListItem key={tno} button>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={true}
                tabIndex={-1}
                disableRipple                
              />
              </ListItemIcon>
              <ListItemText>
              {title}
              </ListItemText>
            </ListItem>
      )
    })

    
    return (
      <React.Fragment>
        <div>

          <Typography variant="h2" component="h2">
            Todo List
          </Typography>

          <TextField
              id="standard-required"
              label="Title"
              margin="normal"
              value={text}
              onChange = {(e) => this.setState({text:e.target.value})}
          />
          <Button variant="contained" color="primary">
              ADD
          </Button>          
        </div>
        <div>

          <List>
            {list}
          </List>

        </div>
      </React.Fragment>
    );
  }
   
}