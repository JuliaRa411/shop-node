import { createSlice } from "@reduxjs/toolkit";
export const dishesSlice = createSlice ({
    name: 'dishes',
    initialState: {
        selectCategory: "SEAFOOD"
    },
    reducers:{

    }
})

export const getSelectedCategory = state => state.dishes.selectCategory;
export default dishesSlice.reducer;