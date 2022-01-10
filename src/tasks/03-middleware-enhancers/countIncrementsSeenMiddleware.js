
// TODO This middleware should keep an internal counter that tracks how many times it's seen
// TODO the "INCREMENT" action.  Every time it sees one, it should send the increment action onwards, then
// TODO increment the counter and dispatch an action like `{type : "INCREMENTS_SEEN", count}` after the
// TODO increment action has returned.

// TODO This means you'll need to keep a variable alive in the middleware between dispatches, so start
// TODO by splitting up the triple-functions structure so you have a place to put the counter.
let counterIncrementsSeen = 0;
const countIncrementsSeenMiddleware = storeAPI => next => action => {
    next(action)
    if (action.type === "INCREMENT"){
        counterIncrementsSeen++;
        console.log(storeAPI.getState());
        return storeAPI.dispatch({
          type: "INCREMENTS_SEEN",
          count: counterIncrementsSeen,
        });
       
    } 
}

export default countIncrementsSeenMiddleware;
