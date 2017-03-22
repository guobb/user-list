/**
 * Created by apple on 17/3/22.
 */
import React, {Component} from 'react';
import {Modal,Form, Input} from 'antd';
import styles from './UserModal.css';

const FormItem = Form.Item;

class UserEditModal extends Component{
  constructor(props){
    super(props);
    this.state = {
      visible: false,
    };
  }

  showModelHandler = (e) => {
    if(e) e.stopPropagation();
    this.setState({
      visible:true,
    });
  };

  hideModelHandler = () => {
    this.setState({
      visible: false,
    });
  };

  okHandler = () => {
    const {onOK} = this.props;
    this.props.form.validateFields((err,values)=>{
      if(!err){
        onOK(values);
        this.hideModelHandler();
      }

    });
  };

  render (){
    const {children} = this.props;
    const {getFieldDecorator} = this.props.form;
    const {name, email, website} = this.props.record;
    const formItemLayout = {
      labelCol:{span:6},
      wrapperCol:{span:14},
    };

    return (
      <span>
        <span onChange={this.showModelHandler}>
          {children}
        </span>
        <Modal
         title="Edit User"
         visible={this.state.visible}
         onOk={this.okHandler}
         oncancel={this.hideModelHandler}
        >
          <From horizontal onSubmit={this.okHandler}>
             <FormItem
               {...formItemLayout}
               label="Nmae"
             >
               {
                 getFieldDecorator('name',{
                   initialValue:name,
                 })(<Input/>)
               }
             </FormItem>
             <FormItem
               {...formItemLayout}
               label="Email"
             >
               {
                 getFieldDecorator('email',{
                   initialValue:email,
                 })(<Input/>)
               }
             </FormItem>
             <FormItem
               {...formItemLayout}
               label="Website"
             >
               {
                 getFieldDecorator('Website',{
                   initialValue:Website,
                 })(<Input/>)
               }
             </FormItem>
          </From>
        </Modal>
      </span>
    )
  }

}

export default Form.create()(UserEditModal)
