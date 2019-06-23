"use strict";

console.log("buildit-visible.js is running");

var visibility = false;
var toggleMode = function toggleMode() {
    visibility = !visibility;
    render();
};

var appRoot = document.getElementById('app');
var render = function render() {

    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Visibility Toggle"
        ),
        React.createElement(
            "button",
            { onClick: toggleMode },
            visibility ? "Hide Details" : "Show Details"
        ),
        visibility && React.createElement(
            "p",
            null,
            "This is the detail text"
        )
    );

    ReactDOM.render(template, appRoot);
};

render();
