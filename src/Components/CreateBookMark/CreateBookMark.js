import React, {useState} from 'react';
import {Badge, Button, Col, Dropdown, Form, FormControl, FormGroup, FormLabel, Modal, Row} from 'react-bootstrap';
import PropTypes from 'prop-types';
import {IoMdClose} from 'react-icons/io';
import * as _ from 'lodash';

import './CreateBookMark.css';

export const CreateBookMark = (props) => {

    const [label, setLabel] = useState('');
    const [url, setUrl] = useState('');
    const [tags, setTags] = useState([]);
    const handleRemoveTag = (tag) => {
        setTags(_.difference(tags, [tag]));
    };
    const handleCreate = () => {
        let bookMark = {
            label,
            url,
            tags,
        };

        props.onCreate(bookMark);

        setLabel('');
        setUrl('');
        setTags([]);
    };

    return (
        <Modal show={props.show} onHide={props.onHide}>
            <Modal.Header closeButton>
                Create Boc-Marc
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <InputLabel value={label} onChange={setLabel} />
                    <InputUrl value={url} onChange={setUrl}/>
                    <InputTags
                        onAdd={(tag) => setTags(tags.concat(tag))}
                        options={props.availableTags}
                    />
                </Form>
                <Tags values={tags} onRemove={handleRemoveTag} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleCreate}>
                    Create
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

const InputLabel = (props) => (
    <InputText
        placeholder="label"
        label="Label"
        onChange={(e) => props.onChange(e.target.value)}
        value={props.value}
    />
);

const InputUrl = (props) => (
    <InputText
        placeholder="url"
        label="Url"
        onChange={(e) => props.onChange(e.target.value)}
        value={props.value}
    />
);

const InputTags = (props) => {
    const [currentTag, setCurrentTag] = useState('');
    const [showTagDropDown, setShowTagDropDown] = useState(false);
    const [dropDownValues, setDropDownValues] = useState(props.options);
    const includeIgnoreCase = (a,b) => a.toUpperCase().includes(b.toUpperCase());
    const handleTagChange = (value) => {
        setCurrentTag(value);
        if (!isNullOrWhitespace(value)) {
            setDropDownValues(props.options.filter((o) => includeIgnoreCase(o, value)));
            setShowTagDropDown(dropDownValues.length !== 0);
        } else {
            setDropDownValues(props.options);
            setShowTagDropDown(false);
        }
    };
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            props.onAdd(currentTag);
            handleTagChange('');
        }
    };
    const handleSelect = (value) => {
        props.onAdd(value);
        setCurrentTag('');
        setShowTagDropDown(false);
    };

    return (
        <div>
            <FormGroup>
                <Row className="justify-content-center">
                    <Col sm="2">
                        <FormLabel column >
                            Tags
                        </FormLabel>
                    </Col>
                    <Col sm="9">
                        <FormControl
                            type="text"
                            placeholder="tags"
                            onChange={(e) => handleTagChange(e.target.value)}
                            value={currentTag}
                            onKeyPress={handleKeyPress}
                        />
                    </Col>
                </Row>
                {showTagDropDown
                    ? <TagDropDown
                        show={showTagDropDown}
                        values={dropDownValues}
                        onSelect={handleSelect}
                    />
                    : null
                }
            </FormGroup>
        </div>
    );
};

const TagDropDown = (props) => (
    <Row className="justify-content-center">
        <Col sm={{span:'9', offset:'3'}} >
            <Dropdown.Menu show={props.show} className="scrollable-menu">
                {props.values.map((value, index) => (
                    <Dropdown.Item
                        key={`dd-${index}`}
                        onClick={() => props.onSelect(value)}
                    >
                        {value}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Col>
    </Row>
);

const Tags = (props) => (
    <Row className="justify-content-center">
        <Col sm={{span:'9', offset: '2'}}>
            {props.values.map((tag, index) => (
                <span key={`tag-${index}`} >
                    <Badge
                        variant="secondary"
                        className="mr-1"
                    >
                        {`${tag} `}
                        <IoMdClose onClick={() => props.onRemove(tag)} />
                    </Badge>
                </span>
            ))}
        </Col>
    </Row>
);

const InputText = (props) => (
    <FormGroup>
        <Row className="justify-content-center">
            <Col sm="2">
                <FormLabel column >
                    {props.label}
                </FormLabel>
            </Col>
            <Col sm="9">
                <FormControl
                    type="text"
                    placeholder={props.placeholder}
                    onChange={props.onChange}
                    value={props.value}
                    onKeyPress={props.onKeyPress}
                />
            </Col>
        </Row>
    </FormGroup>
);

const isNullOrWhitespace = ( input ) => {

    if (input == null) return true;

    return input.replace(/\s/gi, '').length < 1;
};

InputText.propTypes = {
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
    label: PropTypes.string,
    onKeyPress: PropTypes.func,
};

CreateBookMark.propTypes = {
    show: PropTypes.bool,
    onHide: PropTypes.func,
    availableTags: PropTypes.array,
    onCreate: PropTypes.func,
};

InputLabel.propTypes = InputUrl.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
};

TagDropDown.propTypes = {
    values: PropTypes.array,
    show: PropTypes.bool,
    onSelect: PropTypes.func,
};

InputTags.propTypes = {
    options: PropTypes.array,
    onAdd: PropTypes.func,
};

Tags.propTypes = {
    onRemove: PropTypes.func,
    values: PropTypes.array,
};
