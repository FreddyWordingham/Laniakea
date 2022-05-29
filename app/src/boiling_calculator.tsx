import React from "react";

type Props = {};
type State = {
    temperature: string;
};

export class BoilingCalculator extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = { temperature: "" };
    }

    handle_change = (e) => {
        this.setState({ temperature: e.target.value });
    };

    render() {
        const temperature = this.state.temperature;
        return (
            <fieldset>
                <legend>Enter temperature in Celsius:</legend>
                <input value={temperature} onChange={this.handle_change} />
                <BoilingVerdict celsius={parseFloat(temperature)} />
            </fieldset>
        );
    }
}

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}
