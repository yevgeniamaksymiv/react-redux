const dispatchMultipleActionsMiddleware = storeAPI => next => action => {

    if (!Array.isArray(action)) return next(action);
    return action.map((a) => next(a)).length;
}

export default dispatchMultipleActionsMiddleware;
