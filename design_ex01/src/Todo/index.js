import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TodoInput from './TodoInput';


export default function SimpleContainer() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
          <TodoInput ></TodoInput>
        </Container>
      </React.Fragment>
    );
  }