import React from "react";

type Props = {};
type State = {};

export class Select extends React.Component<Props, State> {
    render() {
        return (
            <select>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option selected value="coconut">
                    Coconut
                </option>
                <option value="mango">Mango</option>
            </select>
        );
    }
}
