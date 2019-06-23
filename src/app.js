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

var user = {
    name: "afigueroa",
    age: 99,
    location: "Dallas, TX"
}

function getLocation(location) {
    if (location) {
        return location;
    } else {
        return "Unknown";
    }
}

var template2 = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {getLocation(user.location)}</p>
    </div>
);


var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);