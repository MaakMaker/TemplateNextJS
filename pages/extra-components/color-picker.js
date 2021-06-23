import Head from 'next/head';
import ColorPicker from '../../routes/extraComponents/ColorPicker';
import React from 'react';

const ColorPickerPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Color Picker</title>
      </Head>
      <ColorPicker/>
    </React.Fragment>
  );
}

export default ColorPickerPage;
