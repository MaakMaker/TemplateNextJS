import React from "react";
import {Card, Select} from "antd";

const Option = Select.Option;


const provinceData = ['Zhejiang', 'Jiangsu'];
const cityData = {
  Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
  Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
};


class SelectCoordinate extends React.Component {
  state = {
    cities: cityData[provinceData[0]],
    secondCity: cityData[provinceData[0]][0],
  };
  handleProvinceChange = (value) => {
    this.setState({
      cities: cityData[value],
      secondCity: cityData[value][0],
    });
  };
  onSecondCityChange = (value) => {
    this.setState({
      secondCity: value,
    });
  };

  render() {
    const provinceOptions = provinceData.map(province => <Option key={province}>{province}</Option>);
    const cityOptions = this.state.cities.map(city => <Option key={city}>{city}</Option>);
    return (
      <Card className="gx-card" title="Select Coordinate">
        <Select className="gx-mr-3 gx-mb-3" defaultValue={provinceData[0]} style={{width: 90}}
                onChange={this.handleProvinceChange}>
          {provinceOptions}
        </Select>
        <Select className="gx-mr-3 gx-mb-3" value={this.state.secondCity} style={{width: 90}}
                onChange={this.onSecondCityChange}>
          {cityOptions}
        </Select>
      </Card>
    );
  }
}

export default SelectCoordinate;
