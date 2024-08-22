import { createSlice } from "@reduxjs/toolkit"

export const themeSlice = createSlice({
    name: "theme",
    initialState: {
        value: "light",
    },
    reducers: {
        toggleTheme: (state) => {
            state.value = state.value === "light" ? "dark" : "light"
        },
        // setTheme: (state, action) => {
        //     state.value = action.payload
        // },
    },
})

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;