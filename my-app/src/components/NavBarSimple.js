import React from "react";
import css from "./css/NavBarSimple.module.css";


class NavBarSimple extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            introduction: "Welcome Guest!",
            buttonText: "Sign Out",
        };
    }

    handleClick() {
        this.setState((prevState) => ({
            introduction: prevState.introduction === "Welcome Guest!" ? "Goodbye!" : "Welcome Guest!",
            buttonText: prevState.buttonText === "Sign Out" ? "Sign In" : "Sign Out",
        }), () => console.log(this.state.introduction))
    }

    render() {
        return (
            <div className={css.NavBar}>
                <h1>My Gallery</h1>
                <div>
                    <span>{this.state.introduction}</span>
                    <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                </div>
            </div>
        )
    }

}
export default NavBarSimple