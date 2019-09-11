import React from "react"

class ClickCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    onClickHandler = (event) => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render() {
        return (
            <div>
                {this.state.counter !== 0 && (

                    <h3>Total Click count : {this.state.counter}</h3>
                )}
                <button onClick={this.onClickHandler}>{(this.state.counter > 5) ? "Too mucch clicks" : "Click Here"}</button>

            </div>
        )
    }
}

export default ClickCounter;

