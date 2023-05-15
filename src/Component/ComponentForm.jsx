import React, { Component } from 'react'

export default class ComponentForm extends Component {
  state = {
    values:{
      idSV:'',
      phone:'',
      name:'',
      email:''
    },
    errors:{
      idSV:'',
      phone:'',
      name:'',
      email:''
    }
  }
  handleSubmit = (e) =>{
    e.preventDefault()
    console.log(this.state.values)
  }
  handleChangeInput = (e) =>{
    let {value,id} = e.target;
    let dataType =e.target.getAttribute('data-type')

    let newValue = {...this.state.values}
    newValue[id] = value

    let newError = {...this.state.errors}
    let messError = '';
    if(value.trim()===""){
      messError = id + ' không được bỏ trống';
    }else{
      if(dataType){
        switch(dataType){
          case 'idsv': {
            let regexNumber = /d$/
            if(!regexNumber.test(value)){
              messError = "Mã sv: SV01";
            };break
          }
          case 'name': {
            let regexNumber = /^[a-z A-Z]+$/
            if(!regexNumber.test(value)){
              messError = 'họ tên: Nguyễn Văn A';
            };break
          }
          case 'phone': {
            let regexNumber = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/
            if(!regexNumber.test(value)){
              messError = ' số điện thoại: 0909090909 ';
            };break
          }
          case 'email': {
            let regexNumber = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
            if(!regexNumber.test(value)){
              messError = ' email: test@gmail.com';
            };break
          }
        }
      }
    }
    newError[id] = messError

    this.setState({
      values: newValue,
      errors: newError
    },()=>{
      console.log(this.state)
    })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3 className='bg-dark text-white p-3'>Thông tin sinh viên</h3>
        <div className="row">
            <div className="col-md-6">
                <div className="mb-3">
                    <label htmlFor="idSV" >Mã SV</label>
                    <input data-type="idsv" className="form-control" id='idSV' name='idSV' onInput={this.handleChangeInput}/>
                    <p className='text text-danger'>{this.state.errors.idSV}</p>
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" >Số điện thoại</label>
                    <input data-type='phone' className="form-control" id='phone' name='phone' onInput={this.handleChangeInput}/>
                    <p className='text text-danger'>{this.state.errors.phone}</p>
                </div>  
                <div className="mb-3">
                    <button type='submit' className='btn btn-success'>Thêm sinh viên</button>
                </div>
            </div>
            <div className="col-md-6">
                <div className="mb-3">
                    <label htmlFor="name" >Họ tên</label>
                    <input data-type="name" className="form-control" id='name' name='name' onInput={this.handleChangeInput}/>
                    <p className='text text-danger'>{this.state.errors.name}</p>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" >Email</label>
                    <input data-type="email" className="form-control" id='email' name='email' onInput={this.handleChangeInput}/>
                    <p className='text text-danger'>{this.state.errors.email}</p>
                </div>
            </div>
        </div>
      </form>
    )
  }
}
