// import { createSlice } from "@reduxjs/toolkit";
// import { SAVED_AUCTION } from "../types";

// const initialState = {
//   savedList: JSON.parse(localStorage.getItem(SAVED_AUCTION))
//     ? JSON.parse(localStorage.getItem(SAVED_AUCTION))
//     : [],
// };

// const savedSlice = createSlice({
//   name: "saved",
//   initialState: initialState,
//   reducers: {
//     addToSavedhList: (state, action) => {
//       state.savedList.push(action.payload);
//       localStorage.setItem(SAVED_AUCTION, JSON.stringify(state.savedList));
//     },
//     removeOneFromSavedList: (state, action) => {
//       const itemId = action.payload;
//       const updatedSavedList = state.savedList.filter(
//         (item) => item.id !== itemId
//       );
//       state.savedList.splice(0, state.savedList.length, ...updatedSavedList);
//       localStorage.setItem(SAVED_AUCTION, JSON.stringify(state.savedList));
//     },
//   },
// });

// export const {} = savedSlice.actions;
// export default savedSlice.reducer;
