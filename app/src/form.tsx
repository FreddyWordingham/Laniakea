import React from "react";

type Props = {};
type State = { value: string };

export class Form extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = { value: "" };
    }

    handle_change = (event) => {
        this.setState({ value: event.target.value });
    };

    handle_submit = (event) => {
        alert("A name was submitted: " + this.state.value);
        event.preventDefault();
    };

    render() {
        return (
            <form onSubmit={this.handle_submit}>
                {" "}
                <label>
                    Name:
                    <input
                        type="text"
                        value={this.state.value}
                        onChange={this.handle_change}
                    />{" "}
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
