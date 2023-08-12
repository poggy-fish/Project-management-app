import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    mode: 'light',
    user: null,
    token: null,
    tasks: [],    
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === 'light' ? 'dark' : 'light'
        },
        setLogin: (state, action) => {
            state.user = state.payload.user;
            state.token = state.payload.token;
        },
        setLogout: (state, action) => {
            state.user = null;
            state.token = null;
        },
        setUserTeammates: (state, action) => {
            if (state.user) {
                state.user.teammates = action.payload.teammates;
            } else {
                console.error('User has no teammates')
            }
        },
        setUserTasks: (state, action) => {
            if (state.user) {
                state.user.tasks = action.payload.tasks
            } else {
                console.error('User has no tasks.')
            }
        },
    setUserTeam: (state, action) => {
        if (state.user) {
            state.user.team = action.payload.team
        } else {
            console.error('User has no team.')
        }
    },
    setTasks: (state, action) => {
        const updateTasks = state.tasks.map( (task) => {
            if(task._id === action.payload.task._id) return action.payload.task;
            return task;
        })
        state.tasks = updateTasks;
    }
    },
})

export const {setMode, setLogin, setLogout, setUserTeammates, setUserTasks, setUserTeam, setTasks } = authSlice.actions;
export default authSlice.reducer;
