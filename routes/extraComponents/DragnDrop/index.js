import React, {Component} from "react";
import {Col, Row} from "antd";
import {arrayMove, SortableContainer} from "react-sortable-hoc";

import ContactCell from "./ContactCell";
import contacts from "../../inbuiltApps/Chat/data/chatUsers";
import ContainerHeader from "../../../app/components/ContainerHeader";
import IntlMessages from "../../../util/IntlMessages";

const Contacts = SortableContainer(({contacts}) => {
  return (
    <Row>
      <Col span={24}>
        {contacts.map((contact, index) => (
          <ContactCell key={index} index={index} contact={contact}/>
        ))}
      </Col>
    </Row>
  );
});


class DragNDrop extends Component {

  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      contacts: arrayMove(this.state.contacts, oldIndex, newIndex),
    });
  };

  constructor() {
    super();
    this.state = {
      contacts: contacts,
    }
  }

  render() {
    const {contacts} = this.state;

    return (
      <div className="gx-main-content gx-mb-4">
        <ContainerHeader title={<IntlMessages id="sidebar.extensions.dragNDrop"/>} match={this.props.match}/>
        <Contacts contacts={contacts} onSortEnd={this.onSortEnd} useDragHandle={true}/>

      </div>
    )
  }
}

export default DragNDrop;

