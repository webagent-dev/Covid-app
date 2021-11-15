import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    countryList : null
}

const countrySlice = createSlice({
    name: 'country',
    initialState,
    reducers: {
    setCountryList: (state, action) => {
        state.countryList = action.payload
    }
    }
});

export const {
        setCountryList
} = countrySlice.actions
export const  selectCountryList = state => state.country.countryList
export default countrySlice.reducer