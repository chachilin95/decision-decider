class Counter extends React.Component {

    constructor(props) {
        super(props)

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);

        this.state = {
            count: 0
        };
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


// let count = 0
// const increment = () => {
//     count++;
//     renderCounterApp();
// }
// const decrement = () => {
//     count--;
//     renderCounterApp();
// }
// const reset = () => {
//     count = 0
//     renderCounterApp();
// }

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={increment}>+1</button>
//             <button onClick={decrement}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     );

//     ReactDOM.render(templateTwo, appRoot);
// }
// renderCounterApp();

