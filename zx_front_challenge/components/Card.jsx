import React from 'react';
import Image from 'next/image';
import StyledCard from '../styles/skeleton/StyledCard';
import { buildCart } from '../redux/actions/handleCart';
import { useSelector, useDispatch } from 'react-redux';

export default function Card ({id, name, total_price, price, image}) {
    const dispatch = useDispatch();

    function handleClick(e) {
        e.preventDefault();

        dispatch(buildCart(id));
    }

    return (
        <StyledCard id={id}>
            <h4>{name}</h4>
            <Image src={image} alt="Product picture" width={150} height={150} />
            <label><strong>Unit Price: </strong>{price}</label>
            <label><strong>Total Price: </strong>{total_price}</label>
            <button onClick={(e) => handleClick(e)}>Add to Cart</button>
        </StyledCard>
    )
}