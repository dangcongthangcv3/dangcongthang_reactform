import React, { Component } from 'react'
import { connect } from 'react-redux'
import { delStudent, editStudent } from '../Redux/reduce/sinhVienReducer'

class ComponentProfile extends Component {
  renderProfile = ()=>{
    let {arrStudent} = this.props
    return arrStudent.map((prod, index) => {
      return <tr key={index}>
        <td>{prod.idStudent}</td>
        <td>{prod.name}</td>
        <td>{prod.phone}</td>
        <td>{prod.email}</td>
        <td><button className='btn btn-danger' onClick={()=>{
          const action = delStudent(prod.idStudent)
          this.props.dispatch(action);
        }}>Xóa</button>
        <button className='btn btn-primary' onClick={()=>{
          const action = editStudent(prod.idStudent)
          this.props.dispatch(action);
        }}>Sửa</button>
        </td>
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
          <tr>
          </tr>
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    arrStudent: state.sinhVienReducer.arrStudent
  };
}
export default connect(mapStateToProps)(ComponentProfile)