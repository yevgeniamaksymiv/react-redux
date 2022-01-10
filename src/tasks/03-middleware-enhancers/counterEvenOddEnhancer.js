export default function counterEvenOddEnhancer(originalCreateStore) {
    return function newCreateStore(rootReducer, preloadedState, enhancer) {
        const store = originalCreateStore(rootReducer, preloadedState, enhancer);
        const newGetState = () => {
            return store.getState().counter % 2 === 0
                ? {
                  ...store.getState(),
                  counterEvenOdd: "even"
                }
                :{
                ...store.getState(),
                counterEvenOdd: "odd"
                };
            
        }
        console.log({ ...store, getState: newGetState });
        return {...store, getState: newGetState};
    }
}
