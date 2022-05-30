import React from "react";

type Props = {};
type State = {};

export class Frame extends React.Component<Props, State> {
    constructor(props) {
        super(props);
    }

    render() {
        const colour = this.props.colour;
        const children = this.props.children;

        return (
            <div className={"FancyBorder FancyBorder-" + colour}>
                {children}
            </div>
        );
    }
}
