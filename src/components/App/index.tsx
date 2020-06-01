import React, { useState, useEffect } from 'react';

import storageUtilities from './localStorage';

// components
import AddOption from '../AddOption';
import OptionsList from '../OptionsList';
import Action from '../Action';

const App = () => {
    
    const [options, updateOptions] = useState<string[]>([]);
    const [selectedOption, updateSelectedOption] = useState(-1);

    const selectOption = () => {
        const selection = Math.floor(Math.random()) % options.length;
        updateSelectedOption(selection);
    };

    const addNewOption = (newOption: string) => {
        const currentState = options.slice();
        const newState = currentState.concat(newOption);
        updateOptions(newState);
    };

    const OptionsListHandlers = {
        deleteOption: (id: number) => updateOptions(options.filter((option, index) => {
            return (id !== index) ? option : undefined;
        })),
        deleteAllOptions: () => updateOptions([])
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
        updateSelectedOption(-1); // clear selection
    }, [options]);

    return (
        <div>
            App goes here
            <Action hasOptions={!!options} handlers={{ selectOption }}/>
            <OptionsList options={options} handlers={OptionsListHandlers}/>
            <AddOption addOptionHandler={(newOption: string) => addNewOption(newOption)}/>
        </div>
    );
};

export default App;