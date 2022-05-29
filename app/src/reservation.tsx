import React from "react";

type Props = {};
type State = {
    is_going: boolean;
    number_of_guests: number;
};

export class Reservation extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            is_going: true,
            number_of_guests: 2,
        };
    }

    handle_input_change = (event) => {
        const target = event.target;
        const value =
            target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value,
        });
    };

    render() {
        return (
            <form>
                <label>
                    Is going:
                    <input
                        name="is_going"
                        type="checkbox"
                        checked={this.state.is_going}
                        onChange={this.handle_input_change}
                    />
                </label>
                <br />
                <label>
                    Number of guests:
                    <input
                        name="number_of_guests"
                        type="number"
                        value={this.state.number_of_guests}
                        onChange={this.handle_input_change}
                    />
                </label>
            </form>
        );
    }
}
