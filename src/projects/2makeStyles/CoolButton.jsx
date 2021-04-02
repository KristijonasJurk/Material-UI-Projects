// import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import classNames from 'classnames'

// npm install classnames to install dependancy, which allows more than one class to be added to a single component

const styles = makeStyles(theme => ({
    buttonStyle: props => {
        return {
            color: props.cool ? 'blue' : 'red',
            [theme.breakpoints.up("sm")]: {
                color: 'blue'
            },
        }
    },
    buttonBackground: {
        backgroundColor: 'white'
    }
}))
export default function coolButton(props) {
    const classes = styles(props)
    return <Button fullWidth className={classNames(classes.buttonStyle, classes.buttonBackground)}> button</Button >
}