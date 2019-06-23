class IndecisionApp extends React.Component {
    render() {
        const title = "Indecision App"
        const subtitle = "Become One With the Computer"
        const options = ['thing one', 'thing two', 'thing three']

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options}/>
                <AddOption />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
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

    renderList() {
        const options = this.props.options

        if (options.length > 0) {
            return (
                <div>                    
                    {options.map((option) => <Option key={option} optionText={option}/>)}
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                {this.renderList()}
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionText}
            </div>
        )
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
                AddOption component here
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'))