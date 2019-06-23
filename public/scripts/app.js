"use strict";

console.log("App.js is running");

var app = {
    title: "Indecision App",
    subtitle: "First App of the Course",
    options: ['One', 'Two']
};
var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        "p",
        null,
        app.subtitle
    ),
    React.createElement(
        "p",
        null,
        " ",
        app.options.length > 0 ? "Here are your options" : "No options"
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Item one"
        ),
        React.createElement(
            "li",
            null,
            "Item two"
        )
    )
);

var user = {
    name: "afigueroa",
    age: 99,
    location: "Dallas, TX"
};

function getLocation(location) {
    if (location) {
        return location;
    } else {
        return "Unknown";
    }
}

var template2 = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name
    ),
    React.createElement(
        "p",
        null,
        "Age: ",
        user.age
    ),
    React.createElement(
        "p",
        null,
        "Location: ",
        getLocation(user.location)
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
