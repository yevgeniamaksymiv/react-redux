const ignoreAddIfOddMiddleware = storeAPI => next => action => {
    if (action.type === "ADD_5" && storeAPI.getState().counter % 2 === 1) return storeAPI.getState();
    return next(action);
};

export default ignoreAddIfOddMiddleware;
