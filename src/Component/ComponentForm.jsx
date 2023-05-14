import React, { Component } from 'react'

export default class ComponentForm extends Component {
  render() {
    return (
      <div>
        <h3 className='bg-dark text-white p-3'>Thông tin sinh viên</h3>
        <div className="row">
            <div className="col-md-6">
                <div className="mb-3">
                    <label for="id" >Mã SV</label>
                    <input type="text" className="form-control" id='id'/>
                </div>
                <div className="mb-3">
                    <label for="phone" >Số điện thoại</label>
                    <input type="number" className="form-control" id='phone'/>
                </div>  
                <div className="mb-3">
                    <button className='btn btn-success'>Thêm sinh viên</button>
                </div>
            </div>
            <div className="col-md-6">
                <div className="mb-3">
                    <label for="name" >Họ tên</label>
                    <input type="text" className="form-control" id='name'/>
                </div>
                <div className="mb-3">
                    <label for="email" >Email</label>
                    <input type="email" className="form-control" id='email'/>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
