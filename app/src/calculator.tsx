import React, { RefObject } from "react";

type Props = {};
type State = {
    temperature: string;
    scale: string;
};

export class Calculator extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = { temperature: "", scale: "c" };
    }

    handle_celsius_change = (temperature) => {
        this.setState({ temperature, scale: "c" });
    };

    handle_fahrenheit_change = (temperature) => {
        this.setState({ temperature, scale: "f" });
    };

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius =
            scale === "f" ? try_convert(temperature, to_celsius) : temperature;
        const fahrenheit =
            scale === "c"
                ? try_convert(temperature, to_fahrenheit)
                : temperature;

        return (
            <div>
                <TemperatureInput
                    scale="c"
                    temperature={celsius}
                    on_temperature_change={this.handle_celsius_change}
                />
                <TemperatureInput
                    scale="f"
                    temperature={fahrenheit}
                    on_temperature_change={this.handle_fahrenheit_change}
                />
                <Verdict celsius={parseFloat(celsius)} />
            </div>
        );
    }
}

const SCALE_NAMES = {
    c: "Celsius",
    f: "Fahrenheit",
};

export class TemperatureInput extends React.Component<
    { scale: string; on_temperature_change: RefObject<HTMLInputElement> },
    {}
> {
    handle_change = (e) => {
        console.log("1");
        this.props.on_temperature_change(e.target.value);
        console.log("2");
    };

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {SCALE_NAMES[scale]}:</legend>
                <input value={temperature} onChange={this.handle_change} />
            </fieldset>
        );
    }
}

function Verdict(props) {
    if (props.celsius >= 100.0) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}

function to_celsius(fahrenheit) {
    return ((fahrenheit - 32.0) * 5.0) / 9.0;
}

function to_fahrenheit(celsius) {
    return (celsius * 9.0) / 5.0 + 32.0;
}

function try_convert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return "";
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}
