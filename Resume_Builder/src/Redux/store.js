import { configureStore } from '@reduxjs/toolkit';
import  formReducer from "../Features/FormSlice/formSlice"


export const store = configureStore({
  reducer: {
    form:formReducer
  }
});