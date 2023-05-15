import React, { Component } from 'react'

export default class ComponentProfile extends Component {
  renderProfile = ()=>{
    let {arrProduct,delProduct,editProduct} = this.props
    return arrProduct.map((prod)=>{
      return <tr key={prod.idSV}>
        <td>{prod.idSV}</td>
        <td>{prod.name}</td>
        <td>{prod.phone}</td>
        <td>{prod.email}</td>
        <td><button className='btn btn-danger' onClick={()=>{
          delProduct(prod.idSV)
        }}>Xóa</button>
        <button className='btn btn-primary' onClick={()=>{
          editProduct(prod)
        }}>Sửa</button></td>
      </tr>
    })
  }
  render() {
    return (
      <table className='table'>
        <thead className='bg-dark text-white pm-3'>
          <tr>
            <th>Mã sinh viên</th>
            <th>Họ tên</th>
            <th>Số Điện Thoại</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.renderProfile()}
        </tbody>
      </table>
    )
  }
}
