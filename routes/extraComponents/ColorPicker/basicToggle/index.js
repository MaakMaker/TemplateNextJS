import React from "react";
import {Button} from "antd";

import {CompactPicker} from "react-color";

class BasicToggle extends React.Component {
  state = {
    pickerVisible: false,
  };

  render() {
    const handleColorChange = ({hex}) => console.log(hex);
    const onTogglePicker = () => this.setState({pickerVisible: !this.state.pickerVisible});

    return (
      <div className="gx-z-index-20">
        <Button onClick={onTogglePicker}>
          Toggle Picker
        </Button>

        {this.state.pickerVisible && (
          <div style={{position: 'absolute'}}>
            <CompactPicker
              color="#333"
              onChangeComplete={handleColorChange}
            />
          </div>
        )}
      </div>
    )
  }
}

export default BasicToggle
