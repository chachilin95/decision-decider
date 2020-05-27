import React from 'react';
import Option from './Option';

interface Props {
    options: string[]
    handlers: {
        deleteOption: (id: number) => void
        deleteAllOptions: () => void
    }
};

const OptionsList = ({ options, handlers }: Props) => {

    // build list of Options
    const optionsListJSX = options.map((option, index) => (
        <Option 
            key={index}
            text={option}
            deleteOptionHandler={() => handlers.deleteOption(index)}/>
    ));

    return (
        <div>
            {optionsListJSX}
            <button onClick={() => handlers.deleteAllOptions()}>DELETE ALL OPTIONS</button>
        </div>
    );
};

export default OptionsList;