import React from "react";

type Props = {};
type State = { is_toggled_on: boolean };

export class Toggle extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = { is_toggled_on: true };
    }

    handle_click = () => {
        this.setState((prev_state) => ({
            is_toggled_on: !prev_state.is_toggled_on,
        }));
    };

    render() {
        return (
            <button onClick={this.handle_click}>
                {" "}
                {this.state.is_toggled_on ? "ON" : "OFF"}
            </button>
        );
    }
}
