import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import getCategories from '../redux/actions/getCategories';
import StyledDeck from '../styles/skeleton/StyledDeck';
import Card from './Card';

export default function Deck() {
    const dispatch = useDispatch();
    let categories = useSelector((state) => state.categories.categories);

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    return (
        <StyledDeck>
            <Card id="4854054682669" name="Vino Novecento Raices 750 ml - Tinto Cabernet Sauvignon" price={152} image="https://cdn.shopify.com/s/files/1/0257/2242/1293/products/SEC-Vinos-Novecento-Raices-Cabernet.jpg?v=1585767255" />
        </StyledDeck>
    )
};