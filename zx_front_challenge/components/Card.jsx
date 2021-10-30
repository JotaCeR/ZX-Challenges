import React from 'react';
import Image from 'next/image';
import StyledCard from '../styles/skeleton/StyledCard';

export default function Card ({id, name, price, image}) {

    return (
        <StyledCard id={id}>
            <h4>{name}</h4>
            <Image src={image} alt="Product picture" width={150} height={150} />
            <label><strong>Price: </strong>{price}</label>
        </StyledCard>
    )
}