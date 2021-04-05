import { Grid } from '@material-ui/core'
import React from 'react'
import AcUnitIcon from '@material-ui/icons/AcUnit'

const Grid2 = () => {
    return (
        <Grid container justify='center' alignItems='center' style={{ height: '400px' }} direction='row'>
            <Grid item xs={6}>
                <AcUnitIcon color='primary' />
            </Grid>
            <Grid item xs={1}>
                <AcUnitIcon color='secondary' />
            </Grid>
        </Grid>
    )
}

export default Grid2
