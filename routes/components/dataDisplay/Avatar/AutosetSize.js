import React from "react";
import {Avatar, Button, Card} from "antd";

const UserList = ['U', 'Lucy', 'Tom', 'Edward'];
const colorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];

class AutosetSize extends React.Component {
  changeUser = () => {
    const index = UserList.indexOf(this.state.user);
    this.setState({
      user: index < UserList.length - 1 ? UserList[index + 1] : UserList[0],
      color: index < colorList.length - 1 ? colorList[index + 1] : colorList[0],
    });
  };

  constructor(props) {
    super(props);
    this.state = {
      user: UserList[0],
      color: colorList[0],
    };
  }

  render() {
    return (
      <Card className="gx-card" title="Autoset Size">
        <Avatar style={{backgroundColor: this.state.color, verticalAlign: 'middle'}} size="large">
          {this.state.user}
        </Avatar>
        <Button className="gx-mb-0" size="small" style={{marginLeft: 16, verticalAlign: 'middle'}}
                onClick={this.changeUser}>
          Change
        </Button>
      </Card>
    );
  }
}

export default AutosetSize;
