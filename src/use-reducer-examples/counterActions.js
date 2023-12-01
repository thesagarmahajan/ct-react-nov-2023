
export let counterActions = (inputPayload) => {
    return {
        INCREMENT: {type:"inc", payload:inputPayload},
        DECREMENT: {type:"dec", payload:inputPayload},
        RESET: {type:"reset"}
    }
}