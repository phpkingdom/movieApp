import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
          <div>{this.props.children}</div>
      </div>
    );
  }
}
export default Home;
