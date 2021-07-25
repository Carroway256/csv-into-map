import React from "react";
import { Dropdown } from "semantic-ui-react";
import "./SpecifyColums.css";
const Options = [
  {
    key: "City",
    text: "City",
    value: "City",
  },
  {
    key: 1,
    text: "State",
    value: "State",
  },
  {
    key: "Zip",
    text: "Zip",
    value: "Zip",
  },
  {
    key: "Address",
    text: "Address",
    value: "Address",
  },
  {
    key: "Cattegory",
    text: "Cattegory",
    value: "Cattegory",
  },
];

class SpecifyColums extends React.Component {
  state = {
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    visible: true,
  };
  findCattegory = () => {
    var dict = this.state;
    for (var key in dict) {
      if (dict[key] === "Cattegory") {
        var cattegoryRow = key;
      }
    }
    this.props.onCattegoryFound(cattegoryRow);
    this.setState({ visible: false });
  };
  onSelect1 = (e, v) => {
    this.setState({ 0: v.value }, () => {});
  };
  onSelect2 = (e, v) => {
    this.setState({ 1: v.value }, () => {});
  };
  onSelect3 = (e, v) => {
    this.setState({ 2: v.value }, () => {});
  };
  onSelect4 = (e, v) => {
    this.setState({ 3: v.value }, () => {});
  };
  onSelect5 = (e, v) => {
    this.setState({ 4: v.value }, () => {});
  };

  render() {
    if (this.state.visible === true) {
      return (
        <div className="whole">
          <h1>Select which value translate to which row and submit</h1>

          <div className="wraper">
            <div className="first">
              {this.props.DissplayWords(this.props.data[0])}
            </div>
            <div className="second">
              <Dropdown
                placeholder={this.state.value}
                fluid
                selection
                options={Options}
                onChange={this.onSelect1}
              />

              <Dropdown
                placeholder={this.state.value}
                fluid
                selection
                options={Options}
                onChange={this.onSelect2}
              />
              <Dropdown
                placeholder={this.state.value}
                fluid
                selection
                options={Options}
                onChange={this.onSelect3}
              />
              <Dropdown
                placeholder={this.state.value}
                fluid
                selection
                options={Options}
                onChange={this.onSelect4}
              />
              <Dropdown
                fluid
                selection
                options={Options}
                onChange={this.onSelect5}
              />
              <button
                onClick={this.findCattegory}
                className="ui primary button"
              >
                submit
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default SpecifyColums;
