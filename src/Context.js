import React, { Component } from "react";
const { Provider, Consumer } = React.createContext();

class ContextProvider extends Component {
  state = {
    photos: []
  };
  render() {
    return <Provider value={this.state.photos}>{this.props.children}</Provider>;
  }
}

export { ContextProvider, Provider, Consumer };
