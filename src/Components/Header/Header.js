import React from 'react';
import PropTypes from 'prop-types';
import {Nav, Navbar} from 'react-bootstrap';
import {Search} from '../Search/Search';

export const Header = ({ onSearch, query, onCreate }) => {
    return (
        <Navbar
            bg="dark"
            expand="lg"
            variant="dark"
        >
            <Navbar.Brand href="#home" >Boc-Marc</Navbar.Brand>
            <Nav variant="pills" className="mr-auto">
                <Nav.Item onClick={onCreate}>
                    <Nav.Link size="lg" role="button" >
                        Create
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <Search onSearch={onSearch} query={query} />
        </Navbar>
    );
};

Header.propTypes = {
    onSearch: PropTypes.func,
    query: PropTypes.string,
    onCreate: PropTypes.func,
};