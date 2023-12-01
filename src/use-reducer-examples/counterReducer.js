// The entire state management logic will be inside this method
export function counterReducer(currentCounter, action){
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