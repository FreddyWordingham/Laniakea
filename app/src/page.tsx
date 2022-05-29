import React from "react";

import { Clock } from "./clock.tsx";

type Props = {};
type State = { warning: string };

export class Page extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            warning: "",
        };
    }

    render() {
        return (
            <div>
                <Clock />
                <WarningBanner warning={this.state.warning} />{" "}
            </div>
        );
    }
}

export class WarningBanner extends React.Component<{ warning: string }, {}> {
    handle_click = () => {
        alert("Warning!");
    };

    render() {
        if (this.props.warning) {
            return (
                <div className="warning" onClick={this.handle_click}>
                    Warning: {this.props.warning}
                </div>
            );
        }
        return null;
    }
}
