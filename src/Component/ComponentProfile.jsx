import React, { Component } from 'react'

export default class ComponentProfile extends Component {
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
        <tbody></tbody>
      </table>
    )
  }
}
