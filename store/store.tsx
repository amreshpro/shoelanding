
import { configureStore } from "@reduxjs/toolkit";
import darkModeSlice from "./darkModeSlice";



export const store = configureStore({
    reducer: {
        darkMode: darkModeSlice,
    }
})



export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch