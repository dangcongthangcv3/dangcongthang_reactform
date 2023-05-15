import React, { Component } from 'react'
import ComponentForm from './ComponentForm'
import ComponentProfile from './ComponentProfile'

export default class ComponentReact extends Component {
  state = {
    arrProduct:[
      {idSV:'1', name:'Nguyen Văn A', phone:'0909090909', email:'a@gmail.com'},
      {idSV:'2', name:'Tran Văn b', phone:'0909090909', email:'a@gmail.com'},
      {idSV:'3', name:'Dinh Văn v', phone:'0909090909', email:'a@gmail.com'},
      {idSV:'4', name:'Dang Văn d', phone:'0909090909', email:'a@gmail.com'},
    ],
    productEdit:[
      {idSV:'',name:'', phone:'',email:''}
    ]
  }
  delProduct = (idProdDel) =>{
    let indexDel = this.state.arrProduct.findIndex(prod=>prod.idSV ===idProdDel)
    console.log(indexDel)
    debugger
    if(indexDel !==-1){
      this.state.arrProduct.splice(indexDel,1)
    }
    this.setState({
      arrProduct:this.state.arrProduct
    })
  }
  addProduct = (prodInfo) =>{
    this.state.arrProduct.push(prodInfo)
    this.setState({
      arrProduct:this.state.arrProduct
    })
  }
  editProduct = (idProdEdit) =>{
    this.setState({
      productEdit:idProdEdit
    })
  }
  updateProduct = (newProduct)=>{
    let prod = this.state.arrProduct.find(prod =>prod.idSV==newProduct.idSV)
    if(prod){
      for(let key in prod){
        prod[key] = newProduct[key]
      }
    }
    this.setState({
      arrProduct:this.state.arrProduct
    })
  }
  
  render() {
    return (
      <div className='container-fluid'>
        <ComponentForm addProduct={this.addProduct} productEdit={this.state.productEdit} updateProduct={this.updateProduct}/>
        <ComponentProfile arrProduct={this.state.arrProduct} delProduct={this.delProduct} editProduct={this.editProduct} />
      </div>
    )
  }
}
