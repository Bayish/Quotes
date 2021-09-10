import React from 'react';
import {Grid, IconButton,  makeStyles, Paper, Typography} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import {Link} from "react-router-dom";
const useStyles = makeStyles(theme => ({
    quotePaper : {
        padding: theme.spacing(2)
    }
}))

const Quote = ({id, text, author, remove}) => {
    const classes = useStyles()
    return (
        <Grid item>
            <Paper className={classes.quotePaper}>
                <Grid container justifyContent="space-between">
                    <Grid item>
                        <Typography variant="h6">{text}</Typography>
                        <Typography variant="subtitle1">{author}</Typography>
                    </Grid>
                    <Grid item>
                            <IconButton component={Link} to={'/quotes/edit/' + id}><EditIcon/></IconButton>
                            <IconButton onClick={remove}><DeleteForeverIcon/></IconButton>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    );
};

export default Quote;