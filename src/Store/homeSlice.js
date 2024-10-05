import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    url: {},
    genres: {},
    details: {},
    category: {
        tranding: "",
        popular: "",
        toprated: ""
    },
    quary: ""
}

export const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {
        getApiConfiguration: (state, action) => {
            state.url = action.payload
        },
        getGenres: (state, action) => {
            state.genres = action.payload
        },
        getDetails: (state, action) => {
            state.details = action.payload
        },
        getTranding: (state, action) => {
            state.category.tranding = action.payload
        },
        getpopular: (state, action) => {
            state.category.popular = action.payload
        },
        gettoprated: (state, action) => {
            state.category.toprated = action.payload
        },
        getsearch: (state, action) => {
            state.quary = action.payload
        }
    }
})

export const { getApiConfiguration, getGenres, getDetails, getTranding, getpopular, gettoprated, getsearch } = homeSlice.actions

export default homeSlice.reducer