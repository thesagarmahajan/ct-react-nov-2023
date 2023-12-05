
export let counterActions = (inputPayload) => {
    return {
        INCREMENT: {type:"inc", payload:inputPayload},
        DECREMENT: {type:"dec", payload:inputPayload},
        RESET: {type:"reset"}
    }
}

export let userActions = (inputPayload) => {
    return {
        SAVE : {type:"save", payload: inputPayload},
        DELETE: {type:"delete", payload: inputPayload},
        UPDATE: {type:"update", payload: inputPayload}
    }
}