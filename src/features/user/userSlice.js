import { createSlice } from '@reduxjs/toolkit';

const initialState = {                                    /* when the app starts... */
    name: "",                                             /* keep this data empty */
    email: "",                                            /* keep this data empty */
    photo: "",                                            /* keep this data empty */
};

const userSlice = createSlice ({
    name: "user",
    initialState,
    reducers: {
        setUserLoginDetails: (state, action) => {           /* when the user logs in.... */
            state.name = action.payload.name;               /* remember this data */
            state.email = action.payload.email;             /* remember this data */   
            state.photo = action.payload.photo;             /* remember this data */
        },

        setSignOutState: state => {                         /* when the user signs out... */
            state.name = null;                              /* set this to null */
            state.email = null;                             /* set this to null */
            state.photo = null;                             /* set this to null */
        }
    },
});

export const { setUserLoginDetails, setSignOutState } = userSlice.actions;

export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;

export default userSlice.reducer;