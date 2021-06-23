import React, {Component} from "react";
import {Button, Checkbox, Drawer, Dropdown, Menu, message} from "antd";

import CustomScrollbars from "../../../util/CustomScrollbars";
import toDos from "./data/todo";
import filters from "./data/filters";
import labels from "./data/labels";
import options from "./data/options";
import todoConversation from "./data/todoConversation";
import ToDoList from "../../../app/components/todo/ToDoList";
import ToDoDetail from "../../../app/components/todo/ToDoDetail";
import AppModuleHeader from "../../../app/components/AppModuleHeader";
import IntlMessages from "../../../util/IntlMessages";
import CircularProgress from "../../../app/components/CircularProgress";

import './index.css';

const ITEM_HEIGHT = 34;

class ToDo extends Component {

  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      toDos: (this.state.toDos, oldIndex, newIndex),
    });
  };
  onLabelSelect = event => {
    this.setState({
      anchorEl: event.currentTarget,
      labelMenuState: !this.state.labelMenuState
    })
  };
  onOptionMenuSelect = event => {
    this.setState({
      anchorEl: event.currentTarget,
      optionMenuState: !this.state.optionMenuState
    })
  };
  onOptionMenuItemSelect = (e) => {
    switch (e.key) {
      case 'All':
        this.handleRequestClose();
        this.getAllTodo();
        break;
      case 'None':
        this.handleRequestClose();
        this.getUnselectedAllTodo();
        break;
      case 'Starred':
        this.handleRequestClose();
        this.getStarredToDo();
        break;
      case 'Unstarred':
        this.handleRequestClose();
        this.getUnStarredTodo();
        break;
      case 'Important':
        this.handleRequestClose();
        this.getImportantToDo();
        break;
      case 'Unimportant':
        this.handleRequestClose();
        this.getUnimportantToDo();
        break;
      default:
        return '';
    }
  };
  getAllTodo = () => {
    let toDos = this.state.allToDos.map((todo) => todo ? {
      ...todo,
      selected: true
    } : todo);
    this.setState({
      selectedToDos: toDos.length,
      allToDos: toDos,
      optionName: 'All',
      toDos: toDos
    });
  };
  getUnselectedAllTodo = () => {
    let toDos = this.state.allToDos.map((todo) => todo ? {
      ...todo,
      selected: false
    } : todo);
    this.setState({
      selectedToDos: 0,
      allToDos: toDos,
      optionName: 'None',
      toDos: toDos
    });
  };
  getStarredToDo = () => {
    let selectedToDos = 0;
    let toDos = this.state.allToDos.map((todo) => {
      if (todo.starred) {
        selectedToDos++;
        return {...todo, selected: true};
      }
      return {...todo, selected: false}
    });
    this.setState({
      selectedToDos: selectedToDos,
      allToDos: toDos,
      toDos: toDos.filter(todo => !todo.deleted)
    });
    return toDos;
  };
  getUnStarredTodo = () => {
    let selectedToDos = 0;
    let toDos = this.state.allToDos.map((todo) => {
      if (!todo.starred) {
        selectedToDos++;
        return {...todo, selected: true};
      }
      return {...todo, selected: false}
    });
    this.setState({
      selectedToDos: selectedToDos,
      allToDos: toDos,
      optionName: 'Unstarred',
      toDos: toDos.filter(todo => !todo.deleted)
    });
    return toDos;
  };
  getImportantToDo = () => {
    let selectedToDos = 0;
    let toDos = this.state.allToDos.map((todo) => {
      if (todo.important) {
        selectedToDos++;
        return {...todo, selected: true};
      }
      return {...todo, selected: false}
    });
    this.setState({
      selectedToDos: selectedToDos,
      allToDos: toDos,
      optionName: 'Important',
      toDos: toDos.filter(todo => !todo.deleted)
    });
    return toDos;
  };
  getUnimportantToDo = () => {
    let selectedToDos = 0;
    let toDos = this.state.allToDos.map((todo) => {
      if (!todo.important) {
        selectedToDos++;
        return {...todo, selected: true};
      }
      return {...todo, selected: false}
    });
    this.setState({
      selectedToDos: selectedToDos,
      allToDos: toDos,
      optionName: 'Unimportant',
      toDos: toDos.filter(todo => !todo.deleted)
    });

    return toDos;
  };
  onLabelMenuItemSelect = (e) => {
    const label = +e.key;
    this.handleRequestClose();
    const toDos = this.state.allToDos.map(todo => {
        if (todo.selected) {
          if (todo.labels.includes(label.id)) {
            return {...todo, labels: this.removeLabel(todo, label.id)};
          } else {
            return {...todo, labels: this.addLabel(todo, label.id)};
          }
        } else {
          return todo;
        }
      }
    );
    this.setState({
      alertMessage: 'Label Updated Successfully',
      showMessage: true,
      allToDos: toDos,
      toDos: toDos
    });
  };
  handleRequestClose = () => {
    this.setState({showMessage: false, addTodo: false, labelMenuState: false, optionMenuState: false,});
  };
  onLabelUpdate = (data, label) => {
    if (data.labels.includes(label.id)) {
      data.labels = this.removeLabel(data, label.id);
    } else {
      data.labels = this.addLabel(data, label.id);
    }
    this.handleRequestClose();
    const toDos = this.state.allToDos.map(todo => {
        if (todo.id === data.id) {
          return data;
        } else {
          return todo;
        }
      }
    );

    this.setState({
      alertMessage: 'Label Updated Successfully',
      showMessage: true,
      currentTodo: data,
      allToDos: toDos,
      toDos: toDos,
    });
  };
  onMarkAsStart = (data) => {
    const toDos = this.state.allToDos.map(todo => {
      if (todo.id === data.id) {
        return data;
      } else {
        return todo;
      }
    });
    this.setState({
      alertMessage: 'ToDo Updated Successfully',
      showMessage: true,
      allToDos: toDos,
      toDos: toDos,
    });
  };

  onToDoUpdate = (data) => {
    this.handleRequestClose();
    const toDos = this.state.allToDos.map(todo => {
      if (todo.id === data.id) {
        return data;
      } else {
        return todo;
      }
    });
    this.setState({
      alertMessage: 'ToDo Updated Successfully',
      showMessage: true,
      currentTodo: data,
      allToDos: toDos,
      toDos: toDos,
    });
  };


  onDeleteToDo = (data) => {
    let selectedToDos = 0;
    const toDos = this.state.allToDos.map(todo => {
        if (todo.selected) {
          selectedToDos++
        }
        if (data.id === todo.id) {
          if (todo.selected) {
            selectedToDos--
          }
          return {...todo, deleted: true};
        } else {
          return todo;
        }
      }
    );
    this.setState({
      alertMessage: 'ToDo Deleted Successfully',
      showMessage: true,
      allToDos: toDos,
      currentTodo: null,
      selectedToDos: selectedToDos,
      toDos: toDos.filter((todo) => !todo.deleted)
    });

  };
  getNavFilters = () => {
    return filters.map((filter, index) =>
      <li key={index} onClick={() => {
        const filterMails = this.state.allToDos.filter(todo => {
          if (filter.id === 0 && todo.starred) {
            return todo
          } else if (filter.id === 1 && todo.important) {
            return todo
          } else if (filter.id === 2 && todo.important) {
            return todo
          } else if (filter.id === 3 && todo.important) {
            return todo
          } else if (filter.id === 4 && todo.completed) {
            return todo
          } else if (filter.id === 5 && todo.deleted) {
            return todo
          } else
            return todo
        });
        this.setState({
          loader: true,
          currentTodo: null,
          filter: filter.id,
          toDos: filterMails
        });
        setTimeout(() => {
          this.setState({loader: false});
        }, 1500);
      }
      }>
        <span className={filter.id === this.state.selectedSectionId ? 'gx-link active' : 'gx-link'}>
          <i className={`icon icon-${filter.icon}`}/>
          <span>{filter.title}</span>
        </span>
      </li>
    )
  };
  getNavLabels = () => {
    return labels.map((label, index) =>
      <li key={index} onClick={() => {
        const filterMails = this.state.allToDos.filter(todo => todo.labels.includes(label.id));
        this.setState({
          loader: true,
          currentTodo: null,
          toDos: filterMails
        });
        setTimeout(() => {
          this.setState({loader: false});
        }, 1500);
      }
      }>
        <span className="gx-link">
          <i className={`icon icon-circle gx-text-${label.color}`}/>
          <span>{label.title}</span>
        </span>
      </li>
    )
  };
  ToDoSideBar = () => {
    return <div className="gx-module-side">
      <div className="gx-module-side-header">
        <div className="gx-module-logo">
          <i className="icon icon-check-circle-o gx-mr-4"/>
          <IntlMessages id="sidebar.todoApp"/>
        </div>

      </div>
      <div className="gx-module-side-content">
        <CustomScrollbars className="gx-module-side-scroll">
          <div className="gx-module-add-task">
            <Button variant="raised" type="primary" className="gx-btn-block"
                    onClick={() => {
                      this.setState({addTodo: true})
                    }}> <IntlMessages id="todo.addTask"/> </Button>
          </div>
          <ul className="gx-module-nav">

            <li onClick={() => {
              this.setState({
                currentTodo: null,
                toDos: this.state.allToDos
              });
            }
            }>
              <span className="gx-link active">
                <i className="icon icon-all-contacts gx-pt-1"/>
                <span><IntlMessages id="todo.all"/></span>
              </span>
            </li>

            <li className="gx-module-nav-label">
              <IntlMessages id="todo.filters"/>
            </li>

            {this.getNavFilters()}

            <li className="gx-module-nav-label">
              <IntlMessages id="todo.labels"/>
            </li>
            {this.getNavLabels()}
          </ul>
        </CustomScrollbars>
      </div>
    </div>
  };
  searchTodo = (searchText) => {
    if (searchText === '') {
      this.setState({toDos: this.state.allToDos.filter((todo) => !todo.deleted)});
    } else {
      const searchToDos = this.state.allToDos.filter((todo) =>
        !todo.deleted && todo.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1);
      this.setState({
        toDos: searchToDos
      });
    }
  };
  showToDos = ({currentTodo, toDos, conversation, user}) => {
    return currentTodo === null ?
      <ToDoList toDos={toDos} onSortEnd={this.onSortEnd}
                onMarkAsStart={this.onMarkAsStart.bind(this)}
                onTodoSelect={this.onTodoSelect.bind(this)}
                onTodoChecked={this.onTodoChecked.bind(this)} useDragHandle={true}/>
      :
      <ToDoDetail todo={currentTodo} user={user}
                  conversation={conversation}
                  onLabelUpdate={this.onLabelUpdate.bind(this)}
                  onToDoUpdate={this.onToDoUpdate.bind(this)}
                  onDeleteToDo={this.onDeleteToDo.bind(this)}/>
  };
  optionMenu = () => {
    return (<Menu id="option-menu" onClick={this.onOptionMenuItemSelect.bind(this)}
                  onClose={this.handleRequestClose}
                  style={{maxHeight: ITEM_HEIGHT * 5.5}}>
      {options.map(option =>
        <Menu.Item key={option.title}
        >
          {option.title}
        </Menu.Item>,
      )}
    </Menu>)

  };
  labelMenu = () => {
    return (
      <Menu id="label-menu" onClick={this.onLabelMenuItemSelect.bind(this)}
            onClose={this.handleRequestClose}
            style={{maxHeight: ITEM_HEIGHT * 4.5}}>
        {labels.map(label =>
          <Menu.Item key={label}>
            {label.title}
          </Menu.Item>,
        )}
      </Menu>)
  };

  constructor() {
    super();
    this.state = {
      searchTodo: '',
      alertMessage: '',
      loader: false,
      showMessage: false,
      drawerState: false,
      optionName: 'None',
      anchorEl: null,
      allToDos: toDos,
      currentTodo: null,
      user: {
        name: 'Robert Johnson',
        email: 'robert.johnson@example.com',
        avatar: 'https://via.placeholder.com/150x150'
      },
      selectedToDos: 0,
      labelMenuState: false,
      optionMenuState: false,
      toDos: toDos,
      filter: -1,
      todoConversation,
      conversation: null
    }
  }

  componentDidMount() {
    this.manageHeight();
  }

  componentDidUpdate() {
    this.manageHeight();
  }

  getToDoConversation(id) {
    return todoConversation.find((conversation) => conversation.id === id);
  }

  onTodoChecked(data) {
    data.selected = !data.selected;
    let selectedToDos = 0;
    const toDos = this.state.toDos.map(todo => {
        if (todo.selected) {
          selectedToDos++;
        }
        if (todo.id === data.id) {
          if (todo.selected) {
            selectedToDos++;
          }
          return data;
        } else {
          return todo;
        }
      }
    );
    this.setState({
      selectedToDos: selectedToDos,
      toDos: toDos
    });
  }

  onAllTodoSelect() {
    const selectAll = this.state.selectedToDos < this.state.toDos.length;
    if (selectAll) {
      this.getAllTodo();
    } else {
      this.getUnselectedAllTodo();
    }
  }

  onTodoAdd(data) {
    this.setState(
      {
        toDos: this.state.allToDos.concat(data),
        allToDos: this.state.allToDos.concat(data)
      }
    );
  }

  manageHeight() {
  }

  onTodoSelect(todo) {
    let conversationList = this.getToDoConversation(todo.id);
    if (conversationList) {
      conversationList = conversationList.conversationData;
    } else {
      conversationList = [];
    }
    this.setState({
      currentTodo: todo,
      loader: true,
      conversation: conversationList
    });
    setTimeout(() => {
      this.setState({loader: false});
    }, 1500);
  }

  removeLabel(todo, label) {
    todo.labels.splice(todo.labels.indexOf(label), 1);
    return todo.labels;
  }

  addLabel(todo, label) {
    todo.labels = todo.labels.concat(label);
    return todo.labels
  }

  onToggleDrawer() {
    this.setState({
      drawerState: !this.state.drawerState
    });
  }

  updateSearch(evt) {
    this.setState({
      searchTodo: evt.target.value,
    });
    this.searchTodo(evt.target.value)
  }

  render() {
    const {selectedToDos, loader, drawerState, toDos, alertMessage, showMessage} = this.state;

    return (
      <div className="gx-main-content">
        <div className="gx-app-module">
          <div className="gx-d-block gx-d-lg-none">
            <Drawer
              placement="left"
              closable={false}
              visible={drawerState}
              onClose={this.onToggleDrawer.bind(this)}>
              {this.ToDoSideBar()}
            </Drawer>
          </div>
          <div className="gx-module-sidenav gx-d-none gx-d-lg-flex">
            {this.ToDoSideBar()}
          </div>

          <div className="gx-module-box">
            <div className="gx-module-box-header">

              <span className="gx-drawer-btn gx-d-flex gx-d-lg-none">
                  <i className="icon icon-menu gx-icon-btn" aria-label="Menu"
                     onClick={this.onToggleDrawer.bind(this)}/>
              </span>
              <AppModuleHeader placeholder="Search To Do" user={this.state.user}
                               onChange={this.updateSearch.bind(this)}
                               value={this.state.searchTodo}/>
            </div>
            <div className="gx-module-box-content">
              {this.state.currentTodo === null ?
                <div className="gx-module-box-topbar gx-module-box-topbar-todo">
                  {this.state.toDos.length > 0 ?
                    <>
                      <Checkbox className="gx-icon-btn" color="primary"
                                indeterminate={selectedToDos > 0 && selectedToDos < toDos.length}
                                checked={selectedToDos > 0}
                                onChange={this.onAllTodoSelect.bind(this)}
                                value="SelectMail"/>
                      <Dropdown overlay={this.optionMenu()} placement="bottomRight" trigger={['click']}>
                        <div>
                          <span className="gx-px-2"> {this.state.optionName}</span>
                          <i className="icon icon-charvlet-down"/>
                        </div>
                      </Dropdown>
                    </> : null}

                  {(selectedToDos > 0) &&

                  <Dropdown overlay={this.labelMenu()} placement="bottomRight" trigger={['click']}>
                    <i className="gx-icon-btn icon icon-tag"/>
                  </Dropdown>
                  }
                </div>
                :
                <div className="gx-module-box-topbar">
                  <i className="icon icon-arrow-left gx-icon-btn" onClick={() => {
                    this.setState({currentTodo: null})
                  }}/>
                </div>
              }
              {loader ?
                <div className="gx-loader-view">
                  <CircularProgress/>
                </div> :
                this.showToDos(this.state)
              }
            </div>
          </div>
        </div>
        {showMessage && message.info(<span id="message-id">{alertMessage}</span>, 3, this.handleRequestClose)}
      </div>
    )
  }
}

export default ToDo;
