import { AppBar, Toolbar, Typography } from '@material-ui/core'
import AcUnitRoundedIcon from '@material-ui/icons/AcUnitRounded';
import React from 'react'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(() => ({
    typographyStyles: {
        flex: 1
    }
}))

const Header = () => {
    const classes = useStyles()
    return (
        <AppBar position='static'>
            <Toolbar>
                <Typography className={classes.typographyStyles}>header</Typography>
                <AcUnitRoundedIcon />
            </Toolbar>
        </AppBar>
    )
}

export default Header
