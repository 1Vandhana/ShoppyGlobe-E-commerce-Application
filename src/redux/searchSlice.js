/// Create a search slice to manage the search input state //
//  Provides an action to update the search value  //

// Manages global search state

import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: "",

  reducers: {
    setSearch: (state, action) => action.payload,
  },
});

export const { setSearch } = searchSlice.actions;
export default searchSlice.reducer;
