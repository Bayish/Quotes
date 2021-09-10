import React from 'react';
import {MenuItem} from "@material-ui/core";
import {Link, useParams} from "react-router-dom";
import {CATEGORIES} from "../../constant";

const Category = () => {
    const {p} = useParams()
    return (
       <>
           <MenuItem selected={!p} component={Link}
                     to={'/'}>All</MenuItem>
           {CATEGORIES.map(category => (
               <MenuItem
                   selected={category.id === p}
                   key={category.id}
                   component={Link}
                   to={"/quotes/" + category.id}
               >
                   {category.title}
               </MenuItem>
           ))}
       </>
    );
};

export default Category;