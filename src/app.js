console.log("App.js is running");

var app = {
    title: "Indecision App",
    subtitle: "First App of the Course",
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value
    
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
}

const onRemoveAll = (e) => {
    e.preventDefault();

    app.options = []
    render();
}

const appRoot = document.getElementById('app');

const render = () => {
    let template = (
        <div>
            <h1>{app.title}</h1> 
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
            <p>{app.options.length}</p>
            <button onClick={onRemoveAll}>Clear</button>
            <form onSubmit={onFormSubmit}>
                <input type='text' name='option'/>
                <button>Add Option</button> 
            </form>
        </div>
    ); 

    ReactDOM.render(template, appRoot);
};

render();