import React from 'react';
import StyledNavBar from '../styles/skeleton/StyledNav';
import { nextPage, prevPage } from '../redux/actions/pagination';
import { useSelector, useDispatch } from 'react-redux';

export default function Nav() {
    const dispatch = useDispatch();

    let current_page = useSelector((state) => state.pages.page_number);
    let categories = useSelector((state) => state.categories.categories);

    function onChangeHandler(e, cb, actionCreator, page) {
        e.preventDefault();
        return cb(actionCreator(page));
    }

    return (
        <StyledNavBar>
            <div><button onClick={(e) => {onChangeHandler(e, dispatch, prevPage, current_page)}} >Previous Page</button><button onClick={(e) => {onChangeHandler(e, dispatch, nextPage, current_page)}} >Next Page</button></div>
            <div><select>{categories ? categories.map(category => <option>{category}</option>) : null}</select></div>
        </StyledNavBar>
    )
};