import React, {useState} from 'react';
import {Button, Grid, MenuItem, TextField} from "@material-ui/core";
import {CATEGORIES} from "../../constant";

const initialState = {
    category: '',
    author: '',
    text: '',
}
const QuoteForm = ({quoteData, onSubmit}) => {
    const [quote, setQuote] = useState(quoteData || initialState);

    const onInputChange = e => {
        const {name, value} = e.target;
        setQuote(prev => ({
            ...prev,
            [name]: value
        }))
    }
   const onFormSubmit = async e =>{
        e.preventDefault();
        onSubmit({...quote})
   }
    return (
        <Grid container direction="column" spacing={2} component="form" onSubmit={onFormSubmit}>
            <Grid item>
                <TextField
                    required
                    select
                    label='Category'
                    name='category'
                    value={quote.category}
                    onChange={onInputChange}
                    fullWidth
                    variant="outlined"
                >
                    <MenuItem value='' disabled><em>Select a category</em></MenuItem>
                    {CATEGORIES.map(category => (
                        <MenuItem key={category.id} value={category.id}>{category.title}</MenuItem>
                    ))}
                </TextField>
            </Grid>
            <Grid item>
                <TextField
                    required
                    label='Author'
                    value={quote.author}
                    name='author'
                    onChange={onInputChange}
                    fullWidth
                    variant='outlined'
                />
            </Grid>
            <Grid item>
                <TextField
                    required
                    multiline
                    minRows={3}
                    label="Quote text"
                    name="text"
                    value={quote.text}
                    onChange={onInputChange}
                    fullWidth
                    variant="outlined"
                />
            </Grid>
            <Grid item>
                <Button
                    variant="contained"
                    color="primary"
                    type="Submit"
                >
                    Save
                </Button>
            </Grid>
        </Grid>
    );
};

export default QuoteForm;