import React from "react";
import {Card, Checkbox} from "antd";

const CheckboxGroup = Checkbox.Group;

function onChange(checkedValues) {
  console.log('checked = ', checkedValues);
}

const plainOptions = ['Apple', 'Pear', 'Orange'];

const options = [
  {label: 'Apple', value: 'Apple'},
  {label: 'Pear', value: 'Pear'},
  {label: 'Orange', value: 'Orange'},
];

const optionsWithDisabled = [
  {label: 'Apple', value: 'Apple'},
  {label: 'Pear', value: 'Pear'},
  {label: 'Orange', value: 'Orange', disabled: false},
];


const CheckboxGroups = () => {
    return (
      <Card className="gx-card" title="Checkbox Groups">
        <CheckboxGroup options={plainOptions} defaultValue={['Apple']} onChange={onChange}/>
        <br/><br/>
        <CheckboxGroup options={options} defaultValue={['Pear']} onChange={onChange}/>
        <br/><br/>
        <CheckboxGroup options={optionsWithDisabled} disabled defaultValue={['Apple']} onChange={onChange}/>
      </Card>
    );
  }
;

export default CheckboxGroups;
