import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addStudent,changeInfo } from '../Redux/reduce/sinhVienReducer'

class ComponentForm extends Component {

  handleSubmit = (e) =>{
    e.preventDefault()
    const action = addStudent(this.props.values)
    this.props.dispatch(action)
  }
  handleChangeInput = (e) =>{
    let {value, name} = e.target
    let errorText = ''

    if(value.trim()===''){
      errorText = 'Vui lòng nhập thông tin'
    }
    if(name ==='idStudent'){
      const regex = /[0-9]$/
      if(!regex.test(value)){
        errorText = 'Vui lòng nhập ký tự số'
      }
    }
    if(name ==='phone'){
      const regex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/
      if(!regex.test(value)){
        errorText = 'Vui lòng nhập đúng số điện thoại'
      }
    }
    if(name ==='name'){
      const regex = /[a-z A-Z]$/
      if(!regex.test(value)){
        errorText = 'Vui lòng nhập chữ'
      }
    }
    if(name ==='email'){
      const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
      if(!regex.test(value)){
        errorText = 'Vui lòng nhập đúng định dạng email'
      }
    }

    let values = {...this.props.values, [name]:value};
    let errors = {...this.props.errors, [name]:errorText};

    const action = changeInfo({values,errors})
    this.props.dispatch(action)
  }
  render() {
    let {values, errors} = this.props
    return (

      <form onSubmit={this.handleSubmit}>
        <h3 className='bg-dark text-white p-3'>Thông tin sinh viên</h3>
        <div className="row">
            <div className="col-md-6">
                <div className="mb-3">
                    <label htmlFor="idSV" >Mã SV</label>
                    <input value={values.idStudent} className="form-control" id='idStudent' name='idStudent' onInput={this.handleChangeInput}/>
                    <p className='text text-danger'>{errors.idStudent}</p>
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" >Số điện thoại</label>
                    <input value={values.phone} className="form-control" id='phone' name='phone' onInput={this.handleChangeInput}/>
                    <p className='text text-danger'>{errors.phone}</p>
                </div>  
                <div className="mb-3">
                    <button type='submit' className='btn btn-success'>Thêm sinh viên</button>
                    {/* <button type='button' className='btn btn-success' onClick={()=>{
                      let {updateProduct} = this.props
                      updateProduct({...this.state.values})
                    }}>Cập nhập sinh viên</button> */}
                </div>
            </div>
            <div className="col-md-6">
                <div className="mb-3">
                    <label htmlFor="name" >Họ tên</label>
                    <input value={values.name} className="form-control" id='name' name='name' onInput={this.handleChangeInput}/>
                    <p className='text text-danger'>{errors.name}</p>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" >Email</label>
                    <input value={values.email} className="form-control" id='email' name='email' onInput={this.handleChangeInput}/>
                    <p className='text text-danger'>{errors.email}</p>
                </div>
            </div>
        </div>
      </form>
    )
  }
}
const mapStateToProps = (state) => state.sinhVienReducer
export default connect(mapStateToProps)(ComponentForm)
