import React from 'react'
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import Button from '@material-ui/core/Button'
import { useTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: green[500],
        },
    },
});
const styles = makeStyles(theme => ({
    button: {
        backgroundColor: 'blue',
        [theme.breakpoints.up("sm")]: {
            backgroundColor: 'black'
        }
    }
}))

const index = () => {
    const classes = styles()
    return (
        <ThemeProvider theme={theme}>
            <Button className={classes.button} variant='contained' color='primary'>
                push
            </Button>
        </ThemeProvider>
    )
}

export default index
