import { Form, Icon, Input, Button,Checkbox } from 'antd';
import React  from 'react';


const FormItem = Form.Item;
class NormalLoginForm extends React.Component {
    constructor(props){
        super(props)


    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log("Received values of form: ", values);
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator("userName", {
                        rules: [{ required: true, message: "请输入你的用户名" }]
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
                            placeholder="用户名"
                        />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator("password", {
                        rules: [{ required: true, message: "请输入你的密码" }]
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
                            type="password"
                            placeholder="密码"
                        />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator("remember", {
                        valuePropName: "checked",
                        initialValue: true
                    })(<Checkbox>Remember me</Checkbox>)}


                    <center> <a className="login-form-forgot" href="">
                        Forgot password</a></center>

                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                    >
                        Log in
                    </Button>

                </FormItem>
            </Form>
        );
    }
}

const WrappedHorizontalLoginForm = Form.create()(NormalLoginForm);
export default WrappedHorizontalLoginForm;

