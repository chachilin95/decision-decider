import React, { useState, useEffect } from 'react';

import storageUtilities from './util/localStorage';

// components
import AddOption from '../AddOption';

const App = () => {
    
    const [options, updateOptions] = useState<string[]>([]);
    const [selectedOption, updateSelectedOption] = useState(-1);

    const addNewOption = (newOption: string) => {
        const currentState = options.slice();
        const newState = currentState.concat(newOption);
        updateOptions(newState);
    };

    // get saved options on startup
    useEffect(() => {
        const optionsFromStorage = storageUtilities.RetrieveOptionsFromLocalStorage();
        if (optionsFromStorage) {
            updateOptions(optionsFromStorage);
        }
    }, []);

    // save options on change
    useEffect(() => {
        storageUtilities.SaveOptionsToLocalStorage(options);
    }, [options]);

    return (
        <div>
            App goes here
            <AddOption addOptionHandler={(newOption: string) => addNewOption(newOption)}/>
        </div>
    );
};

export default App;