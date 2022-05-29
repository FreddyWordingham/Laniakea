import React, { RefObject } from "react";

type Props = {};
type State = {};

export class File extends React.Component<Props, State> {
    private file_input: RefObject<HTMLInputElement>;

    constructor(props) {
        super(props);
        this.file_input = React.createRef();
    }

    handle_submit = (event) => {
        event.preventDefault();
        alert(`Selected file - ${this.file_input.current.files[0].name}`);
    };

    render() {
        return (
            <form onSubmit={this.handle_submit}>
                <label>
                    Upload file:
                    <input type="file" ref={this.file_input} />{" "}
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        );
    }
}
