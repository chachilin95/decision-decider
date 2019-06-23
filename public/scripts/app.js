"use strict";

console.log("App.js is running");

var app = {
    title: "Indecision App",
    subtitle: "First App of the Course"
};
var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    React.createElement(
        "p",
        null,
        app.subtitle
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

var userInformation = {
    name: "afigueroa",
    age: 99,
    location: "Dallas, TX"
};
var template2 = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        userInformation.name
    ),
    React.createElement(
        "p",
        null,
        "Age: ",
        userInformation.age
    ),
    React.createElement(
        "p",
        null,
        "Location: ",
        userInformation.location
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
