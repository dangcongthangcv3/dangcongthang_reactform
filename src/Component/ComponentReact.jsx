import React, { Component } from 'react'
import ComponentForm from './ComponentForm'
import ComponentProfile from './ComponentProfile'
import { connect } from 'react-redux'

class ComponentReact extends Component {
  
  // delProduct = (idProdDel) =>{
  //   let indexDel = this.state.arrProduct.findIndex(prod=>prod.idSV ===idProdDel)
  //   console.log(indexDel)
  //   debugger
  //   if(indexDel !==-1){
  //     this.state.arrProduct.splice(indexDel,1)
  //   }
  //   this.setState({
  //     arrProduct:this.state.arrProduct
  //   })
  // }
  // addProduct = (prodInfo) =>{
  //   this.state.arrProduct.push(prodInfo)
  //   this.setState({
  //     arrProduct:this.state.arrProduct
  //   })
  // }
  // editProduct = (idProdEdit) =>{
  //   this.setState({
  //     productEdit:idProdEdit
  //   })
  // }
  // updateProduct = (newProduct)=>{
  //   let prod = this.state.arrProduct.find(prod =>prod.idSV==newProduct.idSV)
  //   if(prod){
  //     for(let key in prod){
  //       prod[key] = newProduct[key]
  //     }
  //   }
  //   this.setState({
  //     arrProduct:this.state.arrProduct
  //   })
  // }
  
  render() {
    return (
      <div className='container-fluid'>
        <ComponentForm />
        <ComponentProfile />
      </div>
    )
  }
}

const mapStateToProps = (state) => state
export default connect(mapStateToProps)(ComponentReact)