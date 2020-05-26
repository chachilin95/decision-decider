import React, { useState } from 'react';

const App = () => {
    
    const [options, updateOptions] = useState<string[]>([]);
    const [selectedOption, updateSelectedOption] = useState(-1);

    return (
        <div>App goes here</div>
    );
};

export default App;