class Counter extends React.Component {

    // parseInt(num, base)
    // check for NaN (isNaN)

    constructor(props) {
        super(props)

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);

        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        try {
            const stringCount = localStorage.getItem('count');
            const count = parseInt(stringCount, 10);

            if (!isNaN(count)) {
                this.setState(() => ({ count: count }));
            }
        } catch (e) {
            console.log(e)
        }
    }

    componentDidUpdate(_prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count);
        }        
    }
    
    increment() {
        this.setState((prev) => {
            return {
                count: prev.count + 1
            }
        });
    }

    decrement() {
        this.setState((prev) => {
            return {
                count: prev.count - 1
            }
        });
    }

    reset() {
        this.setState(() => {
            return {
                count: 0
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.increment}>+1</button>
                <button onClick={this.decrement}>-1</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter/>, document.getElementById('app'));