import React, {useState} from 'react';
import {Header} from './Components/Header/Header';
import {CreateBookMark} from './Components/CreateBookMark/CreateBookMark';
import * as _ from 'lodash';
import {Bookmark} from './Components/Bookmark/Bookmark';

export const App = () => {
    const [query, setQuery] = useState('');
    const [showCreate, setShowCreate] = useState(false);
    const [bookMarks, setBookMarks] = useState([]);
    const [tags, setTags] = useState(['sample', 'tag']);
    const handleAddBookMark = bookMark => {
        setBookMarks(bookMarks.concat(bookMark));
        setTags(_.uniq(tags.concat(bookMark.tags)));
        setShowCreate(false);
    };
    return <div>
        <Header onSearch={setQuery} onCreate={() => setShowCreate(true)}/>
        <CreateBookMark
            show={showCreate}
            onHide={() => setShowCreate(false)}
            onCreate={handleAddBookMark}
            availableTags={tags}
        />
        <Bookmark
            bookmarks={bookMarks}
            keyword={query}
        />
    </div>;
};

export default App;