class VisibilityToggle extends React.Component {

    constructor(props) {
        super(props);

        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

        this.state = {
            visibility: false
        };
    }

    handleToggleVisibility() {
        this.setState((prev) => {
            return {
                visibility: !prev.visibility
            };
        });
    }

    render() {
       return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? "Hide Details" : "Show Details"}
                </button>
                {this.state.visibility && <p>This is the detail text</p>}
            </div>
        );
    }

}

ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'));