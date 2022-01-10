
// TODO This middleware should keep an internal counter that tracks how many times it's seen
// TODO the "INCREMENT" action.  Every time it sees one, it should send the increment action onwards, then
// TODO increment the counter and dispatch an action like `{type : "INCREMENTS_SEEN", count}` after the
// TODO increment action has returned.

// TODO This means you'll need to keep a variable alive in the middleware between dispatches, so start
// TODO by splitting up the triple-functions structure so you have a place to put the counter.
let counter = 0
const countIncrementsSeenMiddleware = storeAPI => next => action => {
    counter++
    return next({ type: "INCREMENTS_SEEN", count: counter });
}



export default countIncrementsSeenMiddleware;
