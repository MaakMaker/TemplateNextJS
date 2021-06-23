import React from "react";
import {Button} from "antd";

import {BlockPicker} from "react-color";

export const BasicPosition = () => {
  const handleColorChange = ({hex}) => console.log(hex);

  return (
    <div className="gx-text-center gx-alpha-pickers">
      <Button>
        Pick Color
      </Button>

      <div
        style={{
          position: 'absolute',
          top: '28px',
          left: '50%',
          transform: 'translateX(-50%)',
          marginTop: 18,
        }}
      >
        <BlockPicker
          color="#333"
          onChangeComplete={handleColorChange}
        />
      </div>
    </div>
  )
};

export default BasicPosition
