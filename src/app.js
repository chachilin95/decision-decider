console.log("App.js is running");

var app = {
    title: "Indecision App",
    subtitle: "First App of the Course",
    options: ['One', 'Two']
}
var template = (
    <div>
        <h1>{app.title}</h1> 
        {app.subtitle && <p>{app.subtitle}</p>}
        <p> {app.options.length > 0 ? "Here are your options" : "No options"}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
); 

let count = 0
const increment = () => {
    count++;
    renderCounterApp();
}
const decrement = () => {
    count--;
    renderCounterApp();
}
const reset = () => {
    count = 0
    renderCounterApp();
}

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );

    ReactDOM.render(templateTwo, appRoot);
}
renderCounterApp();