import React from 'react';

interface Props {
    text: string,
    deleteOptionHandler: () => void
}

const Option = ({ text, deleteOptionHandler }: Props) => {
    return (
        <div>
            {text}
            <button onClick={() => deleteOptionHandler()}>X</button>
        </div>
    );
};

export default Option;