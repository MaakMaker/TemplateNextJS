import React from "react";
import {Avatar} from "antd";
import {SortableElement, SortableHandle} from "react-sortable-hoc";

const DragHandle = SortableHandle(() =>
  <span className="gx-draggable-icon gx-pt-2">
    <i className="icon icon-expand" style={{fontSize: 25}}/>
  </span>);

class ContactCell extends React.Component {

  onDeleteContact = (contact) => {
    this.setState({addContactState: false});
    this.props.onDeleteContact(contact);
  };

  constructor() {
    super();
    this.state = {
      addContactState: false,
    }
  }

  render() {
    const {contact} = this.props;
    const {name, thumb, status, phone, mood, starred} = contact;
    return (

      <div className="gx-contact-item gx-dragndrop-item">

        <DragHandle/>
        {(thumb === null || thumb === '') ?
          <div className="gx-px-md-4 gx-px-2">
              <span className="gx-avatar gx-bg-blue gx-text-white gx-border-0 gx-size-40"
                    style={{fontSize: 20}}>
                {name.charAt(0).toUpperCase()}
              </span>
          </div> :
          <div className="gx-px-md-4 gx-px-2"><Avatar className="gx-size-40" alt={name} src={thumb}/></div>}

        <div className="gx-col gx-dragndrop-name gx-text-truncate gx-px-2">{name}</div>


        <div className="gx-col gx-dragndrop-email gx-text-truncate gx-d-none gx-d-xl-flex gx-px-2">
          {status}
        </div>

        <div className="gx-col gx-dragndrop-phone gx-d-none gx-d-md-flex gx-px-2">
          {phone}
        </div>

        <div className="gx-col gx-job-title gx-d-none gx-d-sm-flex gx-px-2">
          {mood}
        </div>


        <div className="gx-dragndrop-actions gx-px-2">
          {starred ? <i className="gx-icon-btn icon icon-star"/> : <i className="gx-icon-btn icon icon-star-o"/>}

          <i className="gx-icon-btn icon icon-ellipse-v"
             onClick={this.onContactOptionSelect}/>

        </div>
      </div>

    )
  }
}

export default SortableElement(ContactCell);
