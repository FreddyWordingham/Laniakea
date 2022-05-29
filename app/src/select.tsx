import React from "react";

type Props = {};
type State = { value: string };

export class Select extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = { value: "coconut" };
    }

    handle_change = (event) => {
        this.setState({ value: event.target.value });
    };

    handle_submit = (event) => {
        alert("Your favorite flavor is: " + this.state.value);
        event.preventDefault();
    };

    render() {
        return (
            <form onSubmit={this.handle_submit}>
                <label>
                    Pick your favorite flavor:
                    <select
                        value={this.state.value}
                        onChange={this.handle_change}
                    >
                        {" "}
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
