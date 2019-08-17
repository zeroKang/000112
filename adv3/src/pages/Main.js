import React from "react";
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';

import Typography from '@material-ui/core/Typography';

export default function( props ) {
    const { classes } = props;
    return (
    <Grid container >
      <Grid item xs={12}>
        <Grid container justify="center" >          
            <Grid item>
                <Paper>
                    <Typography variant="h1" component="h3">
                        Main Page
                    </Typography>
                    <Typography component="p">
                        Paper can be used to build surface or other elements for your application.
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
      </Grid>      
    </Grid>
    );

}
