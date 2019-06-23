console.log("buildit-visible.js is running")

let visibility = false
const toggleMode = () => {
    visibility = !visibility
    render();
}

const appRoot = document.getElementById('app');
const render = () => {

    let template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleMode}>{visibility ? "Hide Details" : "Show Details"}</button>
            {visibility && <p>This is the detail text</p>}
        </div>
    );

    ReactDOM.render(template, appRoot);
};

render();