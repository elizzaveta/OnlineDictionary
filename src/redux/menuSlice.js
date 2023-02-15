import { createSlice } from '@reduxjs/toolkit'

export const menuSlice = createSlice({
    name: 'toggleMenu',
    initialState: {
        menuState: "closed"
    },
    reducers: {
        toggle: state => {
            state.menuState = "closed"
        },
        untoggle: state => {
            state.menuState = "open"
        }
    }
})
export const { toggle, untoggle } = menuSlice.actions
