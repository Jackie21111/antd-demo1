import React from "react";

import "antd/dist/antd.css";
import "./index.css";
import WrappedRegistrationForm from './login_Register/Registration';
import WrappedHorizontalLoginForm from './login_Register/Login';
import {Modal, Button, Menu} from "antd";

class Head extends React.Component {
  state = {
    current: 'mail'
  };

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <div>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item>
            <Login/>
          </Menu.Item>
          <Menu.Item>
            <Register/>
          </Menu.Item>
        </Menu>


      </div>
    )
  }
}

class Login extends React.Component {
  state = {
    ModalText: " ",
    visible: false,
    confirmLoading: false
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = () => {
    this.setState({
      ModalText: " ",
      confirmLoading: true
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false
      });
    }, 2000);
  };

  handleCancel = () => {
    console.log("Clicked cancel button");
    this.setState({
      visible: false
    });
  };

  render() {
    const {visible, confirmLoading} = this.state;
    return (
      <div>


        <Button type="primary" onClick={this.showModal}>
          登录
        </Button>
        <Modal
          title="登录"
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
          <WrappedHorizontalLoginForm/>

        </Modal>


      </div>
    );
  }
}

class Register extends React.Component {
  state = {
    ModalText: " ",
    visible: false,
    confirmLoading: false
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = () => {
    this.setState({
      ModalText: " ",
      confirmLoading: true
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false
      });
    }, 2000);
  };

  handleCancel = () => {
    console.log("Clicked cancel button");
    this.setState({
      visible: false
    });
  };

  render() {
    const {visible, confirmLoading} = this.state;
    return (
      <div>


        <Button type="primary" onClick={this.showModal}>
          注册
        </Button>
        <Modal
          title="注册"
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
          <WrappedRegistrationForm/>

        </Modal>


      </div>
    );
  }
}

export default Head;


