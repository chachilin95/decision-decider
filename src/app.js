class IndecisionApp extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Action />
                <Options />
                <AddOption />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indecision App</h1>
                <h2>Become One With the Computer</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What Should I Do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <p>Options component here</p>
                <ol>
                    <li><Option/></li>
                    <li><Option/></li>
                    <li><Option/></li>
                </ol>
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                <p>This is an Option</p>
            </div>
        )
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
                <p>AddOption component here</p>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'))