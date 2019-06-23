console.log("App.js is running");

var template = (
    <div>
        <h1>Indecision App</h1> 
        <p>This is some info</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

var template2 = (
    <div>
        <h1>Alejandro Figueroa</h1>
        <p>Age: 24</p>
        <p>Location: Dallas, TX</p>
    </div>
);


var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);