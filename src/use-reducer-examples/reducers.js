import { combineReducers } from "redux"

// The entire state management logic will be inside this method
export function counterReducer(currentCounter=0, action){
    // action = {type:"inc"}
    
    switch (action.type) {
        case "inc":
            return currentCounter+action.payload.number
        case "dec":
            return currentCounter-action.payload.number
        case "reset":
            return 0
        default:
            return currentCounter
    }
}

export function userReducer(currntUsers=[], action) {
    switch (action.type) {
        case "save":
            return action.payload
        case "update":
            return currntUsers
        case "delete":
            // {type: "delete", payload: {id: 2}}
            let uid = action.payload.id;
            let filteredUsersArray = currntUsers.filter(user=>user.id!=uid)
            return filteredUsersArray
        default:
            return currntUsers
    }
}

export let allReducers = combineReducers({
    users: userReducer,
    counter: counterReducer
})