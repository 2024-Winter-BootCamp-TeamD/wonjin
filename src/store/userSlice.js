import { createSlice } from "@reduxjs/toolkit";


let user = createSlice({
    name : 'user',
    initialState : {name : 'kim', age : 20 },
    reducers : {
      changeName(state){
        state.name = 'park'
      },
      plusAge(state, a){
        state.age += a.payload;
      },
    }
  })


export let { changeName,plusAge } = user.actions

  export default user