import React from "react";

type Props = {};
type State = {
    is_logged_in: boolean;
};

export class LoginControl extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = { is_logged_in: false };
    }

    handle_login_click = () => {
        this.setState({ is_logged_in: true });
    };

    handle_logout_click = () => {
        this.setState({ is_logged_in: false });
    };

    render() {
        const is_logged_in = this.state.is_logged_in;

        let button;
        if (is_logged_in) {
            button = <LogoutButton onClick={this.handle_logout_click} />;
        } else {
            button = <LoginButton onClick={this.handle_login_click} />;
        }

        return (
            <div>
                <Greeting is_logged_in={is_logged_in} />
                {button}
            </div>
        );
    }
}

function Greeting(props) {
    if (props.is_logged_in) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}

function LoginButton(props) {
    return <button onClick={props.onClick}>Login</button>;
}

function LogoutButton(props) {
    return <button onClick={props.onClick}>Logout</button>;
}
