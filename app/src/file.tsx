import React from "react";

type Props = {};
type State = {};

export class File extends React.Component<Props, State> {
    render() {
        return (
            <div>
                <input type="file" />
            </div>
        );
    }
}
