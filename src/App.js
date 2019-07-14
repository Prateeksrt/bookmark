import React, {useState} from 'react';
import {Header} from './Components/Header/Header';

export const App = () => {
    const [query, setQuery] = useState('');
    return <div>
        <Header onSearch={setQuery}/>
        <span>{query}</span>
    </div>;
};

export default App;