import {createSlice} from "@reduxjs/toolkit";

export const isMobileSlice = createSlice({
    name: "isMobileSlice",
    initialState: {
        isMobile: window.innerWidth < 900
    },
    reducers: {
        mobile: state => {
            if (state.isMobile !== true) {
                state.isMobile = true;
            }
        },
        desktop: state => {
            if (state.isMobile !== false) {
                state.isMobile = false;
            }
        },
        setIsMobile: state => {
            window.innerWidth < 900
                ? isMobileSlice.caseReducers.mobile(state)
                : isMobileSlice.caseReducers.desktop(state);
        }
    }
})

export const {mobile, desktop, setIsMobile} = isMobileSlice.actions;