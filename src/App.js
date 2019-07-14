import React, {useState} from 'react';
import {Header} from './Components/Header/Header';

export const App = () => {
    const [query, setQuery] = useState('');
    const [call, setCall] = useState(0);
    return <div>
        <Header onSearch={setQuery} onCreate={() => setCall(call + 1)}/>
        <span>{query}</span>
        <span>{`Clicked create: ${call} times.`}</span>
    </div>;
};

export default App;