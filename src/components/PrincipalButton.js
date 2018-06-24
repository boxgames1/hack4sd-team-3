import React, { Component } from "react";

class PrincipalButton extends Component {
  constructor(props) {
    super(props);
    this.clickPrincipal = this.clickPrincipal.bind(this);
  }

  clickPrincipal = () => {
    window.location = "/init/";
  };

  render() {
    return (
      <div className="PrincipalButton">
        <button onClick={this.clickPrincipal}>Lets begin</button>
      </div>
    );
  }
}

export default PrincipalButton;
