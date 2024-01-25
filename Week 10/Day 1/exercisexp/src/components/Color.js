import React from "react";

export class Color extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoriteColor: "red", show: true };
  }

  delHeader = () => {
    this.setState({ show: false });
  };
  render() {
    let myheader;
    if (this.state.show) {
      myheader = <Child />;
    } else {
        myheader = <button onClick={()=> this.setState({show:true})}>Add Header</button>
    };
    return (
      <>
        {myheader}
        <button type="button" onClick={this.delHeader}>
          Delete Header
        </button>
        <h1>My favorite color is: {this.state.favoriteColor}</h1>
        <button
          onClick={() => {
            this.setState({ favoriteColor: "blue" });
          }}
        >
          Change to blue
        </button>
      </>
    );
  }

  shouldComponentUpdate() {
    return true;
  }

  componentDidUpdate() {
    console.log("after update");
  }

  getSnapshotBeforeUpdate() {
    console.log("in getSnapshotBeforeUpdate");
    return null;
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: "yellow" });
    }, 2500);
  }
}

class Child extends React.Component {
    componentWillUnmount() {
      alert("The component named Header is about to be unmounted.");
    }
    render() {
      return (
        <h1>Hello World!</h1>
      );
    }
  }