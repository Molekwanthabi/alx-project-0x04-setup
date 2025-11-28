import { configureStore, createSlice  } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: (state) =>{
      state.value += 1
    },
    decrement: (state) => {
      state.value > 0 ? state.value -= 1 : 0
    }
  }
});


const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
})


