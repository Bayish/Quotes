import React, {useEffect, useState} from 'react';
import {CircularProgress, Grid, makeStyles, Paper, Typography} from "@material-ui/core";
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
const EditQuote = ({history, match}) => {
    const classes = useStyles();
    const [quote, setQuote] = useState(null);


    useEffect(() => {
        const fetchQuote = async () => {
            const response = await axiosApi.get(`/quotes/${match.params.id}.json`);
            setQuote(response.data)
        }
        fetchQuote().catch(console.error)
     }, [match.params.id])


    const onSubmit = async quoteData => {
        await axiosApi.put(`/quotes/${match.params.id}.json`, {...quoteData});
        history.push('/')
    }

    let form = <CircularProgress/>

    if (quote) {
        form = <QuoteForm quoteData={quote} onSubmit={onSubmit}/>
    }

    return (
        <Grid container direction='column' spacing={2} className={classes.root}>
            <Grid item>
                <Typography variant='h4'> Add new quote</Typography>
            </Grid>
            <Grid item>
                <Paper className={classes.paper}>
                    {form}
                </Paper>
            </Grid>
        </Grid>
    );
};

export default EditQuote;