import React from 'react';
import Typography from '@material-ui/core/Typography';


export default function ProductList ({match}) {

    console.log(match)

    const pno = match.params.pno

    return(
      <Typography variant="h2" component="h2">
        ProductList {pno}
      </Typography>
    )

}