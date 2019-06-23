console.log("App.js is running");

var app = {
    title: "Indecision App",
    subtitle: "First App of the Course"
}
var template = (
    <div>
        <h1>{app.title}</h1> 
        <p>{app.subtitle}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

var userInformation = {
    name: "afigueroa",
    age: 99,
    location: "Dallas, TX"
}
var template2 = (
    <div>
        <h1>{userInformation.name}</h1>
        <p>Age: {userInformation.age}</p>
        <p>Location: {userInformation.location}</p>
    </div>
);


var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);