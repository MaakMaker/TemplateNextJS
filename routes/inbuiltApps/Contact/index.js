import React, {Component} from "react";
import {Button, Checkbox, Drawer, message} from "antd";
import CustomScrollbars from "../../../util/CustomScrollbars";

import contactList from "./data/contactList";
import ContactList from "../../../app/components/contact/ContactList";
import AppModuleHeader from "../../../app/components/AppModuleHeader";
import AddContact from "../../../app/components/contact/AddContact";
import IntlMessages from "../../../util/IntlMessages";
import './index.css';

let contactId = 723812738;

const filterOptions = [
  {
    id: 1,
    name: 'All contacts',
    icon: 'all-contacts'
  }, {
    id: 2,
    name: 'Frequently contacted',
    icon: 'frequent'

  }, {

    id: 3,
    name: 'Starred contacts',
    icon: 'star'
  }
];

class Contact extends Component {

  ContactSideBar = (user) => {
    return <div className="gx-module-side">
      <div className="gx-module-side-header">
        <div className="gx-module-logo">
          <i className="icon icon-contacts gx-mr-4"/>
          <span><IntlMessages id="chat.contacts"/></span>
        </div>
      </div>

      <div className="gx-module-side-content">
        <CustomScrollbars className="gx-module-side-scroll">
          <div className="gx-module-add-task">
            <Button className="gx-btn-block ant-btn" type="primary" aria-label="add"
                    onClick={this.onAddContact}>
              <i className="icon icon-add gx-mr-2"/>
              <span>Add New Contact</span>
            </Button>
          </div>
          <div className="gx-module-side-nav">
            <ul className="gx-module-nav">
              {filterOptions.map(option => <li key={option.id} className="gx-nav-item">
                  <span
                    className={`gx-link ${option.id === this.state.selectedSectionId ? 'active' : ''}`} onClick={
                    this.onFilterOptionSelect.bind(this, option)
                  }>
                    <i className={`icon icon-${option.icon}`}/>
                    <span>{option.name}</span>
                  </span>
                </li>
              )}

            </ul>
          </div>
        </CustomScrollbars>
      </div>
    </div>

  };

  addFavourite = (data) => {
    this.setState({
      alertMessage: data.starred ? 'Contact removed as star' : 'Contact marked as star',
      showMessage: true,
      contactList: this.state.contactList.map((contact) => contact.id === data.id ? {
        ...contact,
        starred: !data.starred
      } : contact),
      allContact: this.state.allContact.map((contact) => contact.id === data.id ? {
        ...contact,
        starred: !data.starred
      } : contact)
    })
  };
  onContactSelect = (data) => {
    data.selected = !data.selected;
    let selectedContacts = 0;
    const contactList = this.state.contactList.map(contact => {
        if (contact.selected) {
          selectedContacts++;
        }
        if (contact.id === data.id) {
          if (contact.selected) {
            selectedContacts++;
          }
          return data;
        } else {
          return contact;
        }
      }
    );
    this.setState({
      selectedContacts: selectedContacts,
      contactList: contactList
    });

  };


  onAddContact = () => {
    this.setState({addContactState: true});
  };
  onContactClose = () => {
    this.setState({addContactState: false});
  };
  onFilterOptionSelect = (option) => {
    switch (option.name) {
      case 'All contacts': {
        this.setState({
          selectedSectionId: option.id,
          filterOption: option.name,
          contactList: this.state.allContact
        });
        break;
      }
      case 'Frequently contacted': {
        this.setState({
          selectedSectionId: option.id,
          filterOption: option.name,
          contactList: this.state.allContact.filter((contact) => contact.frequently)
        });
        break;
      }
      case 'Starred contacts': {
        this.setState({
          selectedSectionId: option.id,
          filterOption: option.name,
          contactList: this.state.allContact.filter((contact) => contact.starred)
        });
        break;
      }
      default:
        break;
    }

  };
  onSaveContact = (data) => {
    let isNew = true;
    const contactList = this.state.allContact.map((contact) => {
      if (contact.id === data.id) {
        isNew = false;
        return data
      } else {
        return contact
      }
    });
    if (isNew) {
      contactList.push(data);
    }
    this.setState({
      alertMessage: isNew ? 'Contact Added Successfully' : 'Contact Updated Successfully',
      showMessage: true,
      contactList: contactList,
      allContact: contactList
    });
    // this.onFilterOptionSelect(this.state.filterOption);
  };
  onDeleteContact = (data) => {
    this.setState({
      alertMessage: 'Contact Deleted Successfully',
      showMessage: true,
      allContact: this.state.allContact.filter((contact) => contact.id !== data.id),
      contactList: this.state.allContact.filter((contact) => contact.id !== data.id)
    })
  };
  onDeleteSelectedContact = () => {
    const contacts = this.state.allContact.filter((contact) => !contact.selected);
    this.setState({
      alertMessage: 'Contact Deleted Successfully',
      showMessage: true,
      allContact: contacts,
      contactList: contacts,
      selectedContacts: 0
    })
  };
  filterContact = (userName) => {
    const {filterOption} = this.state;
    if (userName === '') {
      this.setState({contactList: this.state.allContact});
    } else {
      const filterContact = this.state.allContact.filter((contact) =>
        contact.name.toLowerCase().indexOf(userName.toLowerCase()) > -1);
      if (filterOption === 'All contacts') {
        this.setState({contactList: filterContact});
      } else if (filterOption === 'Frequently contacted') {
        this.setState({contactList: filterContact.filter((contact) => contact.frequently)});

      } else if (filterOption === 'Starred contacts') {
        this.setState({contactList: filterContact.filter((contact) => contact.starred)});
      }
    }
  };
  handleRequestClose = () => {
    this.setState({
      showMessage: false,
    });
  };
  getAllContact = () => {
    let contactList = this.state.allContact.map((contact) => contact ? {
      ...contact,
      selected: true
    } : contact);
    this.setState({
      selectedContacts: contactList.length,
      allContact: contactList,
      contactList: contactList
    });
  };
  getUnselectedAllContact = () => {
    let contactList = this.state.allContact.map((contact) => contact ? {
      ...contact,
      selected: false
    } : contact);
    this.setState({
      selectedContacts: 0,
      allContact: contactList,
      contactList: contactList
    });
  };

  constructor() {
    super();
    this.state = {
      noContentFoundMessage: 'No Contact found in selected folder',
      alertMessage: '',
      showMessage: false,
      selectedSectionId: 1,
      drawerState: false,
      user: {
        name: 'Robert Johnson',
        email: 'robert.johnson@example.com',
        avatar: 'https://via.placeholder.com/150x150'
      },
      searchUser: '',
      filterOption: 'All contacts',
      allContact: contactList,
      contactList: contactList,
      selectedContact: null,
      selectedContacts: 0,
      addContactState: false,
    }
  }

  onAllContactSelect() {
    const selectAll = this.state.selectedContacts < this.state.contactList.length;
    if (selectAll) {
      this.getAllContact();
    } else {
      this.getUnselectedAllContact();
    }
  }

  updateContactUser(evt) {
    this.setState({
      searchUser: evt.target.value,
    });
    this.filterContact(evt.target.value)
  }

  onToggleDrawer() {
    this.setState({
      drawerState: !this.state.drawerState
    });
  }

  render() {
    const {user, contactList, addContactState, drawerState, selectedContacts, alertMessage, showMessage, noContentFoundMessage} = this.state;
    return (
      <div className="gx-main-content">
        <div className="gx-app-module">

          <div className="gx-d-block gx-d-lg-none">
            <Drawer
              placement="left"
              closable={false}
              visible={drawerState}
              onClose={this.onToggleDrawer.bind(this)}>
              {this.ContactSideBar()}
            </Drawer>
          </div>
          <div className="gx-module-sidenav gx-d-none gx-d-lg-flex">
            {this.ContactSideBar(user)}
          </div>

          <div className="gx-module-box">
            <div className="gx-module-box-header">
              <span className="gx-drawer-btn gx-d-flex gx-d-lg-none">
                  <i className="icon icon-menu gx-icon-btn" aria-label="Menu"
                     onClick={this.onToggleDrawer.bind(this)}/>
              </span>

              <AppModuleHeader placeholder="Search contact" notification={false} apps={false}
                               user={this.state.user}
                               onChange={this.updateContactUser.bind(this)}
                               value={this.state.searchUser}/>
            </div>
            <div className="gx-module-box-content">

              <div className="gx-module-box-topbar">
                <Checkbox color="primary" className="gx-icon-btn"
                          indeterminate={selectedContacts > 0 && selectedContacts < contactList.length}
                          checked={selectedContacts > 0}
                          onChange={this.onAllContactSelect.bind(this)}
                          value="SelectMail"/>


                {selectedContacts > 0 &&
                <i className="gx-icon-btn icon icon-trash" onClick={this.onDeleteSelectedContact.bind(this)}/>}

              </div>
              <CustomScrollbars className="gx-module-content-scroll">
                {contactList.length === 0 ?
                  <div className="gx-h-100 gx-d-flex gx-align-items-center gx-justify-content-center">
                    {noContentFoundMessage}
                  </div>
                  : <ContactList contactList={contactList}
                                 addFavourite={this.addFavourite.bind(this)}
                                 onContactSelect={this.onContactSelect.bind(this)}
                                 onDeleteContact={this.onDeleteContact.bind(this)}
                                 onSaveContact={this.onSaveContact.bind(this)}/>
                }


              </CustomScrollbars>

            </div>
          </div>
        </div>

        <AddContact open={addContactState} contact={{
          'id': contactId++,
          'name': '',
          'thumb': '',
          'email': '',
          'phone': '',
          'designation': '',
          'selected': false,
          'starred': false,
          'frequently': false,
        }} onSaveContact={this.onSaveContact}
                    onContactClose={this.onContactClose} onDeleteContact={this.onDeleteContact}/>

        {showMessage && message.info(<span id="message-id">{alertMessage}</span>, 3, this.handleRequestClose)}
      </div>
    )
  }
}

export default Contact;
