import { configureStore, createSlice } from "@reduxjs/toolkit";


const pageSlice = createSlice({
    name : "page",
    initialState: {value: 1},
    reducers: {
        updatePage : (state,action) => {
            state.value = action.payload;
        },
        clearPage : (state) =>{
            state.value = 1;
        }
    }
})

const isLoggedSlice = createSlice({
    name : "isLogged",
    initialState: {value: true},
    reducers: {
        updateLogged : (state,action) => {
            state.value = action.payload;
        },
    }
})

const userSlice = createSlice({
    name : "user",
    initialState: { 
                    id: "", 
                    name: "Slimy",
                    email: "",
                    favorites: [""],
                    token : "",
                },
    reducers: {
        updateUser : (state,action) => {
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.token = action.payload.token;
        },
    }
})

export const {updatePage, clearPage} = pageSlice.actions;
export const {updateLogged} = isLoggedSlice.actions;
export const {updateUser} = userSlice.actions;

export const store = configureStore({
    reducer: {
        page : pageSlice.reducer,
        isLogged : isLoggedSlice.reducer,
        user : userSlice.reducer,
    }
});
