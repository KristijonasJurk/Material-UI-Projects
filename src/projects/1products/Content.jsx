import React from 'react'
import Card from './Card'
import { Grid } from '@material-ui/core'
import CList from './constants'

const Content = () => {
    const getCard = (CObj) => {
        return (
            <Grid item xs={12} sm={4}>
                <Card {...CObj} />
            </Grid>
        )
    }

    return (
        <Grid container spacing={4}>
            {CList.map(CObj => getCard(CObj))}
        </Grid>
    )
}

export default Content
