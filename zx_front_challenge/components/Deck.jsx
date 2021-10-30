import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import getCategories from '../redux/actions/getCategories';
import getProducts from '../redux/actions/getProducts';
import StyledDeck from '../styles/skeleton/StyledDeck';
import Card from './Card';

export default function Deck() {
    const dispatch = useDispatch();
    let categories = useSelector((state) => state.categories.categories);
    let products = useSelector((state) => state.products.all_products);
    let currentPage = useSelector((state) => state.pages.page_number);

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getProducts(currentPage));
    }, [dispatch, currentPage]);

    return (
        <StyledDeck>
            {products ? products.map(product => <Card key={product.product_id} id={product.product_id} name={product.name} price={product.price_per_unit} image={product.image_url} />) : "No product found..."}
        </StyledDeck>
    )
};