// import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const styles = makeStyles(theme => ({
    buttonStyle: props => {
        return {
            color: props.cool ? 'blue' : 'red',
            [theme.breakpoints.up("sm")]: {
                color: 'blue'
            },
            backgroundColor: props.cool ? 'green' : 'yellow'
        }
    }
}))
export default function coolButton(props) {
    const classes = styles(props)
    return <Button fullWidth className={classes.buttonStyle}>button</Button>
}