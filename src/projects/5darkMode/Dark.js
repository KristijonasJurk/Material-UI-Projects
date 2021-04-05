import React, { useState } from 'react'
import { Switch, Grid, Typography, Button, Paper } from '@material-ui/core'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


const Dark = () => {

    const [darkMode, setDarkMode] = useState(false);

    const theme = createMuiTheme({
        palette: {
            type: darkMode ? 'dark' : 'light'
        }
    })
    return (
        <ThemeProvider theme={theme}>
            <Paper style={{ height: '100vh' }}>
                <Grid container direction='column'>
                    <Typography variant='h1'>This is my App!</Typography>
                    <Button variant='contained' color='primary'>
                        This is a button
                </Button>
                    <Button variant='contained' color='secondary'>
                        This is a button
                </Button>
                    <Switch checked={darkMode} onClick={() => setDarkMode(!darkMode)} />
                </Grid>
            </Paper>
        </ThemeProvider>
    )
}

export default Dark
