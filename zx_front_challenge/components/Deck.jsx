import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import getCategories from '../redux/actions/getCategories';
import StyledDeck from '../styles/skeleton/StyledDeck';

export default function Deck() {
    const dispatch = useDispatch();
    let categories = useSelector((state) => state.categories.categories);

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    return (
        <StyledDeck>
            <ul>
                {categories ? categories.map(category => <li>{category}</li>) : "No categories loaded..."}
            </ul>
        </StyledDeck>
    )
};