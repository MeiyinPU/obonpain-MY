import { createReducer } from "@reduxjs/toolkit";

const intialState = {
  email: "",
  password: "",
};

const userReducer = createReducer(intialState, (builder) => {
  {
    builder.addCase("initialState", () => {
      state.user = action.payload;
    });
  }
});

export default userReducer;
