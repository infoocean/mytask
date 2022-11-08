import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default class Number extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: "",
    };
  }

  render() {
    console.log(this.state.phone);

    return (
      <div className="App" onChange={this.completeForm}>
        <div className="perfectCentered">
          <div id="survey-form">
            <div className="marginBottom">
              <label id="number-label" htmlFor="number">
                Phone Number
              </label>
              <PhoneInput
                country={"us"}
                className="marginBottom"
                value={this.state.phone}
                onChange={(phone) => this.setState({ phone })}
              />
            </div>

            <div className="perfectCentered">
              <button className="buttons" type="submit">
                Submit{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
