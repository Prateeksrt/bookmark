import React from 'react';
import PropTypes from 'prop-types';
import {Button, Form, FormControl} from 'react-bootstrap';

export const Search = ({onSearch, query}) => {
    return <Form inline>
        <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            value={query}
            onChange={(e) => onSearch(e.target.value)}
            size='lg'
        />
        <Button
            variant="outline-info"
            onClick={() => onSearch(query)}
            size='lg'
        >
            Search
        </Button>
    </Form>;
};

Search.propTypes = {
    onSearch: PropTypes.func,
    query: PropTypes.string,
};
