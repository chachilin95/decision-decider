import React, { useState, useEffect } from 'react';

import storageUtilities from './util/localStorage';

const App = () => {
    
    const [options, updateOptions] = useState<string[]>([]);
    const [selectedOption, updateSelectedOption] = useState(-1);

    // get saved options on startup
    useEffect(() => {
        const options = storageUtilities.RetrieveOptionsFromLocalStorage;
        updateOptions(options);
    }, []);

    // save options on change
    useEffect(() => {
        storageUtilities.SaveOptionsToLocalStorage(options);
    }, [options]);

    return (
        <div>App goes here</div>
    );
};

export default App;