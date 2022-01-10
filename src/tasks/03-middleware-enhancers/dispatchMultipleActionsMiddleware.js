const dispatchMultipleActionsMiddleware = storeAPI => next => action => {

    if (!Array.isArray(action)) return next(action);
    const actionCount = action.map((a) => storeAPI.dispatch(a)).length;
    return actionCount;
}

export default dispatchMultipleActionsMiddleware;
