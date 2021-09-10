import React from 'react';
import {Grid, makeStyles, Paper, Typography} from "@material-ui/core";
import axiosApi from "../../axiosApi";
import QuoteForm from "../../components/QuoteForm/QuoteForm";

const useStyles = makeStyles( theme => ({
    root: {
        marginTop:theme.spacing(2)
    },
    paper: {
        padding: theme.spacing(2)
    }
}))
const AddQuote = ({history}) => {
    const classes = useStyles();

    const onSubmit = async quoteData => {
        await axiosApi.post('./quotes.json', quoteData);
        history.push('/')
    }

    return (
        <Grid container direction='column' spacing={2} className={classes.root}>
            <Grid item>
                <Typography variant='h4'> Add new quote</Typography>
            </Grid>
            <Grid item>
                <Paper className={classes.paper}>
                    <QuoteForm onSubmit={onSubmit}/>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default AddQuote;