const STORAGE_NAME = 'IndecisionApp:options';

const RetrieveOptionsFromLocalStorage = () => {
    try {
        const json = localStorage.getItem(STORAGE_NAME);
        const options: string[] = JSON.parse(json || '[]');
        
        if (options) {
            return options;
        }
    } catch (e) {
        console.log(e);
    }
};

const SaveOptionsToLocalStorage = (options: string[]) => {
    try {
        const str = JSON.stringify(options);
        localStorage.setItem(STORAGE_NAME, str);
    } catch (e) {
        console.log(e);
    }
};

export default { 
    RetrieveOptionsFromLocalStorage,
    SaveOptionsToLocalStorage
};