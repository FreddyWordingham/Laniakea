import React from "react";

type Props = {};
type State = { date: Date };

export class Clock extends React.Component<Props, State> {
    private timer_id: number;

    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timer_id = window.setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer_id);
    }

    tick() {
        this.setState({ date: new Date() });
    }

    render() {
        return (
            <div>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}
