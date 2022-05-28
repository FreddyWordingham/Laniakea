import React from "react";

type Props = {};
type State = { date: Date; counter: number };

export class Clock extends React.Component<Props, State> {
    timer_id: number;

    constructor(props) {
        super(props);
        this.state = { date: new Date(), counter: 0 };
    }

    componentDidMount() {
        this.timer_id = window.setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer_id);
    }

    tick() {
        let x = 0;
        if (Math.random() > 0.5) {
            x += 1;
        }

        this.setState({ date: new Date(), counter: this.state.counter + x });
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                <h2>Counter: {this.state.counter}.</h2>
            </div>
        );
    }
}
