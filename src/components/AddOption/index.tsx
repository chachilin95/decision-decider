import React, { useState } from 'react';

interface Props {
    addOptionHandler: (input: string) => void
};

const AddOption = ({ addOptionHandler }: Props) => {

    const [option, setOption] = useState('');

    const handleOnSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newOption = option.trim();
        addOptionHandler(newOption);
    };

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <input type='text' name='option' onChange={(e) => setOption(e.target.value)}/>
                <button>Add Option</button>
            </form>
        </div>
    );
};

export default AddOption;