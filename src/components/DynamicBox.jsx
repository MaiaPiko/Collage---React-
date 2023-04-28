import React from "react";
import { Resizable } from "re-resizable";
import Draggable from "react-draggable";

const boxStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#f0f0f0",
  width: "fit-content",
  height: "fit-content",
};

class DynamicBox extends React.Component {
  state = {
    width: 200,
    height: 300,
    selected: false,
  };

  handleResize = (event, { size }) => {
    if (size) {
      this.setState({ width: size.width, height: size.height });
    }
  };

  // handleClick = () => {
  //   this.setState((prevState) => ({ selected: !prevState.selected }));
  // };

  handleDoubleClick = () => {
    this.setState(prevState => ({
      selected: !prevState.selected
    }));
  };

  render() {
    const { width, height, selected } = this.state;
    const aspectRatio = height / width;
    const borderStyle = selected ? "2px solid green" : "none";
    const boxStyleWithBorder = {
      ...boxStyle,
      border: borderStyle,
      borderRadius: selected ? "25px" : "0",
      padding: selected ? "20px" : "0",
    };

    if (selected) {
      return (
        <Draggable axis="both" handle=".handle" defaultPosition={{ x: 0, y: 0 }} grid={[25, 25]} scale={1}>
          <div className="handle" style={{ width: "fit-content", height: "fit-content" }}>
            <Resizable
              style={boxStyleWithBorder}
              lockAspectRatio={true}
              defaultSize={{ width: width, height: height }}
              onResize={this.handleResize}
            >
              <img src={this.props.src} style={{ width: "100%", height: "100%", border: borderStyle }} onDoubleClick={this.handleDoubleClick} />
            </Resizable>
          </div>
        </Draggable>
      );
    } else {
      return <img src={this.props.src} style={{ width: width, height: height, border: borderStyle }}  onDoubleClick={this.handleDoubleClick} />;
    }
  }
}

export default DynamicBox;