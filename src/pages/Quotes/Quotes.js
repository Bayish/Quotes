import React, {useCallback, useEffect, useState} from 'react';
import {Drawer, Grid, makeStyles, Toolbar, Typography} from "@material-ui/core";
import {CATEGORIES} from "../../constant";
import axiosApi from "../../axiosApi";
import Quote from "../../components/Quote/Quote";
import Category from "../../components/Category/Category";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({

    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    content: {
        flexGrow: 1,
        paddingTop: theme.spacing(2),
    },
}));

const Quotes = ({match}) => {
    const classes = useStyles();
    const [quotes, setQuotes] = useState([]);
    const fetchData = useCallback(async () => {
        let url = '/quotes.json';
        if(match.params.category){
            url += `?orderBy="category"&equalTo="${match.params.category}"`
        }

        const response = await axiosApi.get(url);
        const quotes = Object.keys(response.data).map(id => ({
            ...response.data[id],
            id,
        }))

        setQuotes(quotes)
    }, [match.params.category]);

    useEffect(() => {
        fetchData().catch(console.error)
    }, [fetchData]);

    const getCategory = () => {
        if(!match.params.category){
            return 'ALL'
        }

        const category = CATEGORIES.find(c => c.id === match.params.category);
        return category ? category.title : 'Not Found'
    }

    const removeQuote = async id => {
        await axiosApi.delete(`/quotes/${id}.json`);
        await fetchData();
    }
    return (
        <div className={classes.root}>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <Toolbar/>
                <div className={classes.drawerContainer}>
                    <Category/>
                </div>
            </Drawer>
            <main className={classes.content}>
                <Grid container direction='column' spacing={2}>
                    <Grid item>
                        <Typography variant='h4'>
                            {getCategory()}
                        </Typography>
                    </Grid>
                    {quotes.map(quote => (
                        <Quote key={quote.id} id={quote.id} author={quote.author} text={quote.text} remove={() => removeQuote(quote.id)}/>
                    ))}
                </Grid>
            </main>
        </div>
    );
};

export default Quotes;