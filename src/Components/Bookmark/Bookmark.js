import {Badge, Table} from 'react-bootstrap';
import React from 'react';
import PropTypes from 'prop-types';

export const Bookmark  = (props) => {
    return <Table>
        <HeaderLabels/>
        <Content content={props.bookmarks} />
    </Table>;
};

const HeaderLabels = () => (
    <thead>
        <tr>
            <th>#</th>
            <th>Label</th>
            <th>Url</th>
            <th>Tags</th>
        </tr>
    </thead>
);

const Content = (props) => (
    <tbody>
        {props.content.map((item, index) => <Item
            item={item}
            index={index}
            key={`item-${index}`}
        />)}
    </tbody>
);

const Item = (props) => (
    <tr>
        <td>{props.index}</td>
        <td>{props.item.label}</td>
        <td>{props.item.url}</td>
    </tr>
);

const Tags = (props) => (
    <td>
        {props.tags.map((tag, index)=> (
            <Badge variant={tag.type} key={`badge-${index}`}>
                {tag.value}
            </Badge>
        ))}
    </td>
);

Bookmark.propTypes = {
    bookmarks: PropTypes.object,
};

Content.propTypes = {
    content: PropTypes.array,
};

Tags.propTypes = {
    tags: PropTypes.array,
};

Item.propTypes = {
    index: PropTypes.string | PropTypes.number,
    item: PropTypes.object,
};
