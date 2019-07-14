import React from 'react';
import PropTypes from 'prop-types';
import {Navbar} from 'react-bootstrap';
import {Search} from '../Search/Search';

import './Header.css';

export const Header = ({ onSearch, query }) => {
    return <Navbar
        bg="dark"
        expand="lg"
        className="justify-content-between"
        variant="dark"
    >
        <Navbar.Brand href="#home" >Boc-Marc</Navbar.Brand>
        <Search onSearch={onSearch} query={query} />
    </Navbar>;
};

Header.propTypes = {
    onSearch: PropTypes.func,
    query: PropTypes.string,
};