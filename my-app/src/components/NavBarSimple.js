import React from "react";
import css from "./css/NavBarSimple.module.css"

class NavBarSimple extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            introduction: 'Hello, guest',
            buttonText: 'Log in',
        }
    }

    handleClick() {
        this.setState((prevState, prevProps) => {
            return {
                introduction: prevState.introduction === "Hello, guest" ? "Welcome back, user!" : "Hello, guest",
                buttonText: prevState.buttonText === "Log in" ? "Log out" : "Log in",
            }
        })
    }

    render() {
        return (
            <div className={css.NavBar}>
                <h1>My Gallery</h1>
                <span>
                    <p>{this.state.introduction}</p>
                    <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                </span>
            </div>
        )
    }
}

export default NavBarSimple