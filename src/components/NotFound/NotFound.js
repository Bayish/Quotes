import React from 'react';
import {makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    title: {
        textAlign: 'center',
        marginTop: theme.spacing(2)
    }
}))
const NotFound = () => {
    const classes = useStyles();
    return (
        <Typography variant='h4' className={classes.title}>Not Found</Typography>
    );
};

export default NotFound;