import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    arrStudent: [{idStudent:'1', phone:'0909090909', name:'Nguyen Văn A', email:'a@gmail.com'}],
    values:{idStudent:'',phone:'', name:'', email:''},
    errors:{idStudent:'',phone:'', name:'', email:''},

}

const sinhVienReducer = createSlice({
  name: 'sinhVienReducer',
  initialState,
  reducers: {
    changeInfo: (state, action)=>{
        let {values,errors} = action.payload
        state.values = values;
        state.errors = errors
    },
    addStudent: (state, action)=>{
      debugger
      const values = {...action.payload}
      state.arrStudent.push(values)
      for(let  key in state.values){
        state.values[key] = ''
      }
    },
    delStudent: (state,action) => {
      let idStudent = action.payload;
      let indexDel = state.arrStudent.findIndex(student => student.idStudent === idStudent);
      if (indexDel !== -1) {
        state.arrStudent.splice(indexDel,1);
      }
    },

    editStudent: (state,action) => {
      let id = action.payload;
      let stuEdit = state.arrStudent.find(student => student.idStudent === id); 
      state.values = stuEdit;
    },

    updateStudent: (state,action) => {
      let values = {...action.payload};
      let stuUpdate = state.arrStudent.find(stu => stu.idStudent === values.idStudent);
      stuUpdate = values;
      state.arrStudent.splice(stuUpdate.idStudent-1,1,stuUpdate);

    },

  }
});

export const {addStudent, changeInfo,delStudent, updateStudent,editStudent} = sinhVienReducer.actions

export default sinhVienReducer.reducer