import React, { useState, useEffect } from 'react';

import storageUtilities from './localStorage';

// components
import AddOption from '../AddOption';

const App = () => {
    
    const [options, updateOptions] = useState<string[]>([]);
    const [selectedOption, updateSelectedOption] = useState(-1);

    const selectOptionHandler = () => {
        const selection = Math.floor(Math.random()) % options.length;
        updateSelectedOption(selection);
    }

    const addNewOptionHandler = (newOption: string) => {
        const currentState = options.slice();
        const newState = currentState.concat(newOption);
        updateOptions(newState);
    };

    const deleteOptionHandler = (id: number) => updateOptions(options.filter((option, index) => {
        return (id === index) ? option : undefined;
    }));

    const deleteAllOptionsHandler = () => updateOptions([]);

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
        updateSelectedOption(-1); // clear selection
    }, [options]);

    return (
        <div>
            App goes here
            <AddOption addOptionHandler={(newOption: string) => addNewOptionHandler(newOption)}/>
        </div>
    );
};

export default App;