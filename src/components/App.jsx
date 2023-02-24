import React, { Component } from 'react';
import data from 'components/data';
import { UserList } from './UserList/UserList';
import { Button } from './Button/Button';
import { Form } from './Form/Form';
import { nanoid } from 'nanoid';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    isListShow: false,
    isFormShow: false,
    users: data,
    currentAvatar: null,
  };

  addUser = obj => {
    const newUser = { ...obj };
    newUser.id = nanoid();

    this.setState(prevState => {
      return { users: [...prevState.users, newUser] };
    });
  };
  showList = () => {
    this.setState(prevState => {
      return {
        isListShow: !prevState.isListShow,
      };
    });
  };

  showForm = () => {
    this.setState({ isFormShow: true });
  };

  closeForm = () => {
    return this.setState({ isFormShow: false });
  };

  deleteUser = id => {
    this.setState(prevState => ({
      users: prevState.users.filter(user => user.id !== id),
    }));
  };

  openModal = obj => {
    this.setState({ currentAvatar: obj });
  };

  closeModal = () => {
    return this.setState({ currentAvatar: null });
  };

  render() {
    const { isFormShow, users, currentAvatar, isListShow } = this.state;
    return (
      <>
        <Button
          text={isListShow ? 'Hide list of users' : 'Show List of users'}
          clickHendler={this.showList}
        />
        {isListShow && (
          <>
            <UserList
              onModal={this.openModal}
              users={users}
              onDelete={this.deleteUser}
            />
            <Button text="Add user" clickHendler={this.showForm} />
            {isFormShow && (
              <Form onFormSubmit={this.addUser} onFormClose={this.closeForm} />
            )}
          </>
        )}
        {currentAvatar && (
          <Modal currentAvatar={currentAvatar} closeModal={this.closeModal} />
        )}
      </>
    );
  }
}
